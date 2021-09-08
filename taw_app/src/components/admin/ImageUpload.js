import React, { useState, useRef } from 'react'
import axios from 'axios';
import './ImgUpload.scss';

const ImageUpload = () => {
  const [imgBase64, setImgBase64] = useState(""); // preview img
  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const textInput = useRef('');

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    
    reader.onloadend = () => {
      // 읽기가 완료되면 아래 코드 실행
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
      setImgFile(e.target.files[0]); // 파일 상태 업데이트
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!window.confirm("업로드 하시겠습니까?")) {
      return;
    }
    const formData = new FormData();
    formData.append('imgFile', imgFile);

    upload(formData)
  }

  // S3 업로드
  const upload = async (formData) => {
    axios({
      url: '/api/upload',
      method: 'post',
      data: formData
    })
      .then(res => {
        alert('S3 저장소에 업로드 완료하였습니다.');
        setImgUrl(res.data.Location);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const copy = () => {
    alert("복사하였습니다.");
    const el = textInput.current
    el.select()
    console.log(el.value);
    // 2020 Mozilla - document.execCommand() 지원안함
    navigator.clipboard.writeText(el.value);
  }

  return (
    <div className="img__container">
      <div className="img__area">
        {imgBase64
          ? <img src={imgBase64} alt="사진"></img>
          : <div></div>
        }  
      </div>
      <div>
      <form name="travelInfo" onSubmit={handleSubmit} encType='multipart/form-data'>
          <input className="img_name" value={imgFile ? imgFile.name : ''} disabled="disabled"/>
          <label htmlFor="imgFile">이미지 선택</label>
          <input
            type='file'
            accept='image/jpg,impge/png,image/jpeg,image/gif'
            name='imgFile'
            id="imgFile"
            onChange={handleChangeFile}
          />
        <button className="btn upload_btn" onClick={handleSubmit}>업로드</button>
        </form>
        <span>imgUrl </span>
        <input className="upload_imgName" value={imgUrl} disabled="disabled" ref={textInput}/>
        <button className="btn copy_btn" onClick={copy}>복사</button>
        </div>
    </div>
  )
}

export default ImageUpload
