import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../App';
import Note from './Note'
import AddNote from './AddNote'

const NotesList = () => {
    const { notes, setNotes, setDetailData } = useContext(AppContext);
    let location = useLocation();
    const jobid = location.state.jobid;

    const handleDeleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const handleAddNote = (text) => {
        const date = new Date();
        const newNote = {
            jobid: jobid,
            id: nanoid(),
            text: text,
            date: date.toLocaleString()
        };
        setNotes([...notes, newNote]);
    };

    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><Link to='/'>Go Back</Link></li>
            </ul>
            <div className='note-list'>

                {notes.length > 0 && notes.filter((n) => n.jobid === jobid).map((note) => (
                    <Note key={note.id}
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                    />
                ))}
                <AddNote handleAddNote={handleAddNote} />

            </div>
        </>
    )
}

export default NotesList;