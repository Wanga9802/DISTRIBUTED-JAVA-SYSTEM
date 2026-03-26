import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Admindashboard from '../pages/Admindashboard.jsx';
import Reports from '../pages/Reports.jsx';
import Stocklevel from '../pages/stocklevel.jsx';
import Orders from '../pages/Orders.jsx';
import Login from '../Auth/login.jsx'
import Signup from '../Auth/signup.jsx';  




function Approuter(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Admindashboard/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/stocklevel' element={<Stocklevel/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </BrowserRouter>

  )


}

export default Approuter;
