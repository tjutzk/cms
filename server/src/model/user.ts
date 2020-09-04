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
        default:Date.now
    }
})

export default mongoose.model('user', userSchma)