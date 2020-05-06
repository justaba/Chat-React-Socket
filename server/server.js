import express from 'express'
import Socket from 'socket.io'
import path from 'path'

const app = express()

const server = app.listen(4500, () => {
    console.log('Server work on http://localhost:4500')
})

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve( 'public', 'index.html'))
})

const io = new Socket(server)

io.on('connection', (socket) => {
    console.log('New client connected')
    socket.on('new message', msg => {
        socket.broadcast.emit('got message', msg)
    })
})



