import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import { addNewArtwork, clearArtworkErrors, resetArtworkObj } from '../../features/artworkSlice'
import { addArtistToUser, addArtworkToUser, addNoteToUser } from '../../features/sessionSlice'
import { addNote, resetNoteObj } from '../../features/noteSlice'


function AddArtwork() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const artistId = parseInt(params.id)
  const userArtists = useSelector(state => state.user.entities.artists).map(artist => artist.id)
  const artists = useSelector(state => state.artists.entities)
  const currentArtist = artists.find(artist => artist.id === artistId)
  const errors = useSelector(state => state.artwork.errors)
  const newArt = useSelector(state => state.artwork.artworkObj)
  const newNote = useSelector(state => state.notes.noteObj)
  const formObj = {
    title: "",
    image: "", 
    medium: "", 
    location: "", 
    artist_id: artistId
  }
  const [formData, setFormData] = useState(formObj)

  const [imgError, setImgError] = useState('')

    const checkImageAndSubmit = path =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        resolve({path, status: 'ok'});
        dispatch(addNewArtwork(formData))
      }
      img.onerror = () => {
        resolve({path, status: 'error'});
        setImgError("Must be usable image url")
      }
      
      img.src = path;
    });

    if(imgError) {
      setTimeout(() => setImgError('') ,3000)
    }
    
    function handleSubmit(e) {
      e.preventDefault()
      checkImageAndSubmit(formData.image)
    }
  
  useEffect(() => {
    if(newArt) {
      const blankNote = {
        body: "",
        artwork_id: newArt.id
      }
      dispatch(addNote(blankNote))
      dispatch(addArtworkToUser(newArt))
      dispatch(resetArtworkObj())
      setFormData(formObj)
      if(userArtists.includes(currentArtist.id)) {} else {
        dispatch(addArtistToUser(currentArtist))
      }
    } 
  },[newArt])

  useEffect(() => {
    if(newNote) {
      dispatch(addNoteToUser(newNote))
      navigate(`/artworks/${artistId}`)
      dispatch(resetNoteObj())
    }
  },[newNote])

  useEffect(() => {
    if(errors) {
      setTimeout(() => dispatch(clearArtworkErrors()),3000)
    }
  },[errors])

  return (
    <div>
      {currentArtist ?

      <Container>

      <h1>Add an Art piece</h1>
      <h3>Artist: {currentArtist.name}</h3>  
      
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title of work</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title of art piece..."
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Art Piece image</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Please add an image address"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Medium ie: Oil on Canvas, Photography, ect..</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Medium for the piece..."
            value={formData.medium}
            onChange={(e) => setFormData({...formData, medium: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artworks current location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Artwork is currently located..."
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
        </Form.Group>
        <br></br>
        <Button type='submit'>Add art piece</Button>
      </Form>
      {errors ? errors.map((error, index) => (<p key={index} style={{color: "red"}}>{error}</p>)) : ""}
      {imgError ? <p style={{color: "red"}}>{imgError}</p> : ""}
      <br/>
      <Button 
      onClick={() => navigate(-1)} 
      className='bottom-btn' 
      variant='secondary'>
        {'<'}
      </Button>
      </Container>
       : 
       ""}
    </div>
  )
}

export default AddArtwork