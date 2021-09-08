/* eslint-disable */
import React from 'react'
import '../common/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
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
                            </ul>
                        </nav>
                        <div className="sign-box">
                            <ul>
                                <li><Link to="/login">로그인</Link></li>
                                <li><Link to="/register">회원가입</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
