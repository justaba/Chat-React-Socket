import React from 'react';
import Chat from '../Chat/Chat';
import socketClient from 'socket.io-client'

class AdminChat extends React.Component {

    constructor() {
        super()
        this.state = {
            textarea: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.enterText = this.enterText.bind(this)
        this.saveHistory = this.saveHistory.bind(this)
    }

    componentDidMount () {
        const historyMsg = localStorage.getItem('historyMsg')
        if(historyMsg) {
            this.props.addMessages(JSON.parse(historyMsg))
        }

        this.socket = socketClient('http://localhost:4500')
        this.socket.on('got message', msg => {
            this.props.gotMessage({
                refer: 'him',
                text: msg
            })
            this.saveHistory() 
        })
    }

    saveHistory (msg) {
        let newHistory = []
        if(msg) {
            newHistory = [...this.props.messages, msg]
        } else {
            newHistory = [...this.props.messages]
        }

        localStorage.setItem('historyMsg', JSON.stringify(newHistory))
    }

    enterText(e) {
        this.setState({
            textarea: e.target.value
        })
    }

    handleSubmit(e) {
        e.stopPropagation()
        let message = this.state.textarea
        this.socket.emit('new message', message)
        this.props.sendMessage({
            refer: 'me',
            text: message
        })
        this.saveHistory({refer: 'me', text: message})
        this.setState({
            textarea: ''
        })
    }

    render() {
        const messages = this.props.messages

        return (
            <div className="main">
                 <Chat onClick={this.handleSubmit} onChange={this.enterText} messages={messages} title={'Чат с пользователем'} value={this.state.textarea} />
            </div>
           
        )
    }
}

export default AdminChat