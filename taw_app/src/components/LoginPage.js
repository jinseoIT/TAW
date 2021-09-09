import React, {useState} from 'react'
import './LoginPage.scss'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/index'

function LoginModal() {
    const dispatch = useDispatch();

    let history = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(Email, Password);

        let body = {
            email: Email,
            password : Password
        }
        dispatch(loginUser(body))
            .then(res => {
                if (res.payload.loginSuccess) {
                    window.localStorage.setItem('userId', res.payload.userId);
                    alert('로그인에 성공 하였습니다.');
                    history.push('/')
                } else {
                    alert('로그인에 실패 하였습니다.')
                }
            })
    }
    return (
        <div className="loginPage">
            <div className="login_body">
                <form method="POST" onSubmit={onSubmitHandler}>
                    <h1>로그인</h1>
                    <div>
                        <label htmlFor ="user_email">Email</label>
                        <input type="text" id="user_email" placeholder="이메일을 입력해주세요" onChange={onEmailHandler}/>
                        <label htmlFor ="user_password">Password</label>
                        <input type="password" id ="user_password" placeholder="비밀번호를 입력해주세요." onChange={onPasswordHandler}/>
                    </div>
                    <button type="submit" onClick={onSubmitHandler}>로그인</button>
                    <button className="back" type="button" onClick={()=>{history.push('/')}}>뒤로가기</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal
