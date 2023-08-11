import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/*
function App() {
  return (
   <div className="container">
      <h1>인덱스 페이지</h1>

   </div>
  );
}
*/

//함수형 component에서 클래스형 component로 변경
class App extends Component{
  //render()메소드에서 리턴해주는 jsx를 활용해서 화면구성이 됨 
  render(){
    //render() 함수 안에 지역변수 선언 후 문자열 저장 
    let myName = "수정";
    
    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있음
    const boxStyle = {
      width : "100px",
      height : "100px",
      border : "1px solid red",
      backgroundColor : "yellow"  //카멜 케이스 사용 
    }
    return (
      <div className = " container">
        {/* 
          jsx객체 내부에서 사용하는 주석
        */}
        <h1>인덱스 페이지</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <button onClick={()=>{
          alert("버튼을 눌렀습니다")
        }}>눌러보세요</button>
        <div style={boxStyle}></div>
      </div>
    )
  }
}

//import한 곳에 무엇을 리턴해줄지 결정
export default App;
