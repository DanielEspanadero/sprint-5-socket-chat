# 💬 SPRINT 5: SOCKET CHAT 💬

## Special mention 🙏🏻

_This chat and learning about sockets that have given me so much headache, I have learned thanks to a course by [Fernando Herrera](https://github.com/Klerith) on Udemy called ['React: Real-time applications with Socket.io'](https://www.udemy.com/course/react-socket-io-fernando/), where he does different projects using socket such as a queuing application, real-time maps and chat._

## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._
_The project has two servers, the client side to create the 'seo friendly' routes and the server side to configure the backend part (Sockets, Json Web Tokens, REST apis...). Remember to start both servers individually, each on a different port._

## Translations 💬

_This README file is also available in other languages:_
- [Catalan](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [French](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [German](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Italian](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portuguese](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [Spanish](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Swedish](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Pre-requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and properly configured:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation 🔧

_Remember to execute the following command in the terminal both in the frontend (client) and in the backend (server) to install the dependencies and that everything works correctly:_
```
npm install
```

## Environment variables .env 🪛

_To use the environment variables and for everything to work correctly, you have to create a file called .env for which you can find a template with the data you need in the .config.env file (Remember that you have to create the file both in the frontend as in the backend)._

## Commands to execute ⌨️

⚠️ _BEFORE STARTING, REMEMBER TO HAVE THE MONGODB SERVER STARTED_ ⚠️

_Once all the necessary programs and dependencies are installed, simply run the following command on both the frontend (Client) and backend (Server):_
```
npm start
```

## Client 💻

_The client part is done with react and typescript. The project is started with the create react app command:_
```
npx create-react-app nombre-app --template typescript
```

_The previous command already creates the basic structure of a react project to work in .tsx format_

### Sign Up ✍️

_To register in the application you will have to provide a first name, last name, email, password and choose an avatar from all those shown._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Login 🚪

_To log in, you will have to enter the email and password you used to register._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

## Chat home page 🏡

_On the main page you can access all the functionalities that you have for the use of the application. On the left you can choose between writing private messages to users, creating a chat room or writing messages in existing rooms._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_To create a new chat room, you will have to choose the 'Channels' option in the sidebar._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Once the channel is created, any person registered in the application will be able to write in it and communicate with the rest of the members._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

## Sockets on the front-end 📨

_We can trace the configuration of the sockets in the frontend starting with the path 'config > socketEvent.ts' where all the messages are customized. Secondly, we will have the route 'context > socketContext.tsx' where the emissions made from the backend will be called and configured. Finally, in 'hooks > useSocket.tsx' we will have different functionalities through a useState hook that will be implemented in the corresponding parts of the application._

