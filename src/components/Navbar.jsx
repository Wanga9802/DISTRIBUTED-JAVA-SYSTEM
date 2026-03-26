import Logopic from '../assets/brandy.png'
import '../style/navbar.css'


function Navbar({ username, role, isLoggedIn }) {

    
  return(

  <nav className="navbar bg-body-light shadow-sm">

    <div className="container-fluid">

      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img 
          src={Logopic} 
          alt="Logo"
          className="d-inline-block align-text-top tutu-tut me-2"
        />
        GetC Drinks
      </a>

      {/* Profile Section */}
      {isLoggedIn && (

      <div className="dropdown">

        <button 
          className="btn btn-light toto-sitoto dropdown-toggle d-flex align-items-center"
          data-bs-toggle="dropdown"
        >

          {/* Avatar Letter */}
          <div className="avatar-circle me-2">
            {role === "admin" ? "A" : "C"}

          </div>
          {username}

        </button>

        <ul className="dropdown-menu dropdown-menu-end lel-sisi">

          <li>
            <button className="dropdown-item">Logout</button>
          </li>

        </ul>
      </div>

      )} 

    </div>
  </nav>

  )
}



export default Navbar