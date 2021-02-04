import React from 'react';

export const Notes = ({notes, onRemove}) => {
    return (
        <ul className="list-group">
            {notes.length === 0 ? <p>Нет записей</p> :
            notes.map(note => (
                <li className="list-group-item note" key={note.id}>
                    <div>
                    <strong>{note.title}</strong>
                    <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button onClick={() => onRemove(note.id)} type="button" className="btn btn-danger btn-sm">&times;</button>
                    </li>
                
                ))
            }
        </ul>
    )
}