import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ArtworkNote from './ArtworkNote';
import { removeArtwork } from '../../features/artworkSlice';
import { removeArtworkFromUser } from '../../features/sessionSlice';


function ArtworkTile({artwork}) {
  const notes = useSelector(state => state.user.entities.notes)
  const artworkNote = notes.find(note => note.artwork.id === artwork.id)
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleDelete() {
    dispatch(removeArtwork(artwork.id))
    dispatch(removeArtworkFromUser(artwork.id))
    navigate(`/artworks/${artwork.artist.id}`)
  }

  if (!artworkNote) {
    return "loading.."
  }
  
  return (
    <Card className='card'>
      <CloseButton onClick={() => setShowModal(true)} />
        <h4 className='zen-font'>{artwork.title}</h4>
          <Link to={`/artworks/edit/${artwork.id}`}>
            <Button variant="outline-secondary" size="sm">Edit</Button>
          </Link>
          <Link to={`/artworks/view/${artwork.id}`} >
            <Card.Img 
            title='Click here to see Artwork' 
            variant="top" 
            src={artwork.image} 
            />
          </Link>
        <Card.Body>
          <ListGroup >
            <h6>Current Location:</h6>
            <ListGroup.Item>{artwork.location}</ListGroup.Item>
            <br></br>
            <h6>Medium:</h6>
            <ListGroup.Item>{artwork.medium}</ListGroup.Item>
          </ListGroup>
          <br></br>
        <ArtworkNote note={artworkNote}/>    
        </Card.Body>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You cannot recover this artwork or its notes
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDelete}>DELETE Artwork</Button>
            </Modal.Footer>
          </Modal>
      </Card>
  )
}

export default ArtworkTile