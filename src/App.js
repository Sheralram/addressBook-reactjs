import logo from './logo.svg';
import './App.css';
import {BrowserRouter,useRouteMatch,
  Routes,Route, Switch} from "react-router-dom";

  import Addressform from '../src/components/addressform/address' 
import Home from '../src/components/home/home'

import UserRegister from './userRegister/userRegister';
import Login from './login/login';

function App() {
  return (<div>
   
   
    <div>
    {/* <BrowserRouter>
    <Switch>
    <Route path='/' element={<Home/>} />
    <Route exact path='/payroll-form' element={<Payrollform/>} />
      <Route exact path='/add-update/:id' element={<Payrollform/>} /> 
    </Switch>
    </BrowserRouter> */}
     
    
    <Routes>
      {/* <Switch> */}
      <Route path='/register' element={<UserRegister/>} />
      <Route path='/login' element={<Login/>} />
      <Route exact path='/' element={<Home/>} />        
      <Route exact path='/address-form' element={<Addressform/>} />
      <Route exact path='/Addressform/:id' element={<Addressform/>} /> 
      {/* </Switch> */}
       </Routes>
    </div>
    </div>
  );
}

export default App;
