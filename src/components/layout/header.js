import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const navStyles = {
    color:'white',
    fontSize:'1.1rem',
    textDecoration:'none'
}


function Header(){

    return(

        <Navbar className="bg-dark justify-content-between">
            <Navbar.Brand href="#home" style={navStyles}>Simple Todo app</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link><Link style={navStyles} to="/">Homes</Link></Nav.Link>
                <Nav.Link><Link style={navStyles} to="/home">Table</Link></Nav.Link>
                <Nav.Link><Link style={navStyles} to="/about">About</Link></Nav.Link>
            </Nav>
        </Navbar>
        
        
    )
}

// const headerStyle = {
//     background:"teal",
//     color:"#FFF",
//     textAlign:"center",
//     padding:"10px"
// }
// const LinkStyle = {
//     color: 'white', 
//     textDecoration: 'none'
// }

export default Header;