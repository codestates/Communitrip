import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Boardpostform from './Boardpostform';



export const Allpage = styled.div`
width : 99vw;
height : 90vh;
margin: 0 auto;
`
export const Boardbutton = styled.button`
margin-right : 25px
`
export const Options = styled.div`
width : 99vw;
height : 4vh;
background-color : green;
`
export const ViewBoard =styled.div`
width : 99vw;
height : 90vh;
overflow : auto;
background-color : skyblue;
`
export const Vboard = styled.div`
display: table;
margin: 0 auto;
width: 99%;
height: calc(100vh - 4rem);
`
export const Vboards = styled.div`
background-color: #bc9eff0e;
padding: 5rem;
width: 99%;
min-height: 90vh;
height: 90%;
`
export const Postbutton = styled.button`
float: right;
`
export default function Myboard(props){
console.log(props.userinfo)
const navigate = useNavigate();
const [mypostsinfo, setmyPostsinfo]=useState();
console.log(mypostsinfo)
const isMyposts =() =>{
    axios.get (`http://localhost:8080/posts/users/${props.userinfo.id}`).then((res)=>{ 
      const info = res.data.data    
      setmyPostsinfo(info)
        }).catch(error =>{
          console.log(error)
        })
  }
  useEffect(() => {
    isMyposts();
  }, [props.userinfo]);
return(
<Allpage>
    <Options>
        태그선택  게시글 나열 방식  <Postbutton onClick={() => {navigate('/create_post');}}>글쓰기</Postbutton>
    </Options>
    <ViewBoard>
    <Vboard>
      <Vboards>
      {mypostsinfo&&mypostsinfo.map(posts=>
            <Boardbutton onClick={() => {}}>
            <Boardpostform 
            posts={posts}
            key={posts.id}
            />
            </Boardbutton>
            
            )}
            
      </Vboards>
    </Vboard>
    </ViewBoard>
</Allpage>


)
}