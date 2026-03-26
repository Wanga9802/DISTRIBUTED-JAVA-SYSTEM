import { NavLink } from "react-router-dom";
import '../style/adminsidebar.css'
import Logopic from '../assets/brandy.png'

function Adminsidebar(){

return(

<div className="sidebar  text-white ">

<div className="text-center">
<img src={Logopic} alt="Logo" className="img-fluid mb-3 mt-3  tutu-tutu" />
<h5 className="t  text-white fs-5">
Admin Panel
</h5>
</div>
<ul className="nav flex-column mt-4">

<li className="nav-item mb-2">
  <NavLink
  to="/"
  className={({ isActive }) =>
    `nav-link text-white d-flex align-items-center${isActive ? " active" : ""}`
  }
>
  <i className="bi bi-box-fill me-2"></i>
  Dashboard
</NavLink>
</li>

<li className="nav-item mb-2">
<NavLink
  to="/reports"
  className={({ isActive }) =>
    `nav-link text-white d-flex align-items-center${isActive ? " active" : ""}`
  }
>
  <i className="bi bi-file-earmark-bar-graph me-2"></i>
  Reports
</NavLink>

</li>

<li className="nav-item mb-2">

<NavLink
  to="/stocklevel"
  className={({ isActive }) =>
    `nav-link text-white d-flex align-items-center${isActive ? " active" : ""}`
  }
>
  <i className="bi bi-cart me-2"></i>
  stock level
</NavLink>

</li>

<li className="nav-item mb-2">

<NavLink
  to="/orders"
  className={({ isActive }) =>
    `nav-link text-white d-flex align-items-center${isActive ? " active" : ""}`
  }
>
  <i className="bi bi-truck me-2"></i>
  Orders
</NavLink>

</li>

<footer className="mt-5 text-center p-1">
  <small className="primary-text">&copy; {new Date().getFullYear()} GetC Drinks.</small>
</footer>

</ul>

</div>

)

}

export default Adminsidebar;
