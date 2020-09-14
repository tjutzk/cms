import userModel from '../model/user'
import userDao from '../dao/userDao'
import httpRes from '../utils/httpRes'
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
            return httpRes.failNoData('用户名密码不正确')
        }else{
            return httpRes.success(res)
        }
    }
}