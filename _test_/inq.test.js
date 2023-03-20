let { name, selectWeapon, selectDirection, fightOrRun, findKnife, selectPotion, awaitUser } = require('../functions/inq');

const inquirer = require('inquirer');
jest.mock('inquirer')

describe('name function test', () => {

    test('user input with sam', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ userInput: 'sam' })
        await expect(name()).resolves.toEqual('sam')
    })
})


describe('weaponChoice function test', () => {

    test('weapon choice user selects syringe', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ weaponChoice: 'syringe' })
        await expect(selectWeapon(['syringe', 'lead pipe'])).resolves.toEqual('syringe')
    })

    test('weapon choice user selects lead pipe', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ weaponChoice: 'lead pipe' })
        await expect(selectWeapon(['syringe', 'lead pipe'])).resolves.toEqual('lead pipe')
    })
})


describe('directionChoice function test', () => {

    test('direction choice user selects staircase', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ directionChoice: 'staircase' })
        await expect(selectDirection(['staircase', 'hallway'])).resolves.toEqual('staircase')
    })

    test('direction choice user selects hallway', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ directionChoice: 'hallway' })
        await expect(selectDirection(['staircase', 'hallway'])).resolves.toEqual('hallway')
    })
})


describe('actionChoice function test', () => {

    test('action choice user selects fight', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ actionChoice: 'fight' })
        await expect(fightOrRun(['fight', 'run'])).resolves.toEqual('fight')
    })

    test('action choice user selects run', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ actionChoice: 'run' })
        await expect(fightOrRun(['fight', 'run'])).resolves.toEqual('run')
    })
})


describe('knifeChoice function test', () => {
    
    test('knife choice returns boolean true', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ knifeChoice: true })
        await expect(findKnife()).resolves.toEqual(true)
    })

    test('knife choice returns boolean false', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ knifeChoice: false })
        await expect(findKnife()).resolves.toEqual(false)
    })
})


describe('potionChoice function test', () => {

    test('potion choice user selects blue', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ potionChoice: 'blue' })
        await expect(selectPotion(['blue', 'black'])).resolves.toEqual('blue')
    })

    test('potion choice user selects black', async () => {
        expect.assertions(1)
        inquirer.prompt.mockResolvedValue({ potionChoice: 'black' })
        await expect(selectPotion(['blue', 'black'])).resolves.toEqual('black')
    })
})