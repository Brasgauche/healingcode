// main.js
import { Patient } from './patient.js';
import { Tbib } from './tbib.js';
import { Pharmacy } from './pharmacia.js';

const tbib = new Tbib();
const pharmacy = new Pharmacy();

const patients = [
    new Patient("flan", "mal indenté", 100),
    new Patient("3lan", "unsave", 200),
    new Patient("Karim", "404", 80),
    new Patient("3amo", "azmatique", 110),
    new Patient("Salah", "syntaxError", 60)
];

// Simuler le parcours des patients
patients.forEach(patient => {
    patient.allerCabinet(tbib);  // Consultation avec le docteur
    patient.allerPharmacie(pharmacy);  // Achat du médicament à la pharmacie
});
