"use strict";

/** @type {(id: string) => HTMLElement} */
const $id = document.getElementById.bind(document);
/** @type {(selectors: string) => Array<HTMLElement>} */
const $all = (selectors) => Array.from(document.querySelectorAll.bind(document)(selectors));
/** @type {(tagName: string, options?: ElementCreationOptions) => HTMLElement} */
const $new = document.createElement.bind(document);

/**
 * Fonction qui permet d'obtenir la couleur de la note (vert a rouge)
 * @param {number} n La note du joueur
 */
function gradeColor(n) {
   let [r, g] = [255, 0];
   if (n > 50) {
      r = Math.round(255 - (n - 50) * 5.1);
      g = 255;
   } else {
      g = Math.round(n * 5.1);
   }
   return `rgb(${r}, ${g}, 0)`;
}

/**
 * Envoye un courriel avec le contenu spécifié
 * @param {string} email L'adresse courriel du destinataire
 * @param {string} subject Le sujet du message
 * @param {string} body Le contenu du message
 */
function mailto(email, subject, body) {
   window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
}

/**
 * Fonction qui permet de créer un fichier et de le télécharger
 * @param {string} name Le nom du fichier
 * @param {string} data Le contenu du fichier
 */
function download(name, data) {
   let file = new File(["\ufeff" + data], name, { type: "text/plain:charset=UTF-8" });
   let url = window.URL.createObjectURL(file);
   let a = document.createElement("a");
   a.style = "display: none";
   a.href = url;
   a.download = file.name;
   a.click();
   window.URL.revokeObjectURL(url);
}

/**
 * Échappe les caractères spéciaux HTML
 * @param {string} str La chaîne de caractères à échapper
 */
function escapeHtml(str) {
   const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
   };
   return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

/**
 * Permet d'ajouter un paragraphe (p) à la fin du <body> Si des éléments existent déjà dans le <body>, le paragraphe sera ajouté à la suite des éléments existants..
 * @param {*} valeur Valeur à afficher dans la page.
  */
function ajouterALaPage(valeur) {

   // Création d'une variable p qui représente la balise <p> </p>
   // https://www.w3schools.com/jsref/met_document_createelement.asp
   let p = document.createElement("p");

   // Création d'une variable texte qui représente un contenu texte
   // https://www.w3schools.com/jsref/met_document_createtextnode.asp
   let texte = document.createTextNode(valeur);

   // Insertion du texte créé dans la balise créee
   // https://www.w3schools.com/jsref/met_node_appendchild.asp
   p.appendChild(texte);

   // Cibler dans le DOM la balise <body>
   // https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
   let parent = document.getElementsByTagName("body")[0];

   // Insérer le paragraphe dans la balise ciblée.
   parent.appendChild(p);
}
