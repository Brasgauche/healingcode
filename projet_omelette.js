let personnage = {
    // Propriétés
    nom: "Moha",
    lieu: "dar",
    argent: 50,
    mainDroite: [],
    mainGauche: [],

    // Méthodes
    seDeplacer(nouveauLieu) {
        console.log(`${this.nom} se déplace de ${this.lieu} vers ${nouveauLieu}.`);
        this.lieu = nouveauLieu; // Met à jour le lieu
    },

    payerArticle(article) {
        if (this.argent >= article.prix) {
            this.argent -= article.prix; // Déduit le prix de l'article
            console.log(`${this.nom} achète ${article.nom} pour ${article.prix}€. Il lui reste ${this.argent}€.`);
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${article.nom}.`);
        }
    },

    couper(ingredient, outil) {
        if (outil === "couteau") {
            console.log(`${this.nom} coupe ${ingredient} avec un ${outil}.`);
        } else {
            console.log(`Impossible de couper ${ingredient} sans un couteau.`);
        }
    }
};


// Article à acheter
let pomme = { nom: "pomme", prix: 2 };

// Actions du personnage
personnage.seDeplacer("marché");
personnage.payerArticle(pomme);
personnage.couper("pomme", "couteau");

//maisonoslm
let dar = {
    // Propriétés
    nom: "dar",
    personnes: [], // Tableau vide pour stocker les personnes présentes

    // Méthode pour ajouter une personne
    ajouterPersonne(personne) {
        this.personnes.push(personne);
        console.log(`${personne.nom} entre dans ${this.nom}.`);
    },

    // Méthode pour retirer une personne
    retirerPersonne(personne) {
        let index = this.personnes.indexOf(personne);
        if (index !== -1) {
            this.personnes.splice(index, 1);
            console.log(`${personne.nom} sort de ${this.nom}.`);
        } else {
            console.log(`${personne.nom} n'est pas dans ${this.nom}.`);
        }
    },

    // Méthode pour lister les personnes présentes
    listerPersonnes() {
        if (this.personnes.length > 0) {
            console.log(`Les personnes présentes dans ${this.nom} sont :`);
            this.personnes.forEach(p => console.log(p.nom));
        } else {
            console.log(`Il n'y a personne dans ${this.nom}.`);
        }
    }
};

// personnes
let personne1 = { nom: "Karim" };
let personne2 = { nom: "3amo" };

// Ajouter des personnes dans la maison
dar.ajouterPersonne(personne1);
dar.ajouterPersonne(personne2);

// Lister les personnes présentes
dar.listerPersonnes();

// Retirer une personne
dar.retirerPersonne(personne1);

// Lister à nouveau les personnes présentes
dar.listerPersonnes();



//outil oslm
let couteau = {
    // Propriétés
    nom: "couteau",
    action: "découper",

    // Méthode pour utiliser l'outil
    utiliser(ingredient) {
        console.log(`Vous utilisez le ${this.nom} pour ${this.action} ${ingredient}.`);
    }
};

let mouleur = {
    // Propriétés
    nom: "mouleur",
    action: "mouler",

    // Méthode pour utiliser l'outil
    utiliser(ingredient) {
        console.log(`Vous utilisez le ${this.nom} pour ${this.action} ${ingredient}.`);
    }
};

 couteau.utiliser("pomme");
mouleur.utiliser("farine");


//produitsingr oslm
let oignon = {
    nom: "oignon",
    etats: ["entier", "coupé"],
    prix: 1.5
};

let oeuf = {
    nom: "oeuf",
    etats: ["entier", "battu"],
    prix: 0.5
};

let epice = {
    nom: "épice",
    etats: ["entier", "moulu"],
    prix: 2.0
};

let fromage = {
    nom: "fromage",
    etats: ["entier", "râpé"],
    prix: 3.0
};

// affichage des ingrédients disponibles
console.log("Ingrédients disponibles dans le magasin :");
[oignon, oeuf, epice, fromage].forEach(ingredient => {
    console.log(`${ingredient.nom} - États  : ${ingredient.etats.join(", ")} - Prix : ${ingredient.prix}€`);
});




