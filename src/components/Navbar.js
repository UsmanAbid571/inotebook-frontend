import React, { useRef } from 'react';
import { Link , useLocation} from 'react-router-dom';
import './main.css'

 
function Navbar() {
    let location = useLocation();
    let refClose=useRef(null);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-semibold" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" ref={refClose} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`}  aria-current="page" to="/" onClick={()=>refClose.current.click()}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about" onClick={()=>refClose.current.click()}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/notes" ? "active" : ""}`} to="/notes"></Link>
                            </li>
                      
                        </ul>
                        <Link className="btn btn-primary mx-1" to="/login" onClick={()=>refClose.current.click()} role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" onClick={()=>refClose.current.click()} role="button">Signup</Link>
                     
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
