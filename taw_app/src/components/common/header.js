/* eslint-disable */
import React , {useEffect, useState} from 'react'
import '../common/Header.scss'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const history = useHistory();
    const { loginSuccess } = useSelector(state => state.account)    

    const onClickHandler = () => {
        axios.get('/api/user/logout')
            .then(res => {
                if (res.data.success) {
                    localStorage.removeItem('userId');
                    history.push('/login');
                } else {
                    alert('로그아웃 하는데 실패 하였습니다.')
                }
            })
    }
    let accountArea;
    let addNavList;
    if (!localStorage.getItem('userId')) {
       accountArea =
         <ul>
           <li><Link to="/login">로그인</Link></li>
           <li><Link to="/register">회원가입</Link></li>
         </ul>
    } else {
      accountArea = <ul>
        <li>나의 찜 목록</li>
        <li onClick={onClickHandler}>로그아웃</li>
        </ul>;
      addNavList = <li><Link to="/admin/upload">여행지 등록</Link></li>
    }
    
    
    
    return (
        <div>
            <div>
                <header className="header">
                    <div className="header-inner">
                        <h1><Link to="/">LOGO</Link></h1>
                        <nav>
                            <ul className="menu-tab">
                                <li><Link to="/map">지도로 보기</Link></li>
                                <li><Link to="/bulletin">게시판</Link></li>
                                {addNavList}
                            </ul>
                        </nav>
                        <div className="sign-box">
                        { accountArea}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default withRouter(Header);