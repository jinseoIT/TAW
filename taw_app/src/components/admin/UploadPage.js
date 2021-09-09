import React from 'react'
import ImageUpload from './ImageUpload'
import TravelAdd from './TravelAdd'

const UploadPage = () => {

  return (
    <>
      <h2 style={{"marginBottom" : "20px"}}>이미지 업로드</h2>
      <ImageUpload />
      <hr />
      <TravelAdd />
    </>
  )
}

export default UploadPage


