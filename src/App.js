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
  // let [like1, setLike1] = useState(0);
  // let [like2, setLike2] = useState(0);
  let [modal, setModal] = useState(false);
  console.log(setLike);

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

      <button onClick={()=>{
        let copy = [...postTitle];
        copy[0] = '구미구미';
        setPostTitle(copy);
      }}>버튼</button>

      
      {/* <div className='list'>
        <h4>{ postTitle[0] } <span onClick={()=>{ setLike1(like1 + 1) }}>👍</span> {like1} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{ postTitle[1] } <span onClick={()=>{ setLike2(like2 + 1) }}>👍</span> {like2} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{ postTitle[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
     

      {
        postTitle.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>
                { postTitle[i] }
              </h4>
              <span onClick={()=>{ 
                let copy = [...like]
                copy[i] += 1
                setLike(copy) 
              }}>👍
              </span> {like[i]}

              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      {
        modal == true ? <Modal/> : null
      }

      </drag>
    </div>
  );
}

const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
