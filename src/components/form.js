import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContex';
import { FirebaseContext } from '../context/firebase/firebaseContext'
export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()
        
        if (value.trim()) {
            firebase.addNote(value.trim())
            alert.show('Заметка добавлена', 'success')
            setValue('')
        } else {
            alert.show('Введи текст', 'danger')
        }
    } 
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Введите название" value={value} onChange={e => setValue(e.target.value)}></input>
            </div>
        </form>
    )
}