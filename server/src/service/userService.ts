import userModel from '../model/user'
import userDao from '../dao/userDao'
export default class UserService{
    user;
    constructor(){
        this.user = new userDao(userModel)
    }
    async initUser(userinfo){
        let admin:object;
        console.log(userinfo.phone)
        admin = await this.user.findOne({username:userinfo.username})
        if(!admin){
            this.user.create(userinfo)
        }
    }
    async login(userinfo:{username:string, password:string}){
        let res
        res = await this.user.findOne(userinfo)
        if(!res){
            return {
                code:'1001',
                msg:'用户名或密码错误'
            }
        }else{
            return {
                code:'1000',
                msg:'登录成功',
                data:res
            }
        }
    }
}