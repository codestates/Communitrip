import React,{ useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import { checkPassword } from "./Signup/Validation";


export default function(){
const location =useLocation();
console.log(location)
console.log(location.state)
console.log(location.state.post.title)


return(
 <>
 <center>
  <h1>{location.state.post.title}</h1>

 <img src={location.state.post.image} alt={location.state.post.title} />
 </center>
 </>
    )
}