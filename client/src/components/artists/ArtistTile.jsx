import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch } from 'react-redux';
import { removeArtist } from '../../features/artistsSlice';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { removeArtistFromUser } from '../../features/sessionSlice';
import { useState } from 'react';

function ArtistTile({artist}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete() {
    dispatch(removeArtist(artist.id))
    dispatch(removeArtistFromUser(artist.id))
    navigate(`/artists`)
  }

  return (
    <div>
    <Container className='card-wrap'>
      <Card className='card'>
        <CloseButton onClick={handleShow} />
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
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting an Artist will delete all Artworks as well
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>DELETE Artist</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
      
export default ArtistTile;