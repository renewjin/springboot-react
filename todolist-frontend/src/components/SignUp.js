import React, {useState} from "react";

const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');

    // 가입결과 메세지
    const [resultMessage, setResultMessage] = useState('');
    // 아이디중복결과
    const [idValidation, setIdValidation] = useState(false);

    const 아이디중복검사 = (inputId) => {
        setId(inputId);

        if(inputId.trim().length < 4) { // 아이디4글자이상
            setIdValidation(false);
            return;
        }

        // DB에 중복 아이디 검사
        fetch("/idCheck?id=" + inputId)
        .then(res => res.text())
        .then(result => {
            console.info(result);
            if(Number(result) === 0) { // spring에서 중복이면 1, 중복되지 않으면 0값을 리턴
                setIdValidation(true);
            } else {
                setIdValidation(false);
            }
        })
    }

    const 회원가입버튼 = () => {
        if (!idValidation) {
            alert("아이디가 유효하지 않습니다");
            return;
        }

        if (pw !== pwCheck) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }

        const input값들 = {};
        input값들.id = id;
        input값들.pw = pw;
        input값들.name = name;

        fetch("/signup", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(input값들)
        })
        .then(res => res.text())
        .then(result => {
            
            console.log("bbbb" + result);
            if(Number(result) > 0) { // 성공1 실패0
                setResultMessage("회원가입 성공");
                setId('');
                setPw('')
                setPwCheck('');
            } else {
                setResultMessage("회원가입 실패");
            }
        })
    }

    return (
        <div className="signup-container">
            <label> ID : 
                <input type="text" 
                    onChange={e => 아이디중복검사(e.target.value)}
                    value={id}
                    className={idValidation ? '' : 'id-err'}
                />
            </label>
            <label> PW :
                <input type="password"
                        onChange={e=> {setPw(e.target.value)}}
                        value={pw}
                />
            </label>
            <label> PW CHECK :
                <input type="password"
                        onChange={e=> {setPwCheck(e.target.value)}}
                        value={pwCheck}
                />
            </label>
            <label> NAME :
                <input type="text"
                        onChange={e=> {setName(e.target.value)}}
                        value={name}
                />
            </label>
            <button onClick={회원가입버튼}>가입하기</button>
            <hr/>
            <h3>{resultMessage}</h3>
        </div>
    );
};
export default Signup;