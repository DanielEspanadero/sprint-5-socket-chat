import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './AuthContext';
import { Socket } from 'socket.io-client';
import { ChatContext } from './chat/chatContext';
import { types } from './types/types';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';
import { socketEvents } from '../config/socketEvents'

type SocketIoProviderProps = React.PropsWithChildren<{}>;

type socketContext = {
    online: boolean;
    socket: Socket | null;
};

export const SocketContext = createContext<socketContext>({} as any);

export const SocketProvider = ({ children }: SocketIoProviderProps) => {
    const { socket, connectSocket, disconnectSocket, online } = useSocket(
        'http://localhost:8080'
    );
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);


    useEffect(() => {
        if (auth.logged) {
            connectSocket();
        }
    }, [auth, connectSocket]);

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket]);

    useEffect(() => {
        if (socket === null) return;
        socket.on(socketEvents.CLIENT.CHANNELS_LIST, (channels: any) => {
            dispatch({
                type: types.channelsList,
                payload: channels,
            });
        });
    }, [socket, dispatch]);

    useEffect(() => {
        if (socket === null) return;
        socket.on(socketEvents.CLIENT.CHANNEL_MESSAGE, ({ message, user }) => {
            dispatch({
                type: types.channelMessage,
                payload: message,
                user
            });

            scrollToBottomAnimated('messages');
        });

    }, [socket, dispatch]);

    useEffect(() => {
        if (socket === null) return;
        socket.on(socketEvents.CLIENT.CHANNEL_CREATED, (name: any) => {
            dispatch({
                type: types.channelCreated,
                payload: name,
            });
        });

    }, [socket, dispatch]);

    // Listening changes in connected users
    useEffect(() => {
        if (socket === null) return;
        socket.on(socketEvents.CLIENT.USERS_LIST, (users: any) => {
            dispatch({
                type: types.usersLoaded,
                payload: users,
            });
        });
    }, [socket, dispatch]);

    useEffect(() => {
        if (socket === null) return;
        socket.on(socketEvents.CLIENT.PERSONAL_MESSAGE, (message: any) => {
            dispatch({
                type: types.newMessage,
                payload: message,
            });

            scrollToBottomAnimated('messages');
        });
    }, [socket, dispatch]);


    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
}