# 💬 SPRINT 5: SOCKET CHAT 💬

## Menció especial 🙏🏻

_Aquest xat i l'aprenentatge sobre sockets que tant maldecap m'han donat, ho he après gràcies a un curs de [Fernando Herrera](https://github.com/Klerith) a Udemy anomenat [React: Aplicacions en temps real amb Socket .io](https://www.udemy.com/course/react-socket-io-fernando/), on realitza diferents projectes usant socket com a aplicació de cues, mapes en temps real i xat._
_També vull esmentar el mentor d'aquest bootcamp de node.js a [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelona, ​​[Omar Olmedo](https://github.com/StratocasterO), qui s'ha encarregat de corregir-nos i guiar-nos a tots els esprints fins arribar aquí, tenint un paper molt important en la realització d'aquest xat._

## Començant 🚀

_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local per a fins de desenvolupament i prova._
_El projecte té dos servidors, el costat del client i el costat del servidor per configurar la part backend (Sockets, Json Web Tokens, REST apis...). Recordeu iniciar ambdós servidors individualment, cadascun en un port diferent._

## Traduccions 💬

_Aquest fitxer README també està disponible en altres idiomes:_
- [Alemany](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Castellá](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Francès](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-fr.md)
- [Anglès](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [Italià](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portuguès](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [Sueco](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Requisits previs 📋

_Perquè el projecte funcioni correctament, es recomana tenir instal·lats i configurats correctament una sèrie de programes:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Instal·lació 🔧

_Recorda executar la següent ordre a la terminal tant al frontend (client) com al backend (servidor) per instal·lar les dependències i que tot funcioni correctament:_
````
npm install
````

## Variables d'entorn .env 🪛

_Per utilitzar les variables d'entorn i que tot funcioni correctament, has de crear un fitxer anomenat .env per al qual pots trobar una plantilla amb les dades que necessites al fitxer .config.env (Recorda que has de crear el fitxer tant al frontend com al backend)._

## Comandes a executar ⌨️

⚠️ _ABANS DE COMENÇAR, RECORDA TENIR INICIAT EL SERVIDOR MONGODB_ ⚠️

_Una vegada que tots els programes i dependències necessaris estiguin instal·lats, simplement executeu la següent ordre tant al frontend (Client) com al backend (Servidor):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Client 💻

_La part del client està feta amb react i typescript. El projecte comença amb l'ordre crear aplicació de react:_
````
npx create-react-app nom-app --template typescript
````

_La comanda anterior ja crea l'estructura bàsica d'un projecte de react per treballar en format .tsx_

### Registra't ✍️

_Per registrar-se a l'aplicació haurà de proporcionar un nom, cognom, correu electrònic, contrasenya i triar un avatar de tots els que es mostren._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Iniciar sessió 🚪

_Per iniciar sessió, haureu d'ingressar el correu electrònic i la contrasenya que vau utilitzar per registrar-vos._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Pàgina d'inici del xat 🏡

_A la pàgina principal podeu accedir a totes les funcionalitats que teniu per a l'ús de l'aplicació. A l'esquerra podeu triar entre escriure missatges privats als usuaris, crear una sala de xat o escriure missatges a sales existents._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Per crear una nova sala de xat, haureu de triar l'opció 'Canals' a la barra lateral._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Una vegada creat el canal, qualsevol persona registrada a l'aplicació podrà escriure-hi i comunicar-se amb la resta de membres._

![Demo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Endolls a la part davantera 📨

_Podem rastrejar la configuració dels sockets al frontend començant amb la ruta 'config > socketEvent.ts' on es personalitzen tots els missatges. En segon lloc tindrem la ruta 'context > socketContext.tsx' on es trucaran i configuraran les emissionsrealitzades des del backend. Finalment, a 'hooks > useSocket.tsx' tindrem diferents funcionalitats a través d'un hook useState que s'implementarà a les parts corresponents de l'aplicació._

## Servidor ⚙️

_Per crear el servidor vaig fer servir express basat en classe (igual que vaig fer en el joc de daus, però aquesta vegada usant TypeScript) combinat amb socket.io_

_L'arxiu del servidor es troba a la ruta 'models > server.ts' i està fet en una classe per millorar l'escalabilitat, ja que el codi és molt més net i fàcil de treballar que tenir-ho tot dispers en funcions._

_Una altra dada curiosa és que larxiu socket també es treballa a classes per a una qüestió de facilitat a lhora de treballar amb ells, ja que tot funciona a través dun esdeveniment (socketEvents()). Això també funciona amb la combinació de sockets juntament amb la validació JWT._

### Mongoose 📝

_Per a la configuració de mongoose s'han seguit els passos següents:_
_- Primer, la configuració de la base de dades a través de la funció connect() a la ruta 'database > config.ts'._
_- Després la creació d'esquemes i models (estan dins de la carpeta de models) dels diferents canals, missatges i usuaris._
_- Finalment la manipulació daquests models en els controladors corresponents per afegir-lo a la base de dades._

### Manipulació de contrasenyes (xifrat) 🔐

_Finalment no vaig poder manipular la contrasenya sense desar-la a la base de dades com ens va dir Omar a classe, sinó a través de la funció genSaltSync() del mòdul bcrypt, que encripta la contrasenya a SHA-256 d'una manera que és impossible desfer. La validació addicional es realitza a través de la funció compareSync() també inclosa al mòdul bcrypt. A la pràctica és el mateix que validar-ho amb JWT._

## Autor ✒️

* **Daniel Españadero** - *Treball complet* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Llicència 📄

_Aquest projecte està realitzat sota una [llicència MIT](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_