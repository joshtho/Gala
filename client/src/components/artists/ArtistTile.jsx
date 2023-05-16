import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArtistTile({artist}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title>{artist.name}</Card.Title>
        <Card.Text>
          {artist.description}
        </Card.Text>
        <Button onClick={() => console.log("clicked")}>My collection</Button>
      </Card.Body>
    </Card>
  );
}

export default ArtistTile;