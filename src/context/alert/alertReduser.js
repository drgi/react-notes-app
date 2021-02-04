import { SHOW_ALERT, HIDE_ALERT} from '../types'
const handlers = {
    [SHOW_ALERT]: (state, action) => ({...action.payload, visible: true}),
    [HIDE_ALERT]: (state, action) => ({...state, visible: false}),
    DEFAULT: state => state

}

export const alertReduser = (state, action) => {
    console.log(state, action);
    const handle = handlers[action.type]
    return handle(state, action)
}