// eslint-disable-next-line no-unused-vars
"use strict";

const DATA_QUIZ = {
   modules: [
      { titre: "Révision", imgModule: "m00.png", description: "Révision des concepts d'interfaces Web en passant par le seign, la structure d'une page web, des bases des règles de styles CSS, la conception de formulaires et des différentes dispositions possibles dont (grid, flex, inline-block, etc.] ou encore du positionnement [relative/absolute, fixed et sticky])" },
      { titre: "Optimisation CSS", imgModule: "m01.png", description: "Utilisation des sélecteurs CSS avancés, de l'intégration du préprocesseur SASS et de l'animation CSS" },
      { titre: "Normes d'accessibilité et de design UX", imgModule: "m02.png", description: "Normes d'accessibilité Web et design UX" },
      { titre: "Git en équipe", imgModule: "m03.png", description: "Commandes Git par lignes de commandes, travailler en équipe avec git et GitLab, ignorer des fichiers et gestion des conflits" },
      { titre: "Bibliothèque de développement d'infterfaces adptatives", imgModule: "m04.png", description: "Utilisation de Bootstrap (intro, styles, icônes, composants et formulaires" },
      { titre: "Programmation JavaScript", imgModule: "m05.png", description: "Initiation à la programmation JavaScript (intro, fonctions nommées et événements, structures de données [objets et tableaux], classe utilitaires, manipulation du DOM HTML, validation de formulaires et RegEx" }
   ],
   banque_questions: [
      {
         modulesId: 0,
         titre: "Quels éléments sont couramment utilisés pour structurer une page web?",
         typeQuestion: "check",
         retroactionPositive: "Correct ! Les éléments tels que <header>, <nav>, <main>, <footer> sont couramment utilisés pour structurer une page web.",
         retroactionNegative: "Pas tout à fait. Il y a plusieurs éléments importants pour la structure d'une page web.",
         categories: ["HTML", "Structure"],
         choixReponses: ["<header>", "<article>", "<nav>", "<footer>", "<main>"],
         reponses: [0, 2, 3] // Les index des bonnes réponses (dans ce cas, 0, 2, 3).
      },
      {
         modulesId: 0,
         titre: "Quelle propriété CSS est utilisée pour définir la couleur du texte?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! La propriété 'color' est utilisée pour définir la couleur du texte en CSS.",
         retroactionNegative: "Ce n'est pas la bonne réponse. Veuillez revoir les propriétés CSS pour la couleur du texte.",
         categories: ["CSS"],
         choixReponses: ["text-color", "font-color", "color", "background-color"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "color").
      },
      {
         modulesId: 0,
         titre: "Quels types de champs de saisie sont disponibles dans les formulaires HTML?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! Les types de champs de saisie incluent : texte, mot de passe, case à cocher, bouton radio.",
         retroactionNegative: "Vous avez manqué certains types de champs de saisie. Passez en revue les types de champs dans les formulaires HTML.",
         categories: ["HTML", "Formulaires"],
         choixReponses: ["Texte", "Mot de passe", "Case à cocher", "Bouton radio", "Menu déroulant"],
         reponses: [0, 1, 2, 3] // Les index des bonnes réponses (dans ce cas, 0, 1, 2, 3).
      },
      {
         modulesId: 0,
         titre: "Quelle propriété CSS est utilisée pour définir la direction des éléments dans un conteneur Flexbox?",
         typeQuestion: "radio",
         retroactionPositive: "Bravo ! La propriété 'flex-direction' est utilisée pour définir la direction des éléments dans un conteneur Flexbox.",
         retroactionNegative: "Ce n'est pas la bonne réponse. Veuillez revoir les propriétés CSS associées à Flexbox.",
         categories: ["CSS", "Flexbox"],
         choixReponses: ["flex-direction", "direction", "order", "flex-container"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour "flex-direction").
      },
      {
         modulesId: 1,
         titre: "Quel sélecteur CSS est utilisé pour cibler uniquement le premier enfant d'un élément?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! Le sélecteur ':first-child' est utilisé pour cibler le premier enfant d'un élément.",
         retroactionNegative: "Pas tout à fait. Le sélecteur que vous cherchez est ':first-child'.",
         categories: ["CSS", "Sélecteurs"],
         choixReponses: [":first-child", ":last-child", ":nth-child(2)", ":only-child"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour ":first-child").
      },
      {
         modulesId: 1,
         titre: "Quels sélecteurs CSS peuvent être utilisés pour cibler des éléments impairs dans une liste?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! Les sélecteurs ':nth-child(odd)' et ':nth-of-type(odd)' ciblent des éléments impairs dans une liste.",
         retroactionNegative: "Vous avez manqué certains sélecteurs pour cibler les éléments impairs. Révisez les sélecteurs CSS avancés.",
         categories: ["CSS", "Sélecteurs"],
         choixReponses: [":nth-child(odd)", ":nth-child(even)", ":nth-of-type(odd)", ":last-child", ":only-child"],
         reponses: [0, 2] // Les index des bonnes réponses (dans ce cas, 0 et 2).
      },
      {
         modulesId: 1,
         titre: "Quel sélecteur CSS est utilisé pour cibler les éléments de type 'p' qui sont dans un élément de classe 'article'?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! Le sélecteur '.article p' cible les éléments 'p' dans un élément de classe 'article'.",
         retroactionNegative: "Ce n'est pas la bonne réponse. Veuillez revoir les sélecteurs CSS pour les éléments imbriqués.",
         categories: ["CSS", "Sélecteurs"],
         choixReponses: [".article p, #article p, :nth-child(odd), p.article"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour ".article p").
      },
      {
         modulesId: 1,
         titre: "Quel sélecteur CSS est utilisé pour cibler les éléments de type 'a' avec un attribut 'href' vide?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! Le sélecteur 'a[href='']' cible les éléments 'a' avec un attribut 'href' vide.",
         retroactionNegative: "Pas tout à fait. Le sélecteur que vous cherchez est 'a[href='']'.",
         categories: ["CSS", "Sélecteurs"],
         choixReponses: ["a[href='']", "a[href!='']", "a[href='*']", "a[href^='']"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour "a[href='']").
      },
      {
         modulesId: 2,
         titre: "Qu'est-ce que l'accessibilité Web?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! L'accessibilité Web concerne la conception de sites Web pour que tous les utilisateurs, y compris ceux ayant des besoins spécifiques, puissent accéder au contenu.",
         retroactionNegative: "Pas tout à fait. L'accessibilité Web vise à rendre le contenu en ligne accessible à tous les utilisateurs, y compris ceux ayant des besoins spécifiques.",
         categories: ["Accessibilité Web"],
         choixReponses: ["Un type de navigateur Web", "Un framework CSS", "La conception de sites Web", "Un format de fichier"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "La conception de sites Web").
      },
      {
         modulesId: 2,
         titre: "Qu'est-ce que WCAG?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! WCAG (Web Content Accessibility Guidelines) sont des directives qui définissent comment rendre le contenu Web plus accessible aux personnes handicapées.",
         retroactionNegative: "Ce n'est pas la bonne réponse. WCAG est un ensemble de directives d'accessibilité Web.",
         categories: ["Accessibilité Web", "WCAG"],
         choixReponses: ["Un logiciel de design", "Un navigateur Web", "Un ensemble de directives d'accessibilité Web", "Un format de fichier"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "Un ensemble de directives d'accessibilité Web").
      },
      {
         modulesId: 2,
         titre: "Quel est l'objectif principal du design UX (expérience utilisateur) ?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! L'objectif principal du design UX est d'améliorer la satisfaction et l'expérience de l'utilisateur lors de l'interaction avec un produit ou un service.",
         retroactionNegative: "Pas tout à fait. Le design UX vise principalement à améliorer la satisfaction de l'utilisateur et son expérience globale.",
         categories: ["UX", "Design"],
         choixReponses: ["Augmenter les profits de l'entreprise", "Créer des designs complexes", "Améliorer l'expérience de l'utilisateur", "Réduire les coûts de développement"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "Améliorer l'expérience de l'utilisateur").
      },
      {
         modulesId: 2,
         titre: "Quel terme est souvent utilisé pour décrire la facilité avec laquelle les utilisateurs peuvent accomplir une tâche sur un site Web ou une application?",
         typeQuestion: "radio",
         retroactionPositive: "Bravo ! Le terme souvent utilisé est 'utilisabilité' (usability).",
         retroactionNegative: "Ce n'est pas la bonne réponse. Le terme couramment utilisé pour décrire la facilité d'utilisation est 'utilisabilité' (usability).",
         categories: ["UX", "Design"],
         choixReponses: ["Utilisabilité", "Complexité", "Évolutivité", "Rétroaction"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour "Utilisabilité").
      },
      {
         modulesId: 3,
         titre: "Quelles commandes Git sont couramment utilisées pour afficher l'état de votre référentiel local?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! Les commandes couramment utilisées pour afficher l'état du référentiel local sont 'git status' et 'git log'.",
         retroactionNegative: "Vous avez manqué certaines commandes couramment utilisées. Revoyez les commandes Git pour afficher l'état du référentiel local.",
         categories: ["Git", "Commandes Git"],
         choixReponses: ["git status", "git diff", "git log", "git push"],
         reponses: [0, 2] // Les index des bonnes réponses (dans ce cas, 0 et 2).
      },
      {
         modulesId: 3,
         titre: "Quelle commande Git est utilisée pour cloner un référentiel distant sur votre ordinateur local?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! La commande 'git clone' est utilisée pour cloner un référentiel distant sur votre ordinateur local.",
         retroactionNegative: "Pas tout à fait. Assurez-vous d'utiliser la commande 'git clone' pour cloner un référentiel distant.",
         categories: ["Git", "Commandes Git"],
         choixReponses: ["git pull", "git push", "git commit", "git clone"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "git clone").
      },
      {
         modulesId: 3,
         titre: "Quels sont les types de fichiers que vous devriez généralement ignorer dans Git en créant un fichier .gitignore?",
         typeQuestion: "check",
         retroactionPositive: "Exact ! Les fichiers de sauvegarde, les fichiers de compilation, les fichiers de dépendances, et les fichiers sensibles sont généralement ignorés en créant un fichier .gitignore.",
         retroactionNegative: "Vous avez manqué certains types de fichiers couramment ignorés. Assurez-vous de créer un fichier .gitignore approprié.",
         categories: ["Git", "Ignorer des fichiers"],
         choixReponses: ["Fichiers de sauvegarde", "Fichiers de code source", "Fichiers de dépendances", "Fichiers sensibles"],
         reponses: [0, 2, 3] // Les index des bonnes réponses (dans ce cas, 0, 2, et 3).
      },
      {
         modulesId: 3,
         titre: "Quelle commande Git est utilisée pour résoudre les conflits entre les branches?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! Pour résoudre les conflits entre les branches, utilisez la commande 'git merge' et 'git mergetool'.",
         retroactionNegative: "Ce n'est pas la bonne réponse. La résolution des conflits entre les branches nécessite la commande 'git merge' et 'git mergetool'.",
         categories: ["Git", "Conflits"],
         choixReponses: ["git conflict", "git resolve", "git combine", "git merge"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "git merge").
      },
      {
         modulesId: 4,
         titre: "Quels sont des composants de Bootstrap que vous pouvez utiliser pour créer une navigation?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! Les composants Bootstrap couramment utilisés pour créer une navigation sont 'Navbar' et 'Nav'.",
         retroactionNegative: "Vous avez manqué certains composants de Bootstrap pour la création de la navigation. Revoyez les options disponibles.",
         categories: ["Bootstrap", "Composants", "Navigation"],
         choixReponses: ["Navbar", "Card", "Button", "Nav"],
         reponses: [0, 3] // Les index des bonnes réponses (dans ce cas, 0 et 3).
      },
      {
         modulesId: 4,
         titre: "Quelle classe Bootstrap peut être utilisée pour créer un bouton de couleur primaire?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! La classe 'btn btn-primary' est utilisée pour créer un bouton de couleur primaire avec Bootstrap.",
         retroactionNegative: "Pas tout à fait. Pour un bouton de couleur primaire, utilisez la classe 'btn btn-primary' avec Bootstrap.",
         categories: ["Bootstrap", "Styles", "Boutons"],
         choixReponses: ["btn", "btn-primary", "btn-secondary", "btn-success"],
         reponses: [1] // L'index de la bonne réponse (dans ce cas, 1 pour "btn-primary").
      },
      {
         modulesId: 4,
         titre: "Quel élément HTML doit être enveloppé dans une balise avec la classe 'container' pour créer une mise en page fluide avec Bootstrap?",
         typeQuestion: "radio",
         retroactionPositive: "Bravo ! Pour créer une mise en page fluide avec Bootstrap, vous devez envelopper le contenu dans une balise avec la classe 'container'.",
         retroactionNegative: "Ce n'est pas la bonne réponse. Assurez-vous d'utiliser la classe 'container' pour une mise en page fluide avec Bootstrap.",
         categories: ["Bootstrap", "Styles", "Mise en page"],
         choixReponses: ["<div>", "<section>", "<main>", "<article>"],
         reponses: [0] // L'index de la bonne réponse (dans ce cas, 0 pour "<div>").
      },
      {
         modulesId: 4,
         titre: "Quelle classe Bootstrap peut être utilisée pour ajouter de l'espace entre les éléments d'une liste?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! La classe 'mb-2' peut être utilisée pour ajouter de l'espace entre les éléments d'une liste avec Bootstrap.",
         retroactionNegative: "Pas tout à fait. Pour ajouter de l'espace entre les éléments d'une liste, utilisez la classe 'mb-2' avec Bootstrap.",
         categories: ["Bootstrap", "Styles", "Listes"],
         choixReponses: ["pl-2", "ml-2", "mr-2", "mb-2"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "mb-2").
      },
      {
         modulesId: 4,
         titre: "Quelle classe Bootstrap est utilisée pour afficher des icônes?",
         typeQuestion: "radio",
         retroactionPositive: "Exact ! Pour afficher des icônes avec Bootstrap, vous pouvez utiliser la classe 'bi' avec des icônes Bootstrap intégrées.",
         retroactionNegative: "Pas tout à fait. Pour afficher des icônes, utilisez la classe 'bi' avec des icônes Bootstrap intégrées.",
         categories: ["Bootstrap", "Icônes"],
         choixReponses: ["<icon>", "<svg>", "<img>", "<i>"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "<i>").
      },
      {
         modulesId: 5,
         titre: "Qu'est-ce que JavaScript?",
         typeQuestion: "radio",
         retroactionPositive: "Correct ! JavaScript est un langage de programmation largement utilisé pour ajouter des fonctionnalités interactives aux pages Web.",
         retroactionNegative: "Pas tout à fait. JavaScript est un langage de programmation utilisé pour ajouter des fonctionnalités interactives aux pages Web.",
         categories: ["JavaScript", "Introduction"],
         choixReponses: ["Un navigateur Web", "Un éditeur de texte", "Un framework CSS", "Un langage de programmation"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "Un langage de programmation").
      },
      {
         modulesId: 5,
         titre: "Quelle déclaration est utilisée pour créer une fonction nommée en JavaScript?",
         typeQuestion: "radio",
         retroactionPositive: "Bravo ! Pour créer une fonction nommée en JavaScript, utilisez la déclaration 'function nomDeFonction() {}'.",
         retroactionNegative: "Ce n'est pas la bonne réponse. Pour créer une fonction nommée, utilisez 'function nomDeFonction() {}'.",
         categories: ["JavaScript", "Fonctions"],
         choixReponses: ["fonction = {};", "function = [];", "function nomDeFonction() {};", "function() {}"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "function nomDeFonction() {};").
      },
      {
         modulesId: 5,
         titre: "Quels types de données peut stocker un tableau JavaScript?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! Un tableau JavaScript peut stocker des chaînes de caractères, des nombres, et des objets.",
         retroactionNegative: "Vous avez manqué certains types de données qu'un tableau JavaScript peut stocker. Révisez les types possibles.",
         categories: ["JavaScript", "Tableaux", "Structures de Données"],
         choixReponses: ["Chaînes de caractères", "Booléens", "Nombres", "Objets"],
         reponses: [0, 2, 3] // Les index des bonnes réponses (dans ce cas, 0, 2, 3).
      },
      {
         modulesId: 5,
         titre: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau?",
         typeQuestion: "check",
         retroactionPositive: "Correct ! La méthode 'push()' est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript.",
         retroactionNegative: "Pas tout à fait. Pour ajouter un élément à la fin d'un tableau, utilisez la méthode 'push()'.",
         categories: ["JavaScript", "Tableaux"],
         choixReponses: ["append()", "add()", "insert()", "push()"],
         reponses: [3] // L'index de la bonne réponse (dans ce cas, 3 pour "push()").
      },
      {
         modulesId: 5,
         titre: "Quelle méthode JavaScript est utilisée pour valider un formulaire HTML avant de l'envoyer?",
         typeQuestion: "check",
         retroactionPositive: "Bravo ! La méthode 'submit()' est utilisée pour valider un formulaire HTML avant de l'envoyer.",
         retroactionNegative: "Pas tout à fait. Pour valider un formulaire avant de l'envoyer, utilisez la méthode 'submit()'.",
         categories: ["JavaScript", "Validation de Formulaires"],
         choixReponses: ["validate()", "check()", "submit()", "verify()"],
         reponses: [2] // L'index de la bonne réponse (dans ce cas, 2 pour "submit()").
      },
      {
         modulesId: 5,
         titre: "Quelles expressions régulières (RegEx) peuvent être utilisées pour valider une adresse e-mail?",
         typeQuestion: "check",
         retroactionPositive: "Correct ! Les expressions régulières (RegEx) couramment utilisées pour valider une adresse e-mail incluent /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/ et d'autres variantes.",
         retroactionNegative: "Vous avez manqué certaines expressions régulières couramment utilisées pour valider une adresse e-mail. Assurez-vous de connaître les options.",
         categories: ["JavaScript", "RegEx", "Validation d'Email"],
         choixReponses: ["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/", "/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/", "/\\d{3}-\\d{2}-\\d{4}/", "/[A-Za-z0-9]/"],
         reponses: [0, 1] // Les index des bonnes réponses (dans ce cas, 0 et 1).
      }


   ]

};