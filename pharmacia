// Pharmacy.js
export class Pharmacy {
    constructor() {
        this.medicaments = {
            'ctrl+maj+f': 60,
            'saveOnFocusChange': 100,
            'CheckLinkRelation': 35,
            'Ventoline': 40,
            'f12+doc': 20
        };
    }

    acheterTraitement(patient) {
        console.log(`${patient.nom} arrive à la pharmacie.`);
        
        const traitement = patient.poche;  // le traitement que le patient a prescrit

        // Vérification si le patient a assez d'argent
        if (this.medicaments[traitement] && patient.argent >= this.medicaments[traitement]) {
            patient.argent -= this.medicaments[traitement];
            console.log(`${patient.nom} a acheté ${traitement} pour ${this.medicaments[traitement]}€.`);
            patient.sante = "guéri";
        } else if (this.medicaments[traitement] && patient.argent < this.medicaments[traitement]) {
            console.log(`${patient.nom} n'a pas assez d'argent pour acheter ${traitement}. Il est mort.`);
            patient.sante = "mort";
        } else {
            console.log(`${patient.nom} n'a pas de traitement prescrit ou le traitement est invalide.`);
        }
    }
}