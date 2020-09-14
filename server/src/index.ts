import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors'
import * as logger from 'koa-logger'; 
import AppRoutes from './routes';
import dbUrl from './config/database'
import mongo from './database/mongodb'

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

//路由
AppRoutes.forEach(route => router[route.method](route.path, route.action));

// 连接数据库
const mongoClient = new mongo(dbUrl.mongoDbUrl)
mongoClient.connection()

app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 300,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(bodyParser());
app.use(logger())
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
app.on('error', err => {
    console.log('server error', err)
});

console.log(`应用启动成功 端口:${port}`);

