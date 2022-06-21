import React,{ useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import {Dropdown, DropdownButton} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';



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

export default function Editpost(props){
console.log(props.userinfo)
const location =useLocation();
console.log(location.state.post)
const [editpostinfo,setEditpostinfo] = useState({
    contents: '',
    title: '',
    tag_id: '',
});
console.log(editpostinfo)
const [tagName, setTagName] = useState('태그');
const navigate= useNavigate();
const handleTags = (e) => {
    setTagName(e.name)
    const tagId = e.id
    setEditpostinfo((e) => {
      console.log(tagId)
      return {...e, tag_id: tagId}
    })
    
}
const handleEditpostInfo = (key) =>(e) => {
    setEditpostinfo({ ...editpostinfo, [key]: e.target.value });
  }

    return(
        <>
        



        <div>제목</div>
        <TitleInput  type="text" onChange={handleEditpostInfo('title')} placeholder='제목을 입력해주세요'  />
    
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
        <div>글 작성</div>
      <input type="text" placeholder='글을 작성해주세요' onChange={handleEditpostInfo('contents')} />
        

        
        </>
    )
}