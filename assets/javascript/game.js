
//make objects for each character
var darkHelmet = {
    hp: 140,
    attackPower: 4,
    card: helmetCard,
    isDefender: false,
    damage: function () {
        if (this.isDefender = true) {
            this[hp] -= enemyChar[attackPower];
        } else {
            this[hp] -= userChar[attackPower];
        }
    }
};


var loneStarr = {
    hp: 120,
    attackPower: 3,
    card: starrCard,
    isDefender: false,
    damage: function () {
        if (this.isDefender = true) {
            this[hp] -= enemyChar[attackPower];
        } else {
            this[hp] -= userChar[attackPower]
        }
    }
};

var barf = {
    hp: 130,
    attackPower: 4,
    card: barfCard,
    isDefender: false,
    damage: function () {
        if (this.isDefender = true) {
            this[hp] -= enemyChar[attackPower];
        } else {
            this[hp] -= userChar[attackPower];
        }
    }
};

var pizzaTheHut = {
    hp: 150,
    attackPower: 2,
    card: pizzaCard,
    isDefender: false,
    damage: function () {
        this[hp] -= userChar[attackPower]; if (this.isDefender = true) {
            this[hp] -= enemyChar[attackPower];
        } else {
            this[hp] -= userChar[attackPower];
        }
    }
};

//set variables

//character card elements
var helmetCard = $("#dark-helmet");
var starrCard = $("#lone-starr");
var barfCard = $("#barf");
var pizzaCard = $("#pizza-the-hut");

//HP display
var helmetHP = $("#helmet-hp");
var starrHP = $("#starr-hp");
var barfHP = $("#barf-hp");
var pizzaHP = $("#pizza-hp");

//enemy slots
var enemyA = $("#enemy-a");
var enemyB = $("#enemy-b");
var enemyC = $("#enemy-c");

//defender slot
var defender = $("#defender");

//deals damage 
function combat(user, enemy) {
    enemy.damage();
    user[hp] -= enemy[attackPower];
    cosole.log(enemyChar[hp]);
};

//resets all HP
function resetHP() {
    darkHelmet[hp] = 140;
    loneStarr[hp] = 120;
    barf[hp] = 130;
    pizzaTheHut[hp] = 150;
};

//displays character HP
helmetHP.text("HP: " + darkHelmet.hp);
starrHP.text("HP: " + loneStarr.hp);
barfHP.text("HP: " + barf.hp);
pizzaHP.text("HP: " + pizzaTheHut.hp);

var charChosen = false;
var enemyChosen = false;
var userChar;
var enemyChar;

//choose character by clicking
//when character is chosen, move card to defender area
//move enemies to enemy area
if (charChosen === false) {
    helmetCard.on("click", function () {
        defender.append(helmetCard);
        enemyA.append(starrCard);
        enemyB.append(barfCard);
        enemyC.append(pizzaCard);
        $("#char-row").append($("#empty-row"));
        console.log(darkHelmet.isDefender);
    });

    starrCard.on("click", function () {
        defender.append(starrCard);
        enemyA.append(helmetCard);
        enemyB.append(barfCard);
        enemyC.append(pizzaCard);
        $("#char-row").append($("#empty-row"));

    });

    barfCard.on("click", function () {
        defender.append(barfCard);
        enemyA.append(helmetCard);
        enemyB.append(starrCard);
        enemyC.append(pizzaCard);
        $("#char-row").append($("#empty-row"));

    });

    pizzaCard.on("click", function () {
        defender.append(pizzaCard);
        enemyA.append(helmetCard);
        enemyB.append(barfCard);
        enemyC.append(starrCard);
        $("#char-row").append($("#empty-row"));

    });
}//if a character has been chosen, click on an enemy 
else {
    helmetCard.on("click", function () {
        if (darkHelmet.isdefender === false) {

        };
    });

    starrCard.on("click", function () {
        if (loneStarr.isdefender === false) {

        };
    });

    barfCard.on("click", function () {
        if (barf.isdefender === false) {

        };
    });

    pizzaCard.on("click", function () {
        if (pizzaTheHut.isdefender === false) {

        };
    });

    // if enemy is chosen, click attack button to attack

    if (enemyChosen === true) {
        $("#attack-button").on("click", function () {

        });
    }




    //after attack, decrease enemy HP, double attack power
    //enemy attack, decrease user HP, double enemy attack power
    //click another character to attack, repeat
    //if enemy HP reaches zero, fade enemy out 
    //if user HP reaches zero, fade user out, end game
    //if no enemies remain, win game 
}
