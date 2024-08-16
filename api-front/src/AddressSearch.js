import { useEffect, useState } from 'react';

const addUserAPI = "/api/addUser";

const AddressSearch = () => {
  const [address, setAddress] = useState('');
  const [추가주소, set추가주소] = useState('');
  const [최종주소, set최종주소] = useState('');

  // 백엔드 api url 주소를 /api/addUser로 Restful 연결을 하려한다.
  // Restful 연결 = 자바 컨트롤러로 연결해서 DB에 값 넣는다 
  // application이란 코드 묶음, 코드 폴더
  // 1. fetch 버전 then catch            async awith xxxx
  const saveFetch = () => {
    fetch (addUserAPI, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        // java에서 파라미터값도 address로 설정해줘야함
        body:JSON.stringify({address:최종주소})
      })
      .then(response => response.json())
      .catch(error => console.log("등록 에러", error))
    
  }
  
  // axios 버전
  const saveFetch2 = () => {
    axios.post(addUserAPI, 
        ({address:최종주소})
      )
      .then(response => response.json())
      .catch(error => console.log("등록 에러", error))
    
  }

  // 주소검색을 완료하고 사용자가 검색한 데이터를 가져와서 기능 실행하기
  const handleComplete = (data) => {
    // 사용자가 선택한 기본 주소를 fullAddress 주소에 저장
    let fullAddress = data.address; // 서울 강남구 강남대로 298 (역삼동, KB라이프타워)
    let extraAddress = ''; // 

    // R = 도로명주소   J = 지번주소
    if (data.addressType === 'R') { // 주소 타입이 도로명 주소일 경우
        
        //  bname = 특정 동이 존재하면 추가 역삼동
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      // 특정 빌딩이름이 존재하면 추가  남도빌딩
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      // fullAddress 모든 주소 합쳐서 정리하기
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    // 완성된 주소
    setAddress(fullAddress);
  };

  // 주소검색 버튼을 누를 경우 openPostcode 기능 실행
  const openPostcode = () => {
    //new window.daum 새창으로 열기 daum 서비스를 실행
    new window.daum.Postcode({
        // oncomplete : 사용자가 주소 검색을 완료했을 때 호출하는 함수 지정
        // 호출하는 함수 = 주소 검색을 완료하고나서 실행할 기능 선택
        // oncomplete = 다음에서 제공   handleComplete = 개발자가 만든 기능
      oncomplete: handleComplete,
    }).open(); // 실행하기
  };

  // useEffect 활용해서 최종주소 추가
  useEffect(()=> {
    set최종주소(`${address} ${추가주소}`);
  }, [address, 추가주소])
  return (
    <div>
      <button onClick={openPostcode}>주소 검색</button>
      {address && 
      <div>
        <input
        type='text'
        placeholder='상세주소'
        value={추가주소}
        onChange={(e) =>  set추가주소(e.target.value)}
        />
        
      <div>선택한 주소: {address}</div>
      </div>
    }

    {address && 추가주소 && (
        <>
        <p>최종 추가주소</p>
        <h5>{최종주소}</h5>

        {/* 나중에 value 값으로 최종주소를 DB에 넣어야할 때 사용
        주로 최종input은 hidden으로 해서 소비자눈에 보이지 않게 해놓고 db에 넣어줌 */}
        <input type='hidden' value={최종주소} />
        </>
    )}
    </div>
 
  );
};

export default AddressSearch;