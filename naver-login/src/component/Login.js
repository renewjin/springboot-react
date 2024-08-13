import { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    /*
    const 로그인기능 = () => {
        axios.post('http://localhost:9010/login',null, {
            params:{
                id:id,
                password : password
            }
        })
        .then (response => {
            console.log(response); 
            if(response.status ===200) { //로그인성공시 200 주소 보임
                setMessage("로그인 성공");
            }else{
                setMessage("로그인 실패");
            }
        })
        .catch(e => {
            setMessage('로그인 중 문제가 발생했습니다.');
        })
    }
    */
    /*
    const 로그인기능 = () => {
        fetch('/login', {
            method:"Post",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({id, password}),
        })
        .then(response => {
            if(response.ok) {
                return response.text();
            }
        })
        .then(result => {
            setMessage(result); // 자바에서 로그인 실패 성공에 대한 메세지를 그대로 사용
        })
        .catch();
    }
    */
   
    const 로그인기능 = async () => {
        console.log("id : ", id);
        console.log("password : ", password);
        await axios.post('/login', null, { //http:localhost:9010
            params: {id: id, password: password}
        })
        .then(res => {
            setMessage("로그인 성공");
            console.log("로그인 성공 : " + res.data);
        })
        .catch(error => {
            setMessage("로그인 실패");
            console.log("로그인 에러 발생 : " + error);
        })
    }
    
    
    return (
        <div className='login-container'>
            <h3>로그인하기</h3>
            <div>
                <label>
                    아이디 :
                    <input type="text" placeholder="아이디를 입력하세요" value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
                <label>
                    비밀번호 :
                    <input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={로그인기능}>로그인하기</button>
                <div className='find-sign-buttons'>
                    <button>아이디찾기</button>
                    <button>비밀번호 찾기</button>
                    <button>회원가입하기</button>
                </div>
            </div>
            <label>
                sns로 로그인하기:
                <img src="/naver_img/btnG_icon_round.png" className='naver-logo-img' />
            </label>
            {/*<img src="/naver_img/btnG_icon_round.png" style={{cursor: 'pointer'}} />*/}
            
        {/*
            <button className='naver-login-button'>
                <img src="/naver_img/btnG_icon_round.png" />
                네이버로 회원가입
            </button>
        */}
        </div>
    )
}

export default Login;