import './App.css';
import HomePage from './components/static/HomePage';
import NavBar from './components/navigation/NavBar';
import LoginPage from './components/navigation/LoginPage';
import SignupPage from './components/navigation/SignupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtwork } from './features/artworkSlice';
import { fetchUser } from './features/sessionSlice';
import { logoutUser } from './features/sessionSlice';
import { noUser } from './features/artworkSlice';


function App() {
  const artwork = useSelector(state => state.artwork.entities)
  const user = useSelector(state => state.user.entities)
  const dispatch = useDispatch()
  
  console.log(artwork)
  console.log(user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  
  useEffect(() => {
    if(user && user.id) {
      dispatch(fetchArtwork())
    } else {
      dispatch(noUser())
    }
  }, [user, dispatch])

  
  function handleLogout() {
    dispatch(logoutUser())
  }
  return (
    <div className="App">
      <Router>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/artwork" element={<SignupPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
