//Utilisation de FileSystem, Bibliothèque existante dans le noyau
const { Console } = require('console');
var fs = require('fs');
const fsPath = require('fs-path');

// On déclare une méthode qui va lire le fichier salutation.txt
//et qui va l'afficher en console en synchrone

// var content = fs.readFileSync('./salutation.txt');
// console.log(content.toString());
// console.log('FIN DU FICHIER');


// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
console.log("-- -- -- -- -- Exo 1-----------------");
// Ecrire un programme NodeJS qui permet de creer un repertoire
// monDossier et trois fichiers file1.txt, file2.txt et
// file3.txt qui seront situes dans monDossier
// Utiliser a la fois des fonctions synchrones et des fonctions
// asynchrones


// var createfolder = fs.mkdirSync('./monDossier', { cursive: true });
// Console.log('Creation ok');

// var CreateFile = fs.writeFileSync('monDossier/file1.txt');
// console.log('fils created');
// var CreateFile = fs.writeFileSync('monDossier/file2.txt');
// console.log('fils created');
// var CreateFile = fs.writeFileSync('monDossier/file3.txt');
// console.log('fils created');

// ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
console.log("-- -- -- Correction Damien Exo 1-----------------");

// 
var file = ["file1.txt", "file2.txt", "file3.txt"];
if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
} else {
    for (let i = 0; i < file.length; i++) {
        fsPath.writeFileSync('monDossier /' + file[i], 'contenu fichier');
    }
}
console.log("-- -- -- FIN Correction Damien Exo 1----------------");