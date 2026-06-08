# Devoir 2 - Site de service

## 1. Concepteur

Nom: Marc Tchetchenigbo  
Numéro d'étudiant: 300350218  
Cours: SEG3525 - Conception et analyse d'interfaces usagers  

## 2. Service choisi

Nom du service: Atelier Nomade  
Type de service: réparation mobile de vélos à Ottawa, accessible par rendez-vous.

Atelier Nomade vise les cyclistes urbains qui veulent régler un problème mécanique sans devoir se déplacer dans un atelier. Le site met donc l'accent sur trois informations: les services, les prix et la réservation.

## 3. Personnages et scénarimages

### Persona 1 - Nahar

Nom: Nahar  
Caractéristiques intrinsèques:

- étudiant universitaire;
- utilise son vélo pour les déplacements quotidiens;
- cherche des solutions rapides et peu ambiguës.

Relation à la technologie: à l'aise avec les sites web et les formulaires courts, mais n'aime pas chercher longtemps une information simple.  
Relation au domaine: cycliste régulier, mais connaissances mécaniques limitées.  
Objectif: savoir si une crevaison peut être réparée rapidement et réserver un créneau sans appeler.

#### Scénarimage 1 - Direction visuelle A

Direction: interface claire, directe, avec un accent orange pour les actions urgentes.

1. Nahar arrive sur la page d'accueil et voit immédiatement le service, les heures et le prix de départ.
2. Il sélectionne "Crevaison + déplacement" dans la liste des services et lit la durée estimée.
3. Il choisit un créneau disponible et confirme la demande de réparation.

### Persona 2 - Camille

Nom: Camille  
Caractéristiques intrinsèques:

- parent avec un horaire chargé;
- utilise un vélo cargo pour les trajets courts;
- préfère planifier à l'avance plutôt qu'improviser.

Relation à la technologie: utilise souvent des systèmes de réservation, mais veut une interface lisible et rassurante.  
Relation au domaine: comprend l'importance d'une mise au point, mais ne veut pas gérer les détails techniques.  
Objectif: réserver une mise au point à domicile avec un quartier, un mécanicien et un créneau précis.

#### Scénarimage 2 - Direction visuelle B

Direction: interface plus structurée, plus calme, avec des blocs d'information, une carte de couverture et des détails pratiques visibles.

1. Camille consulte les services et compare les prix avant de choisir une mise au point.
2. Elle vérifie que son quartier est couvert dans la section d'information.
3. Elle réserve un créneau avec un mécanicien et obtient un résumé clair de la demande.

### Différences entre les deux scénarimages

Les deux directions répondent à des besoins différents. La première priorise la rapidité et l'urgence. La deuxième priorise la clarté, la planification et la confiance. Le prototype final combine les deux: une liste de services très directe, puis un module de réservation structuré avec les détails pratiques.

## 4. Prototype haute fidélité

Le prototype final est un site React interactif. Il combine les objectifs des deux personnages:

- consulter les services et les prix;
- choisir un service;
- choisir un type de vélo;
- choisir un créneau;
- choisir un quartier;
- choisir un mécanicien;
- afficher un résumé dynamique;
- confirmer une demande;
- consulter les informations pratiques.

### Choix de conception visuelle

Couleurs: le site utilise une palette chaude et contrôlée: fond crème, texte presque noir, vert moss pour la confiance et orange pour l'action principale. Cette direction évite le noir et blanc strict du portfolio tout en gardant la même discipline visuelle.

Typographie: les grands titres utilisent Archivo pour donner de l'échelle et une présence forte. Les libellés utilisent IBM Plex Mono pour structurer les informations comme les services, heures, quartiers et prix.

Iconographie et éléments visuels: le prototype utilise une image de vélo, une carte stylisée de couverture et des repères visuels simples. L'objectif est de montrer le contexte du service sans surcharger la page.

Mise en page: la page repose sur des sections larges, des lignes fines, des listes de services, un module de réservation et des blocs d'information. Les cartes sont limitées aux endroits où le contenu doit être groupé.

Contraste, échelle, équilibre et hiérarchie: les titres sont très grands pour identifier les sections importantes. Les détails secondaires sont plus petits et plus calmes. Le module de réservation est plus dense, mais il reste séparé visuellement pour garder le parcours clair.

## 5. Liens

Portfolio: https://seg3525-portfolio-lime.vercel.app/  
Prototype haute fidélité: https://seg3525-portfolio-lime.vercel.app/devoir2-service-site/  
Code: https://github.com/marctche/seg3525-service-site

## 6. Reconnaissance de l'IA générative

J'ai utilisé l'IA générative comme assistant de conception et de développement. Elle m'a aidé à analyser les exigences du devoir, structurer les personnages, proposer deux scénarimages, définir une direction visuelle et générer une première version du prototype React.

J'ai aussi utilisé l'IA pour vérifier que le prototype répondait aux exigences: service à rendez-vous, interactivité, informations de contact, crédit du concepteur, personas, scénarimages et lien prévu avec le portfolio.

L'IA n'a pas été utilisée comme remplacement complet du jugement de conception. Les choix finaux de structure, de service, de ton et de direction visuelle ont été guidés par les contraintes du devoir et par la volonté d'éviter une interface générique.
