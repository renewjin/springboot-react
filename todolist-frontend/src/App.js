import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/SignUp';
import LoginContext from './components/LoginContext';

function App() {
  // 회원가입창 보이기 숨기기
  const [signUpView, setSignUpView] = useState(false);

  // 로그인한 회원 정보 저장
  const [loginMember, setLoginMember] = useState(null);

  return (
    <LoginContext.Provider value={{loginMember, setLoginMember}}>

      <button onClick={()=> {setSignUpView(!signUpView)}}>
        {/* 버튼 클릭했을 때 setSignUpView값을 signUpView의 반대값을로 설정 */}
        {signUpView ? ('회원 가입 닫기') : ('회원 가입 열기')}
      </button>

      <div className='signup-wrapper'>
        {signUpView === true && (<Signup />)}
      </div>

      <h1>Todo List</h1>
      <Login />
    </LoginContext.Provider>
  );
}

export default App;
