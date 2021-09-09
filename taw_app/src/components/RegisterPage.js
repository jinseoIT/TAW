import React, { useState } from 'react'
import './RegisterPage.scss'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/index'


function RegisterModal() {
    const dispatch = useDispatch();  
    let history = useHistory();
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userInfo, setUserInfo] = useState(
        {
            email: '',
            password: '',
            name: '',
            phone: '',
        }
    )
    /* input 값 입력시 적용 */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({...userInfo, [name]: value})
    }
    /* 비밀번호 확인 입력시 적용 */
    const handleConfirmPassword = (e) => {
        setPasswordConfirm(e.target.value)
    }
    /* 회원 등록 submit */
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (userInfo.password !== passwordConfirm)
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        dispatch(registerUser(userInfo))
            .then(res => {
                if (res.payload.success) {
                    alert('회원가입을 완료하였습니다.');
                    history.push('/login');
                } else {
                    alert('회원가입에 실패하였습니다.');
                }
            })
    }

    return (
        <div>
            <div className="registerPage">
                <div className="register_body">
                    <form method="POST" onSubmit={onSubmitHandler}>
                        <h1>회원가입</h1>
                        <div>
                            <label htmlFor ="user_email">E-mail</label>
                            <input type="email" id="user_email" name="email" value={userInfo.email} placeholder="이메일" onChange={handleChange} />
                            <label htmlFor ="user_password">Password</label>
                            <input type="password" id ="user_password" name="password" value={userInfo.password} placeholder="비밀번호" onChange={handleChange}/>
                            <label htmlFor ="user_password_confirm">Password Confirm</label>
                            <input type="password" id="user_password_confirm" name="passwordConfirm" value={passwordConfirm} placeholder="비밀번호 확인" onChange={handleConfirmPassword}/>
                            <label htmlFor ="user_name">Name</label>
                            <input type="text" id ="user_name" name="name" placeholder="이름" value={userInfo.name} onChange={handleChange}/>
                            <label htmlFor ="phone">Tel</label>
                            <input type="text" id ="phone" name="phone" value={userInfo.phone} placeholder="ex) 010-1234-5678" onChange={handleChange}/>
                        </div>
                        <button type="submit" onClick={onSubmitHandler}>회원가입</button>
                        <button className="back" type="button" onClick={()=>{history.push('/')}}>뒤로가기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
