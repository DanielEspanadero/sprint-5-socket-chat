import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { Sidebar } from '../components/sidebar/Sidebar';
import { MessagesList } from '../components/body/Chat';
import { ChatContext } from '../context/chat/chatContext';

import '../css/chatPage.css'

export const ChatPage = () => {
    const { chatState } = useContext(ChatContext);

    return (
        <div className='container-fluid' >
            <div className='row app'>

                <div className='col-xl-3 col-md-5 sideBar'>
                    <Sidebar />
                </div>

                <div className='col-xl-8 col-md-7 chatBody'>
                    {chatState.activeChat
                        ? <MessagesList />
                        : <ChatSelect />
                    }
                </div>

            </div>
        </div>
    );
};
