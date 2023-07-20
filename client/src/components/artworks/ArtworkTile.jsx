import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArtworkNote from './ArtworkNote';
import { $CombinedState } from '@reduxjs/toolkit';

function ArtworkTile({artwork}) {
  const notes = useSelector(state => state.user.entities.notes)
  const artworkNote = notes.find(note => note.artwork.id === artwork.id)

  if (!artworkNote) {
    return "loading.."
  }
  
  return (
    <Card className='card'>
        <h2>{artwork.title}</h2>
          <Link to={`/artworks/edit/${artwork.id}`}>
            <Button variant="outline-secondary" size="sm">Edit</Button>
          </Link>
        <Card.Img variant="top" src={artwork.image} />
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
      </Card>
  )
}

export default ArtworkTile