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
import { noUserArtworks } from './features/artworkSlice';
import ArtistList from './components/artists/ArtistList';
import { fetchArtists, noUserArtists } from './features/artistsSlice';
import ArtworkList from './components/artworks/ArtworkList';

function App() {
  const user = useSelector(state => state.user.entities)
  const dispatch = useDispatch()
  
  
  console.log(user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  
  useEffect(() => {
    if(user && user.id) {
      dispatch(fetchArtwork())
      dispatch(fetchArtists())
    } else {
      dispatch(noUserArtworks())
      dispatch(noUserArtists())
    }
  }, [user, dispatch])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/artworks/:id" element={<ArtworkList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
