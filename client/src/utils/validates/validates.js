/* 姓名校验 由2-10位汉字组成 */
export function validateUsername(str) {
    const reg = /^[\w]{2,10}$/
    return reg.test(str)
}
export function validatePassword(str) {
    const reg = /^[\w]{6,20}$/
    return reg.test(str)
}