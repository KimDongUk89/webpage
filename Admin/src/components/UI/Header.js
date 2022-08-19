import { Navbar, Container, NavDropdown, Button, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import '../../styles.css'
import SideNav from "./SideNav";


const Header = () => {
    

    return (
        
            <Nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                
                <Link className="navbar-brand ps-3" to="/">Admin Page</Link>
                
                <Button variant="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" >
                    <FontAwesomeIcon icon={faBars} />   
                </Button>
                
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        
                        <Button variant="btn btn-primary" id="btnNavbarSearch" type="button">
                            <FontAwesomeIcon icon={faSearch} />   
                        </Button>
                    </div>
                </form>
                
                <NavDropdown className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4" title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        
        
        
    )

}
export default Header