import React, {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import axios from 'axios'
import { SHOW_LOADER, REMOVE_NOTE, FETCH_NOTES } from '../types'

const url = process.env.REACT_APP_DB_URL
export const FirebaseState = ({children}) => {
    const initialState = {
        notes:[],
        loading: true
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    
    const showLoader = () => dispatch({type:SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)        
        const payload = res.data ? Object.keys(res.data).map(key =>  {
            return {id: key, ...res.data[key]}
            }) : []
        console.log('fetchNotes', payload);
        dispatch({type:FETCH_NOTES, payload})
    }
    const addNote = async title => {
        const note = {
            title, date: new Date()
        }
        await axios.post(`${url}/notes.json`, note)
        await fetchNotes()
    }
    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({type: REMOVE_NOTE, payload: id})
    }
    return (
        <FirebaseContext.Provider value={{showLoader, fetchNotes, addNote, removeNote, loading: state.loading, notes: state.notes}}>
            {children}
        </FirebaseContext.Provider>
    )
}