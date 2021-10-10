const express = require('express');
const router = express.Router();
const data = require('../controlleur/recup')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });


// Quand on se rend sur contact, celui ci génére la page data.ejs.
// Je suppose qu'une fois relié au front, faudra les relier à nos pages
// spécifiques en React. (Faut vraiment que je vois
// comment relier le front au back)
router.get('/contact', function(req,res, next) {
        res.render('data.ejs')     
        res.send('merci')  
});


// la fonction post récupére les informations envoyés dans le body
// le res send, envoi merci dans la console et non sur la page.
router.post('/contact', data.handleForm, function (req,res, next) {
  res.send('merci')
}
)

// on oublie jamais d'exporter
module.exports = router;
