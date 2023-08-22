/* eslint-disable */ 
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // state 언제 써야함?
  // 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 씀
  // 자주 변경될거같은 html 부분은 state로 만들어놓기
  const [postTitle, b] = useState(['동명지하', '형제네생갈비', '키키키']);
  const [logo, setLogo] = useState('동명동 맛집 Blog');
  const [like, likeTrans] = useState(0);

  let likeCount = () => {
    likeTrans(like + 1)
  }

  return (
    <div className="App">
      <drag> 
      <div className='black-nav'>
        <h4>{ logo }</h4>
      </div>
      <div className='list'>
        <h4>{ postTitle[0] } <span onClick={likeCount} >👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitle[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitle[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      </drag>
    </div>
  );
}

export default App;
