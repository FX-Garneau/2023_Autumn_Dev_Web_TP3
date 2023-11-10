/* eslint-disable no-undef */
"use strict";

// Globals
const IDTOASTAFFICHER = "div";
const TITRETOAST = "Bonne réponse!";

/** @type {string[]} */
var listCategories = [];
var modules = DATA_QUIZ.modules;
let questionnaire = [];

/**
 * Fonction qui permet d'initialiser toutes les autres fonctions après que la page soit chargée.
 */
function initialisation() {
   // Ajoute un id au modules;
   ajouterModulesID();

   // Initialize event listeners
   attachEventListeners();

   // obtenir liste des categories (NE PAS SUPRIMER)
   listCategories = $all("#categories input")
      .map(opt => opt.value?.toLowerCase())
      .filter(c => c != "autres");

   afficherCards();
}
addEventListener("load", initialisation);

/**
 * Fonction qui permet d'attacher les événements aux éléments HTML
 */
function attachEventListeners() {
   $id("filtrer").addEventListener("click", () => { afficherModulesSelonFiltre(true); });
   $id("afficherTout").addEventListener("click", () => { afficherModulesSelonFiltre(false); });
   $id("questionSuivante").addEventListener("click", affichierQuestionSuivante);
   $id("creationQuestionnaire").addEventListener("click", () => { creerQuestionnaire(); });
}

/**
 * Fonction qui permet de créer la structure HTML pour afficher une card à
 * partir des paramètres pour personnaliser l’image, le titre et la description.
 * @param {*} pImage Image à insérer dans le haut de la cards
 * @param {*} pTitre Titre de la cards
 * @param {*} pDescription Description de la cards
 */
function creerCards(pImage, pTitre, pDescription) {
   let elementHTMLPourInsererLaCards = document.getElementById("modules");

   let nouvElementDivCol = document.createElement("div");
   nouvElementDivCol.className = "col-lg-4 col-md-12 mb-3 d-flex";
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

   let nouvElementH3CardTitle = document.createElement("h3");
   nouvElementH3CardTitle.className = "card-title text-center";
   nouvElementH3CardTitle.textContent = pTitre;
   nouvElementDivCardBody.appendChild(nouvElementH3CardTitle);

   let nouvElementPCardText = document.createElement("p");
   nouvElementPCardText.classList.add("card-text");
   nouvElementDivCardBody.appendChild(nouvElementPCardText);
   nouvElementPCardText.textContent = pDescription;
}

/**
 * Fonction qui permet d'afficher les cards à partir de la fonction creerCards
 */
function afficherCards() {

   $id("modules").innerHTML = ""; /** @author Ulric Huot */

   for (let module of modules) {
      let cheminImage = "/images/modules/" + module.imgModule;
      let titreImage = module.titre;
      let descriptionImage = module.description;
      creerCards(cheminImage, titreImage, descriptionImage);
   }
}
/**
 * Fonction qui permet de créer la structure du toasts à partir des
paramètres passés.
 * @param {*} pId Id du toast selon l'endroit où il est utilisé
 * @param {*} pTitre Titre du toast selon l'endroit où il est utilisé
 * @param {*} pContenu Description du toast selon l'endroit où il est utilisé
 * @param {*} pTemps Temps en millisecondes pour avoir réalisé le questionnaire
 */
function afficherToasts(pId, pTitre, pContenu) {

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
   nouvelElementBoutonFermer.setAttribute("aria-label", "Close");
   nouvelleDivToastHeader.appendChild(nouvelElementBoutonFermer);

   let nouvelleDivToastBody = document.createElement("div");
   nouvelleDivToastBody.classList.add("toast-body");
   nouvelleDivToast.appendChild(nouvelleDivToastBody);

   let nouvelElementPContenu = document.createElement("p");
   nouvelElementPContenu.textContent = pContenu;
   nouvelleDivToastBody.appendChild(nouvelElementPContenu);

   let nouvelElementPTemps = document.createElement("p");
   nouvelElementPTemps.textContent = pTemps;
   nouvelleDivToastBody.appendChild(nouvelElementPTemps);
}

/**
 * Va chercher la rétroaction de la réponse (bonne ou
mauvaise) et l’affiche dans un toast si le paramètre est true
 * @param {boolean} pEstRetroToasts Retour de la réponse
 * @param {*} idToast Id de l'Élément HTML qui doit afficher le toast
 */
function afficherRetroaction(pEstRetroToasts, idToast) {
   if (pEstRetroToasts) {
      afficherToasts(idToast, TITRETOAST, DATA_QUIZ.banque_questions.retroactionPositive);
   }
   else {
      afficherToasts(idToast, TITRETOAST, DATA_QUIZ.banque_questions.retroactionNegative);
   }
}

/**
 * Filtre les modules selon les critères de recherche
 * @author Ulric Huot
 * @param {boolean} filtrer Si l'on doit filtrer les modules ou non
 */
