import { GOT_MESSAGE, SEND_MESSAGE, ADD_MESSAGES } from '../../actions/constants/ChatConstants'

const initialState = {
    messages: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GOT_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case ADD_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        default: 
            return state
    }
}