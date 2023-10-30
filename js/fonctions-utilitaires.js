"use strict";

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
