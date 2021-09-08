import React, {useState} from 'react'
import './TravelAdd.scss';
import axios from 'axios';

const TravelUpload = () => {

  const [travelInfo, setTravelInfo] = useState({
    title: '',
    lon: '',
    lat: '',
    imgUrl: '',
    summary: '',
    description: '',
    region: '',
    insideYn: 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelInfo({ ...travelInfo, [name]: value });
  }

  const handleSubmit = async (e) => {
    console.log('submit!');
    e.preventDefault();
    const endPoint = "/api/travelArea/add";
    axios({
      url: endPoint,
      method: 'post',
      data : travelInfo
    })
      .then(res => {
        console.log(res);
        alert('등록이 완료 되었습니다.');
      })
      .then(err => {
        console.log(err);
      })
  }

  return (
    <div className="travelAdd__container">
      <h2>여행지 등록</h2>
      <form onSubmit={handleSubmit}>
        <label>제목(Title)</label>
        <input type="text" value={travelInfo.title} name="title" onChange={handleChange}/>
        <label>경도(Lon)</label>
        <input type="text" value={travelInfo.lon} name="lon" onChange={handleChange}/>
        <label>위도(Lat)</label>
        <input type="text" value={travelInfo.lat} name="lat" onChange={handleChange}/>
        <label>이미지 경로(ImgUrl)</label>
        <input type="text" value={travelInfo.imgUrl} name="imgUrl" onChange={handleChange}/>
        <label>부제목(Summary)</label>
        <input type="text" value={travelInfo.summary} name="summary" onChange={handleChange}/>
        <label>내용(Description)</label>
        <textarea name="description" onChange={handleChange}>{travelInfo.description}</textarea>
        <label>지역(region)</label>
        <input type="text" value={travelInfo.region} name="region" onChange={handleChange}/>
        <label>실내외(insideYn)</label>
        <input type="radio" name="insideYn" value={1} checked />
        <span>실내</span>
        <input type="radio" name="insideYn" value={0} />
        <span>실외</span>
        <button onSubmit={handleSubmit}>등록</button>
      </form>
    </div>
  )
}

export default TravelUpload

