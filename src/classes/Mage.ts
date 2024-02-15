import Character from "./Character";
import { spellEnum } from '../enum/spell.enum'

export default class Mage extends Character{
    private spell: spellEnum
    constructor(name: string, hp: number, mp: number, strength: number, intelligence: number, defense: number, speed: number, spell: spellEnum){
        super(name, hp, mp, strength, intelligence, defense, speed)
        this.spell = spell
    }

    setWeapon(spell: spellEnum): void {
        this.spell = spell
    }

    getWeapon(): string {
        return this.spell
    }

    getSpellStrike(): void {
        switch (this.spell) {
            case 'fire':
                this.strength = this.strength + 10
            case 'ice':
                this.strength = this.strength + 7
            case 'thunder':
                this.strength = this.strength + 12
            default:
                break;
        }
    } 

    attack(target: Character): void {
        console.log('getSpellStrike', this.getSpellStrike())
        target.setHp(target.getHp() - this.strength)
        return console.log(`${this.name} attaque ${target.getName()} sont total de point de vie devient ${target.getHp()}`)
    }

    defend(target: Character): void {
        console.log('getWeaponStrike', this.getSpellStrike())
        this.setHp(this.getHp() - target.getStrength())
        return console.log(`${target.getName()} attaque ${this.name} en retour et sont total de point de vie devient ${this.getHp()}`)
    }
}