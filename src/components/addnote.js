import React, { useState, useContext } from 'react';
import noteContext from "../context/noteContext";
import './main.css';

function Addnote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "" , description: "", tag: "default"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className='container my-5 col-lg-10'>
            <div className="mb-3">
                <h1 className="mx-3 ">Add Note</h1>
                <label htmlFor="title" className="form-label ">Title</label>
                <input type="text" name='title' className="form-control" id="title" placeholder="Title" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" name="description" id="description" rows="3" onChange={onChange} ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label ">Tag</label>
                <input type="text" name='tag' className="form-control" id="tag" placeholder="Tag" onChange={onChange} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default Addnote
