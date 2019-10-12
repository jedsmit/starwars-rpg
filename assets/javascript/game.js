//set variables
//make objects for each character
var darkHelmet = {
    hp: 140,
    attackPower: 4

};

var loneStarr = {
    hp: 120,
    attackPower: 3
};

var barf = {
    hp: 130,
    attackPower: 4
};

var pizzaTheHut = {
    hp: 150,
    attackPower: 2
};

var helmetCard = $("#dark-helmet");

var starrCard = $("#lone-starr");
var barfCard = $("#barf");
var pizzaCard = $("#pizza-the-hut");
var pizzaHP = $("#pizza-hp");

var enemyA = $("#enemy-a");
var enemyB = $("#enemy-b");
var enemyC = $("enemy-c");

var defender = $("#defender");

helmetHP.text("HP: " + pizzaTheHut.hp);
pHP.text("HP: " + pizzaTheHut.hp);
pizzaHP.text("HP: " + pizzaTheHut.hp);
pizzaHP.text("HP: " + pizzaTheHut.hp);


function setDefender(char) {

}

console.log(pizzaTheHut.hp);
//choose character by clicking
//when character is chosen, move card to defender area
//move enemies to enemy area
//if a character has been chosen, click on an enemy to attack
//after attack, decrease enemy HP, double attack power
//enemy attack, decrease user HP, double enemy attack power
//click another character to attack, repeat 
//if enemy HP reaches zero, fade enemy out 
//if user HP reaches zero, fade user out, end game
//if no enemies remain, win game 

