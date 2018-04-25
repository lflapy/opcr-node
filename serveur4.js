var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('ici accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave a vins, ces bouteilles sont a moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, on est en privé ici !');
    }
    else {
        res.write('404,  ho he, on est pas ouvert,  404')
    }
    res.end();
});
server.listen(8080);
