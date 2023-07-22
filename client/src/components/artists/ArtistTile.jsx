import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch } from 'react-redux';
import { removeArtist } from '../../features/artistsSlice';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { removeArtistFromUser } from '../../features/sessionSlice';

function ArtistTile({artist}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleDelete() {
    dispatch(removeArtist(artist.id))
    dispatch(removeArtistFromUser(artist.id))
    navigate(`/artists`)
  }

  return (
    <Container className='card-wrap'>
      <Card className='card'>
        <CloseButton onClick={handleDelete} />
        <Card.Img variant="top" src={artist.image} />
        <Card.Body>
          <Card.Title>{artist.name}</Card.Title>
          <Card.Text>{artist.description}</Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Select
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={`/artworks/${artist.id}`}>My collection</Dropdown.Item>
              <Dropdown.Item as={Link} to={`/artists/edit/${artist.id}`}>Edit info</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </Container>
  );
}
      
export default ArtistTile;