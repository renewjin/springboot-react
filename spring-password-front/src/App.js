import logo from './logo.svg';
import {useState} from 'react';
import './App.css';


function App() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handle가입하기 = () => {
    // fetch와 formData를 활용해서 회원가입 작성
    // formData : 기본적으로 multipart 이미지를 사용한다는 전제조건
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);

    const user = {
      username : username,
      password : password,
      email : email,
      passwordConfirm : passwordConfirm
    }

    fetch('http://localhost:9011/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      //body: formData -> multipart 이미지를 보낸다
      /*
      body: {
        username : username,
        password : password,
        email' : email
      }
        */
    })
    .then(response => response.text())
    // 데이터가 무사히 저장됐다고 사용자한데 알려줌
    .then(data => {
      alert('회원가입이 완료되었습니다');
    })
    // 데이터 저장 실패했다고 사용자한데 알려줌
    .catch(error => {
      console.log("에러발생 : ", error);
      alert('회원가입에 실패했습니다.');
    })
  }

  return (
    <div className="App">
      <h2>회원가입</h2>
      <label>닉네임</label>
      <input type='text' placeholder='닉네임 작성하기' 
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      />
      
      <label>비밀번호</label>
      <input type='password' placeholder='비밀번호 작성하기' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <label>비밀번호 확인</label>
      <input type='password' placeholder='비밀번호 작성하기' 
      value={passwordConfirm}
      onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <label>이메일</label>
      <input type='email' placeholder='이메일 작성하기' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

    <button onClick={handle가입하기}>가입하기</button>
    </div>
  );
}

export default App;
