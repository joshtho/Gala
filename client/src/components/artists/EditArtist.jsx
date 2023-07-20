import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearArtistErrors, resetArtistObj, updateArtist } from '../../features/artistsSlice'
import { updateUserArtists } from '../../features/sessionSlice'

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
    
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(updateArtist({formData, artistId}))
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

    console.log(artistId)
  console.log(artistData)
  console.log(formData)
  
    if (!formData) {
      return <div>Loading.. </div>
    }

    
  return (
    <div>
        <h1>Edit artist info</h1>
        
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
        <Button onClick={handleSubmit} >Edit artist info</Button>
      </Form>
      {errors ? errors.map((error, index) => (<p key={index} style={{color: "red"}}>{error}</p>)) : ""}
    </div>
  )
}

export default EditArtist