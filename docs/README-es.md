# 💬 SPRINT 5: SOCKET CHAT 💬

## Mención especial 🙏🏻

_Este chat y el aprendizaje sobre sockets que tanto dolor de cabeza me han dado, lo he aprendido gracias a un curso de [Fernando Herrera](https://github.com/Klerith) en Udemy llamado [React: Aplicaciones en tiempo real con Socket .io](https://www.udemy.com/course/react-socket-io-fernando/), donde realiza diferentes proyectos usando socket como aplicación de colas, mapas en tiempo real y chat._
_También quiero mencionar al mentor de este bootcamp de node.js en [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelona, ​​[Omar Olmedo](https://github.com/StratocasterO), quien se ha encargado de corregirnos y guiarnos en todos los sprints hasta llegar aquí, teniendo un papel muy importante en la realización de este chat._

## Empezando 🚀

_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y prueba._
_El proyecto tiene dos servidores, el lado del cliente y el lado del servidor para configurar la parte backend (Sockets, Json Web Tokens, REST apis...). Recuerde iniciar ambos servidores individualmente, cada uno en un puerto diferente._

## Traducciones 💬

_Este archivo README también está disponible en otros idiomas:_
- [Alemán](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Catalán](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [Francés](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [Inglés](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [Italiano](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portugués](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [Sueco](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Requisitos previos 📋

_Para que el proyecto funcione correctamente, se recomienda tener instalados y configurados correctamente una serie de programas:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Instalación 🔧

_Recuerda ejecutar el siguiente comando en la terminal tanto en el frontend (cliente) como en el backend (servidor) para instalar las dependencias y que todo funcione correctamente:_
```
npm install
```

## Variables de entorno .env 🪛

_Para usar las variables de entorno y que todo funcione correctamente, tienes que crear un archivo llamado .env para el cual puedes encontrar una plantilla con los datos que necesitas en el archivo .config.env (Recuerda que tienes que crear el archivo tanto en el frontend como en el backend)._

## Comandos a ejecutar ⌨️

⚠️ _ANTES DE COMENZAR, RECUERDA TENER INICIADO EL SERVIDOR MONGODB_ ⚠️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el siguiente comando tanto en el frontend (Cliente) como en el backend (Servidor):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Cliente 💻

_La parte del cliente está hecha con react y typescript. El proyecto se inicia con el comando crear aplicación de react:_
```
npx create-react-app nombre-app --template typescript
```

_El comando anterior ya crea la estructura básica de un proyecto de react para trabajar en formato .tsx_

### Regístrate ✍️

_Para registrarse en la aplicación deberá proporcionar un nombre, apellido, correo electrónico, contraseña y elegir un avatar de todos los que se muestran._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Iniciar sesión 🚪

_Para iniciar sesión, deberá ingresar el correo electrónico y la contraseña que utilizó para registrarse._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Página de inicio del chat 🏡

_En la página principal puedes acceder a todas las funcionalidades que tienes para el uso de la aplicación. A la izquierda puede elegir entre escribir mensajes privados a los usuarios, crear una sala de chat o escribir mensajes en salas existentes._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Para crear una nueva sala de chat, deberá elegir la opción 'Canales' en la barra lateral._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Una vez creado el canal, cualquier persona registrada en la aplicación podrá escribir en él y comunicarse con el resto de miembros._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Enchufes en la parte delantera 📨

_Podemos rastrear la configuración de los sockets en el frontend comenzando con la ruta 'config > socketEvent.ts' donde se personalizan todos los mensajes. En segundo lugar tendremos la ruta 'context > socketContext.tsx' donde se llamarán y configurarán las emisiones realizadas desde el backend. Finalmente, en 'hooks > useSocket.tsx' tendremos diferentes funcionalidades a través de un hook useState que se implementará en las partes correspondientes de la aplicación._

## Servidor ⚙️

_Para crear el servidor usé express basado en clase (igual que hice en el juego de dados, pero esta vez usando TypeScript) combinado con socket.io_

_El archivo del servidor se encuentra en la ruta 'models > server.ts' y está hecho en una clase para mejorar la escalabilidad, ya que el código es mucho más limpio y fácil de trabajar que tenerlo todo disperso en funciones._

_Otro dato curioso es que el archivo socket también se trabaja en clases para una cuestión de facilidad a la hora de trabajar con ellos, ya que todo funciona a través de un evento (socketEvents()). Esto también funciona con la combinación de sockets junto con la validación JWT._

### Mongoose 📝

_Para la configuración de mongoose se han seguido los siguientes pasos:_
_- Primero, la configuración de la base de datos a través de la función connect() en la ruta 'database > config.ts'._
_- Luego la creación de esquemas y modelos (Están dentro de la carpeta de modelos) de los diferentes canales, mensajes y usuarios._
_- Finalmente la manipulación de estos modelos en los controladores correspondientes para agregarlo a la base de datos._

### Manipulación de contraseñas (cifrado) 🔐

_Finalmente no pude manipular la contraseña sin guardarla en la base de datos como nos dijo Omar en clase, sino a través de la función genSaltSync() del módulo bcrypt, que encripta la contraseña en SHA-256 de una manera que es imposible deshacer. La validación adicional se realiza a través de la función compareSync() también incluida en el módulo bcrypt. En la práctica es lo mismo que validarlo con JWT._

## Autor ✒️

* **Daniel Españadero** - *Trabajo completo* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Licencia 📄

_Este proyecto está realizado bajo una [licencia MIT](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_