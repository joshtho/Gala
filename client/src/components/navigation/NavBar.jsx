// import { useState } from 'react';
import Button  from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



function NavBar({user, onLogout}) {
// const [loggedIn, setloggedIn] = useState(false)
  
  
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
        <Link to='/artwork'>
          <Button>Artwork</Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={onLogout}>Logout</Button>
      </Nav.Item>
      Welcome 
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