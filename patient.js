// Patient.js
export class Patient {
    constructor(nom, maladie, argent) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = "";  // Ce sera le médicament que le patient achète
        this.sante = "malade";
    }

    allerCabinet(doctor) {
        console.log(`${this.nom} va au cabinet du docteur.`);
        doctor.consulter(this);
    }

    allerPharmacie(pharmacia) {
        console.log(`${this.nom} va à la pharmacie.`);
        pharmacia.acheterTraitement(this);
    }
}
