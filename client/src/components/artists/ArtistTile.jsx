import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArtistTile({artist}) {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title>{artist.name}</Card.Title>
        <Card.Text>
          {artist.description}
        </Card.Text>
        <Link to="/artworks">
              <Button>My collection</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArtistTile;