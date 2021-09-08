import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function GridCard(props) {
    console.log(props.데이터)
    let history = useHistory();
    const goToDetailPage = ()=>{
        history.push('/detail/'+ props.데이터.uuid)
        console.log("hihi")
    }


    return (
        
        <div>
            <li style={{backgroundImage: `url(${props.데이터.imgUrl})` }}>
                
                    <div className="con-list-box">
                        <div className="con-list-box-title">{props.데이터.title}</div>
                        <button className="con-list-box-txt" onClick={goToDetailPage}>+ 더보기</button>
                    </div>
                
            </li>
        </div>
    )
}

export default GridCard
