// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
    name: 'Savy',
    age: 26,
    password: 'qwerty'
};

// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.email = 'savyparchman@gmail.com';
user.username = 'ssaavvyy';
user.alertUser = function() {
    alert(user.name);
};

// Now loop over your user object and alert each of the keys.
// Code Here
function loopy(user) {
    for (var key in user) {
        alert(user);
    }
};

// Now loop over your user object and alert each of the values for each key.

// Code Here
function loopy(user) {
    for (var key in user) {
        alert(user[key]);
    }
};

// Remove the username from your user object

for (var key in user) {
    if (key === 'username') {
        delete user[key];
    }
};
// Code Here

// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.
var creditCard = {
    number: 1234567,
    cvc: 321,
    type: 'Visa',
    limit: 6000
};
// Code Here

// Create a variable called alternating. Set it equal to the string bonusCategories.
var alternating = 'bonusCategories';
// Code Here

/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */
creditCard['alternating'] = [
    var objOne = {
        Department: "5%"
    };

    var objTwo = {
        Department: "4%"
    };

    var objThree = {
        Department: "3%"
    };
]
// Code Here

creditCard.bank = {
    Bankname: name,
    Bankaddress: address
};


// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here

function combine(creditCard, user) {
    for (var key in user) {
        if (user.hasOwnProperty(key)) cerditCard[key] = user[key];
    }
    return creditCard;
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

function gOT(obj) {
    for (var key in obj) {
        if (gOT.get[key] === "LittleFinger") {
            gOT.remove[key];
        }
    }
    
}

  // Code Here