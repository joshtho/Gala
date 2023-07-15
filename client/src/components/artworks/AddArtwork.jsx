import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import { addNewArtwork, resetArtworkObj } from '../../features/artworkSlice'
import { addArtworkToUser, addNoteToUser } from '../../features/sessionSlice'
import { addNote, resetNoteObj } from '../../features/noteSlice'

function AddArtwork() {
  const dispatch = useDispatch()
  const artists = useSelector(state => state.artists.entities)
  const params = useParams()
  const artistId = parseInt(params.id)
  const navigate = useNavigate()
  
  const formObj = {
    title: "",
    image: "", 
    medium: "", 
    location: "", 
    artist_id: artistId
  }
  const [formData, setFormData] = useState(formObj)
  const newArt = useSelector(state => state.artwork.artworkObj)
  const newNote = useSelector(state => state.notes.noteObj)
  
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addNewArtwork(formData))
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
    } 
    
  },[newArt])
  
  useEffect(() => {
    if(newNote) {
      dispatch(addNoteToUser(newNote))
      navigate(`/artworks/${artistId}`)
      dispatch(resetNoteObj())
    }
  },[newNote])

  return (
    <div>
      <h1>Add an Art piece!</h1>
        Artist:
      <Form.Select onChange={e => setFormData({...formData, artist_id: e.target.value})} value={artistId}>
        {artists.map(artist => (
          <option key={artist.id} value={artist.id} >{artist.name}</option>
        ))}
      </Form.Select>
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
        {/* <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="How did you find this?"
            value={noteData.body}
            onChange={(e) => setNoteData({...noteData, body: e.target.value})}
          />
        </Form.Group> */}
        <Button onClick={handleSubmit}>Add art piece</Button>
      </Form>
    </div>
  )
}

export default AddArtwork