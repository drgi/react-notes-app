import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.length === 0 ? <p>Нет записей</p> :
            notes.map(note => (
                <CSSTransition key={note.id} classNames={'note'} timeout={800}>
                    <li className="list-group-item note" key={note.id}>
                        <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button onClick={() => onRemove(note.id)} type="button" className="btn btn-danger btn-sm">&times;</button>
                    </li>
                </CSSTransition>
                ))
            }
        </TransitionGroup>
    )
}