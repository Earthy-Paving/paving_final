// import axios from "../axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
// import { FaUser } from 'react-icons/fa';
// import { logout, resetNotifications } from "../features/userSlice";
// import "./Navigation.css";

// function Navigation() {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const bellRef = useRef(null);
//   const notificationRef = useRef(null);
//   const [bellPos, setBellPos] = useState({});

//   function handleLogout() {
//     dispatch(logout());
//   }
  
//   const unreadNotifications = user?.notifications?.reduce((acc, current) => {
//     if (current.status === "unread") return acc + 1;
//     return acc;
//   }, 0);

//   function handleToggleNotifications() {
//     const position = bellRef.current.getBoundingClientRect();
//     setBellPos(position);
//     notificationRef.current.style.display =
//       notificationRef.current.style.display === "block" ? "none" : "block";
//     dispatch(resetNotifications());
//     if (unreadNotifications > 0)
//       axios.post(`/users/${user._id}/updateNotifications`);
//   }

//   useEffect(() =>{
//     const handleScroll = ()=>{
//       const navbar = document.getElementById("navbar");
//       const image = document.querySelector(".container img");
//       const imageBottom = image.offsetTop + image.offsetHeight;

//       if (window.pageYOffset > imageBottom) {
//         navbar.classList.add("fixed-top");
//       }
//       else{
//         navbar.classList.remove("fixed-top")
//       }
//     }
//     window.addEventListener("scroll",handleScroll)
//     return ()=>{
//       window.removeEventListener("scroll",handleScroll)
//     }
//   }, []);

//   return (
//     <div className="container">
//       {/* <img src = {"https://res.cloudinary.com/dy1pydfmg/image/upload/v1683837111/page-1_ybdu8p.jpg"} alt = "Your Image"/> */}
//       <nav id="navbar"className="d-flex align-items-center">
//     <Navbar expand="lg" className="navibar">
//       <Container className="contain">
//         <LinkContainer to="/" className="navlink">
//           <Navbar.Brand className="earth">
//             <img src="https://res.cloudinary.com/dy1pydfmg/image/upload/v1683837111/page-1_ybdu8p.jpg" className="home-banner" alt="Logo" />
//           </Navbar.Brand>
//         </LinkContainer>
//         <div className="nav-links">
//           <LinkContainer to="/" className="navlink-link" >
//             <Nav.Link>Home</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/aboutus" className="navlink-link">
//             <Nav.Link>About Us</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/category/all" className="navlink-link">
//             <Nav.Link>Products</Nav.Link>
//           </LinkContainer>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             {!user && (
//               <LinkContainer to="/login" className="navlinknav" style={{ color: "white" }}>
//                 <Nav.Link>Login</Nav.Link>
//               </LinkContainer>
//             )}
//             {user && !user.isAdmin && (
//               <LinkContainer to="/cart" className="navlink-link">
//                 <Nav.Link>
//                   <i className="fas fa-shopping-cart"></i>
//                   {user?.cart.count > 0 && (
//                     <span className="badge badge-warning" id="cartcount">
//                       {user.cart.count}
//                     </span>
//                   )}
//                 </Nav.Link>
//               </LinkContainer>
//             )}
//             {user && (
//               <>
//                 <Nav.Link
//                   className="navlinknav1"
//                   onClick={handleToggleNotifications}
//                 >
//                   <div className="navlinknav-icon">
//                     <i style={{color:"#BA9364"}}
//                       className="fas fa-bell"
//                       ref={bellRef}
//                       data-count={unreadNotifications || null}
//                     ></i>
//                   </div>
//                 </Nav.Link>
//                 <NavDropdown title={<FaUser style={{color:'#BA9364'}}/>} id="basic-nav-dropdown">
//                   {user.isAdmin && (
//                     <>
//                       <LinkContainer to="/admin">
//                         <NavDropdown.Item>Dashboard</NavDropdown.Item>
//                       </LinkContainer>
//                       <LinkContainer to="/new-product">
//                         <NavDropdown.Item>Create Product</NavDropdown.Item>
//                       </LinkContainer>
//                       <NavDropdown.Divider />
//                     </>
//                   )}
//                   <NavDropdown.Item onClick={handleLogout} style={{backgroundColor:"red"}}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//       <div
//         id="notify"
//         className="notifications-container"
//         ref={notificationRef}
//         style={{
//           "background-color": "#152d51",
//           position: "absolute",
//           top: bellPos.top + 60,
//           left: bellPos.right,
//           display: "none",
//           zIndex: 100,
//         }}
//       >
//         {user?.notifications.length > 0 ? (
//           user?.notifications.map((notification) => (
//             <p id="para" className={`notification-${notification.status}`}>
//               {notification.message}
//               <br />
//               <span>
//                 {notification.time.split("T")[0] +
//                   " " +
//                   notification.time.split("T")[1]}
//               </span>
//             </p>
//           ))
//         ) : (
//           <p style={{color: 'white'}}>No notifcations yet</p>
//         )}
//       </div>
//     </Navbar>
//     </nav>
//     </div>
//   );
// }

