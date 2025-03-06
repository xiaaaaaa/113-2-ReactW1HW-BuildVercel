import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./img/H_E/logo.png";
import burgerpng from "./img/H_E/burger.png";
import mainPic from "./img/H_E/main pic.png";
import rectangle from "./img/H_E/rectangle.png";
import xin from "./img/H_E/xin.png";
import xia from "./img/H_E/xia.png";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className="container">
        <div className="nav">
          <div className="nav-logo">
            <a href="H-intro.html"><img src={logo} alt="logo" width="277" height="108" /></a>
          </div>
          <div className="nav-btn">
            <a className="here-btn-about" href="H-about us.html">TOP</a>
            <a className="btn-help" href="H-help stray.html">幫助浪浪</a>
          </div>
          <div className="burger">
            <img src={burgerpng} ></img>
          </div>
        </div>
        <a href="H-intro.html"><img src={mainPic} alt="main picture" className="main-pic" ></img></a>
        <div className="H-content">
          <div className="H-content-title">
            <h1>關於我們</h1>
            <img src={rectangle} width="70" height="10" ></img>
          </div>
          <div className="H-content-word">
            <p>「關愛流浪動物，為他們的未來創造溫暖，我們希望帶給這世界更多的愛!{'>'}.{'<'} 」</p>
          </div>

          <div className="about-us">
            <div className="about-xin">
              <img src={xin} alt="aaaxin" ></img>
              <h1 className="xin">XIN</h1>
              <p>只想當顆石頭：）<br></br>
                國北數位-XIN  IG: sinyuuu_1104<br></br>
                好像也沒奪想放哀居？＿？</p>
            </div>
            <div className="about-xia">
              <img src={xia} alt="heyjii" ></img>
              <h1 className="xia">XIA</h1>
              <p>我要跟床結婚：0<br></br>
                國北數位-XIA  IG: _xiaaaaaa<br></br>
                猜猜我的a有幾個？</p>
            </div>
          </div>
          <div className="return">
            <a href="H-intro.html" className="return-word">Back to home {'>'}</a>
            <div className="return-line"></div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
