/**
 *  Fichier principal javascript
 */
"use strict";
/*global ajouterALaPage*/ 

/*************
    Cette fonction est rattachée à l'événement "Load". 
    C'est la première fonction qui va s'executer lorsque 
    la page sera entièrement chargée.
**************/
 function initialisation() 
 {

 for (let module of DATA_QUIZ.modules) 
 {
    let cheminImage ="/images/" + modules.imgModule;
    let titreImage = modules.titre;
    let descriptionImage = modules.descripion;
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

    let nouvElementDivRow = document.createElement("div").classList.add("row mb-5");
    elementHTMLPourInsererLaCards.appendChild(nouvElementDiv);

    let nouvElementDivCol = document.createElement("div").classList.add("col-lg-6 col-md-12 mb-3");
    nouvElementDivRow.appendChild(nouvElementDivCol);

    let nouvElementDivCard = document.createElement("div").classList.add("card");
    nouvElementDivCol.appendChild(nouvElementDivCard);

    let nouvElementDiv = document.createElement("div").classList.add("card-body");
    nouvElementDivCard.appendChild(nouvElementDiv);

    let nouvElementImg = document.createElement("img").classList.add("card-img-bottom");
    nouvElementImg.setAttribute("src", pImage);
    nouvElementDiv.appendChild(nouvElementImg);

    let nouvElementDivCardBody = document.createElement("div").classList.add("card-body");
    nouvElementDivCard.appendChild(nouvElementDivCardBody);

    let nouvElementH3CardTitle= document.createElement("h3").classList.add("card-title text-center");
    nouvElementH3CardTitle.textContent = pTitre;
    nouvElementDivCardBody.appendChild(nouvElementH3CardTitle);

    let nouvElementPCardText = document.createElement("p").classList.add("card-text");
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
function afficherToasts (pId, pTitre, pContenu, pTemps)
{
    let elementHtmlPourInsererToast = document.getElementById(pId);
    let nouvelleDivToast = document.createElement("div").classList.add("toast");
    elementHtmlPourInsererToast.appendChild(nouvelleDivToast);

    let nouvelleDivToastHeader = document.createElement("div").classList.add("toast-header");
    nouvelleDivToast.appendChild(nouvelleDivToastHeader);

    let nouvelElementH3Titre = document.createElement("strong").classList.add("me-auto");
    nouvelElementH3Titre.textContent = pTitre;
    nouvelleDivToastHeader.appendChild(nouvelElementH3Titre);

    let nouvelElementBoutonFermer = document.createElement("button").classList.add("btn-close");
    nouvelElementBoutonFermer.setAttribute("data-bs-dismiss", "toast");
    nouvelElementBoutonFermer.setAttribute("aria-label","Close");
    nouvelleDivToastHeader.appendChild(nouvelElementBoutonFermer);

    let nouvelleDivToastBody = document.createElement("div").classList.add("toast-body");
    nouvelleDivToast.appendChild(nouvelleDivToastBody);

    let nouvelElementPContenu = document.createElement("p");
    nouvelElementPContenu.textContent= pContenu;
    nouvelleDivToastBody.appendChild(nouvelElementPContenu);

    let nouvelElementPTemps = document.createElement("p");
    nouvelElementPTemps.textContent= pTemps;
    nouvelleDivToastBody.appendChild(nouvelElementPTemps);
}

/**code html du toast pour la fabrication de la fonction 
 * 
 * <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
</div>
*/

addEventListener("load", initialisation, false);