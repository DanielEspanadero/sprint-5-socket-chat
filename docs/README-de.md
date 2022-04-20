# 💬 SPRINT 5: SOCKET CHAT 💬

## Besondere Erwähnung 🙏🏻

_Dieser Chat und das Lernen über Sockets, die mir so viel Kopfzerbrechen bereitet haben, habe ich dank eines Kurses von [Fernando Herrera](https://github.com/Klerith) auf Udemy mit dem Titel [React: Real-time applications with Socket . io](https://www.udemy.com/course/react-socket-io-fernando/), wo er verschiedene Projekte mit Socket durchführt, wie z. B. eine Warteschlangenanwendung, Echtzeitkarten und Chat._
_Ich möchte auch den Mentor dieses node.js-Bootcamps an der [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelona, ​​​​​​[Omar Olmedo](https:// github.com /StratocasterO), der dafür verantwortlich war, uns zu korrigieren und uns in allen Sprints zu führen, bis wir hier ankamen, und der eine sehr wichtige Rolle bei der Realisierung dieses Chats spielte._

## Ab 🚀

_Mit diesen Anweisungen können Sie zu Entwicklungs- und Testzwecken eine Arbeitskopie des Projekts auf Ihrem lokalen Computer erstellen._
_Das Projekt hat zwei Server, die Clientseite und die Serverseite, um den Backend-Teil zu konfigurieren (Sockets, Json Web Tokens, REST-APIs ...). Denken Sie daran, beide Server einzeln zu starten, jeden an einem anderen Port._

## Übersetzungen 💬

_Diese README-Datei ist auch in anderen Sprachen verfügbar:_
- [Spanisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Katalanisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [Französisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [Englisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [Italienisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portugiesisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [Schwedisch](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Voraussetzungen 📋

_Damit das Projekt korrekt funktioniert, wird empfohlen, eine Reihe von Programmen installiert und richtig konfiguriert zu haben:_

- [Visual Studio-Code] (https://code.visualstudio.com/download)
- [Node.js und npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation 🔧

_Denken Sie daran, den folgenden Befehl im Terminal sowohl im Frontend (Client) als auch im Backend (Server) auszuführen, um die Abhängigkeiten zu installieren und dass alles korrekt funktioniert:_
```
npm install
```

## Umgebungsvariablen .env 🪛

_Um die Umgebungsvariablen zu verwenden und damit alles richtig funktioniert, müssen Sie eine Datei namens .env erstellen, für die Sie eine Vorlage mit den benötigten Daten in der Datei .config.env finden (Denken Sie daran, dass Sie die Datei sowohl erstellen müssen im Frontend wie im Backend)._

## Befehle zum Ausführen von ⌨️

⚠️ _BEVOR SIE STARTEN, DENKEN SIE DARAN, DEN MONGODB-SERVER GESTARTET ZU HABEN_ ⚠️

_Sobald alle erforderlichen Programme und Abhängigkeiten installiert sind, führen Sie einfach den folgenden Befehl sowohl auf dem Frontend (Client) als auch auf dem Backend (Server) aus:_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Kunde 💻

_Der Kundenteil wird mit React und Typoskript erstellt. Das Projekt wird mit dem Create React App-Befehl gestartet:_
```
npx create-react-app app-name --template typescript
```

_Der vorherige Befehl erstellt bereits die Grundstruktur eines Reaktionsprojekts, um im .tsx-Format zu arbeiten_

### Melde dich an ✍️

_Um sich in der Anwendung zu registrieren, müssen Sie einen Vornamen, Nachnamen, eine E-Mail-Adresse und ein Passwort angeben und einen Avatar aus allen angezeigten auswählen._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Anmelden 🚪

_Um sich anzumelden, müssen Sie die E-Mail-Adresse und das Passwort eingeben, mit denen Sie sich registriert haben._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Chat-Startseite 🏡

_Auf der Hauptseite können Sie auf alle Funktionalitäten zugreifen, die Sie für die Nutzung der Anwendung haben. Auf der linken Seite können Sie auswählen, ob Sie private Nachrichten an Benutzer schreiben, einen Chatroom erstellen oder Nachrichten an bestehende Chatrooms schreiben möchten._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Um einen neuen Chatroom zu erstellen, müssen Sie die Option „Kanäle“ in der Seitenleiste auswählen._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Sobald der Kanal erstellt wurde, kann jeder, der in der Anwendung registriert ist, darin schreiben und mit anderen Mitgliedern kommunizieren._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Stecker vorne 📨

_Wir können die Konfiguration der Sockets auf dem Frontend verfolgen, beginnend mit dem Pfad 'config > socketEvent.ts', wo alle Nachrichten angepasst werden. Zweitens haben wir den Pfad ‚context > socketContext.tsx‘, wo die Broadcasts aufgerufen und konfiguriert werden.aus dem Backend gemacht. Schließlich haben wir in ‚Hooks > useSocket.tsx‘ verschiedene Funktionalitäten durch einen useState-Hook, der in den entsprechenden Teilen der Anwendung implementiert wird._

## Server ⚙️

_Um den Server zu erstellen, habe ich klassenbasiertes Express (genau wie beim Craps, aber diesmal mit TypeScript) in Kombination mit socket.io verwendet._

_Die Serverdatei befindet sich im Pfad 'models > server.ts' und wurde in einer Klasse erstellt, um die Skalierbarkeit zu verbessern, da der Code viel sauberer und einfacher zu handhaben ist, als wenn alles in Funktionen verstreut wäre._

_Eine weitere merkwürdige Tatsache ist, dass die Socket-Datei auch in Klassen bearbeitet wird, um die Arbeit mit ihnen zu erleichtern, da alles über ein Ereignis (socketEvents()) funktioniert. Dies funktioniert auch mit dem Zusammenführen von Sockets zusammen mit der JWT-Validierung._

### Mungo 📝

_Für die Konfiguration von Mongoose wurden die folgenden Schritte befolgt:_
_- Zunächst die Konfiguration der Datenbank über die Funktion connect() im Pfad 'database > config.ts'._
_- Dann die Erstellung von Schemata und Modellen (Sie befinden sich im Modellordner) der verschiedenen Kanäle, Nachrichten und Benutzer._
_- Schließlich die Manipulation dieser Modelle in den entsprechenden Controllern, um sie der Datenbank hinzuzufügen._

### Passwortmanipulation (Verschlüsselung) 🔐

_Schließlich konnte ich das Passwort nicht manipulieren, ohne es in der Datenbank zu speichern, wie Omar uns im Unterricht sagte, sondern durch die Funktion genSaltSync() des bcrypt-Moduls, die das Passwort in SHA-256 auf eine Weise verschlüsselt, die nicht rückgängig gemacht werden kann. Eine zusätzliche Validierung erfolgt über die Funktion CompareSync(), die ebenfalls im bcrypt-Modul enthalten ist. In der Praxis ist es dasselbe wie die Validierung mit JWT._

## Autor ✒️

* **Daniel Españadero** - *Volle Arbeit* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Lizenz 📄

_Dieses Projekt steht unter einer [MIT-Lizenz](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_