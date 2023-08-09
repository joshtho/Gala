import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArtistTile from './ArtistTile'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { addNewArtist, resetArtistObj } from '../../features/artistsSlice'
import { addArtistToUser } from '../../features/sessionSlice'

function ArtistList() {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const artists = useSelector(state => state.artists.entities)
  
  // const [showButton, setShowButton] = useState(false)
  const newArtist = useSelector(state => state.artists.artistObj)
  
  const initialObj = {
    name: '',
    description: '',
    image: '',
  }
    
  const [newArtistData, setNewArtistData] = useState(initialObj)

  function handleNewArtistClick(id) {
    navigate(`/artworks/add/${id}`)
    
  }
    
  // useEffect(() => {
  //   if (newArtist) {
  //     dispatch(addArtistToUser(newArtist))
  //     dispatch(resetArtistObj())
  //     setNewArtistData(initialObj)
  //   }
  // },[newArtist])

  return (
    <div  >
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