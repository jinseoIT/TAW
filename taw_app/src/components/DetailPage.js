import React, { useState, useEffect } from 'react'
import './DetailPage.scss'
import axios from 'axios'


function DetailPage(props) { 
    const uuid = props.match.params.uuid
    const [travelInfo, setTravelInfo] = useState({})
   
    useEffect(() => { 
        console.log('useEffect') 
        axios.get(`/api/travelArea/Detail?uuid=${uuid}`) 
        .then(res => { 
            setTravelInfo(res.data.travelArea)
        })
        .catch(function (error) {
            console.log(error);
        }) 
    },[uuid])
    
    return (
        <div>
            <div className="detail-bg-img" style={{ backgroundImage: `url(${travelInfo.imgUrl})`}}>
                <div className="detail-bg-txt">{travelInfo.title}</div>
            </div>
            <div className="detail-wrap">
                <div className="detail-img">
                    <img src={travelInfo.imgUrl} alt={travelInfo.title} />
                </div>
                <div className="like_btn">
                </div>
                <div className="detail-txt-box">
                    <i class="far fa-bookmark"></i>
                    <div className="detail-tit">{travelInfo.title}</div>
                    <div className="detail-sum">{travelInfo.summary}</div>
                    <div className="detail-desc">{travelInfo.description}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
