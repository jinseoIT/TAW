import React, { useState } from 'react'
import './BulletinPage.scss';

function BulletinViewPage(props) {
    
    
    const [BulletinData, setBulletinData] = useState({});

    

    console.log(props);
    return (
        <div>
            <div>
                <div>게시글 상세정보</div>
                {
                    BulletinData ? (
                        <div>
                            <div>
                                <label>번호</label>
                                {/* <label>{BulletinData.no}</label> */}
                            </div>
                            <div >
                                <label>제목</label>
                                {/* <label>{BulletinData.title}</label> */}
                            </div>
                            <div>
                                <label>작성자</label>
                                {/* <label>{BulletinData.writer}</label> */}
                            </div>
                            <div>
                                <label>조회수</label>
                                {/* <label>{BulletinData.readCount}</label> */}
                            </div>
                            <div>
                                <label>내용</label>
                                {/* <label>{BulletinData.content}</label> */}
                            </div>
                        </div>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
                <button>목록으로 돌아가기</button>
            </div>
        </div>
    )
}

export default BulletinViewPage
