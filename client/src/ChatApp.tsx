import React from 'react';
import { AuthProvider } from "./context/authContext";
import { SocketProvider } from "./context/socketContext";
import { AppRouter } from "./router/App";
import { ChatProvider } from "./context/chat/chatContext";

function ChatApp() {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    );
}

export default ChatApp;
