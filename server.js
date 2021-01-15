var math = require('lodash');
var mod = require('./mesModules');

// fonction math qui va créer un tableau de valeurs
console.log(math.map([1, 5, 3], function(a) {
    return a * 2;
}));