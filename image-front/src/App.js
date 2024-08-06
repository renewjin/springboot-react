import React, { useState } from 'react';
import axios from 'axios';
// input 창을 숨기고 이미지선택을 눌렀을 때
// 이미지 선택하는 창 열리게 하기
// 이미지 다중선택
function App() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    const Java에업로드 = () => {
      // Form 특정값을 가져와서 넘겨줄 때 사용하는 객체
      // files에서 파일이 하나가 아니라 여러개 이기 때문에 여러개를 담을 배열 설정
      // Form 특정 값을 가져와서 넘겨줄 때 사용하는 객체
        // files에서 파일이 하나가 아니라 여러개이기 때문에 여러개를 담을 배열 설정
        const formData = new FormData();
        Array.from(files).forEach(file => {
            formData.append("files", file);
        });
        formData.append("title", title);
        formData.append("content", content);

        // 자바 컨트롤러에 데이터 전송! Post
        axios.post("http://localhost:9007/gellery/upload", formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        });
        alert("자바로 이미지 전송했습니다.");
        setTitle('');
        setContent('');
        setFiles([]);
    }

    return (
        <div className="App">
            {/*<form onSubmit={Java에제출하기}>*/}
                <div>
                    <label>제목:</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='file-upload'>이미지선택</label> {/* htmlFor input의 아이디나 네임을 적어 input과 연결 */}
                    <input type="file" 
                          id='file-upload'
                          className='img-input'
                          multiple
                          onChange={(e) => setFiles(e.target.files)}// files일경우 value 보다 files
                          />
                </div>
                <button onClick={Java에업로드}>Submit</button>
            {/*</form>*/}
            <div>
              {posts.map(post => (
                <div key={}  >
                  <h2> 게시글제목</h2>
                  <p> 게시글내용</p>
                  {     
                    <img   />
                  ))}
                </div>
              ))}
            </div>
        </div>
    );
}

export default App;