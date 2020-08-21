import * as Validates from './validates.js'

export  const formValidate = (key, msg) =>(rule, value, cb) => {
    if (Validates[key](value)) {
        cb()
    } else {
        cb(msg)
    }
}