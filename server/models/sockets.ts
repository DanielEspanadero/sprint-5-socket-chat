import { userConnected, userDisconnected, saveMessage, getUsers } from '../helpers/socket';
import { checkJWT } from '../helpers/generate-jwt';
import { createChannel, channelsList } from '../helpers/channel';

export default class Sockets {
    io: any;

    constructor(io: any) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On user connecting
        this.io.on('connection', async (socket: any) => {

            const [isValid, uid]: any = checkJWT(socket.handshake.query['x-token']);

            if (!isValid) {
                console.log('unidentified socket');
                return socket.disconnect();
            }

            await userConnected(uid);

            // On user joining a room, in this case a another user 
            socket.join(uid);

            // Sending the users-list
            this.io.emit('users-list', await getUsers());
            // Sending the channels
            this.io.emit('channels-list', await channelsList());

            // Sending a personal message
            socket.on('personal-message', async (payload: { to: any; from: any; }) => {
                const message = await saveMessage(payload);
                this.io.to(payload.to).emit('personal-message', message);
                this.io.to(payload.from).emit('personal-message', message);
            });

            // Sending a channel message
            socket.on('channel-message', async (payload: { to: any; from: any; }) => {

                const message = await saveMessage(payload);
                const user = await userConnected(payload.from);

                this.io.emit('channel-message', { message, user });
                this.io.to(payload.to).emit('channel-message', { message, user });
            });

            // On user typing
            socket.on('typing', (payload: { to: any; }) => {
                this.io.to(payload.to).emit('typing', uid);
            });

            // On user stopping typing
            socket.on('stop-typing', (payload: { to: any; }) => {
                this.io.to(payload.to).emit('stop-typing');
            });

            // On creating a channel
            socket.on('channel-created', async (payload: any) => {
                const channel = await createChannel(payload);
                this.io.emit('channel-created', channel);
            });

            // On user disconnecting
            socket.on('disconnect', async () => {
                await userDisconnected(uid);
                this.io.emit('users-list', await getUsers())
                this.io.emit('users-list', await channelsList());
            });

        })

    }
}