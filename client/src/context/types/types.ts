export const types = {
    usersLoaded: '[Chat] Uploaded users',
    activateChat: '[Chat] Activate chat',
    newMessage: '[Chat] New message',
    loadMessages: '[Chat] Load messages',
    closeSession: '[Chat] Logout',
    channelCreated: '[Chat] channel created',
    channelsList: '[Chat] Load channels',
    channelMessage: '[Chat]  New message channel',
};

export type State = {
    uid: string,
    activeChat: string | null, // UID of the user to whom I want to send messages
    users: [], // All database users
    messages: [],
    channels: []
};

export const initialState: State = {
    uid: '',
    activeChat: null, // UID of the user to whom I want to send messages.
    users: [], // All database users.
    messages: [], // The selected chat.
    channels: []
};