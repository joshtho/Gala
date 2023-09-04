import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ViewArt() {
const params = useParams()
const artId = parseInt(params.id)
const art = useSelector(state => state.user.entities.artworks)
const currentArtwork = art.find(artwork => artwork.id === artId)
console.log(currentArtwork)
if (!currentArtwork) {
    return <div>Loading...</div>
}
  return (
    <div>
        <br/>
        <img className='artwork-card' src={currentArtwork.image} />
        <br></br>
        <Button className='bottom-btn' variant='secondary'>{'<'}</Button>
    </div>
  )
}

export default ViewArt