import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';

// import { randomSaying, userinfo } from '../dummy.js';
import axios from 'axios';

export const Showpage = styled.div`
width : 100vw;
height : 91vh;
`
export const Buttons = styled.button`
background-color: skyblue;
cursor : pointer;
width : 100%;
height: 23vh;
`
export const Views =styled.div`
background-color: green;
width : 100%;
height: 27vh;
border : solid 1px black;
`
export const Footers =styled.div`
background-color: green;
width : 100%;
height: 14vh;
border : solid 1px black;
`
export default function Main() {
  const navigate = useNavigate();
  return (
   
      <Showpage>
      <center>
       <Views>
      소개글 보여주는 창 
      
      </Views>
      <Views>
      소개글 보여주는 창
      </Views>
      <Buttons  onClick={() => {
                navigate('/board');
              }}>
            게시판 페이지로 이동하기
          </Buttons>
      <Footers>
      footer
      </Footers>

        </center>

        </Showpage>
     
    
  );
}
