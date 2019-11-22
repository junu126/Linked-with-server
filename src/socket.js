const SocketIO = require('socket.io');

module.exports = (server, app) => {
    const io = SocketIO(server, {path: '/socket'});
    app.set('io', io);

    const chat = io.of('/chat');
0
    chat.on('connection', (socket) => {
        console.log('유저 채팅 접속');
        socket.emit('join');

        socket.on('enter', async (roomId) =>{
            await socket.join(roomId);
            chat.in(roomId).emit('message', {
                message: '유저가 채팅방에 접속하였습니다.'
            })
        })

        socket.on('chat', async (roomId) => {
            chat.in(roomId).emit('message', data);
        })

        socket.on('disconnect', async () => {
            chat.in(roomId).emit('user_disconnect');
            socket.leave(roomId);
        })
    })
}