# 💬 SPRINT 5: SOCKET CHAT 💬

## Särskilt omnämnande 🙏🏻

_Den här chatten och lärande om sockets som har gett mig så mycket huvudvärk, har jag lärt mig tack vare en kurs av [Fernando Herrera](https://github.com/Klerith) på Udemy som heter [React: Realtime applications with Socket . io](https://www.udemy.com/course/react-socket-io-fernando/), där han utför olika projekt med hjälp av socket som en köapplikation, realtidskartor och chatt._
_Jag vill också nämna mentorn för denna node.js bootcamp på [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelona, ​​​​​​[Omar Olmedo](https:// github.com /StratocasterO), som har varit ansvarig för att rätta oss och vägleda oss i alla spurter tills vi kom hit, och har en mycket viktig roll i förverkligandet av den här chatten._

## Börjar 🚀

_De här instruktionerna låter dig få en arbetskopia av projektet på din lokala dator för utvecklings- och testsyften._
_Projektet har två servrar, klientsidan och serversidan för att konfigurera backend-delen (Sockets, Json Web Tokens, REST apis...). Kom ihåg att starta båda servrarna individuellt, var och en på olika portar._

## Översättningar 💬

_Denna README-fil är även tillgänglig på andra språk:_
- [tyska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [katalanska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [franska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [engelska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [italienska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portugisiska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [spanska](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)

## Förutsättningar 📋

_För att projektet ska fungera korrekt rekommenderas det att ha en serie program installerade och korrekt konfigurerade:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js och npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation 🔧

_Kom ihåg att köra följande kommando i terminalen både i frontend (klient) och i backend (server) för att installera beroenden och att allt fungerar korrekt:_
```
npm install
```

## Miljövariabler .env 🪛

_För att använda miljövariablerna och för att allt ska fungera korrekt måste du skapa en fil som heter .env som du kan hitta en mall för med den data du behöver i filen .config.env (Kom ihåg att du måste skapa filen både i frontend som i backend)._

## Kommandon att köra ⌨️

⚠️ _INNAN DU STARTAR, KOM IHÅG ATT HA MONGODB-SERVERN ATT STARTA_ ⚠️

_När alla nödvändiga program och beroenden är installerade kör du helt enkelt följande kommando på både frontend (klient) och backend (server):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Kund 💻

_Klientdelen är gjord med react och typscript. Projektet startas med kommandot create react app:_
```
npx create-react-app app-namn --mall typskript
```

_Det föregående kommandot skapar redan grundstrukturen för ett react-projekt för att fungera i .tsx-format_

### Registrera dig ✍️

_För att registrera dig i applikationen måste du ange ett förnamn, efternamn, e-postadress, lösenord och välja en avatar bland alla som visas._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Logga in 🚪

_För att logga in måste du ange e-postadressen och lösenordet du använde för att registrera dig._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Chatthemsida 🏡

_På huvudsidan kan du komma åt alla funktioner du har för användningen av applikationen. Till vänster kan du välja att skriva privata meddelanden till användare, skapa ett chattrum eller skriva meddelanden till befintliga rum._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_För att skapa ett nytt chattrum måste du välja alternativet "Kanaler" i sidofältet._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_När kanalen har skapats kommer alla som är registrerade i applikationen att kunna skriva i den och kommunicera med andra medlemmar._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Pluggar i fronten 📨

_Vi kan spåra konfigurationen av sockets på frontend med början med sökvägen 'config > socketEvent.ts' där alla meddelanden är anpassade. För det andra kommer vi att ha sökvägen 'context > socketContext.tsx' där sändningarna kommer att anropas och konfigureras.tioner gjorda från backend. Slutligen, i 'hooks > useSocket.tsx' kommer vi att ha olika funktioner genom en useState-hook som kommer att implementeras i motsvarande delar av applikationen._

## Server ⚙️

_För att skapa servern använde jag klassbaserad express (precis som jag gjorde i craps, men den här gången med TypeScript) kombinerat med socket.io_

_Serverfilen ligger i sökvägen 'modeller > server.ts' och är gjord i en klass för att förbättra skalbarheten, eftersom koden är mycket renare och lättare att arbeta med än att ha allt utspridda i funktioner._

_Ett annat konstigt faktum är att socket-filen också används i klasser för att underlätta arbetet med dem, eftersom allt fungerar genom en händelse (socketEvents()). Detta fungerar även med socket-fusion tillsammans med JWT-validering._

### Mongoose 📝

_För konfigurationen av mongoose har följande steg följts:_
_- Först, konfigurationen av databasen genom funktionen connect() i sökvägen 'database > config.ts'._
_- Sedan skapas scheman och modeller (de finns i mappen modeller) för de olika kanalerna, meddelandena och användarna._
_- Äntligen manipuleringen av dessa modeller i motsvarande kontroller för att lägga till den i databasen._

### Lösenordsmanipulation (kryptering) 🔐

_Äntligen kunde jag inte manipulera lösenordet utan att spara det i databasen som Omar sa till oss i klassen, utan genom funktionen genSaltSync() i bcrypt-modulen, som krypterar lösenordet i SHA-256 på ett sätt som är omöjligt att ångra. Ytterligare validering görs via funktionen compareSync() som också ingår i bcrypt-modulen. I praktiken är det samma sak som att validera det med JWT._

## Författare ✒️

* **Daniel Españadero** - *Fullständigt arbete* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Licens 📄

_Detta projekt är gjort under en [MIT-licens](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_