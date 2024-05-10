import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/esm/Container'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'

function ViewArtist() {
    const params = useParams()
    const navigate = useNavigate()
    const artistId = parseInt(params.id)
    const artists = useSelector(state => state.artists.entities)
    const currentArtist = artists.find(artist => artist.id === artistId)
    const userArtists = useSelector(state => state.user.entities.artists)
    const [ownedArtist, setOwnedArtist] = useState(false)
    console.log(ownedArtist)

    useEffect(() => {
      const artistArray = userArtists.map(artist => artist.id)
      if (currentArtist && artistArray.includes(currentArtist.id)) {
        setOwnedArtist(true)
      } else {
        
      }
    },[])
    
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
      <Container style={{background: "white"}} >
        <p>{currentArtist.description}</p> 
      </Container>
      <br/>
      {ownedArtist ? 
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item 
                      as={Link} 
                      to={`/artworks/${currentArtist.id}`}
                      >
                        My collection
                      </Dropdown.Item>
                      <Dropdown.Item 
                      as={Link} 
                      to={`/artists/edit/${currentArtist.id}`}
                      >
                        Edit info
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                :
                  <Button 
                  variant="success" 
                  onClick={() => navigate(`/artworks/add/${currentArtist.id}`)}
                  >
                    Add Artwork to add artist
                  </Button>
                }
                <br></br>
                <br></br>
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