//epicerie oslm
// Les ingrédients créés précédemment
let ingredients = [
    { nom: "oignon", etats: ["entier", "coupé"], prix: 1.5 },
    { nom: "oeuf", etats: ["entier", "battu"], prix: 0.5 },
    { nom: "épice", etats: ["entier", "moulu"], prix: 2.0 },
    { nom: "fromage", etats: ["entier", "râpé"], prix: 3.0 }
];

// baqal
let baqal = {
    nom: "baqal du coin",
    personnes: [], // Liste des personnes présentes dans l'épicerie
    paniers: [
        { type: "panier", contenu: [] }, // Un panier vide
        { type: "panier", contenu: [] }  // Un autre panier vide
    ],
    stock: ingredients // Les ingrédients disponibles dans l'épicerie
};

const baqals = {
    paniers: [{ type: "panier", contenu: [] }],
    ingredients: [
        { nom: "oeuf", prix: 1 },
        { nom: "lait", prix: 1.5 },
        { nom: "fromage", prix: 2 }
    ]
};


// affichage des informations de l'épicerie
console.log("Bienvenue à", baqal.nom);
console.log("Personnes présentes :", baqal.personnes);
console.log("Paniers disponibles :", baqal.paniers.length);
console.log("Ingrédients disponibles :");
baqal.stock.forEach(ingredient => {
    console.log(`- ${ingredient.nom} (États : ${ingredient.etats.join(", ")}, Prix : ${ingredient.prix}€)`);
});



//maqla oslm
let maqlaoslm = {
    nom: "maqla",
    contenu: [], // Tableau vide pour contenir les ingrédients

    // Méthode cuire
    cuire() {
        if (this.contenu.length === 0) {
            console.log("maqla est vide, rien à cuire !");
        } else {
            console.log(`Cuisson en cours des ingrédients : ${this.contenu.join(", ")}`);
            this.contenu = this.contenu.map(ingredient => `cuit ${ingredient}`);
            console.log("Ingrédients cuits :", this.contenu);
        }
    }
};

console.log("Nom de l'outil :", maqlaoslm.nom);
maqlaoslm.contenu.push("œuf", "fromage"); // Ajouter des ingrédients dans la poêle
console.log("Contenu avant cuisson :", maqlaoslm.contenu);
maqlaoslm.cuire(); // Cuire les ingrédients
console.log("Contenu après cuisson :", maqlaoslm.contenu);


//bol oslm
let bol = {
    contenu: ["Oeuf", "Farine", "Lait"], // Tableau initial d'ingrédients
    melanger: function(khalet) {
        // Remplacer tout le contenu du bol par un nouveau mélange
        this.contenu = [{
            nom: khalet,
            etat: "pas cuit",
            prix: 0
        }];
        console.log(`Le bol a été mélangé en ${khalet}. Il est ${this.contenu[0].etat} et coûte ${this.contenu[0].prix}€.`);
    }
};

// Exemple d'utilisation
console.log("Ingrédients dans le bol avant mélange :", bol.contenu);
bol.melanger("Omelette"); // Mélange les ingrédients pour une omelette
console.log("Ingrédients dans le bol après mélange :", bol.contenu);





// Poêle
const maqla = {
    nom: "poêle",
    contenu: [],
    cuire: function() {
        setTimeout(() => {
            if (this.contenu.length > 0) {
                this.contenu[0].etats = ["cuit"];
                console.log("L'omelette est cuite !");
            }
        }, 4000);
    }
};

// Bol
const boloslm = {
    contenu: [],
    melanger: function(nomDuMelange) {
        this.contenu = [{ nom: nomDuMelange, etats: ["pas cuit"], prix: 0 }];
        console.log(`Le mélange '${nomDuMelange}' est prêt.`);
    }
};

// Processus complet
// Début de l'omelette
personnage.seDeplacer(dar);
console.log(`${personnage.nom} est actuellement à la ${personnage.lieu}`);

