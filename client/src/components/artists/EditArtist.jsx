import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearArtistErrors, resetArtistObj, updateArtist } from '../../features/artistsSlice'
import { updateUserArtists } from '../../features/sessionSlice'
import Container from 'react-bootstrap/esm/Container'

function EditArtist() {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const artistId = parseInt(params.id)

  const artists = useSelector(state => state.user.entities.artists)
  const editedArtist = useSelector(state => state.artists.artistObj)
  const errors = useSelector(state => state.artists.errors)
  
  const artistData = artists.find(artist => artist.id === artistId)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData(artistData)
  },[artistData])

  const [imgError, setImgError] = useState('')

  const checkImageAndSubmit = path =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        resolve({path, status: 'ok'});
        dispatch(updateArtist({formData, artistId}))
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
    if (editedArtist) {
      dispatch(updateUserArtists(editedArtist))
      navigate('/artists')
      dispatch(resetArtistObj())
      dispatch(clearArtistErrors())
      setFormData({})
    }
  },[editedArtist])

  useEffect(() => {
    if(errors) {
      setTimeout(() => dispatch(clearArtistErrors()),3000)
    }
  },[errors])

  if (!formData) {
    return <div>Loading.. </div>
  }

  return (
    <div>
      <h1>Edit artist info</h1>
      <Container>
        <Form onSubmit={handleSubmit} >
          <Form.Group>
            <Form.Label>Artist's name</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Please add an artist's name..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Artist's description/summary</Form.Label>
              <Form.Control
              as={"textarea"}
              rows={3} 
              type="text" 
              placeholder="Please add a short bio or summary..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image of the artist</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Please add an image address..."
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              />
          </Form.Group>
          <br></br>
          <Button type='submit' >Edit artist info</Button>
          <br></br>
          <br></br>
          <Button variant='outline-danger' onClick={() => {navigate(`/artists`)}}>Cancel</Button>
        </Form>
      </Container>
      {errors ? 
        errors.map((error, index) => (
          <p key={index} style={{color: "red"}}>{error}</p>
        )) 
      : ""}
      {imgError ? <p style={{color: "red"}}>{imgError}</p> : ""}
    </div>
  )
}

export default EditArtist