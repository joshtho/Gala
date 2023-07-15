import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNoteEdit, updateNote } from '../../features/noteSlice';
import { addNoteToUser } from '../../features/sessionSlice';


function ArtworkNote({note}) {
    const [editNote, setEditNote] = useState(false)
    const [addNote, setAddNote] = useState(false)
    const [textData, setTextData] = useState(note)
    const obj = useSelector(state => state.notes.noteObj)
    const dispatch = useDispatch()
    // const editNote = useSelector(state => state.notes.editNote)

    useEffect(() => {
        if(!note.body) {
            setEditNote(true)
            // setAddNote(true)
            // dispatch(toggleNoteEdit())
        } 
    }, [note.body])

    console.log(editNote)
    console.log(note)

    function handleSubmit(e) {
    e.preventDefault()
    if(addNote) {
        dispatch(addNote(textData))
    } else {
        dispatch(updateNote(textData))
        setEditNote(false)
    }
}
// useEffect(() => {
//     if(obj && addNote) {
//         dispatch(addNoteToUser(textData))
//         setAddNote(false)
//     } else if(obj && editNote)
// }, [])


console.log(textData.body)

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
                <Button onClick={() => dispatch(toggleNoteEdit())}>edit</Button>
            </ButtonGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        }
        
    </>
  );
}

export default ArtworkNote;