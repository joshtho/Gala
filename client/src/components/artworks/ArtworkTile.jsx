import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function ArtworkTile({artwork}) {
  const notes = useSelector(state => state.user.entities.notes)
  const artworkNotes = notes.filter(note => note.artwork.id === artwork.id)
  console.log(artworkNotes)
  return (
      <Card style={{ width: '18rem' }}>
        <h2>{artwork.title}</h2>
        <Card.Img variant="top" src={`${artwork.image}`} />
        <Card.Body>
          <ListGroup variant="flush">
            <h6>Current Location:</h6>
            <ListGroup.Item>{artwork.location}</ListGroup.Item>
            <h6>Medium:</h6>
            <ListGroup.Item>{artwork.medium}</ListGroup.Item>
          </ListGroup>
          <Link to={`/artworks/edit/${artwork.id}`}>
            <Button>Edit</Button>
          </Link>
        {artworkNotes.map(note => (
          <>
            <h6>{note.body}</h6>
          </>
        )) }
        </Card.Body>
      </Card>
  )
}

export default ArtworkTile