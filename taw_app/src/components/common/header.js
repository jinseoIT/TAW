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
                        <h1><a href="">LOGO</a></h1>
                        <nav>
                            <ul className="menu-tab">
                                <li><a href="">지도로 보기</a></li>
                                <li><a href="">게시판</a></li>
                            </ul>
                        </nav>
                        <div className="sign-box">
                            <ul>
                                <li><a href="">로그인</a></li>
                                <li><a href="">회원가입</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="bg-img">
                </div>
            </div>
        </div>
    )
}

export default Header
