import * as mongoose from 'mongoose'
let userSchma = new mongoose.Schema({
    username:String,
    password:String,
    phone:String,
    address:String,
    role:String,
    community:String,
    regDate:{
        type:Date,
        default:new Date()
    }
})

export default mongoose.model('user', userSchma)