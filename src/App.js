import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserDetails from './Components/Com-1/Userdetails';
import Upadtedata from './Components/Com-1/Upadate';

function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element = {<UserDetails/>}  />
    <Route path='/update' element = {<Upadtedata/>}  />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
