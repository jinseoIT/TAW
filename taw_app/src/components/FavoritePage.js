import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import './FavoritePage.scss'

function FavoritePage() {
    return (
        <div>
            <Header />
            <div className="fav-wrap">
                <div className="fav-title">Travel Bucket List</div>
                <div className="fav-con">
                    <div className="fav-con-wrap">
                        <div className="fav-con-tit">
                            <div className="fav-con-list">제목</div>
                            <div className="fav-con-list">요약</div>
                            <div className="fav-con-list">지역</div>
                            <div className="fav-con-list"><button>지도 보기</button></div>
                        </div>
                        <div className="fav-con-txt">
                            <div className="fav-con-list">경주</div>
                            <div className="fav-con-list">경주</div>
                            <div className="fav-con-list">경주</div>
                            <div className="fav-con-list">경주</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FavoritePage
