# 💬 SPRINT 5: SOCKET CHAT 💬

## Mention spéciale 🙏🏻

_Ce chat et cet apprentissage sur les sockets qui m'ont donné tant de maux de tête, je l'ai appris grâce à un cours de [Fernando Herrera](https://github.com/Klerith) sur Udemy intitulé [React : Applications en temps réel avec Socket . io](https://www.udemy.com/course/react-socket-io-fernando/), où il réalise différents projets utilisant socket tels qu'une application de file d'attente, des cartes en temps réel et le chat._
_Je veux aussi mentionner le mentor de ce bootcamp node.js à [IT Academy](https://www.barcelonactiva.cat/es/itacademy#mesinfo) Barcelone, ​​​​[Omar Olmedo](https:// github.com /StratocasterO), qui s'est chargé de nous corriger et de nous guider dans tous les sprints jusqu'à ce que nous en soyons arrivés, ayant un rôle très important dans la réalisation de ce chat._

## Démarrage 🚀

_Ces instructions vous permettront d'obtenir une copie de travail du projet sur votre machine locale à des fins de développement et de test._
_Le projet dispose de deux serveurs, le côté client et le côté serveur pour configurer la partie backend (Sockets, Json Web Tokens, REST apis...). N'oubliez pas de démarrer les deux serveurs individuellement, chacun sur un port différent._

## Traductions 💬

_Ce fichier README est également disponible dans d'autres langues :_
- [Allemand](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-de.md)
- [Catalan](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-cat.md)
- [Espagnol](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-es.md)
- [Anglais](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/README.md)
- [Italien](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-it.md)
- [Portugais](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-pt.md)
- [Suédois](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/README-se.md)

## Prérequis 📋

_Pour que le projet fonctionne correctement, il est recommandé d'avoir une série de programmes installés et configurés correctement :_

- [Code Visual Studio] (https://code.visualstudio.com/download)
- [Node.js et npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation 🔧

_N'oubliez pas d'exécuter la commande suivante dans le terminal à la fois dans le frontend (client) et dans le backend (serveur) pour installer les dépendances et que tout fonctionne correctement :_
```
npm install
```

## Variables d'environnement .env 🪛

_Pour utiliser les variables d'environnement et pour que tout fonctionne correctement, vous devez créer un fichier appelé .env pour lequel vous pouvez trouver un modèle avec les données dont vous avez besoin dans le fichier .config.env (N'oubliez pas que vous devez créer le fichier à la fois dans le frontend comme dans le backend)._

## Commandes à exécuter ⌨️

⚠️ _AVANT DE COMMENCER, N'OUBLIEZ PAS DE FAIRE DÉMARRER LE SERVEUR MOGODB_ ⚠️

_Une fois tous les programmes et dépendances nécessaires installés, exécutez simplement la commande suivante à la fois sur le frontend (Client) et le backend (Server):_
_Server:_
```
npm run dev
```
_Client:_
```
npm start
```

## Client 💻

_La partie client est réalisée avec react et tapuscrit. Le projet est démarré avec la commande create react app :_
```
npx create-react-app nom-application --template typescript
```

_La commande précédente crée déjà la structure de base d'un projet React pour travailler au format .tsx_

### Inscrivez-vous ✍️

_Pour vous inscrire dans l'application, vous devez fournir un prénom, un nom, un e-mail, un mot de passe et choisir un avatar parmi tous ceux affichés._

![Démo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/5.png)

### Connexion 🚪

_Pour vous connecter, vous devrez entrer l'e-mail et le mot de passe que vous avez utilisés pour vous inscrire._

![Démo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/4.png)

### Page d'accueil du chat 🏡

_Sur la page principale, vous pouvez accéder à toutes les fonctionnalités dont vous disposez pour l'utilisation de l'application. Sur la gauche, vous pouvez choisir d'écrire des messages privés aux utilisateurs, de créer un salon de discussion ou d'écrire des messages dans des salons existants._

![Démo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/1.png)

_Pour créer une nouvelle salle de discussion, vous devrez choisir l'option "Chaînes" dans la barre latérale._

![Démo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/2.png)

_Une fois le canal créé, toute personne inscrite dans l'application pourra y écrire et communiquer avec les autres membres._

![Démo](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/docs/3.png)

### Se branche à l'avant 📨

_On peut tracer la configuration des sockets sur le frontend en commençant par le chemin 'config > socketEvent.ts' où tous les messages sont personnalisés. Deuxièmement, nous aurons le chemin 'context > socketContext.tsx' où les diffusions seront appelées et configurées.tions faites à partir du backend. Enfin, dans 'hooks > useSocket.tsx', nous aurons différentes fonctionnalités via un hook useState qui sera implémenté dans les parties correspondantes de l'application._

## Serveur ⚙️

_Pour créer le serveur, j'ai utilisé l'express basé sur les classes (comme je l'ai fait au craps, mais cette fois en utilisant TypeScript) combiné avec socket.io_

_Le fichier du serveur est situé dans le chemin 'models > server.ts' et est créé dans une classe pour améliorer l'évolutivité, car le code est beaucoup plus propre et plus facile à utiliser que de le disperser dans des fonctions._

_Un autre fait curieux est que le fichier socket est également travaillé dans les classes pour faciliter leur utilisation, puisque tout fonctionne via un événement (socketEvents()). Cela fonctionne également avec la fusion de sockets avec la validation JWT._

### Mangouste 📝

_Pour la configuration de la mangouste, les étapes suivantes ont été suivies :_
_- Tout d'abord, la configuration de la base de données via la fonction connect() dans le chemin 'database > config.ts'._
_- Ensuite, la création de schémas et de modèles (ils se trouvent dans le dossier des modèles) des différents canaux, messages et utilisateurs._
_- Enfin la manipulation de ces modèles dans les contrôleurs correspondants pour l'ajouter à la base de données._

### Manipulation de mot de passe (cryptage) 🔐

_Enfin, je ne pouvais pas manipuler le mot de passe sans l'enregistrer dans la base de données comme Omar nous l'a dit en classe, mais via la fonction genSaltSync() du module bcrypt, qui chiffre le mot de passe en SHA-256 d'une manière impossible à annuler. Une validation supplémentaire est effectuée via la fonction compareSync() également incluse dans le module bcrypt. En pratique, cela revient à le valider avec JWT._

## Auteur ✒️

* **Daniel Españadero** - *Travail complet* - [DanielEspanadero](https://github.com/DanielEspanadero)

## Licence 📄

_Ce projet est réalisé sous une [licence MIT](https://github.com/DanielEspanadero/sprint-5-socket-chat/blob/main/LICENSE)_