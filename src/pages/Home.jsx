import Nav from "../components/Nav";
import MainPic from '../components/MainPic';
import Content from '../components/Content';


function Home() {
    return (
        <body className="container">
            <Nav />
            <MainPic />
            <Content />
        </body>
    );
}

export default Home;