import React, { useState, useEffect } from 'react'
import './DetailPage.scss'
import Header from './common/Header'
import axios from 'axios'

<<<<<<< HEAD
function DetailPage(props) {
    console.log(props)
=======
function DetailPage() { 

    const uuid = 'f08b6e78-a83f-455f-9718-2d3566cd924a';
>>>>>>> 683006b7eaab256210c74e95d43806eb7f6e0d15
    const [detail, setDetail] = useState([
    
        {
            title : '서면',
            lon : 35.15538011999905, 
            lad : 129.0600144979191,
            imgUrl : 'https://live.staticflickr.com/4271/34756862025_d5577bbdec_b.jpg',
            summary : '부산 젊음의 상징 서면',
            description : '부산 젊음의 상징 서면 10대 ~ 30대 초반까지 젋은 층들이 택하는 장소',
            region : '부산광역시',
            insideYn : 1,
            uuid : 'f08b6e78-a83f-455f-9718-2d3566cd924a',
        },
        {
            title : '전주 한옥마을',
            lon : 35.81492433814524, 
            lad : 127.15270444665123,
            imgUrl : 'https://post-phinf.pstatic.net/MjAxOTEyMDZfMjk1/MDAxNTc1NjE5MDI5MjMz.-k8az4Iemq-sMe-cK8ZpLdj0tNWUDVkn-C-t72D3J_og.ezMEu_Rkjl5___DrWrvmq4Er6urB86odpKK9J8bFV2wg.JPEG/%EC%A0%84%EC%A3%BC%ED%95%9C%EC%98%A5%EB%A7%88%EC%9D%84.jpg?type=w1200',
            summary : '전통과 현대의 아름다운 조화',
            description : '국내 최대 규모의 전통 한옥촌이자 전국 유일의 도심 한옥군, 전통과 현대의 모습이 한 곳에 모인 곳',
            region : '전주시',
            insideYn : 1,
            uuid : 'b1274d90-a890s-9090e-2847-sk68x2k5534',
        },
        {
            title : '광화문',
            lon : 37.577355193918194, 
            lad : 126.97691239917266,
            imgUrl : 'http://bike-korea.com/files/attach/images/1910/758/541/887c893c172968501ad1e72375dd8e95.jpg',
            summary : '서울의 심장, 광화문',
            description : '빛이 사방에 널리 퍼져 교화가 만방에 미친다는 의미의 광화문은 조선 시대부터 줄곧 우리의 역사의 중심지이다.',
            region : '서울특별시',
            insideYn : 1,
            uuid : '2j3hf990-673f-356a-3452-245234asd31',
        },
        {
            title : '경주 동궁과 월지',
            lon : 35.834987126837504, 
            lad : 129.2266031131898,
            imgUrl : 'https://www.gyeongju.go.kr/upload/content/thumb/20200317/A9E0A9F412B84EC68D1893C36D01E942.jpg',
            summary : '경주의 야경명소, 달이 비치는 연못',
            description : '천년의 숨결을 느끼는 거대한 인공 연못 동궁과 월지, 경주의 야경 명소. 경주야경 제 1의 명소라는 타이틀이 아깝지 않은 동궁과월지는 안압지라는 이름이 더 익숙할 수도 있다. 조선시대 폐허가 된 이곳에 기러기와 오리 무리가 있는 연못이라 하여 안압지라 불렀는데, 원래 이곳은 신라시대 왕자들이 기거하던 별궁이 있던 자리다. 그래서 2011년 동궁과 월지라는 제 이름을 찾았다. 삼국사기의 기록을 보면 문무왕 14년(674)에 연못인 월지가 조성되었고, 삼국통일이 완성된 이후인 679년에 동궁이 지어졌다고 전한다. 동궁내의 임해전은 연희, 회의, 접대 장소로 활용되었다. 동궁과 월지는 신라 조경예술의 극치를 보여준다.',
            region : '경주시',
            insideYn : 1,
            uuid : 'u89s0902-l2k3-sd12-4954-2da230o6442',
        },

    ])

<<<<<<< HEAD
    useEffect(() => {
        
    }, [])
=======

    useEffect(() => { 
        console.log('useEffect') 
        axios.get(`/api/travelArea/Detail?uuid=${uuid}`) 
        .then(res => { 
            console.log(res); 
            alert('호출 성공') 
        })
        .catch(function (error) {
            console.log(error);
        }) }, 
        [])

   

    
>>>>>>> 683006b7eaab256210c74e95d43806eb7f6e0d15
        
    

    return (
        <div>
            <div className="detail-bg-img">
                <div className="detail-bg-txt">{detail[3].title}</div>
            </div>
            <div className="detail-wrap">
                <div className="detail-img">
                    <img src="https://www.gyeongju.go.kr/upload/content/thumb/20200317/A9E0A9F412B84EC68D1893C36D01E942.jpg" alt="" />
                </div>
                <div className="detail-txt-box">
                    <div className="detail-tit">{detail[3].title}</div>
                    <div className="detail-sum">{detail[3].summary}</div>
                    <div className="detail-desc">{detail[3].description}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
