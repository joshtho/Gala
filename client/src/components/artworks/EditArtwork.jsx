import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearArtworkErrors, resetArtworkObj, updateArtwork } from '../../features/artworkSlice'
import { updateUserArtwork } from '../../features/sessionSlice'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'

function EditArtwork() {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const artworkId = parseInt(params.id)
  
  const artworks = useSelector(state => state.user.entities.artworks)
  const errors = useSelector(state => state.artwork.errors)
  const editedArtwork = useSelector(state => state.artwork.artworkObj)
  
  const artworkData = artworks.find(artwork => artwork.id === artworkId)
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    setFormData(artworkData)
  },[artworkData])
        
  const [imgError, setImgError] = useState('')

    const checkImageAndSubmit = path =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        resolve({path, status: 'ok'});
        dispatch(updateArtwork({formData, artworkId}))
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
    if (editedArtwork) {
      dispatch(updateUserArtwork(editedArtwork))
      navigate(`/artworks/${formData.artist.id}`)
      dispatch(resetArtworkObj())
      dispatch(clearArtworkErrors())
      setFormData(null)
    }
  },[editedArtwork])

  useEffect(() => {
    if(errors) {
      setTimeout(() => dispatch(clearArtworkErrors()), 3000)
    }
  },[errors])

  if (!formData) {
    return <div>Loading.. </div>
  }

  return (
    <div>
      <Card className='mx-auto'>

      <h1>Edit an Art piece!</h1>
      <h2 className='zen-font'>Artist: {formData.artist.name}</h2>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='zen-font'>Title of work</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title of art piece..."
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label className='zen-font'>Art Piece image</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Please add an image address"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='zen-font'>Medium ie: Oil on Canvas, Photography, ect..</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Medium for the piece..."
            value={formData.medium}
            onChange={(e) => setFormData({...formData, medium: e.target.value})}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label className='zen-font'>Artworks current location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Artwork is currently located..."
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </Form.Group>
        <br></br>
        <Button type='submit'>Edit art piece</Button>
      {errors ? 
      errors.map((error, index) => (
        <p key={index} style={{color: "red"}}>{error}</p>
        )) 
        : ""}
        {imgError ? <p style={{color: "red"}}>{imgError}</p> : ""}
      <br></br>
      <br></br>
      <Button 
      onClick={() => {navigate(`/artworks/${formData.artist.id}`)}} 
      variant='outline-danger'
      >
        Cancel
      </Button>
      </Form>
        </Card>
    </div>
  )
}

export default EditArtwork