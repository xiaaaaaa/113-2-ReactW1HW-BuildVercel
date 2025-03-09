import logo from "../img/H_E/logo.png";
import burgerpng from "../img/H_E/burger.png";

function Nav() {
    return (
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
    );
}

export default Nav;