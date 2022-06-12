
import './App.css';
import Navbar from './componant/Navbar';
import {Routes ,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Feeds from "./Pages/Feeds";
import Error from './Pages/Error';
 
function App() {
  return (
    <div >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/feeds' element={<Feeds/>}/>
      <Route  element={<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
