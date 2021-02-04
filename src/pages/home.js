import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/form'
import { Loader } from '../components/loader';
import { Notes } from '../components/notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line 
    }, [])
    return (
        <Fragment>
            <Form/>
            <hr/>
            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/>}            
        </Fragment>
    )
}