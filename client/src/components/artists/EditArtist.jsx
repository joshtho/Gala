import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetArtistObj, updateArtist } from '../../features/artistsSlice'
import { updateUserArtists } from '../../features/sessionSlice'

function EditArtist() {
  const artists = useSelector(state => state.user.entities.artists)
  const params = useParams()
  const navigate = useNavigate()
  const artistId = parseInt(params.id)
  const artistData = artists.find(artist => artist.id === artistId)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const obj = useSelector(state => state.artists.artistObj)

  useEffect(() => {
    setFormData(artistData)
  },[artistData])
    
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(updateArtist({formData, artistId}))
    }
    useEffect(() => {
      if (obj) {
        dispatch(updateUserArtists(obj))
        navigate('/artists')
        dispatch(resetArtistObj())
        setFormData({})
      }
    },[obj])

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
    </div>
  )
}

export default EditArtist