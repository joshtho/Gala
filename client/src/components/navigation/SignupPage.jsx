import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSessionErrors, signupUser } from '../../features/sessionSlice';

function SignupPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const errors = useSelector(state => state.user.errors)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleSignupSubmit(e) {
      e.preventDefault()
      dispatch(signupUser(loginData))
    }
    
    useEffect(() => {
      if(loggedIn) {
        navigate('/')
        dispatch(clearSessionErrors())
      }
    },[loggedIn])

    useEffect(() => {
      if(errors) {
        setTimeout(() => dispatch(clearSessionErrors()),3000)
      }
    },[errors])


  return (
    <Container>

  <Form onSubmit={handleSignupSubmit} >
    <h1>Signup here</h1>
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
</Form>
  {errors ? 
  errors.map((error, index) => 
  (<p key={index} style={{color: "red"}}>{error}</p>))
  : ""}
    </Container>
  );
}

export default SignupPage;