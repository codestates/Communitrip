import axios from 'axios';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../components/SearchPlace'

axios.defaults.withCredentials = true;

const TitleInput = styled.input`
  margin: auto;
  width : 40vw;
  height : 3vh;
  `
const Dropdownbtn = styled(DropdownButton)`
  #dropdown-item-button{
    width: 9vw;
    height: 4vh;
    line-height: 1rem;
    margin: 20px;
    fo
  }
  
`

const PreviewDiv = styled.div`
  margin-left: 10px;
  border: 5px solid rgb(122, 238, 72);
  border-radius: 20px;
  min-width: 300px;
  min-height: 300px;
  width: 22%;
  height: 20%;
  .previewImg {
    width: 300px;
    height: 300px;
  }
` 

export default function Create_post(props) {
  const [postInfo, setpostInfo] = useState({
    user_id: props.userinfo.id,
    contents: '',
    title: '',
    tag_id: '',
    total_likes: 0,
    image: '',
    address: '',
    longitude: '',
    latitude: '',
  });
  const [coordinate, setCoordinate] = useState("");
  const [tagName, setTagName] = useState('태그');
  const [imageSrc, setImageSrc] = useState('');
  const userId = props.userinfo.id
  const inputRef = useRef();
  const navigate= useNavigate();
  console.log(userId)
  console.log(props.tags)
  console.log('렌더링...')
  console.log(coordinate.x)
  
  
  const handleImage = (e) => {
    console.log(e.target.files)
    inputRef.current.click()
    
  }

  const handleTags = (e) => {
    setTagName(e.name)
    const tagId = e.id
    setpostInfo((e) => {
      console.log(tagId)
      return {...e, tag_id: tagId}
    })
    
  }

  const preview = (fileBlob) => {    
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        const img = reader.result;
        console.log(img)
        setImageSrc(reader.result);
        setpostInfo((e) => {
          return {...e, image: img}
        })
        resolve();
      };
    });
  };

  const handlePostInfo = (key) =>(e) => {
    setpostInfo({ ...postInfo, [key]: e.target.value });
  }

  const handlesucces = () => {
    if(postInfo.user_id !== '' 
    && postInfo.contents !== '' 
    && postInfo.title !== '' 
    && postInfo.tag_id !== '' 
    // && postInfo.image !== '' 
    // && postInfo.longitude !== '' 
    // && postInfo.latitude !== ''
    ) {
      axios.post(`http://localhost:8080/posts/${userId}`,{
        user_id: postInfo.user_id,
        contents: postInfo.contents,
        title: postInfo.title,
        tag_id: postInfo.tag_id,
        total_likes: 0,
        image: postInfo.image,
        address: postInfo.address,
        longitude: postInfo.longitude,
        latitude: postInfo.latitude,
      }).then(
      navigate('/board')
      )
    } 
  } 
  console.log(postInfo)
  return (
    <div>
      <center>
      <h2>게시글 작성</h2>
      </center>
      <>
        <div>제목</div>
        <TitleInput  type="text" onChange={handlePostInfo('title')} placeholder='제목을 입력해주세요'  />
      </>
      <div>태그선택</div>
      <Dropdownbtn id="dropdown-item-button" title={tagName} >
      {props.tags?.map(tags => {
        return <Dropdown.Item 
        as="button" 
        key={tags.id}  
        onClick={() =>{
          handleTags(tags)
        }}
        >
        {tags.name}
        </Dropdown.Item>
      })}
    </Dropdownbtn>
    {/* <div>이미지</div>
    <PreviewDiv>
      <div className="preview" >
        {imageSrc && <img src={imageSrc} alt="preview-img" className="previewImg" />}
      </div>
    </PreviewDiv>
    <input
      ref={inputRef}
      type="file" 
      id="real-input" 
      className="image_inputType_file" 
      style={{ display: "none" }}
      accept="image/*" 
      onChange={(e) => {
        preview(e.target.files[0]);
      }}
      required multiple 
      />
    <button className="browse-btn" onClick={handleImage}>
      사진업로드
    </button> */}
    <div>글 작성</div>
      <input type="text" placeholder='글을 작성해주세요' onChange={handlePostInfo('contents')} />
    <div>지도</div>
      {/* <KakaoMap setCoordinate={setCoordinate} setpostInfo={setpostInfo} coordinate={coordinate}/> */}
      <button onClick={handlesucces} >작성완료</button>

    </div>
  )
}