import React from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'

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
    </div>
  )
}

export default ArtistList