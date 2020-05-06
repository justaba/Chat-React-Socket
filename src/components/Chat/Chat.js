import React from 'react'
import ChatMessage from './ChatMessage'

import './Chat.css'
import send from './send.png'

class Chat extends React.Component {

    constructor() {
        super()
        this.renderMessage = this.renderMessage.bind(this)
    }

    renderMessage(data) {
        return data.map((msg, i) => {
          return(
            <ChatMessage key={i} message={msg} />
          ) 
        })
    }

    render() {
        const data = this.props.messages
        const title = this.props.title

        if(data) {
            return(
                <div className="chatWindow">
                    <div className="chat">
                    <h2>{title}</h2>
                        { this.renderMessage(data) }
                    </div>
                    <div className="sendBlock">
                        <input type="text" placeholder="Введите текст сообщения" value={this.props.value} onChange={this.props.onChange} />
                        <button onClick={this.props.onClick}><img src={send} /></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="chatWindow">
                    <div className="chat">
                        <h2>{title}</h2>
                    </div>
                    <div className="sendBlock">
                        <input type="text" placeholder="Введите текст сообщения" value={this.props.value} onChange={this.props.onChange} />
                        <button onClick={this.props.onClick}><img src={send} /></button>
                    </div>
                </div>
            )
            
        }
       
    }
}

export default Chat
