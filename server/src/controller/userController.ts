import UserService from '../service/userService';

class UserController {
    _service:UserService = new UserService()
    initUser(userInfo){
        this._service.initUser(userInfo);
    }
    login =  async(ctx) => {
        console.log('登录')
        console.log(ctx.request.body)
        ctx.body = await this._service.login(ctx.request.body);
    }
}

export default new UserController()