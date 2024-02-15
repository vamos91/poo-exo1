export default class Character{
    protected name: string
    protected hp: number
    protected mp: number
    protected strength: number
    protected intelligence: number
    protected defense: number
    protected speed: number

    constructor(name: string, hp: number, mp: number, strength: number, intelligence: number, defense: number, speed: number ){
        this.name = name
        this.hp = hp
        this.mp = mp
        this.strength = strength
        this.intelligence = intelligence
        this.defense = defense
        this.speed = speed
    }

    getName(): string{
        return this.name
    }

    getStrength(): number{
        return this.strength
    }

    setHp(life: number): void{
        this.hp = life
    }

    getHp(): number {
        return this.hp
    }

    attack(target: Character): void{
        console.log('ici on attack')
    }

    defend(target: Character): void {
        console.log('ici on defend')
    }

    isAlive(): boolean{
        if (this.getHp() <= 0){
            return false
        }else{
            return true
        }
    }
}