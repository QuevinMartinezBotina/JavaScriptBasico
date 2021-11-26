class Curso {
    constructor(title, dificult) {
        this.title = title;
        this.dificult = dificult;

        this.lections = [];
    }

    //!Los Getter y Setter
    /* get dificult() {
        console.log('Getter');
        return this._dificult;
    }

    set dificult(newDificult) {
        if (newDificult > 0 && newDificult < 5) {
            this._dificult = newDificult;
        } else {
            console.log('No hago nada');
        }
    } */
    addLection(lection) {
        this.lections.push(lection);
    }

    rmLection() {
        this.lections.pop();
    }

}

const mate = new Curso("Aljebra Baldor", 1);
mate.dificult = 3;
//mate.dificult = 7;

console.log(mate.dificult);