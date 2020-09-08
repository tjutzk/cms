import UserService from '../service/userService';
interface UserInfo{
    username:String,
    password:String,
    phone:String,
    address:String,
    role:String,
    community:String,
    regDate:Date
}
class UserController {
    _service:UserService = new UserService()
    initUser(userInfo:UserInfo){
        this._service.initUser(userInfo);
    }
    login =  async(ctx) => {
        console.log('登录')
        console.log(ctx.request.body)
        ctx.body = await this._service.login(ctx.request.body);
    }
}

export default new UserController()