import React, { useState, useEffect } from 'react'
import './BulletinPage.scss';
import { BulletinList } from '../Data.js';
import { Link } from 'react-router-dom';

function BulletinPage() {

    const [dataList, setDataList] = useState([]);

    

    useEffect(() => {
        setDataList(BulletinList);
        console.log(BulletinList);
        
    }, [])

    const BulletinViewList = dataList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.no}</td>
                <td><Link to={`/bulletin/${item.no}`}>{item.title}</Link></td>
                <td>{item.writer}</td>
                <td>{item.createDate}</td>
                <td>{item.commentCount}</td>
                <td>{item.readCount}</td>
            </tr>
        )
    })



    return (
        <div>
            <div className="bulletin-wrap">
                <div className="bul-tit">게시판</div>
                <table class="table">
                    <thead>
                    <tr>
                        <th className="th1">번호</th>
                        <th className="th2">제목</th>
                        <th className="th3">작성자</th>
                        <th className="th4">날짜</th>
                        <th className="th5">조회수</th>
                        <th className="th6">댓글수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        BulletinViewList
                    }
                    </tbody>
                </table>
                <button>등록</button>
            </div>
        </div>
    )
}

export default BulletinPage
