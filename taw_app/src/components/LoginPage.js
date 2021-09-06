import React from 'react'
import './LoginPage.scss'
import {useHistory} from "react-router-dom"


function LoginModal() {

    let history = useHistory();

    return (
        <div className="loginPage">
            <div className="login_body">
                <form action="" method="POST">
                    <h1>로그인</h1>
                    <div>
                        <label for ="user_id">ID</label>
                        <input type="text" id="user_id" placeholder="아이디입력 ㄱㄱ"/>
                        <label for ="user_password">PASSWORD</label>
                        <input type="password" id ="user_password" placeholder="비밀번호를입력 ㄱㄱ"/>
                    </div>
                    <button type="submit">로그인</button>
                    <button className="back" type="button" onClick={()=>{history.push('/')}}>뒤로가기</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal
