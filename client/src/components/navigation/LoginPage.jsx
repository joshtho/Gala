import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/sessionSlice';

function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    // // const [errors, setErrors] = useState([])

    // function handleLoginSubmit(e) {
    //     e.preventDefault()

    //     fetch(`/login`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(loginData),
    //     })
    //     .then((r) => {
    //         if (r.ok) {
    //           r.json().then(login => {
    //             setUser(login)
    //             setLoggedIn(true)
    //             navigate('/')
    //         })
    //         } else {
    //           r.json().then((err) => setErrors(err.errors));
    //         }
    //       })
    // }
    function handleLoginSubmit(e) {
      e.preventDefault()
      dispatch(loginUser(loginData, dispatch))
      navigate('/')
    }

  return (
  <Form onSubmit={handleLoginSubmit} >
    <h1>Welcome back! Please Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
      <Form.Control 
      type="email" 
      placeholder="Enter username"
      value={loginData.username}
      onChange={e => setLoginData({...loginData, username: e.target.value})}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      placeholder="Password" 
      value={loginData.password}
      onChange={e => setLoginData({...loginData, password: e.target.value})}
      />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {/* {
  errors ? 
  errors.map(error => (
      <li>{error}</li>
      ))
    : null
    } */}
</Form>
  );
}

export default LoginPage;