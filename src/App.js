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
              
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}}className="link"  to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/watchlist">Watchlist</Link>

            </Navigation>
        </Header>
        <Drawer>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className="link"  to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold", fontSize:"16px"}} className ="link" to="/watchlist">Watchlist</Link>
              
        </Drawer>
  
        <Content>
            <PageInfo />
        </Content>
    </Layout>
    </div>
  
  );
}

export default App;
