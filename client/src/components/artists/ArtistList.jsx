import React from 'react'
import { useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'

function ArtistList() {
    const artwork = useSelector(state => state.artwork.entities)
    const user = useSelector(state => state.user.entities)
    const artists = useSelector(state => state.artists.entities)
    console.log(artwork)
    console.log(user)
    console.log(artists)
  return (
    <div>
        <h1>My Artists</h1>
        {user.artists.map(artist => (
            <ArtistTile key={artist.id} artist={artist} />
        ))}
    </div>
  )
}

export default ArtistList