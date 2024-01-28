// Task 1: Code a Person class
class Person {
    constructor(name, age, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log("zzzzz.... Energy level:", this.energy);
    }

    doSomethingFun() {
        this.energy -= 10; // Fix: Decrease energy when doing something fun
        console.log("You had a lot of fun! Your energy is at:", this.energy);
        console.log("\n")
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
        console.log("You're at work! Gaining", this.hourlyWage, "an hour");
        console.log("Your xp bar is at:", this.xp);
        console.log("your energy is at: ", this.energy)
        console.log("Every hour you lose 10 energy")
        console.log("\n")
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    console.log("Interns Day: \n")
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, run methods
function manager() {
    console.log("Manager's Day: \n")
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

intern();
manager();
