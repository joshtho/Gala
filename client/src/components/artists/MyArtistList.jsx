import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

function MyArtistList() {
  const userArtists = useSelector(state => state.user.entities.artists)

  return (
    <div>
      <br></br>
      <h1>My Artists</h1>
      <Container className='card-grid'>
        { userArtists ?
        userArtists.map(artist => (
            <ArtistTile key={artist.id} artist={artist} />
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

export default MyArtistList