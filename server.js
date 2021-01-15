var math = require('lodash');
var mod = require('./mesModules');
var os = require('os');
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// ----------- 1er Méthode:

//  -----la méthode res. end() permet d'envoyer le ou les valeurs passées en paramètre dans le navigator
// ------ainsi une page html s'afficihe ds le browser

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "ContentType": "text/plain" });
//     // res.end('Hello Wold');
//     res.write('<!DOCTYPE html>' +
//       '<html>' +
//         '<head>' +
//             '<meta charset="UTF-8"/>' +
//             '<title>Ma page Node js</title>' +
//        '</head>' +
//        '<body>' +
//             '<p>Hello world ! est ce que ca marche </p>' +
//        '</body>' +
//     '</html>'
//     );
// });

// -------------------2ème Méthode -----------------

// var server = http.createServer(function(req, res) {
//     // la variable => chemin permet de récupérer une url et de la renvoyer dans la réponse
//     // pour la réafficher dans la page
//     var page = url.parse(req.url).pathname;
//     console.log(chemin);
//     res.writeHead(200, { ContentType: 'text/plain' });
//     res.write('Hello World, this is requested page : ' + page);
//     res.end();
// });


// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤ Version Damien ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤

// http://localhost:8080/mapage
// http://localhost:8080
// var server = http.createServer(function(req, res) {
//     var page = url.parse(req.url).pathname;
//     console.log(page);
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     res.write('Hello world, this is your requested page : ' + page);
//     res.end();
// });

//  ---------------- Query String ------------------------

// http://localhost:8080?prenom=john&nom=wick
// var server = http.createServer(function(req, res) {
//      // la variable => chemin permet de récupérer une url et de la renvoyer dans la réponse
//      // pour la réafficher dans la page
//     var params = querystring.parse(url.parse(req.url).query);
//     console.log(params);
//     res.writeHead(200, { ContentType: 'text/plain' });
//     if ('Tony' in params && 'Stark' in params) {
//         res.write('Je suis  ' + params['Tony'] + ' ' + params['Stark']);
//     } else {
//         res.write('Je dois bien avoir un prénom et un nom, non ?');
//     }
//     res.end();
// });

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤  Damien ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤$

// http://localhost:8080?prenom=john&nom=wick
// var server = http.createServer(function(req, res) {
//     var page = url.parse(req.url).pathname;
//     var params = querystring.parse(url.parse(req.url).query);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if ('Xaveir' in params && 'Argis' in params) {
//         res.write('Vous etes ' + params['prenom'] + ' ' + params['nom']);
//     } else {
//         res.write('Vous devez bien avoir un prenom et un nom, non ?');
//     }
//     res.end();
// });
// server.listen(8080);


// console.log("¤¤¤¤¤¤¤¤¤¤¤¤¤¤ Correction Damien exo ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤");

// -- -- -- -- -- --Enoncé-- -- -- -- -- -- -- --
// --------------Ecrire un programme qui affiche le resultat d 'une operation
// --------------arithmetique des nombres passes en parametre

function calcul(tab, operator) {
    var result = '';
    for (var i in tab) {
        result = result + operator + tab[i];
    }
    return eval(result.substring(1));
}
var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if (pathname === '/addition') {
        result = calcul(params, '+');
    } else if (pathname === '/soustraction') {
        result = calcul(params, '-');
    } else if (pathname === '/multiplication') {
        result = calcul(params, '*');
    } else if (pathname === '/division') {
        result = calcul(params, '/');
    }
    res.write('Resultat : ' + result);
    res.end();
});
var add = (a, b) => a + b;
var sous = (a, b) => a - b;
var div = (a, b) => a / b;
var mul = (a, b) => a * b;
var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    var result;
    if ('a' in params && 'b' in params) {
        if (pathname === '/addition') {
            var a = parseInt(params['a']);
            var b = parseInt(params['b']);
            result = add(a, b);
        } else if (pathname === '/soustraction') {
            result = sous(params['a'], params['b']);
        } else if (pathname === '/multiplication') {
            result = mul(params['a'], params['b']);
        } else if (pathname === '/division') {
            result = div(params['a'], params['b']);
        }
    }
    res.write('Resultat : ' + result);
    res.end();
});
server.listen(8080);



// ******** fonction math qui va créer un tableau de valeurs *********
// console.log(math.map([1, 5, 3], function(a) {
//     return a * 2;
// }));

// **********appelle simple de la function module.exports = direBonjour
// mod();

// mod.direBonjour();

mod.sayHello();
// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤  Exo OS ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤

// -- -- -- -- -- --Enoncé-- -- -- -- -- -- -- --
// ---------------Utiliser le module os pour afficher :
// ---------------L'architecture de votre machine
// ---------------Le nombre de CPU
// ---------------Le hostname
// ---------------Et la charge moyenne

// console.log(os.arch);
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.loadavg());