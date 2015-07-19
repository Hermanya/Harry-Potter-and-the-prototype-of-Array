'Harry Potter and the prototype of Array';
'=======================================';

'#';Array.prototype.map;
var matches = ['match', 'match', 'coin', 'match'],
    paresEtAcus = function matchToNeedle () {
        return FILL_ME_IN;
    },
    needles = matches.map(paresEtAcus),

    animals = ['parrot'],
    duasCaput = function makeTwoHeaded (animal) {
        return 'two headed ' + animal;
    },
    twoHeadedAnimals = FILL_ME_IN;

'#';Array.prototype.split; Array.prototype.join;
var sickScreamingRose = '~~~$~~~$~~@',
    cutOutTheBadParts = function getRidOfAllDollarSigns (sickScreamingRose) {
        return FILL_ME_IN;
    },
    healthyScreamingRose = FILL_ME_IN;

'#';Array.prototype.find; Array.prototype.filter;
var modernHistory = [
        '1943 - Tom Riddle opens the Chamber of Secrets while in Hogwarts',
        '1945 - Albus Dumbledore defeats Gellert Grindelwald who is sentenced to life in Nurmengard',
        '1956 - Albus Dumbledore becomes headmaster of Hogwarts',
        '1970 - The first wizarding war begins',
        '1980 - Birth of Harry James Potter',
        '1981 - Death of Lily and James Potter, Harry survives, Voldemort loses his physical form',
        '1991 - Harry receives his 1st letter from Hogwarts',
        '1994 - 422nd Quidditch World Cup',
        '1995 - Voldemort is back',
        '1996 - The 2nd Wizarding War officially begins according to the Ministry',
        '1997 - Death of Albus Perceval Wulfric Brian Dumbledore',
        '1998 - Death of Voldemort'
    ],
    is1995 = function (event) {
        return FILL_ME_IN;
    },
    whatHappenedIn1995 = FILL_ME_IN,

    isWar = function (event) {
        return FILL_ME_IN;
    },
    wars = FILL_ME_IN,

    happenedInLastDecade = function (event) {
        return FILL_ME_IN;
    },
    mostRecentEvents = FILL_ME_IN;

'#';Array.prototype.concat; Array.prototype.slice;
var wingardiumLeviosa = function insertThreeEmptyLinesInBetween (featherOnTheTable) {
        return FILL_ME_IN;
    },
    featherThreeLinesAbove = wingardiumLeviosa([
        'feather',
        'book',
        'table'
    ]);

'#';Array.prototype.reduce;
var animals = ['newt', 'frog', 'bat', 'dog'],
    parts = ['eye', 'toe', 'tongue', 'tail'],
    magicalPowerOf = function (animal, part) {
        var animalIndex = animals.indexOf(animal),
            partIndex = parts.indexOf(animal),
            sign = (animalIndex % 3 ? 1 : -1) * (partIndex % 2 ? 1 : -1),
            power = (animalIndex + partIndex) * sign;
        return power;
    },
    ingredientToEffect = animals.reduce(function (powers, animal) {
        parts.forEach(function (part) {
            var power = magicalPowerOf(animal, part);
            powers[part + ' of ' + animal] = power;
            powers[animal + '\'s ' + part] = power;
        });
        return powers;
    }, {}),
    ingredients = [
        'eye of newt',
        'frog\'s toe',
        'eye of newt',
        'bat\'s tail',
        'tongue of dog'
    ],
    water = {
        power: 0
    },
    add: function (potion, ingredient) {
        return FILL_ME_IN;
    },
    potion = ingredients.reduce(add, water);

'#';Array.prototype.every; Array.prototype.some;
var FILL_ME_IN = 'seriously, a PR would score you house points';
