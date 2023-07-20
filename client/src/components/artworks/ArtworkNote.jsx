import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../features/noteSlice';
import { updateUserNotes } from '../../features/sessionSlice';


function ArtworkNote({note}) {
    const [editNote, setEditNote] = useState(false)
    const [textData, setTextData] = useState(note)
    const newNote = useSelector(state => state.notes.noteObj)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!note.body) {
            setEditNote(true)
        } 
    }, [note.body])

    function handleSubmit(e) {
    e.preventDefault()    
        dispatch(updateNote(textData))
    }
        
    
    useEffect(() => {
        if(newNote) {
            dispatch(updateUserNotes(newNote))
            setEditNote(false)
    }
    }, [newNote])

  return (
    <>
    {editNote ? 
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Notes</Accordion.Header>
            <Accordion.Body>
                <form onSubmit={handleSubmit}>
                    <textarea 
                    placeholder='Add a note about this piece...'
                    value={textData.body} 
                    onChange={(e) => setTextData({...textData, body: e.target.value})}></textarea>
                    <br></br>
                    <ButtonGroup aria-label="Third group">
                        <Button onClick={handleSubmit}>Save</Button>
                    </ButtonGroup>
                </form>


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        : 
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Notes</Accordion.Header>
            <Accordion.Body>
              {textData.body}
            <br></br>
            <ButtonGroup aria-label="Third group">
                <Button onClick={() => setEditNote(true)}>edit</Button>
            </ButtonGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        }
        
    </>
  );
}

export default ArtworkNote;