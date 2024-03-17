
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Helping from './Helping.jsx';
import Home1 from './Home1.jsx';
import About from './About.jsx';
import Form from './Form.jsx';
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
   <Form></Form>
    </div>
  );
}

export default App;
