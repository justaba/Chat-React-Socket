import {combineReducers} from 'redux'

import UserChatReducer from './UserChatReducer'
import AdminChatReducer from './AdminChatReducer'

export default combineReducers({
    userChat: UserChatReducer,
    adminChat: AdminChatReducer
})