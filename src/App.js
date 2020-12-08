import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from "react-mdl"
import {Link} from "react-router-dom"
import PageInfo from "./pages/PageInfo";

function App() {
  
  return (
  
    <div>
      <Layout>
      
        <Header className="top-barColor" title={<Link style={{textDecoration:"none", fontFamily:"Montserrat",color:"white",fontSize:"25px"}}  to ="/">MotionPicture.com</Link>} scroll>
      
        <Navigation>
              
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link" to="/watchlist">Watchlist</Link>

            </Navigation>
        </Header>
        <Drawer>
          <div className="side-Navbar">
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/">Home</Link>
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/moviesearch">Movie Search</Link>
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/tvsearch">TV Search</Link>
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/topratedmovies">Top Rated Movies</Link>
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/popularmovies">Popular Movies</Link>
            <Link style={{fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px", textDecoration:"none",color:"white"}} className="navBar-link" to="/watchlist">Watchlist</Link>
          </div>
        </Drawer>
  
        <Content>
            <PageInfo />
        </Content>
    </Layout>
    </div>
  
  );
}

export default App;
