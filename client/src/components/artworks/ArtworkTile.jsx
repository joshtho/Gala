import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
function ArtworkTile({artwork}) {
  console.log(artwork)
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
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtworkTile