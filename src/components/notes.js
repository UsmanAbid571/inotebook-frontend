import React, { useContext, useEffect,useState,useRef } from 'react'
import Addnote from './addnote';
import Noteitem from './Noteitem';
import NoteContext from "../context/noteContext";
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
  let navigate=useNavigate()

  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      // eslint-disable-next-line
      getNotes()
      // eslint-disable-next-line
    }
    else{
    // eslint-disable-next-line
      navigate('/login')
    }
    
    // eslint-disable-next-line

  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "default" })


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
}


  const handleClick = () => {
      editNote(note.id, note.etitle, note.edescription, note.etag)
      refClose.current.click();
  }

  const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
    <Addnote />
      <div>
        <span>
          <button ref={ref} type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
            
          </button>
        </span>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label ">Title</label>
                    <input type="text" name='etitle' value={note.etitle} className="form-control" id="etitle" placeholder="Title" onChange={onChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <textarea className="form-control" name="edescription" value={note.edescription} id="edescription" rows="3" onChange={onChange} ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label ">Tag</label>
                    <input type="text" name='etag' value={note.etag} className="form-control" id="etag" placeholder="Tag" onChange={onChange} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={handleClick} className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-2 col-lg-10'>
      <h2>Your Notes</h2>
      <div className='row my-3 gap-3 '>
        {notes.map((note) => {
          return (
            <Noteitem updateNote={updateNote} key={note._id} note={note} />
          )
        })}
      </div>
      </div>
    </>
  )
}

export default Notes
