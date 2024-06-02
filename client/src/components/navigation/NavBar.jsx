import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/sessionSlice';
import { useState } from 'react';



function NavBar() {
const dispatch = useDispatch()
const navigate = useNavigate()
const user = useSelector(state => state.user.entities)
const [showModal, setShowModal] = useState(false);
  
function handleLogout() {
  dispatch(logoutUser())
  setShowModal(false)
  navigate('/')
}
  


    
return (
    <>
    {user && user.id ?
    <Navbar className='zen-font' >
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
              <Dropdown.Item className='button' onClick={() => setShowModal(true)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>

          <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Logout?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to logout?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Go back
              </Button>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Navbar>
    
    : 
    <Navbar className='zen-font'>
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
    </>
  );
}

export default NavBar;