function filtrerModules(filtrer) {
   let module = $id("choixModule").selectedOptions[0].value?.toLowerCase();
   let keyword = $id("motcle").value?.toLowerCase();
   let categories = $all("#categories input:checked").map(opt => opt.value?.toLowerCase());
   modules = !filtrer
      ? DATA_QUIZ.modules
      : DATA_QUIZ.modules.filter((m, i) =>
         module == m.titre.toLowerCase() ||
         keyword && m.description.toLowerCase().includes(keyword) ||
         Array.from(new Set(
            DATA_QUIZ.banque_questions.filter(q =>
               q.categories.some(c =>
                  categories.includes(c.toLowerCase()) || (
                     categories.includes("autres") &&
                     !q.categories.some(qc => listCategories.includes(qc.toLowerCase()))
                  )
               )
            ).map(q => q.modulesId)
         )).includes(i)
      );
   console.log(modules);
}

/**
 * Les modules correspondants aux filtres dans la page HTML
 * @author Ulric Huot
 * @param {boolean} filtrer Si l'on doit filtrer les modules ou non
 */
function afficherModulesSelonFiltre(filtrer) {
   filtrerModules(filtrer);
   afficherCards();
}


function creerQuestionnaire() {

   let banqueQuestion = [];

   questionnaire = [];

   for (let module of modules) {
      for (let question of DATA_QUIZ.banque_questions) {
         if (module.modulesId == question.modulesId) {
            banqueQuestion.push(question);
         }
      }
   }

   console.log(banqueQuestion);


   let elementNbQuestion = document.getElementById("nbQuestions");
   let nbQuestions = elementNbQuestion.value;

   // if (nbQuestions > banqueQuestion.length()) {
   //    nbQuestions = banqueQuestion.length();
   //    //Ajouter popup de cahngement du nb de question
   // }

   for (let index = 0; index < nbQuestions; index++) {
      let indiceQuestion = Math.floor(Math.random() * banqueQuestion.length);
      questionnaire.push(banqueQuestion[indiceQuestion]);
      banqueQuestion.splice(indiceQuestion, 1);
   }

   console.log(questionnaire);
}

function affichierQuestionSuivante(pNBQuestion) {
   let question = questionnaire[pNBQuestion];
   document.getElementById("titreQuestion").textContent = `Question ${pNBQuestion + 1} (Module ${question.modulesId} - ${DATA_QUIZ.modules[question.modulesId].titre})`;
   document.getElementById("questionPoser").textContent = question.titre;

   let sectionReponse = getElementById("questionReponse")
   if (question.typeQuestion === "check") {
      for (const reponse of question.choixReponses) {
         let nouvelleReponse = document.createElement("div");
         nouvelleReponse.classList.add("form-check col-12 m-4");

         let inputReponse = document.createElement("input")
         inputReponse.type = "checkbox";
         inputReponse.classList.add("form-check-input");
         inputReponse.id = reponse;
         inputReponse.name = reponse;
         inputReponse.value = reponse;

         let labelReponse = document.createElement("label");
         labelReponse.classList.add("form-check-label");
         labelReponse.textContent = reponse;

         nouvelleReponse.appendChild(inputReponse);
         nouvelleReponse.appendChild(labelReponse);

         sectionReponse.appendChild(nouvelleReponse);
      }
   }
   return moduleCorrespondant;
}

function affichierQuestionSuivante(pNBQuestion) {
   let question = questionnaire[pNBQuestion];
   document.getElementById("titreQuestion").textContent = `Question ${pNBQuestion + 1} (Module ${question.modulesId} - ${DATA_QUIZ.modules[question.modulesId].titre})`;
   document.getElementById("questionPoser").textContent = question.titre;

   let sectionReponse = getElementById("questionReponse")
   if (question.typeQuestion === "check") {
      for (const reponse of question.choixReponses) {
         let nouvelleReponse = document.createElement("div");
         nouvelleReponse.classList.add("form-check col-12 m-4");

         let inputReponse = document.createElement("input")
         inputReponse.type = "checkbox";
         inputReponse.classList.add("form-check-input");
         inputReponse.id = reponse;
         inputReponse.name = reponse;
         inputReponse.value = reponse;

         let labelReponse = document.createElement("label");
         labelReponse.classList.add("form-check-label");
         labelReponse.textContent = reponse;

         nouvelleReponse.appendChild(inputReponse);
         nouvelleReponse.appendChild(labelReponse);

         sectionReponse.appendChild(nouvelleReponse);
      }
   }
   if (question.typeQuestion === "radio") {
      let nouvelleReponse = document.createElement("div");
      nouvelleReponse.classList.add("form-check col-12 m-4");

      let inputReponse = document.createElement("input")
      inputReponse.type = "radio";
      inputReponse.classList.add("form-check-input");
      inputReponse.id = reponse;
      inputReponse.name = reponse;
      inputReponse.value = reponse;

      let labelReponse = document.createElement("label");
      labelReponse.classList.add("form-check-label");
      labelReponse.textContent = reponse;

      nouvelleReponse.appendChild(inputReponse);
      nouvelleReponse.appendChild(labelReponse);

      sectionReponse.appendChild(nouvelleReponse);
   }
}

function ajouterModulesID() {
   let i = 0;
   for (let module of modules) {
      module.modulesId = i;
      i++;
   }
}