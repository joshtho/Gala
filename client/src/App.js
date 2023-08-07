import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchArtists, noUserArtists } from './features/artistsSlice';
import { fetchUser } from './features/sessionSlice';
import { fetchNotes } from './features/noteSlice';
import { fetchArtwork } from './features/artworkSlice';

import HomePage from './components/static/HomePage';
import NavBar from './components/navigation/NavBar';
import LoginPage from './components/navigation/LoginPage';
import SignupPage from './components/navigation/SignupPage';
import ArtistList from './components/artists/ArtistList';
import ArtworkList from './components/artworks/ArtworkList';
import AddArtist from './components/artists/AddArtist';
import AddArtwork from './components/artworks/AddArtwork';
import EditArtist from './components/artists/EditArtist';
import EditArtwork from './components/artworks/EditArtwork';
import MyArtistList from './components/artists/MyArtistList';

function App() {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const loading = useSelector(state => state.user.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  
  useEffect(() => {
    if(loggedIn) {
      dispatch(fetchArtists())
      dispatch(fetchNotes())
      dispatch(fetchArtwork())
    } else {
      dispatch(noUserArtists())
    }
  }, [loggedIn])
      

if (loading === "loading") {
  return <div>Loading...</div>
} 
  return (
    <div className="App" >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/artists/:id" element={<MyArtistList />} />
          <Route path="/artists/add" element={<AddArtist />} />
          <Route path="/artists/edit/:id" element={<EditArtist />} />
          <Route path="/artworks/:id" element={<ArtworkList />} />
          <Route path="/artworks/add/:id" element={<AddArtwork />} />
          <Route path="/artworks/edit/:id" element={<EditArtwork />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