// Aller à l'épicerie pour acheter les ingrédients
personnage.seDeplacer(baqal);
console.log(`${personnage.nom} est maintenant à l'épicerie.`);

// Prendre un panier
const panier = baqal.paniers[0];
personnage.mainDroite.push(panier);
console.log(`${personnage.nom} a pris un panier.`);

// Ajouter les ingrédients au panier et payer
baqals.ingredients.forEach(ingredient => {
    panier.contenu.push(Object.assign({}, ingredient)); // Copie de l'ingrédient dans le panier
    console.log(`${personnage.nom} a pris ${ingredient.nom} dans le panier.`);
    personnage.payerArticle(ingredient);
});

// Retour à la maison
personnage.seDeplacer(dar);
console.log(`${personnage.nom} retourne à la maison avec les ingrédients.`);

// Mettre les ingrédients dans le bol
panier.contenu.forEach(ingredient => {
    bol.contenu.push(ingredient);
    console.log(`${personnage.nom} a mis ${ingredient.nom} dans le bol.`);
});
panier.contenu = []; // Vider le panier

// Retourner l'objet panier à l'épicerie
personnage.seDeplacer(baqal);
personnage.mainDroite = [];
baqal.paniers.push(panier);
console.log(`${personnage.nom} a retourné le panier u baqal.`);

// Retour à la maison
personnage.seDeplacer(dar);
console.log(`${personnage.nom} est de retour à la dar.`);

// Couper les ingrédients s'ils sont entiers
bol.contenu.forEach(ingredient => {
    if (ingredient.etats && ingredient.etats.includes("entier")) {
        personnage.couper(ingredient, { nom: "couteau" });
    }
});


   
// Mélanger les ingrédients dans le bol
bol.melanger("omelette");
console.log("Le mélange est maintenant prêt.");

// Vider le contenu du bol dans la poêle
maqlaoslm.contenu = bol.contenu;
bol.contenu = [];
console.log("Le contenu du bol a été versé dans la poêle.");

// Cuire l'omelette
maqlaoslm.cuire();




// Objet personnage
const bnedem = {
    nom: "Moha",  // Nom du personnage
    lieu: "",  // Lieu actuel du personnage
    mainDroite: [],  // Ce que le personnage porte
    seDeplacer: function(nouvelEndroit) {
        this.lieu = nouvelEndroit.nom;  // Met à jour le lieu du personnage
        console.log(`${this.nom} est actuellement f ${this.lieu}`);  // Affiche le message
    },
    // Autres méthodes comme payerArticle, couper, etc.
};

// Objet maison (exemple)
const daroslm = {
    nom: "dar"
};

// Objet épicerie (exemple)
const baqaly = {
    nom: "baqal"
};

// Exemple d'utilisation de la méthode seDeplacer
bnedem.seDeplacer(dar);  // Affiche : Alex est actuellement à la maison
bnedem.seDeplacer(baqal);  // Affiche : Alex est actuellement à l'épicerie





maqlaty = {
    contenu: [], // Contenu de la poêle

    cuire: function () {
        console.log("La cuisson commence...");

        setTimeout(() => {
            if (this.contenu.length > 0) {
                // Mettre l'état "cuit" au premier élément du contenu
                this.contenu[0].etats = ["cuit"];

                // Créer le nouvel objet mélange
                const newMelange = {
                    nom: "mélange cuit",
                    etats: ["cuit"]
                };

                // Remplacer le contenu de la poêle par le nouvel objet
                this.contenu = [newMelange];
                console.log("La cuisson est terminée :", this.contenu);
            } else {
                console.error(" maqlaty est vide, rien à cuire !");
            }
        }, 4000); // Attendre 4 secondes
    }
};

// Déplacement vers l'épicerie
personnage.seDeplacer(baqal);
console.log(`${personnage.nom} est arrivé à f baqal.`);

