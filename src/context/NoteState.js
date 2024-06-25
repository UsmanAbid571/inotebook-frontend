import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const s1 = {
        "name":"Usman",
        "email":"5NpZQ@example.com"
    }
    const [state, setState] = useState(s1)

    const update = () => {
        setState({
            "name":"xyz",
            "email":"234d@example.com"
        })
    }

    return (
        <noteContext.Provider value={s1}>
            {props.children} 
        </noteContext.Provider>
    )
}