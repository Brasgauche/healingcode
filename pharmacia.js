// Pharmacie.js
export class Pharmacie {
    constructor() {
        this.traitements = {
            "ctrl+maj+f": 60,
            "saveOnFocusChange": 10,
            "CheckLinkRelation": 35,
            "Ventoline": 4000,
            "f12+doc": 200,
        };
    }

    acheterTraitement(patient, cimetiere) {
        const traitement = patient.poche;
        const prix = this.traitements[traitement];

        if (patient.argent >= prix) {
            patient.argent -= prix;
            console.log(`💊 ${patient.nom} a acheté le traitement ${traitement} pour ${prix}€.`);
            patient.sante = "guéri";
        } else {
            console.log(`❌ ${patient.nom} n'a pas assez d'argent pour acheter ${traitement} le tbib lui dit sir triq slama.`);
            cimetiere.enterrer(patient); // Envoi au cimetière
        }
    }
}