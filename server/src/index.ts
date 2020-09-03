import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import AppRoutes from './routes';
import dbUrl from './config/database'
import * as mongo from 'mongoose'

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

//路由
AppRoutes.forEach(route => router[route.method](route.path, route.action));
// 数据库链接
mongo.connect(dbUrl.mongoDbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { 
        console.log('mongo连接成功')
    },
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

console.log(`应用启动成功 端口:${port}`);

