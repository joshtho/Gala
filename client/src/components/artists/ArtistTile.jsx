import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function ArtistTile({artist}) {


  return (
    <Card className='card'>
      <Card.Img variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title>{artist.name}</Card.Title>
        <Card.Text>
          {artist.description}
        </Card.Text>
              {/* <Button>My collection</Button> */}
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
        
          {/* <Dropdown.Item href="#/action-3">Edit artist info</Dropdown.Item> */}
          {/* <Dropdown.Item href="#/action-2">Learn more about them</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      </Card.Body>
    </Card>
  );
}

export default ArtistTile;