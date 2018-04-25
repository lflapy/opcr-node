var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('nouveaujoueur', function(message) {
    console.log(message);
});

// jeu.emit('gameover', 'Vous avez perdu !');
jeu.emit('nouveaujoueur', 'Mario, 35 ans'); // Envoie le nom d'un nouveau joueur qui arrive et son âge
