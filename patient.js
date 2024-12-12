// Patient.js
export class Patient {
    constructor(nom, maladie, argent) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = "";
        this.sante = "malade";
    }

    allerCabinet(doctor) {
        console.log(`${this.nom} va au cabinet du tbib.`);
        doctor.consulter(this);
    }

    allerPharmacie(pharmacia, cimetiere) {
        console.log(`${this.nom} va à la pharmacie.`);
        pharmacia.acheterTraitement(this, cimetiere);
    }
}
