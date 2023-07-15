import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtworkNote from './ArtworkNote';

function ArtworkTile({artwork}) {
  const notes = useSelector(state => state.user.entities.notes)
  const artworkNote = notes.find(note => note.artwork.id === artwork.id)
  // probably have to use useffect on notes in this component or Addartwork
  console.log(notes)
  console.log(artworkNote)
  if (!artworkNote) {
    return "loading.."
  }
  return (
    <Card className='Artwork-Card'>
        <h2>{artwork.title}</h2>
        <Card.Img variant="top" src={artwork.image} />
        <Card.Body>
          <ListGroup >
            <h6>Current Location:</h6>
            <ListGroup.Item>{artwork.location}</ListGroup.Item>
            <h6>Medium:</h6>
            <ListGroup.Item>{artwork.medium}</ListGroup.Item>
          </ListGroup>
          <Link to={`/artworks/edit/${artwork.id}`}>
            <Button>Edit</Button>
          </Link>
        { 
          <ArtworkNote note={artworkNote}/>
        }       
        </Card.Body>
      </Card>
  )
}

export default ArtworkTile