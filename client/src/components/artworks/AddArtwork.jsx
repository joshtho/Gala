import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function AddArtwork() {
  const artists = useSelector(state => state.artists.entities)
  const user = useSelector(state => state.user.entities)
  const params = useParams()
  const artistId = parseInt(params.id)
  // const newArtistSelect = artists.map(artist => artist.id)
  const [formData, setFormData] = useState({
    title: "",
    image: "", 
    medium: "", 
    location: "", 
    artist_id: artistId, 
    user_id: user.id
  })
  console.log(artists)
  return (
    <div>
      <Form.Select onChange={e => setFormData({...formData, artist_id: e.target.value})} value={artistId}>
        Artist:
        {artists.map(artist => (
          <option key={artist.id} value={artist.id} >{artist.name}</option>
        ))}
      </Form.Select>
      <Form>
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
          <Form.Label>Artist's name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Artwork is currently located..."
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </Form.Group>
      </Form>
      Artwork page
    </div>
  )
}

export default AddArtwork