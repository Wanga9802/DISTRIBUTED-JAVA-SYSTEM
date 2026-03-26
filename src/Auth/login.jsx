import './login.css';
import { Link } from 'react-router-dom';


function Login(){


    return(

          <>
          
    <div className='container-fluid login-page d-flex justify-content-center align-items-center'>
                 <div className='card rounded-4  p-3 shadow-lg bg-white mt-3'>

 <form className=''>

    <div className='text-center'>
                    <h2 className=' fw-bold mb-0 watu-wengi'>Hi, Welcome Back</h2>
                    <h6 className='mt-0 fw-semibold primary-text'>Login to GetC Drinks</h6>
                 </div>

<div className='mb-2 mt-3'>
<select className="form-select rounded-3" aria-label="Default select example">
  <option selected>select role</option>
  <option value="1">Admin</option>
  <option value="2">Customer</option>
 
</select>
<div className='form-text'>*select Role customer/admin *</div>
</div>

  <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">username</label>
    <input type="text" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div className='form-text'>*Enter one name only*</div>
  </div>

 <div className="mb-2">
    <label htmlFor="password" className="form-label fw-bold">Password</label>
    <input type="password" className="form-control rounded-3" id="password" aria-describedby="emailHelp"></input>
    
  </div>
  
 <div className='row '>

    <div className='col-md-4'>
       <button type="button " className="btn btn-danger zetuzetu rounded-3">Login</button>
    </div>
    <div className='col-md-8 text-end'>
       <p>
            <i className="bi bi-arrow-right-circle-fill me-3"></i>
            <Link to="/signup"> Sign Up</Link>
       </p>
    </div>

</div>

</form> 
  

                 </div>
        </div>

          </>
    )
}

export default Login;
