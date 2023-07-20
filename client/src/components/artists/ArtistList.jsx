import React from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function ArtistList() {
  const user = useSelector(state => state.user.entities)

  console.log(user)

  return (
    <div  >
      <h1>My Artists</h1>
      <Container className='card-grid'>
        { user ?
        user.artists.map(artist => (
            <ArtistTile key={artist.id} artist={artist} />
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