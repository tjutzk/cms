<template>
    <div class="login-wrap">
        <div class="login-box">
            <h1 class="title">欢迎登录</h1>
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item prop="username">
                    <el-input 
                    placeholder="用户名"
                    v-model="loginForm.username">
                        <i
                        class="el-icon-user el-input__icon"
                        slot="prefix">
                        </i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                    placeholder="密码"
                    v-model="loginForm.password" 
                    type="password">
                        <i
                        class="el-icon-lock el-input__icon"
                        slot="prefix">
                        </i>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button 
            type="primary"
            @click="handleLogin">登录</el-button>
        </div>
    </div>
</template>
<script>
import {formValidate} from 'Utils/validates'
export default {
    created(){
    },
    data(){
        return{
            loginForm:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    { required: true, message: '用户名不能为空'},
                    {validator:formValidate('validateUsername', '用户名长度为2~10'),trigger:'blur'}
                ],
                password:[
                    { required: true, message: '密码不能为空'},
                    {validator:formValidate('validatePassword', '密码长度为6~8'), trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        handleLogin(){
            this.$refs.loginForm.validate((valid) => {
                if(valid){
                    
                }
            })
        }
    }
}
</script>
<style scoped>
    .login-wrap{
        width: 100%;
        height: 100%;
        background-color: #55606d;
        color: #ffffff;
        box-sizing: border-box;
    }
    .login-box{
        width: 25%;
        margin: 0 auto;
        padding-top: 100px;
    }
    .login-box .title{
        text-align: center;
        margin-bottom: 20px;
    }
    .login-box .el-button{
        width: 100%;
    }
</style>
<style>
    .login-box .el-form .el-input__inner{
        border: none;
    }
    .login-box .el-form .el-input__inner:focus{
       border: none;
    }
</style>