// Prendre un panier
// Vérifiez si epicerie et personnage sont bien définis
if (baqal && personnage) {
    // Déplacement vers l'épicerie
    personnage.seDeplacer(baqal);
    console.log(`${personnage.nom} est arrivé f baqal.`);
    
    // Vérification de la disponibilité des paniers
    if (baqal.objets && baqal.objets.includes("panier")) {
        const panier = "panier"; // Récupérer un panier
        personnage.mains.droite = panier; // Mettre le panier dans la main droite
        console.log(`${personnage.nom} a pris un panier.`);
    } else {
        console.log(`Il n'y a pas de panier disponible à l'épicerie.`);
    }
} else {
    console.log("L'épicerie ou le personnage n'est pas correctement défini.");
}

// Exemple d'initialisation correcte
let baqalo = {
    paniers: [{ type: 'panier', contenu: [] }], // un panier
    objets: ["œufs", "lait", "fromage", "sel"] // les objets de l'épicerie
};

// Si vous voulez récupérer le panier, vérifiez d'abord s'il existe
const qofaty = baqal.paniers && baqal.paniers[0]; // Assurez-vous qu'il existe un panier

if (panier) {
    console.log("Panier trouvé:", panier);
} else {
    console.log("Aucun panier disponible.");
}

// Maintenant, nous pouvons accéder à `objets` de manière sécurisée
if (baqal.objets && Array.isArray(baqal.objets)) {
    baqal.objets.forEach((ingredient) => {
        console.log(`Ingrédient trouvé : ${ingredient}`);
    });
} else {
    console.log("Aucun ingrédient disponible.");
}

let bnedemoslm = {
    nom: "Moha",
    seDeplacer: function(lieu) {
        // Code de déplacement vers le lieu spécifié
        console.log(`${this.nom} se déplace vers ${lieu.nom}`);
    }
};

let maison = {
    nom: "maison"
};

// Assurez-vous que vous pouvez manipuler le panier avec le personnage
let bnedemoslmm = {
    nom: "Jean",
    mains: {
        droite: null, // Initialisation de la main droite
        gauche: null
    }
};

//khales
if (baqal && bnedemoslm) {
    // Vérifiez que le personnage a un panier dans sa main droite
    // Vérifie si la main droite contient bien le panier
    if (personnage.mains && personnage.mains.droite && personnage.mains.droite.type === "panier") {
        conso
    console.log(`${personnage.nom} a déjà un panier en main.`);
    } else {
    // Sinon, il prend un panier
    // Déclaration et initialisation de baqal avant son utilisation
const baqal = {
    paniers: [{ type: 'panier', contenu: [] }],
    objets: ["œufs", "lait", "fromage", "sel"]
}
};

// Maintenant, vous pouvez accéder à baqal.paniers et baqal.objets sans problème
const panier = baqal.paniers[0]; // Assurez-vous qu'il y a un panier dans l'épicerie

// Vérification de l'existence des objets avant d'itérer
if (baqal.objets && Array.isArray(baqal.objets)) {
    baqal.objets.forEach((ingredient) => {
        console.log(`Ingrédient trouvé : ${ingredient}`);
    });
} else {
    console.log("Aucun ingrédient disponible.");
}


// Le personnage prend le panier dans sa main droite
// Vérification si personnage.mains existe et si la main droite est vide
if (personnage.mains && !personnage.mains.droite) {
    personnage.mains.droite = panier; // Donner le panier à la main droite
    console.log(`${personnage.nom} a pris un panier.`);
}

// Exemple d'initialisation correcte de l'épicerie
let hanout = {
    objets: ["œufs", "lait", "fromage", "sel"]
};

// Vérification si baqal.goofti existe et contient des éléments
if (hanout.goofti && hanout.goofti.length > 0) {
    const goofti = hanout.goofti[0]; // Récupérer le premier élément de goofti
    console.log(`${personnage.nom} a pris un panier avec un goofti.`);
} else {
    console.log("La propriété 'goofti' est vide ou n'existe pas.");
}


// Exemple d'initialisation correcte de l'épicerie
let moulkhobzD = {
    objets: ["œufs", "lait", "fromage", "sel"]
};

// Vérifiez et utilisez forEach sur baqal.objets
if (baqal && Array.isArray(baqal.objets)) {
    baqal.objets.forEach((ingredient) => {
        console.log(`L'ingrédient ${ingredient} a été ajouté au panier.`);
    });
}


        // Parcours des objets de l'épicerie
        baqal.objets.forEach((ingredient) => {
            // Copie de l'ingrédient dans le panier
            panier.push(ingredient);
            console.log(`${personnage.nom} a ajouté ${ingredient.nom} dans le panier.`);
        });
        
            // Paiement de l'ingrédient
            if (baqal && personnage) {
                // Déplacement vers l'épicerie
                personnage.seDeplacer(baqal);
                console.log(`${personnage.nom} est arrivé à l'épicerie.`);
                
                // Prendre un panier
                if (personnage.mains.droite) {
                    console.log(`${personnage.nom} a pris un panier.`);
                } else {
                    console.log(`${personnage.nom} n'a pas pris de panier.`);
                }
            } else {
                console.log("L'épicerie ou le personnage n'est pas défini.");
        }   
    }       


