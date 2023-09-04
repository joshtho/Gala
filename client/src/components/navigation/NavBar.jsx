import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/sessionSlice';



function NavBar() {
const dispatch = useDispatch()
const navigate = useNavigate()
const user = useSelector(state => state.user.entities)
  
function handleLogout() {
  dispatch(logoutUser())
  navigate('/')
}
  


    
return (
    <>
    {user && user.id ?
    <Navbar className='nav-font' >
        <Container>
          <Link to='/' style={{textDecoration: "none"}}>
            <Navbar.Brand >Gala</Navbar.Brand>
          </Link>
            <Nav.Link as={Link} to='/artists' >Artist List</Nav.Link>
            <Nav.Link as={Link} to={`/artists/${user.id}`} >My Artists</Nav.Link>
            
          <Nav className="ml-auto">
          <Navbar.Brand >
            Welcome: {user.username}
          </Navbar.Brand>
          <Dropdown >
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown' >
              <Dropdown.Item className='button' onClick={handleLogout}>Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    
    : 
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to='/' style={{textDecoration: "none"}}>
            <Navbar.Brand >Gala</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
              <Nav.Link as={Link} to='/signup' >Signup</Nav.Link>
              <Nav.Link as={Link} to='/login' >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    }
    {/* {user && user.id ?
    <Nav>
      <Nav.Item>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/artists'>
          <Button>Artists</Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={handleLogout}>Logout</Button>
      </Nav.Item>
      Welcome {user.username}
    </Nav>
    :
    <Nav activeKey="/">
            <Nav.Item>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Nav.Item>
            
            <Nav.Item>
                <Link to="/signup">
                    <Button>Signup</Button>
                </Link>
            </Nav.Item>
            
            <Nav.Item>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </Nav.Item>
        </Nav>
    } */}
    </>
    // <Nav
    //   activeKey="/home"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    // >
        
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="disabled" disabled>
    //       Disabled
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}

export default NavBar;