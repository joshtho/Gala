import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
function ArtworkTile({artwork}) {
  
  return (
    <div>
      <Card className='Artwork-Card'>
        <h2>{artwork.title}</h2>
        <Card.Img variant="top" src={`${artwork.image}`} />
        <Card.Body>
          <ListGroup variant="flush">
            <h5>Current Location:</h5>
            <ListGroup.Item>{artwork.location}</ListGroup.Item>
            <br></br>
            <ListGroup.Item>{artwork.medium}</ListGroup.Item>
          </ListGroup>
          <Link to={`/artworks/edit/${artwork.id}`}>
            <Button>Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtworkTile