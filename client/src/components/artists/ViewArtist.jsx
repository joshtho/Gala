import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function ViewArtist() {
    const params = useParams()
    const navigate = useNavigate()
    const artistId = parseInt(params.id)
    const artists = useSelector(state => state.artists.entities)
    const currentArtist = artists.find(artist => artist.id === artistId)
    const userArtists = useSelector(state => state.user.entities.artists)
    const [ownedArtist, setOwnedArtist] = useState(false)

    useEffect(() => {
      const artistArray = userArtists.map(artist => artist.id)
      if (artistArray.includes(currentArtist.id)) {
        setOwnedArtist(true)
      }
    },[])
    console.log(ownedArtist)
    
  if (!currentArtist) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <Container>
        <br/>
        <h4>{currentArtist.name}</h4>
        <img className='artwork-card' src={currentArtist.image}/>
      </Container>
      <Container >
        <p>{currentArtist.description}</p> 
      </Container>
      <br/>
      <Button 
      onClick={() => navigate(-1)} 
      className='bottom-btn' 
      variant='secondary'>
        {'<'}
      </Button>
    </Container>
  )
}

export default ViewArtist