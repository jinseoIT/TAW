import React from 'react'
import './RegisterPage.scss'
import {useHistory} from "react-router-dom"




function RegisterModal() {

    let history = useHistory();

    return (
        <div>
            <div className="registerPage">
                <div className="register_body">
                    <form action="" method="POST">
                        <h1>회원가입</h1>
                        <div>
                            <label for ="user_id">ID</label>
                            <input type="text" id="user_id" placeholder="아이디"/>
                            <label for ="user_password">Password</label>
                            <input type="password" id ="user_password" placeholder="비밀번호"/>
                            <label for ="user_password_confirm">Password Confirm</label>
                            <input type="password" id ="user_password_confirm" placeholder="비밀번호 확인"/>
                            <label for ="user_email">E-mail</label>
                            <input type="e-mail" id ="user_email" placeholder="이메일"/>
                            <label for ="user_phone">전화번호</label>
                            <input type="e-mail" id ="user_phone" placeholder="전화번호"/>
                        </div>
                        <button type="submit">회원가입</button>
                        <button className="back" type="button" onClick={()=>{history.push('/')}}>뒤로가기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