// export default Navigation;

import React, { useRef, useState, useEffect } from "react";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { FaUser } from "react-icons/fa";
import { logout, resetNotifications } from "../features/userSlice";
import "./Navigation.css";
import axios from "../axios";

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});

  function handleLogout() {
     dispatch(logout());
   }
  
   const unreadNotifications = user?.notifications?.reduce((acc, current) => {
     if (current.status === "unread") return acc + 1;
     return acc;
   }, 0);

   function handleToggleNotifications() {
     const position = bellRef.current.getBoundingClientRect();
     setBellPos(position);
     notificationRef.current.style.display =
       notificationRef.current.style.display === "block" ? "none" : "block";
     dispatch(resetNotifications());
     if (unreadNotifications > 0)
       axios.post(`/users/${user._id}/updateNotifications`);
   }
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const image = document.querySelector(".container img");
      const imageBottom = image.offsetTop + image.offsetHeight;

      if (window.pageYOffset > imageBottom) {
        navbar.classList.add("fixed-top");
      } else {
        navbar.classList.remove("fixed-top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rest of your code...

  return (
    <div className="container">
      <img src={"https://res.cloudinary.com/dy1pydfmg/image/upload/v1685425461/Untitled_design_7_qz6q5f.png"} width="1844px" height='550px' style={{marginLeft:'-280px'}} alt="Your Image" />
      <nav id="navbar" className="d-flex align-items-center">
        <Navbar expand="lg" className="navibar">
          {/* Rest of your code... */}
          <Container className="contain">
        <LinkContainer to="/" className="navlink">
          <Navbar.Brand className="earth">
            <img src="https://res.cloudinary.com/dy1pydfmg/image/upload/v1683837111/page-1_ybdu8p.jpg" className="home-banner" alt="Logo" />
          </Navbar.Brand>
        </LinkContainer>
        <div className="nav-links">
          <LinkContainer to="/" className="navlink-link" >
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutus" className="navlink-link">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/category/all" className="navlink-link">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <LinkContainer to="/login" className="navlinknav" style={{ color: "white" }}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {user && !user.isAdmin && (
              <LinkContainer to="/cart" className="navlink-link">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  {user?.cart.count > 0 && (
                    <span className="badge badge-warning" id="cartcount">
                      {user.cart.count}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}
            {user && (
              <>
                <Nav.Link
                  className="navlinknav1"
                  onClick={handleToggleNotifications}
                >
                  <div className="navlinknav-icon">
                    <i style={{color:"#BA9364"}}
                      className="fas fa-bell"
                      ref={bellRef}
                      data-count={unreadNotifications || null}
                    ></i>
                  </div>
                </Nav.Link>
                <NavDropdown title={<FaUser style={{color:'#BA9364'}}/>} id="basic-nav-dropdown">
                  {user.isAdmin && (
                    <>
                      <LinkContainer to="/admin">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-product">
                        <NavDropdown.Item>Create Product</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                    </>
                  )}
                  <NavDropdown.Item onClick={handleLogout} style={{backgroundColor:"red"}}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div
        id="notify"
        className="notifications-container"
        ref={notificationRef}
        style={{
          "background-color": "#152d51",
          position: "absolute",
          top: bellPos.top + 60,
          left: bellPos.right,
          display: "none",
          zIndex: 100,
        }}
      >
        {user?.notifications.length > 0 ? (
          user?.notifications.map((notification) => (
            <p id="para" className={`notification-${notification.status}`}>
              {notification.message}
              <br />
              <span>
                {notification.time.split("T")[0] +
                  " " +
                  notification.time.split("T")[1]}
              </span>
            </p>
          ))
        ) : (
          <p>No notifcations yet</p>
        )}
      </div>
        </Navbar>
      </nav>
    </div>
  );
}

export default Navigation;
