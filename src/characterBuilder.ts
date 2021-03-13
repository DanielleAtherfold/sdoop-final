export class CharacterBuilder {
    characterType: string;
    race: string;
    name: string;
    bearForm: any;
    wolfForm: string;

    constructor() {
        this.race = "void";
        this.name = "void";
        this.bearForm = "void";
        this.wolfForm = "void";
    }

    public static character(): CharacterBuilder {
        return new CharacterBuilder();
    }

    public withRace(race: string): CharacterBuilder {
        this.race = race;
        return this;
    }

    public withName(name: string): CharacterBuilder {
        this.name = name;
        return this;
    }

    public withBearForm(name: string): CharacterBuilder {
        this.bearForm = ([]);
        return this;
    }
    
}
