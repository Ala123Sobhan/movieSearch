import './App.css';
import {Layout, Header, Navigation, Content} from "react-mdl"
import {Link} from "react-router-dom"
import PageInfo from "./pages/PageInfo";

function App() {
  return (
    <div>
    
       <Layout >
        <Header className="top-barColor" title={<Link style={{textDecoration:"none", fontFamily:"Sofia",color:"white"}}  to ="/">Movie123Search</Link>} scroll>

        <Navigation>
               
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold" }}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold" }}className="link"  to="/moviesearch">Movie Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/tvsearch">TV Search</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/topratedmovies">Top Rated Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/popularmovies">Popular Movies</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/contact">Contact</Link>
            </Navigation>
        </Header>
  
        <Content>
            <PageInfo />
        </Content>
     </Layout>
    </div>

  );
}

export default App;
