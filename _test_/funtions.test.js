const{
    randomDecision,
    healthDecrease,
    fullHealth,
    checkInfected

} = require('../functions/functions')

const {player} = require('../stored/useritems')

describe('randomDecision function tests', () => {

    let collection = []
    for(let i = 0; i < 20; i++) {
        collection.push(randomDecision())
    }

    test('returns a number', () => {
        expect(typeof(randomDecision())).toBe('number')
    })

    test('does not return a string', () => {
        expect(typeof(randomDecision())).not.toBe('string')
    })

    test('collection array does not contain a string', () => {
        let res = collection.map(item => typeof item)
        expect(res).not.toContain('string')
    })

    test('collection array contains numbers', () => {
        let res = collection.map(item => {
            return typeof item === 'number' ? true : false
        })
        expect(res).toContain(true)
    })

    test('colletion array contains numbers 0 or 1', () => {
        let res = collection.map(item => item === 0 || item === 1 ? true : false)
        expect(res).not.toContain(false)
    })
})   
    

describe('healthDecrease function tests', () => {
   
    test('health decreases by 1 to 9', () => {
        healthDecrease()
        expect(player.health).toBe(9)
    })

    test('health decreases by 2, including previous test, to 7', () => {
        healthDecrease()
        healthDecrease()
        expect(player.health).toBe(7)
    })

    test('multiple function calls ends with health = 3', () => {
        healthDecrease()
        healthDecrease()
        healthDecrease()
        healthDecrease()
        expect(player.health).toBe(3)
    })

    test('if health is 0, does not decrease below 0', () => {
        let amount = 20
        while(amount > 0){
            healthDecrease()
            amount--
        }
        expect(player.health).not.toBeLessThan(0)
    })
})


describe('fullHealth function test', () => {

    test('health increases from 5 to 10', () => {
        player.health = 5
        fullHealth()
        expect(player.health).toBe(10)
    })

    test('if health is 10, it remains 10', () => {
        player.health = 10
        fullHealth()
        expect(player.health).toBe(10)
    })
})


describe('isInfected function tests', () => {

    test('health decreases from 10 to 8', () => {
        player.isInfected = true;
        player.health = 10
        checkInfected()
        expect(player.health).toBe(8)
    })

    test('if health is 1, checkInfected() reduces health to 0', () => {
        player.isInfected = true;
        player.health = 1
        checkInfected()
        expect(player.health).toBe(0)
    })

    test('if health is 0, does not go decrease below 0', () => {
        player.isInfected = true;
        player.health = 0
        checkInfected()
        expect(player.health).toBe(0)
    })

    test('if isInfected = false, health remains the same', () => {
        player.isInfected = false;
        player.health = 6;
        checkInfected();
        expect(player.health).toBe(6);
    })
})