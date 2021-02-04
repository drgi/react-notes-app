import {REMOVE_NOTE, ADD_NOTE, FETCH_NOTES, SHOW_LOADER} from '../types'
const handlers = {
    DEFAULT: state => state,
    [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(note => note.id !== payload)}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [SHOW_LOADER]: (state, action) => ({...state, loading: true})
}
export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}