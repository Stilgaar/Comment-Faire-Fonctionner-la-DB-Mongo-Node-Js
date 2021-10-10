// nous appellons le UserModels que nous avons crée dans forms.js
// celui ci est une sorte de constructeur comme dans Js vanilla pour crée
// des entrées dans un tableau. 
// ici les REQ.BODY ce qui est récupéré dans l'input de data.ejs.
// je l'ai appellé DATA comme cacahouette
// UserModel est par contre une fonction de mongoose.
const UserModel = require('./form');


// data va servir à topper les infos de l'input donc
const data = {

    handleForm(req, res, next) {


        // ici je l'ai écris de façon sexy mais j'aurais pu facilement l'écrire de la 
        // façon suivante : 
        // let name = req.body.name
        // let first_name = req.body.first_name
        // notez qu'il va récuperer ce qui correspond au "NAME" dans vos inputs
        // ouais c'est un peu contre-intuitif mais c'est commme ça.
        let { name, first_name, mail, mage, sorcier } = req.body
        console.log(name + first_name + mail + mage + sorcier)

        // la c'est pour faire apparaitre un message d'erreur si une des 
        // valeurs n'est pas rentré. 
        if (!name | !first_name | !mail | !mage | !sorcier)
            return res.sendStatus(400)

            UserModel.create({
                name,
                first_name,
                mail,
                mage,
                sorcier
            }).then(() => console.log("Nouvel Utilisateur")
            )
        res.redirect('/')            
}}

// on oublie jamais d'exporter
module.exports = data;