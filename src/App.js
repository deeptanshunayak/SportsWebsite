
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Helping from './Helping.jsx';
import Home1 from './Home1.jsx';
import About from './About.jsx';
import Form from './Form.jsx';
import Home2 from './Home2.jsx';
import Scouting from './Scouting.jsx';
import About1 from './About1.jsx';
import Vision from './Vision.jsx';
import Quotes from './Quotes.jsx';
import Mission from './Mission.jsx';
import Page from './Page.jsx';
import Page1 from './Page1.jsx';
import Terms from './Terms.jsx';
import Terms1 from './Terms1.jsx';

function App() {
  return (
    <div className="App">
     <switch>
      
      <Routes>
     
      <Route path='/' Component={Page1}/>
      <Route path='/page' Component={Page}/>
      <Route path='/tc' Component={Terms}/>
      <Route path='/tc1' Component={Terms1}/> 
      
     </Routes>
   </switch>
   
    </div>
  );
}

export default App;
