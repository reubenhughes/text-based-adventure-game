let { player } = require("../stored/userItems");

const randomDecision = () => {
    return Math.round(Math.random());
};


const healthDecrease = () => {
    if (player.health === 0) {
        return player.health;
    }
    else {
        return player.health--;
    }
};

const fullHealth = () => {
    player.health = 10;
    return player.health;
};

const checkStats = () => {
    console.log("");
    console.log("Stats");
    console.log("---------");
    console.log("Player: " + player.name);
    console.log("Weapon: " + player.weapon);
    console.log("Health: " + player.health);
    console.log("");
};

const checkInfected = () => {
    if (player.isInfected === true) {
        if (player.health === 0) {
            return player.health;
        }
        else if (player.health === 1) {
            return player.health--;
        }
        else {
            healthDecrease();
            healthDecrease();
            return player.health;
        }
    }
};

module.exports = {
    randomDecision,
    healthDecrease,
    fullHealth,
    checkStats,
    checkInfected
};