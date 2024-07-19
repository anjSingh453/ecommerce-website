import React from "react";
import {NavLink, Link} from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
 


const  Header =()=>{
  const [auth , setAuth] =useAuth();
  const handleLogout =()=>{
    setAuth({...auth , user:null , token:""});
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      < Link to="/" className="navbar-brand" >  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>Ecommerce app</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < NavLink to="/" className="nav-link active"   >Home</NavLink>
        </li>
        <li className="nav-item">
          < NavLink to="/Category" className="nav-link active"    >Category</NavLink>
        </li>
        {
          !auth.user ? (
          <>
           <li className="nav-item">
          <NavLink to="/register" className="nav-link" > Register</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/login" className="nav-link"  > Login</NavLink>
        </li>
        </>) :(<> 

          <li className="nav-item dropdown">
  <NavLink  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     {auth?.user?.name}
  </NavLink >
  <ul className="dropdown-menu">
    <li><NavLink to={`/dashboard/${auth?.user?.role==1 ? "admin" : "user"}`} className="dropdown-item">Dashboard</NavLink></li>
   <li><NavLink onClick={handleLogout} to="/login" className="dropdown-item"> Logout</NavLink></li>
    
  </ul>
</li>

          
        </>)
        }
         
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#"> Cart(0)</NavLink>
        </li>

      </ul>
       
    </div>
  </div>
</nav>

        </>
    );
};

export default Header;