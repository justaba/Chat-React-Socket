import React from 'react'

class ChatMessage extends React.Component {
    render() {
        const message = this.props.message
        if(message.refer == 'me') {
            return (
                <div className="meMessage">
                    <div className="meMessage_block">
                    { message.text }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="himMessage">
                    <div className="himMessage_block">
                    { message.text }
                    </div>
                </div>
            )
        }
        
    }
}

export default ChatMessage