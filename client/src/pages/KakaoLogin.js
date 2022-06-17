// import React, { useEffect } from "react";
// import axios from 'axios';
// import { REST_API_KEY, REDIRECT_URI } from './KakaoLogindata'
// import { useNavigate, useLocation } from 'react-router-dom'
// axios.defaults.withCredentials = true;

// function KakaoLogin() {
//     const location = useLocation();
//     const navigate =useNavigate();
//     const KAKAO_CODE = location.search.split('=')[1];
//     console.log(KAKAO_CODE);
//     const Client_secret="6ZwYnNsd4mEAfaRHsdoZbDxSK90cz35s"
//     const bodyData = {
//         grant_type : "authorization_code",
//         client_id : "e79be0723c7ef0857a93b051eadd61dd",
//         redirect_uri : "http://localhost:3000/auth/callback/kakao",
//         code : location.search.split('=')[1]
//     }
//     const queryStringBody = Object.keys(bodyData)
//     .map(k=> encodeURIComponent(k)+"="+encodeURI(bodyData[k]))
//     .join("&")
//     const getKakaoToken =() =>{
//         fetch(`https://kauth.kakao.com/oauth/token`,{
//             method: 'POST',
//             headers: {'Content-Type': 'application/x-www-form-urlencode;charset=utf-8'},
//             body: queryStringBody
//         }).then(res => res.json())
//         .then((data) =>{
//            console.log(data)
//         })
//     }
//     useEffect(()=>{
//         if(!location.search) return;
//         getKakaoToken();
//     },[])
//     return <div>KakaoLogin</div>
// }
// export default KakaoLogin;