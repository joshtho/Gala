import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetArtworkObj, updateArtwork } from '../../features/artworkSlice'
import { updateUserArtwork } from '../../features/sessionSlice'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { editNote } from '../../features/noteSlice'

function EditArtwork() {
    const artworks = useSelector(state => state.user.entities.artworks)
    const notes = useSelector(state => state.user.entities.notes)
    const params = useParams()
    const navigate = useNavigate()
    const artworkId = parseInt(params.id)
    const artworkData = artworks.find(artwork => artwork.id === artworkId)
    const currentNotes = notes.find(note => note.artwork.id === artworkId)
    const [formData, setFormData] = useState(null)
    const [noteData, setNoteData] = useState(null)
    const dispatch = useDispatch()
    const obj = useSelector(state => state.artwork.artworkObj)

    useEffect(() => {
        setFormData(artworkData)
      },[artworkData])
    useEffect(() => {
        setNoteData(currentNotes)
      },[currentNotes])
        
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateArtwork({formData, artworkId}))
        dispatch(editNote({noteData}))
    }
        
    useEffect(() => {
        if (obj) {
            dispatch(updateUserArtwork(obj))
            navigate(`/artworks/${formData.artist.id}`)
            dispatch(resetArtworkObj())
            setFormData(null)
        }
    },[obj])

    
    console.log(notes)
    console.log(noteData)

    if (!formData) {
        return <div>Loading.. </div>
      }
  return (
    <div>
      <h1>Edit an Art piece!</h1>
        Artist: {formData.artist.name}
      {/* <Form.Select onChange={e => setFormData({...formData, artist_id: e.target.value})} value={artistId}>
        {artists.map(artist => (
          <option key={artist.id} value={artist.id} >{artist.name}</option>
        ))}
      </Form.Select> */}
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
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="How did you find this?"
            value={noteData.body}
            onChange={(e) => setNoteData({...noteData, body: e.target.value})}
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Add art piece</Button>
      </Form>
    </div>
  )
}

export default EditArtwork