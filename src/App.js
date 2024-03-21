
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
function App() {
  return (
    <div className="App">
     <switch>
      
      <Routes>
     
      <Route path='/' Component={Home}/>
     
    
      
      
     </Routes>
   </switch>
   <Helping></Helping>
   <Home1></Home1>
   <About></About>
   <Quotes></Quotes>
   <About1></About1>
   <Mission></Mission>
   <Vision></Vision>
   <Scouting></Scouting>
   <Home2></Home2>
   <Form></Form>
    </div>
  );
}

export default App;
