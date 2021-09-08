import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function GridCard(props) {
    
    let history = useHistory();
    const goToDetailPage = ()=>{
        history.push(`/${props.데이터.uuid}`)
    }


    return (
        
        <div>
            <li style={{backgroundImage: `url(${props.데이터.imgUrl})` }}>
                <Link to="/detail/:id" >
                    <div className="con-list-box">
                        <div className="con-list-box-title">{props.데이터.title}</div>
                        <button className="con-list-box-txt" onClick={goToDetailPage}>+ 더보기</button>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default GridCard
