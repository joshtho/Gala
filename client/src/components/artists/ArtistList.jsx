import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ArtistTile from './ArtistTile'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function ArtistList() {
  const artists = useSelector(state => state.artists.entities)  
  
  const initialObj = {
    name: '',
    description: '',
    image: '',
  }
  const [newArtistData, setNewArtistData] = useState(initialObj)
      
  return (
    <div >
      <br></br>
      <h1>Choose an Artist</h1>
      <Container className='card-grid'>
        { artists ?
        artists.map(artist => (
            <ArtistTile 
            key={artist.id} 
            artist={artist} 
            newArtistData={newArtistData}
            setNewArtistData={setNewArtistData}
            />
        )) 
        :
        "Loading..."   
        }
      </Container>
        <Link to={`/artists/add`} >
          <Button className='bottom-btn' variant="outline-secondary">Add a new artist</Button>
        </Link>

    </div>
  )
}

export default ArtistList