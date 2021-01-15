var direBonjour = function() {
        console.log('Bonjour');
    }
    // Déclaration simplsimple de la function module.exports = direBonjour
    // module.exports = direBonjour;


// exports.direBonjour = function() {
//     console.log('Bonjour', object);
// }

var direBonjour = function() {
    console.log('Bonjour');
}
var direBonsoir = function() {
    console.log('Bonjour');
}
module.exports = { sayHello: direBonjour };