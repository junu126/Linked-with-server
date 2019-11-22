const SocketIO = require('socket.io');
var user = [];
var isRaisePrice = false;
module.exports = (server, app) => {
    const io = SocketIO(server, {path: '/socket'});
    app.set('io', io);

    const chat = io.of('/chat');

    chat.on('connection', (socket) => {
        console.log('유저 채팅 접속');

        socket.on('enter', async (data) => {
            if(user.find(item => item == data.id) == undefined) {
                user.push({user: data.id, isRaisePrice});
                console.log(user);
            } else {
                console.log('1');
            }
            await socket.join(data.roomId);
            chat.in(data.roomId).emit('userData', {
                message: '유저가 채팅방에 접속하였습니다.',
                data: user,
            })
        })

        socket.on('chat', async (data) => {
            console.log(data);
            chat.in(data.roomId).emit('message', data);
        })

        socket.on('disconnect', async (data) => {
            chat.in(data.roomId).emit('user_disconnect');
            socket.leave(data.roomId);
            user = [];
        })

        socket.on('pay', async(data) => {
            for(var i = 0; i < user.length; i++) {
                if(user[i].user == data.id) {
                    user[i].isRaisePrice = true;
                }
            }   
            chat.in(data.roomId).emit('userData', {
                message: `${data.id}님이 결제를 완료하셨습니다.`,
                data: user,
            })
        })
    })
}