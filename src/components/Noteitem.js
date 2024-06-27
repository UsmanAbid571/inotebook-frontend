import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'
import './main.css';


function Noteitem(props) {
    const { note, updateNote } = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    return (
        <>
            
            <div className="col-md-4 single-note-item all-category note-important" >
                <div className="card card-body">
                    <span className="side-stick text-capitalize text-muted text-gray p">{note.tag}</span>
                    <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Go for lunch">{note.title} <i className="point fa fa-circle ml-1 font-10"></i></h5>
                    <p className="note-date font-12 text-muted">{note.Date}</p>
                    <div className="note-content">
                        <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">{note.description}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="mr-1 mx-2"><i className="fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i></span>
                        <span className="mr-1"><i className="fa fa-trash remove-note" onClick={() => { deleteNote(note._id) }}></i></span>
                        
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default Noteitem
