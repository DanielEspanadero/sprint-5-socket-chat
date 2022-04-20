# 💬 SPRINT 5: SOCKET CHAT 💬

## Menzione speciale 🙏🏻

_Questa chat e l'apprendimento di socket che mi hanno dato tanto mal di testa, l'ho imparato grazie a un corso di [Fernando Herrera](https://github.com/Klerith) su Udemy chiamato [React: Real-time applications with Socket . io](https://www.udemy.com/course/react-socket-io-fernando/), dove realizza diversi progetti utilizzando socket come un'applicazione di coda, mappe in tempo reale e chat._
_Voglio anche citare il mentore di questo bootcamp node.js presso [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcellona, ​​​​​​[Omar Olmedo](https:// github.com /StratocasterO), che si è occupato di correggerci e guidarci in tutti gli sprint fino al nostro arrivo, avendo un ruolo molto importante nella realizzazione di questa chat._

## A partire 🚀

_Queste istruzioni ti permetteranno di ottenere una copia funzionante del progetto sulla tua macchina locale per scopi di sviluppo e test._
_Il progetto ha due server, lato client e lato server per configurare la parte back-end (Socket, Json Web Token, REST apis...). Ricordarsi di avviare entrambi i server singolarmente, ciascuno su una porta diversa._

## Traduzioni 💬

_Questo file README è disponibile anche in altre lingue:_
- [Tedesco](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Catalano](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [Francese](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [Inglese](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [spagnolo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Portoghese](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [svedese](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Prerequisiti 📋

_Affinché il progetto funzioni correttamente, si consiglia di avere una serie di programmi installati e configurati correttamente:_

- [Codice Visual Studio](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installazione 🔧

_Ricordati di eseguire il seguente comando nel terminale sia nel frontend (client) che nel backend (server) per installare le dipendenze e che tutto funzioni correttamente:_
```
npm install
```

## Variabili d'ambiente .env 🪛

_Per utilizzare le variabili di ambiente e per far funzionare tutto correttamente, devi creare un file chiamato .env per il quale puoi trovare un template con i dati che ti servono nel file .config.env (ricorda che devi creare il file sia nel frontend come nel backend)._

## Comandi da eseguire ⌨️

⚠️ _PRIMA DI INIZIARE, RICORDA DI AVVIARE IL SERVER MONGODB_ ⚠️

_Una volta installati tutti i programmi e le dipendenze necessari, eseguire semplicemente il seguente comando sia sul frontend (Client) che sul backend (Server):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Cliente 💻

_La parte client è realizzata con react e dattiloscritto. Il progetto viene avviato con il comando create react app:_
```
npx create-react-app app-name --template typescript
```

_Il comando precedente crea già la struttura di base di un progetto react per lavorare in formato .tsx_

### Iscriviti ✍️

_Per registrarsi nell'applicazione è necessario fornire nome, cognome, email, password e scegliere un avatar tra tutti quelli mostrati._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Accedi 🚪

_Per accedere, dovrai inserire l'e-mail e la password che hai utilizzato per la registrazione._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Pagina iniziale della chat 🏡

_Dalla pagina principale è possibile accedere a tutte le funzionalità di cui disponi per l'utilizzo dell'applicazione. Sulla sinistra puoi scegliere di scrivere messaggi privati ​​agli utenti, creare una chat room o scrivere messaggi in stanze esistenti._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Per creare una nuova chat room, dovrai scegliere l'opzione "Canali" nella barra laterale._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Una volta creato il canale, chiunque sia registrato nell'applicazione potrà scriverci e comunicare con gli altri membri._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Tappi nella parte anteriore 📨

_Possiamo tracciare la configurazione dei socket sul frontend partendo dal percorso 'config > socketEvent.ts' dove tutti i messaggi sono personalizzati. In secondo luogo, avremo il percorso 'context > socketContext.tsx' dove verranno chiamate e configurate le trasmissioni.zioni fatte dal back-end. Infine, in 'hooks > useSocket.tsx' avremo diverse funzionalità attraverso un hook useState che sarà implementato nelle parti corrispondenti dell'applicazione._

## Server ⚙️

_Per creare il server ho usato express basato su classi (proprio come ho fatto in craps, ma questa volta usando TypeScript) combinato con socket.io_

_Il file del server si trova nel percorso 'models > server.ts' ed è creato in una classe per migliorare la scalabilità, poiché il codice è molto più pulito e più facile da lavorare che avere tutto sparso nelle funzioni._

_Un altro fatto curioso è che il file socket viene lavorato anche nelle classi per facilitare il lavoro con loro, poiché tutto funziona attraverso un evento (socketEvents()). Funziona anche con la fusione dei socket e la convalida JWT._

### Mangusta 📝

_Per la configurazione della mangusta sono stati seguiti i seguenti passaggi:_
_- Innanzitutto, la configurazione del database tramite la funzione connect() nel percorso 'database > config.ts'._
_- Poi la creazione di schemi e modelli (sono all'interno della cartella modelli) dei diversi canali, messaggi e utenti._
_- Infine la manipolazione di questi modelli nei controller corrispondenti per aggiungerlo al database._

### Manipolazione password (crittografia) 🔐

_Finalmente non potevo manipolare la password senza salvarla nel database come ci ha detto Omar a lezione, ma tramite la funzione genSaltSync() del modulo bcrypt, che crittografa la password in SHA-256 in un modo impossibile da annullare. Un'ulteriore convalida viene eseguita tramite la funzione compareSync() inclusa anche nel modulo bcrypt. In pratica equivale a validarlo con JWT._

## Autore ✒️

* **Daniel Españadero** - *Lavoro completo* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Licenza 📄

_Questo progetto è realizzato con una [licenza MIT](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_