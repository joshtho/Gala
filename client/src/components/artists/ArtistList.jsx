import React from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

function ArtistList() {
  const user = useSelector(state => state.user.entities)

  console.log(user)

  return (
    <div>
        <h1>My Artists</h1>
        { user ?
        user.artists.map(artist => (
            <ArtistTile key={artist.id} artist={artist} />
        )) 
        :
        "Loading..."   
        }
        <h2>Add a new artist</h2>
        <Link to={`add`} >
          <Button>Add a new artist</Button>
        </Link>
    </div>
  )
}

export default ArtistList