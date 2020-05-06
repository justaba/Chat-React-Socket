import { connect } from 'react-redux'
import AdminChat from '../components/Admin/AdminChat'
import { gotMessage, sendMessage, addMessages } from '../actions/ChatAction'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        messages: state.adminChat.messages
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

AdminChat.propTypes = {
    messages: PropTypes.array,
    gotMessage: PropTypes.func,
    sendMessage: PropTypes.func,
    addMessages: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminChat)