import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ArtworkTile from "./ArtworkTile"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ArtworkList() {
  const params = useParams()
  const artistId = parseInt(params.id)
  const userArtworks = useSelector(state => state.user.entities.artworks)
  const Artistworks = userArtworks.filter(artwork => artwork.artist.id === artistId)
  
  return (
    <div className='card-grid' >
      {Artistworks.map(artwork => (
        <ArtworkTile key={artwork.id} artwork={artwork} />
      ))
      }
    <div>
      <Link to={`/artworks/add/${artistId}`}>
        <Button variant="outline-secondary">Add more artwork from this artist</Button>
      </Link>
    </div>
    </div>
        
      
  )
}

export default ArtworkList