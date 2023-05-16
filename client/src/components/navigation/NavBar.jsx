// import { useState } from 'react';
import Button  from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/sessionSlice';



function NavBar({user}) {
const dispatch = useDispatch()
const navigate = useNavigate()
  
function handleLogout() {
    dispatch(logoutUser())
    navigate("/")
}
    
return (
    <>
    {user && user.id ?
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
    }
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