//RENTRE F DAR
// Déplacement vers la maison
personnage.seDeplacer(maison);

// Affichage du message
console.log(`${personnage.nom} est rentré à la maison pour pouvoir cuisiner.`);





//ingr bol
let qofa = ["œuf", "lait", "farine"];
let boll = [];
// Parcours des ingrédients dans le panier
panier.forEach((ingredient) => {
    // Vérification que l'ingrédient est dans le panier
    if (panier.includes(ingredient)) {
        // Retirer l'ingrédient du panier
        let index = panier.indexOf(ingredient);
        panier.splice(index, 1); // Retirer l'élément à l'index spécifié
        
        // Ajouter l'ingrédient dans le bol (par exemple, avec un tableau bol)
        bol.push(ingredient);
        
        // Afficher un message pour chaque ingrédient mis dans le bol
        console.log(`${ingredient} a été mis dans le bol.`);
    }
});



//rga3 f baqal
// Retour à l'épicerie pour rapporter le panier
personnage.seDeplacer(epicerie); // Déplacement vers l'épicerie

// Enlever le panier de la main droite du personnage
if (personnage.mains.droite) {
    let panierRetourne = personnage.mains.droite; // Récupère le panier de la main droite
    personnage.mains.droite = null; // Enlève le panier de la main droite

    // Remettre le panier dans les paniers de l'épicerie
    epicerie.paniers.push(panierRetourne);

    // Afficher un message
    console.log(`${personnage.nom} a rapporté le panier à l'épicerie.`);
} else {
    console.log("Aucun panier dans la main droite du personnage.");
}


//rja3 n dar
// Retour à la maison pour continuer l'omelette
personnage.seDeplacer(maison); // Déplacement vers la maison

// Afficher un message
console.log(`${personnage.nom} retourne à la maison pour continuer l'omelette.`);

// Vérification et découpe des ingrédients dans le bol
bol.forEach(ingredient => {
    if (ingredient === "entier") { // Vérifie si l'ingrédient est entier
        personnage.couper(ingredient); // Utilise la méthode couper de la personne pour couper l'ingrédient
        console.log(`${personnage.nom} coupe l'ingrédient ${ingredient}.`);
    } else {
        console.log(`${ingredient} est déjà coupé.`);
    }
});



//kemel oslm
// Mélanger le contenu du bol
let omelette = personnage.melanger(bol); // Utilisation de la méthode melanger et création de l'omelette

// Afficher un message avec le nouveau mélange
console.log(`${personnage.nom} mélange les ingrédients pour créer une omelette.`);

// Vider le contenu du bol dans la poêle
bol = []; // Le bol est maintenant vide
poele.ajouter(omelette); // Ajout de l'omelette dans la poêle
console.log(`${personnage.nom} vide le bol dans la poêle.`);

// Cuire l'omelette
poele.cuire(); // Cuisson de l'omelette dans la poêle
console.log("Notre omelette est cuite :)");