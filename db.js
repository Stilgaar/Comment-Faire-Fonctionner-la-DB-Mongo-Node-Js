// mongoose est à installer, noubliez pas de le NPM t'as vu ? 
// n'oubliez pas d'invoquer votre recup.js et votre form.js. 

const mongoose = require('mongoose')
const UserModel = require('./controlleur/form')
const data = require('./controlleur/recup')

// la c'est Antonin qui l'avais écrit comme ça, ça aurait pu être un peu plus simple du genre :
// cinst DB_URI = mongodb://localhost:27017/user
// mais lorsque vous allez travailler avec plusiers DB en même temps je suppose que cette ecriture plus
// sexy sera votre meilleure alliée. il suffira d'utiliser dautres consts pour "user" par exemple
// databaseComments = "comments" enfin tu vois quoi  ?
const protocolMongo = "mongodb"
const hostMongo = "localhost"
const portMongo = "27017"
const databaseName = "user"

const DB_URI = `${protocolMongo}://${hostMongo}:${portMongo}/${databaseName}`

// et la c'est la commande qui envoi les données sur le mongo. 
// je sais plus trop à quoi sert le catch(console.log) mais antonin l'avait écris alors s'il l'écris
// c'est que ça devait être pas mal.
mongoose.connect(DB_URI).then(() => {
    console.log('*** CONNECTED TO DB ***')
    UserModel.insertMany(data).then(() => console.log("done")).catch(console.log)
    
})