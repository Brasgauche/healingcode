// Doctor.js
export class Tbib {
    constructor() {
        this.chat = "miaou";  // Chat pour bonus
    }

    consulter(patient) {
        console.log(`${patient.nom} est en consultation avec le docteur.`);
        
        // Selon la maladie, le docteur prescrit un traitement
        const traitements = {
            'mal indenté': 'ctrl+maj+f',
            'unsave': 'saveOnFocusChange',
            '404': 'CheckLinkRelation',
            'azmatique': 'Ventoline',
            'syntaxError': 'f12+doc'
        };

        patient.poche = traitements[patient.maladie];
        console.log(`${patient.nom} a reçu la prescription: ${patient.poche}`);
    }
}
