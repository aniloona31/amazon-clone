import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element = {<Checkout/>}/>
        <Route path='/login' element = {<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
