import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <body className="container">
        <div className="nav">
          <div className="nav-logo">
            <a href="H-intro.html"><img src="src/img/H_E/logo.png" alt="logo" width="277" height="108" /></a>
          </div>
          <div className="nav-btn">
            <a className="here-btn-about" href="H-about us.html">TOP</a>
            <a className="btn-help" href="H-help stray.html">幫助浪浪</a>
          </div>
          <div className="burger">
            <img src="src/img/H_E/burger.png" />
          </div>
        </div>
        <a href="H-intro.html"><img src="src/img/H_E/main pic.png" alt="main picture" className="main-pic" /></a>
        <div className="H-content">
          <div className="H-content-title">
            <h1>關於我們</h1>
            <img src="img/H_E/rectangle.png" width="70" height="10" />
          </div>
          <div className="H-content-word">
            <p>「關愛流浪動物，為他們的未來創造溫暖，我們希望帶給這世界更多的愛!{'>'}.{'<'} 」</p>
          </div>

          <div className="about-us">
            <div className="about-xin">
              <img src="src/img/H_E/xin.png" alt="aaaxin" />
              <h1 className="xin">XIN</h1>
              <p>只想當顆石頭：）<br></br>
                國北數位-XIN  IG: sinyuuu_1104<br></br>
                好像也沒奪想放哀居？＿？</p>
            </div>
            <div className="about-xia">
              <img src="src/img/H_E/xia.png" alt="heyjii" />
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
