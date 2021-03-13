class Character{      //what I want all characters to have
    characterType:string;
    race:string;
    name:string;
    bearForm:boolean;
    wolfForm:boolean;

   //constructor
    constructor(race:string,name:string,bearForm:boolean, wolfForm:boolean) {
        this.race = race;
        this.name = name;
        this.bearForm = false;
        this.wolfForm = false;
    }
public getRace(): string {
        return this.race;
}
public setRace(race: string){
        this.race = race;
}
public getName(name: string){
        return this.name = name;
}
public setName(name: string){
        this.name = name;
    }
 public getBearForm(bearForm:false){
        return this.bearForm;
    }
public setBearForm(bearForm:'void') {
        this.bearForm = false;
}
public getWolfForm(wolfForm:false){
        return this.wolfForm;
}
public print(): void {
        console.log("race:", this.race);
        console.log("name", this.name);
        console.log("bear form", this.bearForm);
        console.log("wolfForm", this.wolfForm);


}
}

 class Druid extends Character{
    race:string;
    name:string;
    bearForm: boolean;
    wolfForm: boolean;


}






