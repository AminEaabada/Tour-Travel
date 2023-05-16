import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

function Header() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  // const Logged = useSelector((state) => state.login.LoginED)
  const Logged = localStorage.getItem('state');

  const handleLogout = () => {
    // Clear any user-related data and set Logged to false
    localStorage.clear()
    window.location.pathname='/'
  };

  const handleFormClick = () => {
    setIsLoginFormOpen(true);
  };

  const handleFormCloseClick = () => {
    setIsLoginFormOpen(false);
  };

  const searchBtnRef = useRef('');
  const searchBarRef = useRef('');
  const menuRef = useRef('');
  const navbarRef = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      searchBtnRef.current.classList.remove("fa-times");
      searchBarRef.current.classList.remove("active");
      menuRef.current.classList.remove("fa-times");
      navbarRef.current.classList.remove("active");
    };

    // window.addEventListener("scroll", handleScroll);
    return () => {
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    menuRef.current.classList.toggle("fa-times");
    navbarRef.current.classList.toggle("active");
  };

  const handleSearchClick = () => {
    searchBtnRef.current.classList.toggle("fa-times");
    searchBarRef.current.classList.toggle("active");
  };
    
  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars" ref={menuRef} onClick={handleMenuClick}></div>
        <Link to="/" className="logo">
          <span>T</span>ravel
        </Link>

        {Logged  && 
          <nav className="navbar" ref={navbarRef}>
            <Link to="/">home</Link>
            <Link to="/Reservation">Reservation</Link>
            <Link to="/Destinations">Destinations</Link>
            <Link to="/gallery">gallery</Link>
            <Link to="/Reviews">review</Link>
            <Link to="/contact">contact</Link>
              <i className="fas fa-search"  id="search-btn" ref={searchBtnRef} onClick={handleSearchClick} 
              style={{
                fontSize: '2.5rem',
                color:'#fff',
                cursor: 'pointer',
                margin: ' 0 2rem',
              }}></i>
                <Link to='/' onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt}> Logout</FontAwesomeIcon>
                </Link>
          </nav>
        } 
        {!Logged &&
          <nav className="navbar" ref={navbarRef} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Link to="/">home</Link>
            <div className="icons" style={{ marginLeft: '450px' }}>
              <i className="fas fa-search" id="search-btn" ref={searchBtnRef} onClick={handleSearchClick}></i>
              <Link to={'/Register'} onClick={handleFormClick}>
                <FontAwesomeIcon icon={faUser}  size="lg"/>
              </Link>
            </div>
          </nav>
        }

        <form action="" className="search-bar-container" ref={searchBarRef}>
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </header>

      {/* { isLoginFormOpen && (
        <div className="login-form-container active">
          <i className="fas fa-times" id="form-close" onClick={handleFormCloseClick}></i>
          
        </div>
      )} */}
      
    
    </div>
  )
}

export default Header;