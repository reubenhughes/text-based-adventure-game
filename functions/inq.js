const inquirer = require('inquirer')

const name = async () => {
    const { userInput } = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'What is your name?'
    })
    return userInput
}

const selectWeapon = async (weapons) => {
    const { weaponChoice } = await inquirer.prompt({
        type: 'list',
        name: 'weaponChoice',
        message: 'Choose your weapon',
        choices: weapons.map(weapon => weapon)
    })
    return weaponChoice
}

const selectDirection = async () => {
    const { directionChoice } = await inquirer.prompt({
        type: 'list',
        name: 'directionChoice',
        message: 'Choose your direction',
        choices: ['staircase', 'hallway']
    })
return directionChoice
}

const fightOrRun = async () => {
    const { actionChoice } = await inquirer.prompt({
        type: 'list',
        name: 'actionChoice',
        message: 'Fight or run?',
        choices: ['fight', 'run']
    })
    return actionChoice
}

const findKnife = async () => {
    const { knifeChoice } = await inquirer.prompt({
        type: 'confirm',
        name: 'knifeChoice',
        message: 'Pick up the knife?'
    })
    return knifeChoice
}

const selectPotion = async () => {
    const { potionChoice } = await inquirer.prompt({
        type: 'list',
        name: 'potionChoice',
        message: 'Select a potion',
        choices: ['blue', 'black']
    })
    return potionChoice
}

const awaitUser = async () => {
    const pressEnter = await inquirer.prompt({
        type: 'input',
        name: 'pressEnter',
        message: 'Press enter to continue'
    })
    return pressEnter
}

module.exports = {
    name,
    selectWeapon,
    selectDirection,
    fightOrRun,
    findKnife,
    selectPotion,
    awaitUser
}
