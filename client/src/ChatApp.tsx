import React from 'react';
import { AuthProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
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
