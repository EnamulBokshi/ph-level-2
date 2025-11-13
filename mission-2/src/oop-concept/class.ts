class Animal{
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = sound;
        this.sound = sound;
    }

    // constructor(public name:string, public species: string, public sound: string) {
    //     // we don't to initialize them or declare them, typescript automatically does everything for us
    
        /**
         * 
         *   this.name = name;
             this.species = sound;
             this.sound = sound;

             we don't need to do that.
         */
    // }


}


const dog = new Animal("Tommy", "Cat", 'Mew mew mew');
console.log(dog.sound)