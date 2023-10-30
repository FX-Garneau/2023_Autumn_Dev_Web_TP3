/* eslint-disable no-undef */
/**
 *  Fichier principal javascript
 */
"use strict";
const IDTOASTAFFICHER ="div";
const TITRETOAST ="Bonne réponse!";

/*global ajouterALaPage DATA_QUIZ*/ 

/*************
    Cette fonction est rattachée à l'événement "Load". 
    C'est la première fonction qui va s'executer lorsque 
    la page sera entièrement chargée.
**************/
 function initialisation() 
 {

    console.log("slaut");
    console.log(DATA_QUIZ);

 for (let module of DATA_QUIZ.modules) 
 {
    let cheminImage ="/images/modules/" + module.imgModule;
    let titreImage = module.titre;
    let descriptionImage = module.description;
    creerCards(cheminImage,titreImage,descriptionImage);  
 }
    

}

/**Section des fonction à Thierry Durand */

/**
 * Fonction qui permet de créer la structure HTML pour afficher une card à
partir des paramètres pour personnaliser l’image, le titre et la description.
 * @param {*} pImage Image à insérer dans le haut de la cards
 * @param {*} pTitre Titre de la cards
 * @param {*} pDescription Description de la cards
 */
function creerCards(pImage, pTitre, pDescription){
    let elementHTMLPourInsererLaCards = document.getElementById("modules");

    let nouvElementDivCol = document.createElement("div");
    nouvElementDivCol.classList.add("col-lg-4");
    nouvElementDivCol.classList.add("col-md-12");
    nouvElementDivCol.classList.add("mb-3");
    elementHTMLPourInsererLaCards.appendChild(nouvElementDivCol);

    let nouvElementDivCard = document.createElement("div");
    nouvElementDivCard.classList.add("card");
    nouvElementDivCol.appendChild(nouvElementDivCard);

    let nouvElementDiv = document.createElement("div");
    nouvElementDiv.classList.add("card-body");
    nouvElementDivCard.appendChild(nouvElementDiv);

    let nouvElementImg = document.createElement("img");
    nouvElementImg.classList.add("card-img-bottom");
    nouvElementImg.setAttribute("src", pImage);
    nouvElementDiv.appendChild(nouvElementImg);

    let nouvElementDivCardBody = document.createElement("div");
    nouvElementDivCardBody.classList.add("card-body");
    nouvElementDivCard.appendChild(nouvElementDivCardBody);

    let nouvElementH3CardTitle= document.createElement("h3");
    nouvElementH3CardTitle.classList.add("card-title");
    nouvElementH3CardTitle.classList.add("text-center");
    nouvElementH3CardTitle.textContent = pTitre;
    nouvElementDivCardBody.appendChild(nouvElementH3CardTitle);

    let nouvElementPCardText = document.createElement("p");
    nouvElementPCardText.classList.add("card-text");
    nouvElementDivCardBody.appendChild(nouvElementPCardText);
    nouvElementPCardText.textContent = pDescription;
}

/**
 * Fonction qui permet de créer la structure du toasts à partir des
paramètres passés.
 * @param {*} pId Id du toast selon l'endroit où il est utilisé
 * @param {*} pTitre Titre du toast selon l'endroit où il est utilisé
 * @param {*} pContenu Description du toast selon l'endroit où il est utilisé
 * @param {*} pTemps Temps en millisecondes pour avoir réalisé le questionnaire
 */
function afficherToasts (pId, pTitre, pContenu)
{

    //vider le toast en premier avec .innertHTML ="";
    let elementHtmlPourInsererToast = document.getElementById(pId);

    let nouvelleDivToast = document.createElement("div");
    nouvelleDivToast.classList.add("toast");
    elementHtmlPourInsererToast.appendChild(nouvelleDivToast);

    let nouvelleDivToastHeader = document.createElement("div");
    nouvelleDivToastHeader.classList.add("toast-header");
    nouvelleDivToast.appendChild(nouvelleDivToastHeader);

    let nouvelElementH3Titre = document.createElement("strong");
    nouvelElementH3Titre.classList.add("me-auto");
    nouvelElementH3Titre.textContent = pTitre;
    nouvelleDivToastHeader.appendChild(nouvelElementH3Titre);

    let nouvelElementBoutonFermer = document.createElement("button");
    nouvelElementBoutonFermer.classList.add("btn-close");
    nouvelElementBoutonFermer.setAttribute("data-bs-dismiss", "toast");
    nouvelElementBoutonFermer.setAttribute("aria-label","Close");
    nouvelleDivToastHeader.appendChild(nouvelElementBoutonFermer);

    let nouvelleDivToastBody = document.createElement("div");
    nouvelleDivToastBody.classList.add("toast-body");
    nouvelleDivToast.appendChild(nouvelleDivToastBody);

    let nouvelElementPContenu = document.createElement("p");
    nouvelElementPContenu.textContent= pContenu;
    nouvelleDivToastBody.appendChild(nouvelElementPContenu);

    let nouvelElementPTemps = document.createElement("p");
    nouvelElementPTemps.textContent= pTemps;
    nouvelleDivToastBody.appendChild(nouvelElementPTemps);
}

/**
 * Va chercher la rétroaction de la réponse (bonne ou
mauvaise) et l’affiche dans un toast si le paramètre est true
 * @param {boolean} pEstRetroToasts Retour de la réponse
 * @param {*} idToast Id de l'Élément HTML qui doit afficher le toast
 */
function afficherRetroaction(pEstRetroToasts, idToast)
{
    if(pEstRetroToasts)
    {
      afficherToasts(idToast,TITRETOAST,DATA_QUIZ.banque_questions.retroactionPositive);
    }
    else
    {
        afficherToasts(idToast,TITRETOAST,DATA_QUIZ.banque_questions.retroactionNegative);
    }
}
addEventListener("load", initialisation, false);