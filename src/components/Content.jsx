import rectangle from "../img/H_E/rectangle.png";
import xin from "../img/H_E/xin.png";
import xia from "../img/H_E/xia.png";


function Content(){
    return(
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
    );
}

export default Content;