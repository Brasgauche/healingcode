// Cimetiere.js
export class Cimetiere {
    constructor() {
        this.deces = [];
    }

    enterrer(patient) {
        console.log(`⚰️ ${patient.nom} est décédé car il n'avait pas assez d'argent pour acheter son traitement.`);
        this.deces.push(patient.nom);
    }

    afficherMorts() {
        console.log("Liste des patients morts :");
        this.deces.forEach((nom, index) => {
            console.log(`${index + 1}. ${nom}`);
            console.log("Allah y rehmo 🙏");
            
        });
    }
}
