import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    //Host URL here
    const host = "http://localhost:5000"

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Get all notes
    const getNotes = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3OTkwNzQ2MjYyYzg1ZTU2MmEwNWU4In0sImlhdCI6MTcxOTI5ODE3M30.__WOPsBnwtTYug78VkTi2kjVNNDPgrey6T0W9yjtO3M"

            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)




    }

    //Add a note
    const addNote = async (title, description, tag) => {
        console.log("Adding a new note")
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3OTkwNzQ2MjYyYzg1ZTU2MmEwNWU4In0sImlhdCI6MTcxOTI5ODE3M30.__WOPsBnwtTYug78VkTi2kjVNNDPgrey6T0W9yjtO3M"

            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        //setNotes(notes.concat(note))

        const note = {
            "user": "667990746262c885e562a205e8",
            "title": title,
            "description": description,
            "tag": tag,
            "_id": "667b5be5fb976f815f7aa575b3d",
            "date": "2024-06-26T07:10:51.336Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = async (id) => {
        const note = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3OTkwNzQ2MjYyYzg1ZTU2MmEwNWU4In0sImlhdCI6MTcxOTI5ODE3M30.__WOPsBnwtTYug78VkTi2kjVNNDPgrey6T0W9yjtO3M"

            }
        });

        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)


    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        console.log("Edit a note")
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3OTkwNzQ2MjYyYzg1ZTU2MmEwNWU4In0sImlhdCI6MTcxOTI5ODE3M30.__WOPsBnwtTYug78VkTi2kjVNNDPgrey6T0W9yjtO3M"

            },
            body: JSON.stringify({ id, title, description, tag })
        });
        const json = response.json();
        

        let newNotes = JSON.parse(JSON.stringify(notes))

        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag; 
                break; 
              }

        }
        setNotes(newNotes);
    }


    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState