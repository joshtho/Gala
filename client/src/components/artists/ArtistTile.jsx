import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtist, resetArtistObj } from '../../features/artistsSlice';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { removeArtistFromUser } from '../../features/sessionSlice';
import { useState } from 'react';

function ArtistTile({
  artist, 
  onHandleNewArtistClick, 
  setNewArtistData, 
  newArtistData,
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  // const [showButton, setShowButton] = useState(false)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const userArtists = useSelector(state => state.user.entities.artists)
  const ownedArtist = userArtists.find(person => person.name === artist.name )

  function newArtistClick() {
    setNewArtistData({
      name: artist.name, 
      description: artist.description, 
      image: artist.image
    })
    console.log(newArtistData)
    onHandleNewArtistClick(newArtistData)
  }

  function handleDelete() {
    dispatch(removeArtist(artist.id))
    dispatch(removeArtistFromUser(artist.id))
    navigate(`/artists`)
  }

  
  

  return (
    <div>

      {ownedArtist ?
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
        show={showModal}
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
       :
      <div>
        <Container className='card-wrap'>
      <Card className='card'>
        
        <Card.Img variant="top" src={artist.image} />
        <Card.Body>
          <Card.Title>{artist.name}</Card.Title>
          <Card.Text>{artist.description}</Card.Text>
          {ownedArtist ? 
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              Select
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={`/artworks/${artist.id}`}>My collection</Dropdown.Item>
              <Dropdown.Item as={Link} to={`/artists/edit/${artist.id}`}>Edit info</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          :
          <Button variant="outline-secondary" onClick={newArtistClick}>Add Artist?</Button>
          }
        </Card.Body>
      </Card>
    </Container>
      </div>
      }
    </div>
  );
}
      
export default ArtistTile;