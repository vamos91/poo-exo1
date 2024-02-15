import Character from "./Character";
import { weaponEnum } from '../enum/weapon.enum'

export default class Warrior extends Character {
    private weapon: weaponEnum
    constructor(name: string, hp: number, mp: number, strength: number, intelligence: number, defense: number, speed: number, weapon: weaponEnum) {
        super(name, hp, mp, strength, intelligence, defense, speed)
        this.weapon = weapon
    }

    setWeapon(weapon: weaponEnum): void{
        this.weapon = weapon
    }

    getWeapon(): string{
        return this.weapon
    }

    getWeaponStrike():number{
        switch (this.weapon) {
            case 'axe':
                return 10
            case 'sword':
                return 7
            case 'bow':
                return 12
            default:
                break;
        }
    } 

    attack(target: Character): void {
        console.log('getWeaponStrike', this.getWeaponStrike())
        target.setHp(target.getHp() - this.strength)
        return console.log(`${this.name} attaque ${target.getName()} sont total de point de vie devient ${target.getHp()}`)
    }

    defend(target: Character): void {
        console.log('getWeaponStrike', this.getWeaponStrike())
        this.setHp(this.getHp() - target.getStrength())
        return console.log(`${target.getName()} attaque ${this.name} en retour et sont total de point de vie devient ${this.getHp()}`)
    }
}