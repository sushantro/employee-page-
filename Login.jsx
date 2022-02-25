import React from "react";
import './login.css';

const Login = () => {
    return (
        <>
            <div class="logo">
                <img src=""/>
            </div>
            <div class="container">
                <h1 class="label">User Login</h1>
                <form class="login_form" action="/Login" method="post" name="form">
                    <div class="font">
                        <label>EmpID</label>
                        <input autocomplete="off" type="text" name="EmpID"/>
                    </div>
                    <div class="font font2">
                        <label>Password</label>
                        <input type="password" autocomplete="off" name="Password" id="Password"/>

                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                    <button type="submit">Login</button>
                    <a>Forgot Password</a>
            </form>
        </div>
        </>

    )
}
export default Login;