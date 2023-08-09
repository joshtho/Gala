import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function ArtistList() {
  const navigate = useNavigate()
  const artists = useSelector(state => state.artists.entities)  
  
  const initialObj = {
    name: '',
    description: '',
    image: '',
  }
  const [newArtistData, setNewArtistData] = useState(initialObj)
    
  function handleNewArtistClick(id) {
    navigate(`/artworks/add/${id}`)
  }
    
  return (
    <div >
      <h1>Choose an Artist</h1>
      <Container className='card-grid'>
        { artists ?
        artists.map(artist => (
            <ArtistTile 
            key={artist.id} 
            artist={artist} 
            onHandleNewArtistClick={handleNewArtistClick}
            newArtistData={newArtistData}
            setNewArtistData={setNewArtistData}
            />
        )) 
        :
        "Loading..."   
        }
      </Container>
        <Link to={`add`} >
          <Button variant="outline-secondary">Add a new artist</Button>
        </Link>

    </div>
  )
}

export default ArtistList