
// que fait donc ce code ??

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);


// Il crée un mini-serveur web qui renvoie un message "Salut tout le monde" dans tous les cas,
// quelle que soit la page demandée. Ce serveur est lancé sur le port 8080 à la dernière ligne.
// Disséquons du code
// Décomposons le code :
// var http = require('http');   require effectue un appel à la bibliothèque.
// Ici, la bibliothèque 'http' qui nous permet de créer un serveur web.
// Il existe des tonnes de bibliothèque comme celle-là, la plupart pouvant être
// téléchargées avec NPM, le gestionnaire de paquets de Node.js (on apprendra à
// l'utiliser plus tard).
// La variable http représente un objet JavaScript qui va nous permettre de lancer
// un serveur web. C'est justement ce qu'on fait avec : var server = http.createServer();
