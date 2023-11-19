/* eslint-disable no-undef */
"use strict";

// Globals
const IDTOASTAFFICHER = "afficherToast";
const TITRETOASTPOSITIF = "Bonne réponse!";
const TITRETOASTNEGATIF = "Mauvaise réponse!";
const TEMPSAFFICHAGETOAST = 3000;

/** @type {string[]} */
var listCategories = [];
var modules = DATA_QUIZ.modules;
let questionnaire = [];
let numeroQuestion = 0;

/**
 * Fonction qui permet d'initialiser toutes les autres fonctions après que la page soit chargée.
 */
function initialisation() {
   // Ajoute un id au modules;
   ajouterModulesID();
   // Initialize event listeners
   attachEventListeners();
   /** @author Ulric Huot */
   listCategories = $all("#categories input")
      .map(opt => opt.value?.toLowerCase())
      .filter(c => c != "autres");

   afficherCards();

}
addEventListener("load", initialisation);

/**
 * Fonction qui permet d'attacher les événements aux éléments HTML
 * @author Ulric Huot, Maxime Foisy
 */
function attachEventListeners() {
   $id("filtrer").addEventListener("click", () => { afficherModulesSelonFiltre(true); });
   $id("afficherTout").addEventListener("click", () => { afficherModulesSelonFiltre(false); });
   $id("creationQuestionnaire").addEventListener("click", () => { creerQuestionnaire(); });
   $id("questionSuivante").addEventListener("click", () => { validerReponse(numeroQuestion); });
   $id("btnMesReponse").addEventListener("click", () => { consulterReponses(); });
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
   nouvElementImg.setAttribute("alt", pTitre);
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
 * @param {*} pTemps Temps en millisecondes d'affichage du toast
 */
function afficherToasts(pId, pTitre, pContenu, pTemps) {

   let elementHtmlPourInsererToast = document.getElementById(pId);
   let verifierSiToastExiste = elementHtmlPourInsererToast.querySelector(".toast");

   let nouvelElementH3Titre, nouvelElementPContenu;

   if (verifierSiToastExiste) {
      nouvelElementH3Titre = verifierSiToastExiste.querySelector(".me-auto");
      nouvelElementPContenu = verifierSiToastExiste.querySelector(".toast-body p");
      nouvelElementH3Titre.textContent = pTitre;
      couleurValidation(pTitre, verifierSiToastExiste);
      nouvelElementPContenu.textContent = pContenu;
      pTemps = TEMPSAFFICHAGETOAST;
   } else {
      let nouvelleDivToast = document.createElement("div");
      nouvelleDivToast.className = "toast d-inline-block";
      elementHtmlPourInsererToast.appendChild(nouvelleDivToast);

      let nouvelleDivToastHeader = document.createElement("div");
      nouvelleDivToastHeader.classList.add("toast-header");
      nouvelleDivToast.appendChild(nouvelleDivToastHeader);

      nouvelElementH3Titre = document.createElement("strong");
      nouvelElementH3Titre.classList.add("me-auto");
      nouvelElementH3Titre.textContent = pTitre;
      couleurValidation(pTitre, nouvelleDivToast);
      nouvelleDivToastHeader.appendChild(nouvelElementH3Titre);

      let nouvelElementBoutonFermer = document.createElement("button");
      nouvelElementBoutonFermer.classList.add("btn-close");
      nouvelElementBoutonFermer.setAttribute("data-bs-dismiss", "toast");
      nouvelElementBoutonFermer.setAttribute("aria-label", "Close");
      nouvelleDivToastHeader.appendChild(nouvelElementBoutonFermer);

      let nouvelleDivToastBody = document.createElement("div");
      nouvelleDivToastBody.classList.add("toast-body");
      nouvelleDivToast.appendChild(nouvelleDivToastBody);

      nouvelElementPContenu = document.createElement("p");
      nouvelElementPContenu.textContent = pContenu;
      nouvelleDivToastBody.appendChild(nouvelElementPContenu);

   }

   let optionAffichageToast = { delay: pTemps };
   new bootstrap.Toast(elementHtmlPourInsererToast, optionAffichageToast).show();
}

/**
 * Permet de mettre le toast en vert ou en rouge selon si la réponse est bonne ou non
 * @param {*} pTitre titre du toast à partir la validation est faite
 * @param {*} pElementHTML Element HTML auquel la classe de validation est appliquée
 */
function couleurValidation(pTitre, pElementHTML) {
   if (pTitre == TITRETOASTPOSITIF) {
      pElementHTML.classList.add("border");
      pElementHTML.classList.add("border-success");
   }
   else {
      pElementHTML.classList.add("border");
      pElementHTML.classList.add("border-danger");
   }
}

/**
 * Va chercher la rétroaction de la réponse (bonne ou
mauvaise) et l’affiche dans un toast si le paramètre est true
 * @param {boolean} pEstRetroToasts Retour de la réponse
 * @param {*} idToast Id de l'Élément HTML qui doit afficher le toast
 */
function afficherRetroaction(pEstRetroToasts, idToast) {
   if (pEstRetroToasts) {
      afficherToasts(idToast, TITRETOASTPOSITIF, questionnaire[numeroQuestion].retroactionPositive, TEMPSAFFICHAGETOAST);
   }
   else {
      afficherToasts(idToast, TITRETOASTNEGATIF, questionnaire[numeroQuestion].retroactionNegative, TEMPSAFFICHAGETOAST);
   }
}

/**
 * Filtre les modules selon les critères de recherche
 * @param {boolean} filtrer Si l'on doit filtrer les modules ou non
 * @author Ulric Huot
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

/**
 * Créer le questionnaire selon les modules filtrer
 * @author Maxime Foisy, Ulric Huot
 */
function creerQuestionnaire() {

   $id("creationQuestionnaire").disabled = true;

   let banqueQuestion = [];

   questionnaire = [];

   for (let module of modules) {
      for (let question of DATA_QUIZ.banque_questions) {
         if (module.modulesId == question.modulesId) {
            banqueQuestion.push(question);
         }
      }
   }

   /** @author Ulric Huot */
   let nbQuestions = Math.min($id("nbQuestions")?.value || 1, 5);

   /** @author Ulric Huot */
   for (let index = 0; index < nbQuestions; index++) {
      let questionHazard = banqueQuestion.splice(Math.floor(Math.random() * banqueQuestion.length), 1)[0];
      questionHazard.score = 0;
      questionHazard.reussi = false;
      questionnaire.push(questionHazard);
   }

   console.log(questionnaire);

   afficherQuestionSuivante(numeroQuestion);
}

/**
 * Affiche dans la zone de question HTML la question se trouvant à l'indice passer en paramètre
 * @author Maxime Foisy
 * @param {int} pNumeroQuestion Indice de la question à afficher
 */
function afficherQuestionSuivante(pNumeroQuestion) {
   if (pNumeroQuestion == questionnaire.length - 1) {
      creerPoppover('contenu-popover-reponse', 'questionSuivante', 'Questionnaire terminé');
   }
   if (pNumeroQuestion >= questionnaire.length) {
      terminerQuestionnaire();
   }
   else {
      let question = questionnaire[pNumeroQuestion];
      document.getElementById("titreQuestion").textContent = `Question ${pNumeroQuestion + 1} (Module ${question.modulesId} - ${DATA_QUIZ.modules[question.modulesId].titre})`;
      document.getElementById("questionPoser").textContent = question.titre;

      let sectionReponse = document.getElementById("questionReponse");
      sectionReponse.innerHTML = '';

      for (const reponse of question.choixReponses) {
         /** @author Ulric Huot - Bug Fix */
         let i = question.choixReponses.indexOf(reponse);

         let nouvelleReponse = document.createElement("div");
         nouvelleReponse.className = "form-check col-12 m-4";
         sectionReponse.appendChild(nouvelleReponse);

         if (question.typeQuestion === "check") {
            let inputReponse = document.createElement("input");
            inputReponse.type = "checkbox";
            inputReponse.className = "form-check-input reponse";
            inputReponse.id = reponse;
            inputReponse.name = reponse;
            inputReponse.value = i;
            nouvelleReponse.appendChild(inputReponse);

            let labelReponse = document.createElement("label");
            labelReponse.className = "form-check-label";
            labelReponse.textContent = reponse;
            labelReponse.setAttribute("for", reponse);
            nouvelleReponse.appendChild(labelReponse);
         }
         else if (question.typeQuestion === "radio") {
            let inputReponse = document.createElement("input");
            inputReponse.type = "radio";
            inputReponse.className = "form-check-input reponse";
            inputReponse.id = reponse;
            inputReponse.name = "reponse";
            inputReponse.value = i;
            nouvelleReponse.appendChild(inputReponse);

            let labelReponse = document.createElement("label");
            labelReponse.className = "form-check-label";
            labelReponse.textContent = reponse;
            labelReponse.setAttribute("for", reponse);
            nouvelleReponse.appendChild(labelReponse);
         }
      }
   }
}

/**
 * Vérifie les réponses entrées dans le questionnaire et ajoute un score ainsi qu'une mention réussi ou non à la question du questionnaire
 * @param {int} pNumeroQuestion Indice de la question qui est afficher présentement
 * @author Maxime Foisy, Ulric Huot
 */
function validerReponse(pNumeroQuestion) {
   let question = questionnaire[pNumeroQuestion];
   if (!question) return;

   /** @author Ulric Huot - Optimization + Bug Fix */
   question.score += Array.from(document.querySelectorAll(".reponse"))
      .filter((reponse, i) => reponse.checked && question.reponses.includes(i)).length;
   // for (let index = 0; index < options.length; index++) {
   //    const reponse = options[index];
   //    if (reponse.checked && index in question.reponses) {
   //       questionnaire[pNumeroQuestion].score++;
   //    }
   // }

   /** @author Ulric Huot - Optimization + Bug Fix */
   afficherRetroaction(question.reussi = question.score == question.reponses.length, IDTOASTAFFICHER);
   // if (questionnaire[pNumeroQuestion].score == question.reponses.length) {
   //    questionnaire[pNumeroQuestion].reussi = true;
   //    /**Mettre retroaction positive */
   //    afficherRetroaction(true, IDTOASTAFFICHER);
   // }
   // else {
   //    /**Mettre rétroaction négative */
   //    afficherRetroaction(false, IDTOASTAFFICHER);
   // }

   afficherQuestionSuivante(++numeroQuestion);
}

/**
 * Change l'état des boutons et donne un popover que le questionnaire est terminé
 */
function terminerQuestionnaire() {
   document.getElementById("btnMesReponse").disabled = false;
}

/**
 * Fonction qui permet d'afficher les réponses ave le score
 * @param {*} idOffCanevas id de l'élement HTML où les réponses doivent s'afficher
 * @author Ulric Huot
 */
function consulterReponses() {
   const ofc = $id("offcanvas");
   const content = ofc.querySelector("#content");

   ofc.classList.add("show");

   for (let i = 0; i < questionnaire.length; i++)
      content.append(blockQuestion(questionnaire[i], i + 1));

   let resultat = $new("p");
   resultat.textContent = `Votre score final est de ${calculerScore()} points`;
   content.append(resultat);

   /**
    * Fonction qui permet de créer un bloc de question
    * @param {*} question La question à générer
    * @param {number} id L'identifiant de la question
    * @author Ulric Huot
    */
   function blockQuestion(question, id) {
      let [div, tag, titre, reponse, score] = ["div", "h4", "p", "p", "p"].map(e => $new(e));
      div.append(tag, titre, reponse, score);
      div.className = "mb-4 d-flex flex-column gap-3";
      tag.className = "fs-5 fw-light";
      tag.textContent = `Question ${id} Module ${question.modulesId.toString().padStart(2, "0")} (${DATA_QUIZ.modules[question.modulesId].titre})`;
      titre.className = "";
      titre.textContent = question.titre;
      reponse.className = "";
      reponse.textContent = `<strong>Votre réponse :</strong> ${question.reponses.map(id => question.reponses[id]).join(", ")}.`;
      score.className = question.score > 0 ? "text-success" : "text-danger";
      score.textContent = `Score: ${question.score} / ${question.score}`;
      return div;
   }
}



/**
 * Calcul le score total du joueur
 * @author Maxime Foisy
 * @returns La somme du score obtenue à chaque question
 */
function calculerScore() {
   let score = 0;
   for (const question of questionnaire) {
      score += question.score;
   }

   return score;
}

/**
 * Affiche un popover sur un bouton passé en paramêtre
 * @author Maxime Foisy
 * @param {string} pIdContenuPopover Id de la div qui contient le contenu a afficher dans le popover
 * @param {string} pIdBoutonAssocie Id du bouton où le popover doit être afficher
 * @param {string} pEntete Titre du popover
 */
function creerPoppover(pIdContenuPopover, pIdBoutonAssocie, pEntete) {

   /* Ne pas oublier de mettre les configurations sur le bouton dans le HTML:
      data-bs-toggle="popover" --Indique un popover
      data-bs-trigger="focus" --Enlève le popover quand il perd le focus
      data-bs-placement="top/bottom/left/right") --Emplacement du popover par rapport au bouton
   */

   let optionsPopover = {
      container: 'body',
      title: pEntete,
      html: true,
      content: document.getElementById(pIdContenuPopover).innerHTML
   };

   let bouton = document.getElementById(pIdBoutonAssocie);

   new bootstrap.Popover(bouton, optionsPopover);

}

/**
 * Ajoute un ID au modules
 * @author Maxime Foisy
 */
function ajouterModulesID() {
   let i = 0;
   for (let module of modules) {
      module.modulesId = i;
      i++;
   }
}