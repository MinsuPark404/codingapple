/* eslint-disable */ 
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // state 언제 써야함?
  // 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 씀
  // 자주 변경될거같은 html 부분은 state로 만들어놓기
  const [logo, setLogo] = useState('동명동 맛집 Blog');
 
  let [postTitle, setPostTitle] = useState(['동명지하', '형제네생갈비', '키키키']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  
  const trans = ()=>{
    let copy = [...postTitle];
    copy[0] = '구미구미';
    setPostTitle(copy);
  }

  return (
    <div className="App">
      <drag> 
      <div className='black-nav'>
        <h4>{ logo }</h4>
      </div>

      <button onClick={()=>{
        let copy = [...postTitle];
        copy.sort();
        setPostTitle(copy)
      }}>가나다순정렬</button>

      <button onClick={ trans }>버튼</button>

      {
        postTitle.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>
                { postTitle[i] }
                <span onClick={()=>{ 
                  let copy = [...like]
                  copy[i] += 1
                  setLike(copy) 
                }}>👍</span> {like[i]}
              </h4>              
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      {
        modal == true ? <Modal postTitle={postTitle} setPostTitle={setPostTitle}/> : null
      }

      </drag>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{props.postTitle[1]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
