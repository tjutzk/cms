import responseCode from './responseCode'
class httpRes{
    code:String;
    message:String;
    data:any;
    success(data:any, msg:string = '请求成功'):object{
        return{
            code:responseCode.SUCCESS,
            message:msg,
            data:data
        }
    };
    failNoData(msg:string = '请求失败'):object{
        return{
            code:responseCode.FAIL,
            message:msg
        }
    }
}
export default new httpRes()
