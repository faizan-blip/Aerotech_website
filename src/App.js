import './App.css';
import './About.css';
import './Footer.css';
import './Projects.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './Navbar.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Projects from './Components/Projects';
import Events from './Components/Events';
function App() {
  return (
 <Router>
 <>
 <Navbar/>
 <Switch>
  <Route exact path={['/','/home']}>
  <Home/>
 <About/>
 <Footer/>
  </Route>
  <Route exact path='/Projects'>
<Projects/>
<Footer/>
  </Route>
  <Route exact path='/Events'>
<Events/>
<Footer/>
  </Route>
 </Switch>
 </>
 </Router>
  );
}

export default App;
