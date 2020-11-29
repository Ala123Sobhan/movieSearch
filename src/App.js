import './App.css';
import './lib/font-awesome/css/all.min.css';
import {Layout, Header, Navigation, Content, Drawer} from "react-mdl"
import {Link} from "react-router-dom"
import PageInfo from "./pages/PageInfo";
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div>
      <Layout style={{color:"#CB11F2"}}>
      
        <Header className="top-barColor" title={<Link style={{textDecoration:"none", fontFamily:"Montserrat",color:"white",fontSize:"25px"}}  to ="/">Movie123Search</Link>} scroll>
      
        <Navigation>
              
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold" }}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold" }}className="link"  to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/watchlist">Watchlist</Link>
                {/* <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/watched">Watched</Link> */}
            </Navigation>
        </Header>
        <Drawer>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold" }}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold" }}className="link"  to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Montserrat", fontWeight:"bold"}} className ="link" to="/watchlist">Watchlist</Link>
                {/* <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/watched">Watched</Link> */}
        </Drawer>
  
        <Content>
            <PageInfo />
        </Content>
    </Layout>
    </div>
    </GlobalProvider>

  );
}

export default App;
