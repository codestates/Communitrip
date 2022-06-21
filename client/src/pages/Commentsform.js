import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export const Commentss = styled.div`
float: left
`


export default function Commentsform({posts}){

    return(
        <>
          
                <div key={posts.id}>
                    <Commentss>{posts.comment}</Commentss>
                </div>

        
        </>
    )
}