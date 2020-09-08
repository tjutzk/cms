import * as mongoose from 'mongoose'
import userController from '../controller/UserController';
class mongo{
    url:string;
    constructor(url:string){
        this.url = url
    }
    connection(){
        // 数据库链接
        mongoose.connect(this.url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
            () => {
                console.log('mongo连接成功')
                // 初始化数据库
                this.init()
            },
        ).catch(err => {
            console.log(err)
            console.log(`mongo连接失败`);
        });
    } 
    init(){
        console.log('mongo初始化')
        userController.initUser({
            username:'admin',
            password:'admin0720',
            address:'',
            role:'',
            phone:'',
            community:'',
            regDate: new Date()
        })
    }
}
export default mongo