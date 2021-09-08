import React from 'react'
import Header from './common/Header'
import './LandingPage.scss'




function LandingPage() {
    return (
        <div>
            <div className="bg-img">
            </div>
            <div className="con-wrap">
                <div className="con-title">여행지 둘러보기</div>
                    <div className="con-list">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <div className="con-list-box">
                                        <div className="con-list-box-title">경주 동궁과 월지</div>
                                        <div className="con-list-box-txt">+ 더보기</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                <div className="more-button"><button>더보기</button></div>
            </div>
        </div>
    )
}

export default LandingPage
