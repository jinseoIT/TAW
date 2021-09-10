import React, {useState, useEffect} from 'react'
import './LandingPage.scss'
import axios from 'axios';
import GridCard from './common/GridCard';


function LandingPage() {

    let [데이터, 데이터변경] = useState([]);
    //console.log(데이터)
    


    useEffect(() => {
        axios.get('http://localhost:3005/api/travelArea/list')
        .then((response)=>{  
            let result = response.data.doc
            데이터변경(result)
        
        })
        .catch((err)=> (err, "요청보내는걸 실패했어요.") )
    }, [])

    return (
        <div>
            <div className="bg-img">
            </div>
            <div className="con-wrap">
                <div className="con-title">여행지 둘러보기</div>
                    <div className="con-list">
                        <ul>
                            {데이터.map((el,i)=> (
                                 <React.Fragment key={i}>
                                    <GridCard 데이터={데이터[i]}/>
                                 </React.Fragment>
                            ))}
                        </ul>
                    </div>
                <div className="more-button"><button>더보기</button></div>
                
            </div>
        </div>
    )
}

export default LandingPage



// 