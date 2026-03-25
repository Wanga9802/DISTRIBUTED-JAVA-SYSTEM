import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Admindashboard from '../pages/Admindashboard';
import Reports from '../pages/Reports';
import Stocklevel from '../pages/stocklevel';
import Orders from '../pages/Orders';




function Approuter(){

  return(
   <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Admindashboard/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/stocklevel' element={<Stocklevel/>}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
    </BrowserRouter>
   
   </>

  )


}

export default Approuter;