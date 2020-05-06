import { GOT_MESSAGE, SEND_MESSAGE, ADD_MESSAGES } from './constants/ChatConstants'

export const gotMessage = (msg) => dispatch => {
    dispatch({
        type: GOT_MESSAGE,
        payload: msg
    })
}

export const sendMessage = (msg) => dispatch => {
    dispatch({
        type: SEND_MESSAGE,
        payload: msg
    })
}

export const addMessages = (data) => dispatch => {
    dispatch({
        type: ADD_MESSAGES,
        payload: data
    })
}