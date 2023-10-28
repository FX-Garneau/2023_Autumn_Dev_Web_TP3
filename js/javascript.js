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
    let elementsHTML = document.getElementsByTagName("main");
    let elementHTMLPourInsererLaCards = elementsHTML[0];

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
    nouvElementPCardText.textContent=pDescription;
}

/**Code HTML temporaire pour faire la fonction creerCards. Ce code va être enlevé lorsque la fonction va être foncionnelle-->
        <div class="row mb-5">
            <div class="col-lg-6 col-md-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title text-center">Cocktail Matcha <span class="badge bg-success">Nouveauté</span></h3>
                </div>
                <img src="img/matcha-cocktail-in-a-cafe.jpg" alt="Cocktail Matcha" class="card-img-bottom">
              </div>
            </div>*/


addEventListener("load", initialisation, false);