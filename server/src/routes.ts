import homeController from './controller/home-controller';
import userContoller from './controller/userController'

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  },
  {
    path: '/login',
    method: 'post',
    action: userContoller.login
  }
];
