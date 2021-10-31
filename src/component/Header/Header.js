import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../image/logo-color.png'
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {

    const {logout,user}=UseAuth()
    
    
    const style={
        textDecoration:"none",
        fontSize: "20px",
        fontFamily: "serif",
        marginLeft: "5px",
        fontWeight: "700",
        backgroundColor: "#ef0772",
        padding: "9px",
        borderRadius: "7px",

        
      };
    return (
        <div className='header-color'>
          
         <div className='header-fild m-3' > 
            <Navbar className='header' collapseOnSelect expand="lg"  >
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className='image' /></Navbar.Brand>
                <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end my-5">
                            <Navbar.Text className='header-component'>
                             <NavLink to='/home'style={style}>Home</NavLink>
                             <NavLink to='/packages'style={style}>Packages</NavLink>
                             <NavLink to='/add'style={style}>Add-New Package</NavLink>
                             <NavLink to='/order'style={style}>Order</NavLink>
                             <NavLink to='/myOrder'style={style}>my-Order</NavLink>
                            
                            {!user.email?<NavLink to='/login'style={style}>Login </NavLink>: 
                            <Button onClick={logout} className='logout'>Log out</Button> 
                            }
                            <small>{user?.displayName}</small>
                            </Navbar.Text>  
                               
                </Navbar.Collapse> 
            </Container>
            </Navbar>
           
        </div>
    

        </div>
    );
};

export default Header;