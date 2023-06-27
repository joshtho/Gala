import React from 'react'

function EditArtwork() {
  return (
    <div>
      <h1>Edit an Art piece!</h1>
        {/* Artist:
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
        <Button onClick={handleSubmit}>Add art piece</Button>
      </Form> */}
    </div>
  )
}

export default EditArtwork