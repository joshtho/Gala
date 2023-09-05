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

function ArtistTile({artist, onHandleNewArtistClick}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const userArtists = useSelector(state => state.user.entities.artists)
  const ownedArtist = userArtists.find(person => person.name === artist.name )

  function newArtistClick() {
    onHandleNewArtistClick(artist.id)
  }

  function handleDelete() {
    dispatch(removeArtist(artist.id))
    dispatch(removeArtistFromUser(artist.id))
    navigate(`/artists`)
  }

  return (
    <>
      {ownedArtist ?
            <Card className='card'>
              <CloseButton onClick={() => setShowModal(true)} />
              <Link to={`/artists/view/${artist.id}`} >
              <Card.Img 
              variant="top" 
              src={artist.image} 
              title='Click here to view Artist Info'
              />
              </Link>
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                {/* <Card.Text>{artist.description}</Card.Text> */}
                <Dropdown  >
                  <Dropdown.Toggle 
                  variant="outline-secondary" 
                  id="dropdown-basic"
                  >
                    Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item 
                    as={Link} 
                    to={`/artworks/${artist.id}`}
                    >
                      My collection
                    </Dropdown.Item>
                    <Dropdown.Item 
                    as={Link} 
                    to={`/artists/view/${artist.id}`}
                    >
                      View Artist
                    </Dropdown.Item>
                    <Dropdown.Item 
                    as={Link} 
                    to={`/artists/edit/${artist.id}`}
                    >
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
          <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
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
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDelete}>DELETE Artist</Button>
            </Modal.Footer>
          </Modal>
            </Card>
        
      :
        
          
            <Card className='card'>
              <Link to={`/artists/view/${artist.id}`} >
                <Card.Img 
                variant="top" 
                src={artist.image} 
                title='Click here to see artist info'
                />
              </Link>

              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                {/* <Card.Text>{artist.description}</Card.Text> */}
                {ownedArtist ? 
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item 
                      as={Link} 
                      to={`/artworks/${artist.id}`}
                      >
                        My collection
                      </Dropdown.Item>
                      <Dropdown.Item 
                      as={Link} 
                      to={`/artists/edit/${artist.id}`}
                      >
                        Edit info
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                :
                  <Button 
                  variant="success" 
                  onClick={() => navigate(`/artists/view/${artist.id}`)}
                  >
                    Artist Info
                  </Button>
                }
              </Card.Body>
            </Card>
        
      }
    </>
  );
}
      
export default ArtistTile;