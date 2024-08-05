import React, { useState } from 'react';
import axios from 'axios';
// input 창을 숨기고 이미지선택을 눌렀을 때
// 이미지 선택하는 창 열리게 하기
// 이미지 다중선택
function App() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    const 이미지선택= () => {
      
    }

    return (
        <div className="App">
            <form>
                <div>
                    <label>제목:</label>
                    <input/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea  />
                </div>
                <div>
                    <label htmlFor='file-upload'>이미지선택</label> {/* htmlFor input의 아이디나 네임을 적어 input과 연결 */}
                    <input type="file" 
                          id='file-upload'
                          style={{display:'none'}}
                          multiple/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;