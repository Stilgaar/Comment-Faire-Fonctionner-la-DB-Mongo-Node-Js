// c'est le 'constructeur' que j'ai crée et utilisé par la suite dans le recup.js
// alors ouais j'aurais pu tout de suite l'utiliser là bas vu qu'il y en a qu'un
// si vous avez plusieurs constructeurs du même genre, autant tous les 
// rassembler au même endroit ?

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema( {

        // la j'ai mis toutes le sinfos en String, c'est bien entendu pas le but
        // le sorcier aurait très bien pu être en Number
        // et le mage complètement Boolean
        name: String,
        first_name: String,
        mail: String,
        mage: String,
        sorcier: String
})

// si j'ai bien pigé, là il crée un "user" grâce à UserShema que nous avons
// crée juste au dessus. 
const UserModel = mongoose.model("user", UserSchema)

// on oublie pas d'exporter. 
module.exports = UserModel;