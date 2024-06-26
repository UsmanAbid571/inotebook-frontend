import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'


function Noteitem(props) {
    const { note, updateNote } = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    return (
        <>
            
            <div className='col-md-3'>
                <div className="card ">
                    <div className="card-body">
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className="card-title">{note.title}</h5>
                            <span>
                                <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                            </span>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Noteitem
