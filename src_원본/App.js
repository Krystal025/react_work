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
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}

//import한 곳에 무엇을 리턴해줄지 결정
export default App;
