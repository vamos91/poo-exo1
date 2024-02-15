import Mage from './classes/Mage'
import Warrior from './classes/Warrior'
import { spellEnum } from './enum/spell.enum'
import { weaponEnum } from './enum/weapon.enum'

const gandalf = new Mage('Gandalf', 27, 25, 4, 32, 14, 12, spellEnum.FIRE)
const aragorn = new Warrior('Aragorn', 25, 20, 5, 17, 12, 13, weaponEnum.AXE)



const interval = setInterval(() => {
    gandalf.attack(aragorn)
    gandalf.defend(aragorn)
    if (!gandalf.isAlive()){
        console.log(aragorn.getName(), 'win')
        clearInterval(interval)
    }
    if (!aragorn.isAlive()) {
        console.log(gandalf.getName(), 'win')
        clearInterval(interval)
    }
}, 1000)