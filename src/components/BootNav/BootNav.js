import { Nav, Navbar, NavDropdown } from "react-bootstrap";  
import 'bootstrap/dist/css/bootstrap.css';
import './BootNav.css'


const BootNav = () => {
    
    return (
        <div> 
       <Navbar bg="primary" variant="dark" sticky="top" expands="lg" collapsOnSelect>
           "
            <Navbar.Brand>
           
                Logo would be here
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav>
                <NavDropdown title="Products">
                    <NavDropdown.Item href="products/mayo">Mayo</NavDropdown.Item>
                    <NavDropdown.Item href="products/relish">Relish</NavDropdown.Item>
               
                </NavDropdown>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="locations">Locations</Nav.Link>
            </Nav>

            </Navbar.Collapse>



            
       </Navbar>
   
       </div>
    );
}

export default BootNav;