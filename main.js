// main.js
import { Patient } from "./patient.js";
import { tbib } from "./tbib.js";
import { Pharmacie } from "./pharmacia.js";
import { Cimetiere } from "./cimtiere.js";

const docteur = new tbib();
const pharmacie = new Pharmacie();
const cimetiere = new Cimetiere();

const patients = [
    new Patient("Marcus", "mal indenté", 100),
    new Patient("Optimus", "unsave", 200),
    new Patient("Sangoku", "404", 80),
    new Patient("DarthVader", "azmatique", 110),
    new Patient("Semicolon", "syntaxError", 60),
];

patients.forEach((patient) => {
    patient.allerCabinet(docteur);
    patient.allerPharmacie(pharmacie, cimetiere);
});

// Affichage des morts
cimetiere.afficherMorts();
