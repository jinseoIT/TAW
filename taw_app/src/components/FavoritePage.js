import React , { useState } from 'react'
import './FavoritePage.scss'

function FavoritePage() {

        
    const [Favorites, setFavorites] = useState([
        
        { 
            userFrom: '123e', 
            title: '서면', 
            summary: '서면 요약', 
            lon: '35.157834415146695', 
            lat: '129.05907709147996', 
            travelArea: '부산광역시',
            url: 'https://goo.gl/maps/hYiL1CzCSQivzJHE6'
        }, 
        { 
            userFrom: '123f', 
            title: '한강', 
            summary: '한강 새벽체조', 
            lon: '36.20210', 
            lat: '128.2202', 
            travelArea: '서울 특별시',
            url: 'https://goo.gl/maps/ZRNgk9wNkdtqYC11A'
        } 

    ])

    const FavoriteList = Favorites.map((travelInfo) => {

        return (
            <div className="fav-con-txt">
                <div className="fav-con-list col1">{travelInfo.title}</div>
                <div className="fav-con-list col2">{travelInfo.summary}</div>
                <div className="fav-con-list col3">{travelInfo.travelArea}</div>
                <div className="fav-con-list col4"><button>Go To Map</button></div>
            </div>

        )

    })

    return (
        <div>
            <div className="fav-wrap">
                <div className="fav-title">Travel Bucket List</div>
                <div className="fav-con">
                    <div className="fav-con-wrap">
                        <div className="fav-con-txt">
                            <div className="fav-con-list col1">제목</div>
                            <div className="fav-con-list col2">요약</div>
                            <div className="fav-con-list col3">지역</div>
                            <div className="fav-con-list col4">지도 보기</div>
                        </div>
                        <div className="fav-con-txt">
                            <div className="fav-con-list col1">서면</div>
                            <div className="fav-con-list col2">부산 젊음의 상징 서면 10대 ~ 30대 초반까지 젋은 층들이 택하는 장소</div>
                            <div className="fav-con-list col3">부산광역시</div>
                            <div className="fav-con-list col4"><button>Go To Map</button></div>
                        </div>
                        { FavoriteList }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritePage
