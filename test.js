// import request from 'request';
// npm i request
// Dans la première ligne, nous chargeons le module
// Le module renvoie une fonction qui peut effectuer des requêtes HTTP
const { promises } = require('fs');
const { resolve } = require('path');
const request = require('request');
request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    // Notre fonction callback vérifie en premier si nous avons reçu une erreur.
    // BEST PRACTICE :  consiste à vérifier d'abord s'il y a des erreurs dans un 
    // callback afin que l'exécution du callback ne se poursuive pas avec des données manquantes.
    if (error) {
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }
    // Nous vérifions ensuite le code de statut de la réponse.
    // En vérifiant que le code de statut est 200, cela  signifie que la requête était "OK"
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return;
    }
    console.log('Processing our list of movies');
    // Enfin, nous analysons le corps de la réponse dans un Tableau et 
    // passons en boucle chaque film pour enregistrer son nom et son année de sortie.
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
    });
});


console.log("============== LES PROMESSES ========================")
    // PROMESSES
    // un objet JavaScript utilise souvent pour realiser des traitements
    // sur un resultat suite a une operation asynchrone
    // disposant d'une premiere methode then() permettant de traiter
    // le resultat une fois l'operation accomplie
    // disposant d'une deuxieme methode catch() qui sera executee
    // en cas d'echec de l'operation
    // compose de deux parties : declaration et utilisation
var test = true;
var promesse = new Promise((resolve, reject) => {
    if (test)
        resolve();
    else
        reject();
});
promesse.then(() => console.log("test reussi"))
    .catch(() => console.log("erreur"));
// ou
var test = true;
var promesse = () => {
    return new Promise((resolve, reject) => {
        if (test)
            resolve();
        else
            reject();
    });
};
promesse().then(() => console.log("test reussi"))
    .catch(() => console.log("erreur"));
// Une promesse peut recevoir des parametres et retourner un resultat
var division = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b != 0)
            resolve(a / b);
        else
            reject("erreur : division par zero");
    });
};
// affiche resultat : 5
division(10, 2).then((res) => console.log("resultat : " + res))
    .catch((error) => console.log(error));
// affiche erreur : division par zero
division(5, 0).then((res) => console.log("resultat : " + res))
    .catch((error) => console.log(error));
console.log("fin");


// Remarque : Les promesses s'executent de manière asynchrone

// ASYNC / AWAIT

//  Pour transformer la fonction somme() en promesse, on ajoute le
// mot clé async
var somme = async(a, b) => a + b;

// affiche 5

somme(2, 3).then(result => console.log(result));

//  Considéront la promesse somme() qui attend 2 seconds pour retourner un résultat
var somme = (a, b) => {
    return new promises((resolve) => {
        setTimeout(() => { resolve(a + b) }, 2000);
    });
};


// On veut implémenter une promesse sommeCarre() qui utilise la promesse somme()
// Solution, utiliser await pour attendre la fin de la premiere promesse
var sommeCarre = async(a, b) => {
    let s = await somme(a, b).then(result => result)
}


console.log("------------ schéma de la promisse ----------------------------");
// 42
// doAsyncPromiseThing()
//     .then(() => console.log("I'm done!"))
//     .catch(() => console.log("Error'd out"));
// une promesse
// coche_blanche
// yeux
// alléluia



console.log("------------ schéma de la subcribe ----------------------------");

// 16 h 42
// doAsyncObservableThing()
//     .subscribe(
//         () => console.log("I'm done!"),
//         () => console.log("Error'd out")
//     )
//     //**********************************************************************/
console.log('Hello World');

// Node.js est une plateforme logicielle avec une architecture orientée événements 
// qui permet d'utiliser le langage de script JavaScript, initialement développé 
// pour une utilisation côté client
// event-driven : architecture orientée événements
// Les architectures event-driven fournissent du code maintenable, gérer des tâches asynchrones 
// et construire des applications fiables.
// SYNCHRONE / ASYNCHRONE
// En informatique, on dit que deux opérations sont synchrones lorsque la seconde attend 
// que la première ait fini son travail pour démarrer, le début de l'opération suivante 
// dépend de la complétude de l'opération précédente.
// Au contraire, deux opérations sont qualifiées d'asynchrones en informatique lorsqu'elles sont indépendantes 
// c'est-à-dire lorsque la deuxième opération n'a pas besoin d'attendre que la première se termine pour démarrer.
// Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s'exécute que sur un seul thread. 
// JavaScript gère les tâches asynchrones avec l'aide de la boucle événementielle
// boucle événementielle : Construction JavaScript qui permet de terminer une nouvelle tâche tout en attendant une autre
// Le code asynchrone sera écrit de trois façons : les callbacks, les promesses et les mots-clés async/await.
// Lorsque JavaScript rencontre une opération asynchrone, comme l'écriture dans un fichier, 
// elle l'ajoute à une table dans sa mémoire. Cette table stocke l'opération, la condition 
// pour qu'elle soit exécutée et la fonction à appeler lorsqu'elle est terminée.
// Cela peut rapidement poser problème dans un contexte Web :
// imaginons qu'une de nos fonctions ou qu'une boucle prenne beaucoup de temps à s'exécuter. 
// Tant que cette fonction n'a pas terminé son travail, la suite du script ne peut pas s'exécuter (elle est bloquée) 
// et le programme dans son ensemble parait complètement arrêté du point de vue de l'utilisateur.
console.log(" ================ searchElemet1")



// Une fonction de callback est une fonction qui est transmise comme argument 
// à une autre fonction, puis exécutée lorsque l'autre fonction est terminée.
// une fonction de rappel ou « callback » en anglais est une fonction qui va pouvoir être 
// rappelée (« called back ») à un certain moment et / ou si certaines conditions sont réunies. 
// Nous utilisons les callbacks pour nous assurer que le code est exécuté uniquement 
// après la fin d'une opération asynchrone.
// Cette fonction lit l'objet Data, ici un tableau et un element de maniere asynchrone
// En d'autres termes, le programme n'attends pas la fin de la fonction 
// Et lorsque cette fonction termine sa tache, elle appelle la fonction Callback
// Une fonction CallBack prend deux parametres
// un parametre err qui reste vide si la fonction a bien ete executee,
// un parametre result qui contient le resultat si la fonction n'a pas detecter d'erreurs
// sinon il contient le contenu du message d'erreur

var searchElement = function(data, callback) {
    for (var i = 0; i < data.tableau.length; i++)
        if (data.tableau[i] == data.filtre)
            return callback(null, i);
    return callback('Element ' + data.filtre + ' non retrouve dans tableau');
};
var tab = [1, 3, 6, 8, 9];
var element = 5;
var data = { tableau: tab, filtre: element };
searchElement(data, function(err, result) {
    if (err)
        console.error("erreur :" + err)
    else
        console.log(element + " existe a la position " +
            result)
});
var tab = [1, 3, 6, 8, 9];
var element = 5;


function recherche(x, t) {
    for (var i = 0; i < t.length; i++) {
        if (x === t[i]) {
            console.log('Element Found');
        }
    }
}

// for (i = 0; i < tab.length; i++) {
//     if (element === element.tab[i]) {
//         console.console.log("L'élément n'existe pas !");
//     } else {
//         console.log("L'élement : " + element + " existe bien dans la liste");
//     }
// }




//damienmonchaty 11 h 59

// function recherche(x, t) {
//     for (var i = 0; i < t.length; i++) {
//         if (x === t[i]) {
//             console.log('Element Found');
//         }
//     }
// }
// var tab = [1, 3, 6, 8, 9];
// var element = 6;
// recherche(element, tab);


// En utilisant les fonctions callback, ecrire une fonction qui permet de
// determiner le nombre d 'occurrence d'
// une sous - chaıne de caractere ch
// dans une chaıne de caractere str.
// ch = ab
// str = abbbaaaabaaabb
// la fonction retourne 3.




function searchStr(x, t) {
    for (var i = 0; i < str.lenght; i++) {
        if (t.indexOf(x)) {}
        var count = item.str[i];
        console.log.apply(count);
        return count;

    }
}
console.log(" ============== SearchElement ======================");

// En utilisant les fonctions callback, ecrire une fonction qui permet de
// determiner le nombre d 'occurrence d'
// une sous - chaıne de caractere ch
// dans une chaıne de caractere str.
// ch = ab
// str = abbbaaaabaaabb
// la fonction retourne 3. 

var searchElement2 = function(data, callback) {
    // Déclaration d'une variable str et initialisation par l'objet data passé en paramètre
    // Dans notre exemple, data.string (exo ->  var str = "abbbaaaabaaabb";)
    var str = data.string;
    // Déclaration et initialisation d'une variable count à 0, nous permettant de stocker le nombre d'occurences
    var count = 0;
    // Déclaration d'une variable pos
    // Appel de La méthode indexOf(élémentRecherché) prenant en paramètre un élément 
    // Ici, data.filtre (exo ->  var ch = "ab";)
    // nous permettant de renvoyer le premier indice de cet élément donné dans str.
    var pos = str.indexOf(data.filtre);
    // Si on trouve la valeur, on affiche le nombre'occurences
    // Sinon on affiche le message d'erreur
    if (pos != -1) {
        // Tant qu' on trouve la valeur et que la position est differente de -1, on rentre dans la boucle
        // sinon quand pos sera egal à -1, cela voudra dire que l'on aura fini de parcourir la chaîne
        // et que l'on n'aura pas trouve la valeur voulue.
        while (pos != -1) {
            // Quand une occurence est trouve dans le chaine
            // On incremente count, ici le nombre d'occurence de 1
            count++;
            // Rappel de La méthode indexOf(élémentRecherché, indiceDébut) prenant en paramètre un élément
            // et un indice de début, ici pos + 1  indice à partir de la variable pos initialisée en dehors de la boucle
            // Quand une occurence est trouve dans le chaine
            // On incremente aussi pos, ici l'indice dans la chaîne
            pos = str.indexOf(data.filtre, pos + 1);
        }
        return callback(null, count);
    }
    return callback('Element ' + data.filtre + ' non retrouve dans ' + data.string);
};


var str = "abbbaaaabaaabb";
var ch = "ab";
var data = { string: str, filtre: ch };
searchElement2(data, function(err, result) {
    if (err)
        console.error("erreur :" + err);
    else
        console.log(ch + " existe " +
            result + " fois ");
});

var ch = "ab ";
var str = "abbbaaaabaaabb";
var data = { tableau: str, filter: ch };

function searchStr(data, callback) {
    var count = 0;
    while (item > -1) {
        count++;
        item = data.tableau.indexOf(data.filter, item++);
        console.log(count);
        return callback(null, item);
    }
}