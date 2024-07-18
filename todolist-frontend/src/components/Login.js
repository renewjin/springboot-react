import React, {useContext, useState} from "react";
import LoginContext from "./LoginContext";

const Login = () => {
    const {loginMember, setLoginMember} = useContext(LoginContext);
    const[id, setId] = useState('');
    const[pw, setPw] = useState('');
    //const[name, setName] = useContext('');


    const 로그인버튼 = () => {
        fetch('/login', {
            method:"POST",
            headers : {"Content-Type" : "application/json",
                        "Accept" :  "application/json"},
            body : JSON.stringify({id : id, pw : pw})
        })
        .then(res => res.json())
        .then(map => {
            console.log(map);
            console.log("asdfasdfa" + map);
            console.log("aaaaaaaa" + map.loginMember);

            if(map.loginMember === null) {
                alert("아이디 또는 비밀번호가 일치하지 않습니다");
                return;
            }

            setLoginMember(map.loginMember);
            setId('');
            setPw('');
            alert('로그인 성공');
        })
    }

    const 로그아웃버튼 = () => {
        setLoginMember(null);
    }
    return (
        <div className="login-container">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>
                            <input
                                type="text"
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>PW</th>
                        <td>
                            <input
                                type="password"
                                onChange={(e) => setPw(e.target.value)}
                                value={pw}
                            />
                        </td>
                        <td>
                            <button onClick={로그인버튼}>로그인</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {loginMember && (
                <button onClick={로그아웃버튼}>로그아웃</button>
            )}
        </div>
    );
};
export default Login;