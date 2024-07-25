import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserTable from './component/UserTable';
import UserForm from './component/UserForm';
// select insert component 추가 작성
function App() {
  const [users, setUsers] = useState([]); // 유저 목록이 담길 빈 배열 생성
  // userEffect는 버튼이나 특정값을 클릭하지 않아도 자동실행 딱 1번만 실행되느냐, 주기적으로 실행하는냐
  // App.js가 실행되면 적용할 효과 만약 특정변수명이 없다면 기능이 최초 1회만 실행하고 실행되지 않음
  // useEffect(()=> {기능}, [         ]);
  // 특정 변수명이 존재한다면 특정변수명에 변화가 있을 때마다 기능이 실행
  // useEffect(()=> {기능}, [특정변수명]);

  useEffect(() => {
    모든유저보기();// 홈페이지 들어오면 최초 1회로 유저들이 보이고,
  }, [users]); // [] 비어있기 때문에 홈페이지가 보일 때 딱 한 번만 실행, 만약 []안에 값이 들어있으면 그 값이 변할때마다 실행됨

/*
  const 모든유저보기 = () => {
    // axios를 이용해서 모든 유저를 보겠다.
    axios.get("/users") // controller GetMapping에서 /users라는 주소를 바라보기 때문에 users 적어준것
    //응답을 무사히 가져왓을 때 
    .then(응답 => { // Java에서 DB값에 있는 내용을 가져와 고객에게 가져온 내용에 대한 응답을 알려주는것
      setUsers(응답.data); // 응답 결과 데이터로 users를 변경하겠다
    })
    //응답을 가져오지 못했을 때 문제가 생겻을 때
    .catch(err => {
      alert("가져오지 못했습니다.") // 주로 alery보다 console.log로 작성해서 개발자가 에로를 볼 수 있게
    })
  }
*/
/*
  // 1. axios 성공과 실패에 대한 겨로가를 처리하는 버전
  const 모든유저보기 = () => {
    axios.get("/users") 
    .then(응답 => { 
      setUsers(응답.data); 
    })
    .catch(err => {
      alert("가져오지 못했습니다.") 
    })
  }
  // 2.axios 성공에 대한 결과만 보여주는 버전 async await
  // async = 기능 좀 실행해보자 await = 일다닉다려 내가 값좀 가져와볼게
  const 모든유저보기 = async () => {
    const 응답 = await axios.get("/user"); // controller에 있는 users 주소에 방문해서 데이터좀 가져올게
    // 가져오기 성공하면
    setUsers(응답.data); //가져오는데 성공하면 가져온 데이터로 유저목록을 만들어주는 것
  }
*/
  // async await 버전 사용
  const 모든유저보기 = async () => {
    const res = await axios.get('/users');
    setUsers(res.data);
  };

  // async await 사용해서 유저 추가하기 addUser에서 가져온 user 한 명을 넣어주기
  const addUser = async (user) => {
    let success = true;
    const res = await axios.post('/users', user)
    .catch(error => {
      success = false;
      alert('이미 존재하는 이메일입니다');
      return;
    }); // controller postMapping로 전달하는 유저정보
    // ...users 기존에 작성한 유저목록에 유저 데이터 하나를 추가
    console.info(success);
    if (success) {
      setUsers([...users], res.data)};
    
  }

  return (
    <div className="App">
      <h1>유저 관리하기</h1>
      <UserForm addUser={addUser} />
      <UserTable users={users} />
    </div>
  );
}
export default App;
