
//Animal class as the base class
class Animals {
    constructor(name, animalClass) {
        this.name = name;
        this.animalClass = animalClass;
    }

    behaviour() {
        return `some generic bahaviour`;
    }
}

//Creating derived classes
class Vertebrate extends Animals {
    constructor(name, animalClass) {
        super(name, animalClass)
    }

    hasBackbone() {
        return `${this.name} has a backbone`;
    }
}

class Invertebrate extends Animals {
    constructor(name, animalClass) {
        super(name, animalClass)
    }

    withoutBackbone() {
        return `${this.name} has an exoskeleton`;
    }
}

class WarmBlooded extends Vertebrate {
    constructor(name, animalClass) {
        super(name, animalClass)
    }

    isWarmBlooded() {
        return `${this.name} is warm blooded and so can regulate it's body temperature.`;
    }
}

class ColdBlooded extends Vertebrate {
    constructor(name, animalClass) {
        super(name, animalClass)
    }

    isColdBlooded() {
        return `${this.name} is cold blooded and so cannot regulate it's body temperature.`;
    }
}

class Insect extends Invertebrate {
    constructor(name, animalClass) {
        super(name, animalClass)
    }
    
    isColdBlooded() {
        return `${this.name} is cold blooded and so cannot regulate it's body temperature.`;
    }
}



//Creating instances of the classes
const animalList = [
    new ColdBlooded('Frog', 'Amphibia'),
    new ColdBlooded('Fish', 'Pisces'),
    new Insect('Butterfly', 'Arthropoda'),
    new ColdBlooded('Tortoise', 'Reptiles'),
    new WarmBlooded('Eagle', 'Aves'),
    new WarmBlooded('Cat', 'Mammals')
];

animalList.forEach(animal => {
    console.log(`Name: ${animal.name}`);
    console.log(`Class: ${animal.animalClass}`);

    if (animal instanceof Vertebrate) {
        console.log(animal.hasBackbone());
    }

    if (animal instanceof Invertebrate) {
        console.log(animal.withoutBackbone());
    }

    if (animal instanceof WarmBlooded) {
        console.log(animal.isWarmBlooded());
    }

    if (animal instanceof ColdBlooded) {
        console.log(animal.isColdBlooded());
    }

    if (animal instanceof Insect) {
        console.log(animal.isColdBlooded());
    }

    console.log('---');
});