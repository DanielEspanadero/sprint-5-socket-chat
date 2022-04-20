# 💬 SPRINT 5: SOCKET CHAT 💬

## Menção especial 🙏🏻

_Esse papo e aprendizado sobre sockets que me deram tanta dor de cabeça, aprendi graças a um curso do [Fernando Herrera](https://github.com/Klerith) na Udemy chamado [React: Real-time applications with Socket . io](https://www.udemy.com/course/react-socket-io-fernando/), onde realiza diversos projetos utilizando socket como aplicação de filas, mapas em tempo real e chat._
_Gostaria também de mencionar o mentor deste bootcamp node.js na [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelona, ​​​​​​​[Omar Olmedo](https:// github.com /StratocasterO), que se encarregou de nos corrigir e nos guiar em todos os sprints até chegarmos aqui, tendo um papel muito importante na realização deste chat._

## Começando 🚀

_Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste._
_O projeto possui dois servidores, o lado cliente e o lado servidor para configurar a parte de backend (Sockets, Json Web Tokens, APIs REST...). Lembre-se de iniciar os dois servidores individualmente, cada um em uma porta diferente._

## Traduções 💬

_Este arquivo README também está disponível em outros idiomas:_
- [Alemão](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Catalão](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [Francês](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [Inglês](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [Italiano](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Espanhol](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Sueco](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Pré-requisitos 📋

_Para que o projeto funcione corretamente, é recomendável ter uma série de programas instalados e configurados corretamente:_

- [Código do Visual Studio](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

##Instalação 🔧

_Lembre-se de executar o seguinte comando no terminal tanto no frontend (cliente) quanto no backend (servidor) para instalar as dependências e que tudo funcione corretamente:_
```
npm install
```

## Variáveis ​​de ambiente .env 🪛

_Para usar as variáveis ​​de ambiente e para que tudo funcione corretamente, você tem que criar um arquivo chamado .env para o qual você pode encontrar um template com os dados que você precisa no arquivo .config.env (Lembre-se que você tem que criar o arquivo tanto no front-end como no back-end)._

## Comandos para executar ⌨️

⚠️ _ANTES DE COMEÇAR, LEMBRE-SE DE INICIAR O SERVIDOR MONGODB_ ⚠️

_Depois que todos os programas e dependências necessários estiverem instalados, basta executar o seguinte comando no frontend (Cliente) e no backend (Servidor):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Cliente 💻

_A parte do cliente é feita com react e typescript. O projeto é iniciado com o comando create react app:_
```
npx create-react-app app-name --template typescript
```

_O comando anterior já cria a estrutura básica de um projeto react para funcionar no formato .tsx_

### Inscreva-se ✍️

_Para se cadastrar no aplicativo você deve fornecer um nome, sobrenome, e-mail, senha e escolher um avatar dentre todos os mostrados._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Entrar 🚪

_Para fazer login, você precisará digitar o e-mail e a senha que usou para se registrar._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Página inicial do bate-papo 🏡

_Na página principal você pode acessar todas as funcionalidades que você tem para o uso do aplicativo. À esquerda, você pode optar por escrever mensagens privadas para usuários, criar uma sala de bate-papo ou escrever mensagens para salas existentes._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Para criar uma nova sala de bate-papo, você precisará escolher a opção 'Canais' na barra lateral._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Assim que o canal for criado, qualquer pessoa cadastrada no aplicativo poderá escrever nele e se comunicar com outros membros._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Plugues na frente 📨

_Podemos rastrear a configuração dos sockets no frontend começando pelo caminho 'config > socketEvent.ts' onde todas as mensagens são customizadas. Em segundo lugar, teremos o caminho 'context > socketContext.tsx' onde os broadcasts serão chamados e configurados.ções feitas a partir do back-end. Por fim, em 'hooks > useSocket.tsx' teremos diferentes funcionalidades através de um hook useState que será implementado nas partes correspondentes da aplicação._

##Servidor ⚙️

_Para criar o servidor usei class-based express (assim como fiz no craps, mas desta vez usando TypeScript) combinado com socket.io_

_O arquivo do servidor está localizado no caminho 'models > server.ts' e é feito em uma classe para melhorar a escalabilidade, já que o código é muito mais limpo e fácil de trabalhar do que ter tudo espalhado em funções._

_Outro fato curioso é que o arquivo socket também é trabalhado em classes para facilitar o trabalho com elas, pois tudo funciona através de um evento (socketEvents()). Isso também funciona com a mesclagem de soquete junto com a validação do JWT._

### Mangusto 📝

_Para a configuração do mangusto foram seguidos os seguintes passos:_
_- Primeiramente, a configuração do banco de dados através da função connect() no caminho 'database > config.ts'._
_- Em seguida, a criação de esquemas e modelos (Eles estão dentro da pasta de modelos) dos diferentes canais, mensagens e usuários._
_- Finalmente a manipulação desses modelos nos controladores correspondentes para adicioná-lo ao banco de dados._

### Manipulação de senha (criptografia) 🔐

_Finalmente não consegui manipular a senha sem salvá-la no banco de dados como o Omar nos disse em aula, mas através da função genSaltSync() do módulo bcrypt, que criptografa a senha em SHA-256 de forma impossível de desfazer. A validação adicional é feita através da função compareSync() também incluída no módulo bcrypt. Na prática é o mesmo que validar com JWT._

## Autor ✒️

* **Daniel Españadero** - *Trabalho completo* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Licença 📄

_Este projeto é feito sob uma [licença MIT](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_