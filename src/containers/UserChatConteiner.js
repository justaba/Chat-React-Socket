import { connect } from 'react-redux'
import UserChat from '../components/UserChat/UserChat'
import { gotMessage, sendMessage, addMessages } from '../actions/ChatAction'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        messages: state.userChat.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gotMessage: (msg) => {
            dispatch(gotMessage(msg))
        },
        sendMessage: (msg) => {
            dispatch(sendMessage(msg))
        },
        addMessages: (data) => {
            dispatch(addMessages(data))
        }
    }
}

UserChat.propTypes = {
    messages: PropTypes.array,
    gotMessage: PropTypes.func,
    sendMessage: PropTypes.func,
    addMessages: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChat)