const {
    randomDecision,
    healthDecrease,
    fullHealth,
    checkStats,
    checkInfected,
} = require("./functions/functions");

const {
    name,
    selectWeapon,
    selectDirection,
    fightOrRun,
    findKnife,
    selectPotion,
    awaitUser
} = require("./functions/inq");

let {player, weapons} = require("./stored/userItems");


const start = async () => {
    console.log("Please enter your name.");
    player.name = await name();
    console.log("Welcome, " + player.name);
    console.log("");
    console.log(
        "You have woken up in an empty, desolate hospital. You must find your way out and surivive the ordeal. Good luck soldier!"
    );
    console.log("");
    playerSelectWeapon();
};

const playerSelectWeapon = async () => {
    console.log(
    "As you look around your hospital room you see two weapons, a syringe and a broken lead pipe. You must choose one to take with you."
    );
    player.weapon = await selectWeapon(weapons);
    console.log("You have picked up the " + player.weapon + ".");
    console.log("");
    playerSelectDirection();

};

const playerSelectDirection = async () => {
    checkStats();
    console.log(
    "Once you leave your room you see two directions you can go: the staircase and the hallway. Best of luck."
    );
    direction = await selectDirection();
    console.log("you have chosen the " + direction + ".");
    console.log("");
    if (direction == 'staircase') {
        playerMeetZombie();
    }
    else {
        playerFindKnife();
    };
};

const playerMeetZombie = async () => {
    checkStats();
    console.log(
        "As you walk up the stairs, you see a zombie above you blocking the next floor. You can either fight it, or go back down the hallway."
    );
    choice = await fightOrRun();
    if (choice == 'fight') {
        console.log(
            "You decide to fight the zombie."
        );
       if (player.weapon == 'syringe') {
        player.isInfected = true;
        console.log(
         "You manage to stab the zombie through the heart with your syringe, but it scratches you in the process. You are now infected, and will gradually lose health!"   
        )
        player.isInfected = true;
       }
       else {
        console.log(
            "You bash the zombie's head in with the lead pipe. Continue on soldier."
        );
       };
       console.log("");
       playerSelectPotion();
    }
    else {
        console.log(
            "You cowardly run away, so now must flip the coin of fate."
        );
        console.log("");
        playerCoinFlip();
    }
    
}

const playerFindKnife = async () => {
    checkInfected();
    checkStats();
    console.log(
        "As you run down the hallway, you spot a sharp knife on the floor, which you can pick up."
    );
    choice = await findKnife();
    if (choice) {
        console.log("You have picked up the knife and dropped the " + player.weapon + ".");
        player.weapon = "knife";
    }
    else {
        console.log("You decide not to pick up the knife.");
    };
    console.log("");
    playerSelectPotion();
}


const playerSelectPotion = async () => {
    checkInfected();
    checkStats();
    console.log(
        "At the end of the hallway, you find a door door leading to the outside. As you step into the sun, you see a nearby house."
    );
    userInput = await awaitUser();
    console.log("");
    console.log(
        "Looking for supplies in the house, you come across two different potions; one blue and one black. You decide to drink one of them."
    );
    potion = await selectPotion();
    console.log("You have chosen the " + potion + " potion.");
    if (potion == 'blue') {
        fullHealth();
    }
    else {
        healthDecrease();
    };
    playerMeetFinalZombie();
}

const playerCoinFlip = async () => {
    userInput = await awaitUser();
    console.log("");
    let result = randomDecision();
    if (result === 0) {
        console.log("The coin of fate is not on your side this time.");
        console.log("");
        endgame();
    }
    else {
        console.log("The coin of fate is on your side this time.");
        console.log("");
        winner(); 
    }
}


const playerMeetFinalZombie = async () => {
    checkInfected();
    checkStats();
    console.log(
        "As you leave the house, you get jumped by another zombie! You must fight it to survive."
    )
    userInput = await awaitUser();
    console.log("");
    if (player.weapon == 'syringe') {
        console.log("You swing your syringe at the zombie, attempting to stab it in the brain, but it overpowers you and chomps right into your stomach.");
        player.health = 0;
        endgame();
    }
    else if (player.health < 10) {
        console.log("You wrestle with the zombie, but without full health you simply aren't strong enough to kill it.");
        player.health = 0;
        console.log("");
        endgame();
    }
    else {
        console.log("You wrestle with your zombie, and eventually you swing your " + player.weapon + " and turn the zombie's face to mush.");
        winner();
    };
    
}

const endgame = () => {
    console.log("");
    console.log("You lost!");
    checkStats();
};

const winner = () => {
    console.log("");
    console.log("You won!");
    checkStats();
};

start();