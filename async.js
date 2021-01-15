var fs = require('fs');


// On déclare une méthode qui va lire le fichier salutation.txt
//et qui va l'afficher en console en asynchrone
// changement de la méthode readFileSync par ReadFile pour que ça fonctionne

var content = fs.readFile('./salutation.txt', function(err, result) {
    if (err)
        return console.error(err);
    return console.log(result.toString());

});
console.log('FIN DU FICHIER');

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
console.log("-- -- -- -- -- Exo 1-----------------");
// Ecrire un programme NodeJS qui permet de creer un repertoire
// monDossier et trois fichiers file1.txt, file2.txt et
// file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions
// asynchrones


// var createfolder = fs.mkdir('monDossier', function(err, result) {
//     if (err)
//         return console.error(err);
//     return console.console.log(result.toString());
// });
// Console.log('Creation folder ok');


// console.log("-- -- -- -- -- Exo 1-----------------");
// var CreateFile = fs.writeFileSync('monDossier/file1.txt', function(err, result) {
//     if (err)
//         return console.log(err);
//     return console.log(result.toString());
// });
// console.log('file created');
// var CreateFile = fs.writeFileSync('monDossier/file2.txt', function(err, result) {
//     if (err)
//         return console.log(err);
//     return console.log(result.toString());
// });
// console.log('file created');
// var CreateFile = fs.writeFileSync('monDossier/file3.txt', function(err, result) {
//     if (err)
//         return console.log(err);
//     return console.log(result.toString());
// });
// console.log('file created');

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
console.log("-- -- -- Correction Damien Exo 1-----------------");

0
var file = ["file1.txt", "file2.txt", "file3.txt"];
if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
} else {
    fs.mkdirSync('monDossier');
    for (let i = 0; i < file.length; i++) {
        fs.writeFileSync('monDossier/' + file[i], 'contenu fichier');
    }
}

console.log("-- -- -- FIN Correction Damien Exo 1----------------");