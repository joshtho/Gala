import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function ArtistTile({artist}) {


  return (
    <Container className='card-wrap'>

    <Card className='card'>
      <Card.Img variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title>{artist.name}</Card.Title>
        <Card.Text>
          {artist.description}
        </Card.Text>
 
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Link to={`/artworks/${artist.id}`}>
          <Dropdown.Item href='#/action-1'>My collection</Dropdown.Item>
        </Link>
        <Link to={`/artists/edit/${artist.id}`}>
          <Dropdown.Item href='#/action-2'>Edit info</Dropdown.Item>
        </Link>
        </Dropdown.Menu>
      </Dropdown>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default ArtistTile;