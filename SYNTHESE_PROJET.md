# 📊 Synthèse du Projet - EdenJobs.eu (Mudamira)

## 🎯 Vue d'ensemble

**EdenJobs.eu** (également appelé **Mudamira**) est une plateforme de mise en relation entre clients et freelances, développée avec **Laravel 12** et **PHP 8.4.10**. La plateforme permet aux clients de publier des projets/missions et aux freelances de postuler, avec un système complet de gestion de paiements, de facturation, de notifications et de communication.

---

## 🏗️ Architecture Technique

### Stack Technologique

-   **Backend** : Laravel 12.41.1
-   **PHP** : 8.4.10
-   **Base de données** : MySQL
-   **Frontend** :
    -   Tailwind CSS 3.4.17 / 4.1.11
    -   Alpine.js 3.15.0
    -   Bootstrap 5.3.7
    -   Vite 6.3.5
-   **Tests** : Pest 3.8.4, PHPUnit 11.5.33
-   **Code Quality** : Laravel Pint 1.26.0

### Packages Principaux

-   **Authentification & Autorisation** :

    -   Laravel Socialite 5.23.2 (connexion LinkedIn)
    -   Spatie Laravel Permission 6.0 (gestion des rôles)

-   **Paiements** :

    -   Stripe PHP 7.95
    -   Instamojo PHP 0.4.0
    -   Paystack (configuré)

-   **Génération de documents** :

    -   DomPDF 3.1 (factures PDF)
    -   Spatie PDF-to-Text 1.54

-   **Images** :

    -   Intervention Image 2.5

-   **Autres** :
    -   Laravel Actions 2.9 (architecture orientée actions)
    -   Rich Text Laravel 3.3 (éditeur de texte riche)
    -   Laravel DataTables 12.0
    -   Laracasts Flash 3.0 (messages flash)

---

## 📁 Structure du Projet

### Architecture Laravel 12

Le projet suit la structure moderne de Laravel 12 :

-   **Pas de `app/Http/Kernel.php`** - Configuration dans `bootstrap/app.php`
-   **Pas de `app/Console/Kernel.php`** - Utilisation de `routes/console.php`
-   **Middleware** : Défini dans `bootstrap/app.php`
-   **Service Providers** : Dans `bootstrap/providers.php`

### Organisation des Routes

Le projet utilise une organisation modulaire des routes :

-   `routes/web.php` - Routes publiques
-   `routes/admin.php` - Routes administrateur
-   `routes/client/` - Routes spécifiques aux clients
-   `routes/freelancer/` - Routes spécifiques aux freelances
-   `routes/verified/` - Routes nécessitant une vérification email
-   `routes/user/` - Routes utilisateur authentifié
-   `routes/stripe/` - Routes de paiement Stripe
-   `routes/legal/` - Pages légales (CGU, politique de confidentialité, etc.)

### Modèles Principaux (56 modèles)

-   **User** - Utilisateurs (clients et freelances)
-   **Project** - Projets/Missions
-   **ProjectBid** - Candidatures sur les projets
-   **ProjectCycle** - Cycles pour projets long terme
-   **ProjectUser** - Relation projet-utilisateur (embauche)
-   **Service** - Services proposés par les freelances
-   **Package** - Forfaits d'abonnement
-   **MilestonePayment** - Paiements d'acomptes
-   **Invoice** - Factures
-   **Review** - Avis et évaluations
-   **Chat** / **ChatThread** - Système de messagerie
-   **Document** - Documents partagés
-   **Portfolio** - Portfolio des freelances
-   **EducationDetail** - Formations
-   **WorkExperience** - Expériences professionnelles
-   **Address** - Adresses
-   **BankingInformation** - Informations bancaires
-   **Verification** - Vérification d'identité
-   **Onboarding** - Processus d'onboarding
-   Et bien d'autres...

### Contrôleurs (50+ contrôleurs)

Organisés par domaine fonctionnel :

-   **Auth/** - Authentification (Login, Register, LinkedIn, etc.)
-   **Admin/** - Administration
-   **ProjectController** - Gestion des projets
-   **HireController** - Processus d'embauche
-   **BiddingController** - Gestion des candidatures
-   **MilestonePaymentController** - Paiements d'acomptes
-   **StripePaymentController** - Intégration Stripe
-   **ChatController** - Messagerie
-   **ProfileController** - Profils utilisateurs
-   **ServiceController** - Services freelances
-   Et bien d'autres...

### Services (49 services)

Architecture orientée services pour la logique métier :

-   Services de paiement
-   Services de notification
-   Services de projet
-   Services de cycle (projets long terme)
-   Services d'embauche
-   Services de facturation
-   Etc.

### Repositories (26 repositories)

Pattern Repository pour l'abstraction de la couche données.

### Middleware Personnalisés

-   `AdminMiddleware` - Accès administrateur
-   `ClientMiddleware` - Accès client
-   `FreelancerMiddleware` - Accès freelance
-   `UserMiddleware` - Utilisateur authentifié
-   `PackagePurchased` - Vérification d'achat de forfait
-   `BankingInfosCheckMiddleware` - Vérification infos bancaires
-   `Language` - Gestion multilingue
-   `LastUserActivity` - Suivi activité utilisateur
-   `HttpsProtocol` - Forçage HTTPS

---

## 🎯 Fonctionnalités Principales

### 1. Gestion des Utilisateurs

#### Types d'utilisateurs

-   **Clients** - Publient des projets
-   **Freelances** - Postulent aux projets
-   **Administrateurs** - Gestion de la plateforme
-   **Employés/Staff** - Personnel interne

#### Profils

-   Profils anonymes (identité révélée après embauche)
-   Vérification d'identité (avec documents)
-   Photos/Avatars
-   Informations de profil complètes :
    -   Compétences (Skills)
    -   Portfolio
    -   Formations (Education)
    -   Expériences professionnelles
    -   Adresse
    -   Informations bancaires
    -   Informations légales (entreprises)

### 2. Gestion des Projets

#### Types de projets

-   **Projets publics** - Visibles par tous les freelances
-   **Projets privés** - Proposés par les freelances aux clients
-   **Projets long terme** - Avec cycles de paiement multiples
-   **Projets avec négociation** - Budget négociable
-   **Projets à prix fixe** - Budget défini

#### États d'un projet

-   **Ouvert** - En attente de candidatures
-   **En cours** - Freelance embauché, travail en cours
-   **Terminé** - Clôturé par le freelance ET le client
-   **Annulé** - Annulation demandée
-   **Fermé par admin** - Fermeture administrative

#### Processus d'embauche

1. Client publie un projet
2. Admin approuve le projet (modération)
3. Freelances postulent
4. Client accepte une candidature
5. Client paie (via Stripe/Paystack/Instamojo)
6. Projet passe en "en cours"
7. Freelance confirme le début de mission
8. Travail en cours
9. Freelance marque le projet comme terminé
10. Client marque le projet comme terminé
11. Paiement final libéré au freelance

### 3. Système de Paiement

#### Méthodes de paiement

-   **Stripe** - Paiement en ligne
-   **Paystack** - Paiement en ligne
-   **Instamojo** - Paiement en ligne
-   **Paiement hors ligne** - Virement bancaire (validation admin)

#### Types de paiements

-   **Paiement unique** - Pour projets classiques
-   **Acomptes (Milestones)** - Paiements partiels
-   **Cycles** - Pour projets long terme (paiements récurrents)

#### Gestion financière

-   **Commissions** - Calcul automatique des commissions
-   **Factures** - Génération PDF automatique
-   **Portefeuille (Wallet)** - Solde utilisateur
-   **Demandes de retrait** - Retrait des gains par les freelances
-   **Historique des paiements** - Suivi complet

### 4. Système de Forfaits (Packages)

#### Types de forfaits

-   **Forfaits Client** - Limites de projets, etc.
-   **Forfaits Freelance** - Limites de candidatures, compétences, etc.

#### Fonctionnalités limitées par forfait

-   Nombre de projets
-   Nombre de candidatures
-   Nombre de compétences
-   Nombre de portfolios
-   Nombre de services
-   Statut "recommandé"
-   Suivi de clients
-   Etc.

### 5. Services Freelances

Les freelances peuvent proposer des **services** (produits) avec :

-   Descriptions
-   Prix
-   Packages de services
-   Achat direct par les clients

### 6. Communication

#### Messagerie

-   Chat en temps réel
-   Threads de conversation
-   Blocage d'utilisateurs
-   Statut d'interview

#### Notifications

-   Notifications en temps réel
-   Notifications email
-   Notifications de nouvelles candidatures
-   Notifications de paiements
-   Notifications de messages

### 7. Évaluations et Avis

-   Système de reviews
-   Évaluation par les clients
-   Évaluation par les freelances
-   Modération des avis par l'admin

### 8. Blog

-   Gestion d'articles de blog
-   Catégories de blog
-   Publication/Modération

### 9. Administration

#### Gestion des utilisateurs

-   Liste des clients
-   Liste des freelances
-   Bannissement d'utilisateurs
-   Connexion en tant qu'utilisateur (impersonation)

#### Gestion des projets

-   Modération des projets
-   Approbation/Refus
-   Fermeture de projets
-   Gestion des annulations

#### Gestion financière

-   Historique des paiements
-   Paiements aux freelances
-   Demandes de retrait
-   Recharges de portefeuille

#### Configuration

-   Configuration générale
-   Configuration des paiements
-   Configuration email (SMTP)
-   Configuration des réseaux sociaux
-   Gestion des langues
-   Gestion des compétences
-   Gestion des catégories de projets
-   Gestion des badges
-   Gestion des budgets
-   Pages personnalisées
-   Apparence du site

### 10. Fonctionnalités Avancées

#### Projets Long Terme avec Cycles

-   Projets divisés en cycles
-   Paiement par cycle
-   Validation de cycle
-   Activation automatique du cycle suivant
-   Suivi de progression

#### Onboarding

-   Processus d'onboarding guidé
-   Étapes : profil, adresse, légal, création de projet

#### Vérification d'identité

-   Upload de documents
-   Validation par l'admin
-   Révélation de l'identité après embauche

#### Système de badges

-   Badges pour clients
-   Badges pour freelances
-   Attribution par l'admin

---

## 🔐 Sécurité et Authentification

-   **Authentification** : Laravel Auth avec vérification email
-   **Autorisation** : Spatie Permission (rôles et permissions)
-   **OAuth** : Connexion LinkedIn via Socialite
-   **CSRF Protection** : Activée
-   **HTTPS** : Forcé via middleware
-   **Validation** : Form Requests pour toutes les entrées
-   **Soft Deletes** : Utilisé pour la suppression logique

---

## 📊 Base de Données

### Tables Principales (d'après le schéma)

-   `users` - Utilisateurs
-   `projects` - Projets
-   `project_bids` - Candidatures
-   `project_users` - Relations projet-utilisateur
-   `project_cycles` - Cycles de projets long terme
-   `services` - Services freelances
-   `packages` - Forfaits
-   `package_payments` - Paiements de forfaits
-   `milestone_payments` - Paiements d'acomptes
-   `invoices` - Factures
-   `reviews` - Avis
-   `chats` / `chat_threads` - Messagerie
-   `documents` - Documents
-   `portfolios` - Portfolio
-   `education_details` - Formations
-   `work_experiences` - Expériences
-   `addresses` - Adresses
-   `banking_informations` - Infos bancaires
-   `verifications` - Vérifications
-   `notifications` - Notifications
-   Et bien d'autres...

---

## 🎨 Frontend

### Technologies

-   **Tailwind CSS** - Framework CSS utilitaire
-   **Alpine.js** - Framework JavaScript léger
-   **Bootstrap** - Framework CSS (legacy)
-   **Vite** - Build tool moderne
-   **Trix** - Éditeur de texte riche

### Structure des Vues

-   **Blade Templates** - Moteur de template Laravel
-   Organisation par composants
-   Vues modulaires par fonctionnalité
-   Support du dark mode (selon les règles)

---

## 🧪 Tests

-   **Framework** : Pest 3.8.4
-   **Tests Unitaires** : `tests/Unit/`
-   **Tests Feature** : `tests/Feature/`
-   **70 fichiers de tests** présents

---

## 📝 Points d'Attention Identifiés

D'après le fichier `README.md`, plusieurs problèmes étaient à résoudre :

1. Erreurs MySQL sur certaines colonnes
2. Problèmes d'affichage de photos/avatars
3. Problèmes d'affichage de noms (initiales au lieu de noms complets)
4. Gestion des notifications
5. Gestion des projets annulés

### Fonctionnalités en Développement

D'après `user_case.md` :

-   ✅ Processus d'embauche sans négociation
-   ✅ Projets long terme avec cycles
-   ✅ Système de facturation
-   ✅ Dashboards client/freelance
-   ✅ Portfolio, compétences, formations, expériences
-   ⏳ Projets privés (acceptation par le client)
-   ⏳ Confirmation de début de mission par le freelance

---

## 🚀 Déploiement et Configuration

### Variables d'environnement

-   Configuration des paiements (Stripe, Paystack, Instamojo)
-   Configuration email (SMTP)
-   Configuration base de données
-   Configuration des services externes

### Commandes Artisan

-   Migration de base de données
-   Seeders pour données initiales
-   Commandes personnalisées

---

## 📚 Documentation Disponible

-   `README.md` - Liste des problèmes et fonctionnalités
-   `user_case.md` - Cas d'usage utilisateur
-   `IMPLEMENTATION_SUMMARY.md` - Résumé implémentation projets long terme
-   `LISEZ_MOI_PROJETS_LONG_TERME.md` - Documentation projets long terme

---

## 🎯 Conclusion

**EdenJobs.eu** est une plateforme complète et sophistiquée de mise en relation clients-freelances avec :

-   ✅ Architecture moderne Laravel 12
-   ✅ Système de paiement multi-gateways
-   ✅ Gestion complète du cycle de vie des projets
-   ✅ Communication intégrée
-   ✅ Administration complète
-   ✅ Système de forfaits et limitations
-   ✅ Support projets long terme avec cycles
-   ✅ Profils anonymes avec révélation progressive
-   ✅ Système de facturation automatique

Le projet est en développement actif avec des fonctionnalités en cours d'implémentation et des améliorations continues.

---

_Synthèse générée le : 15 janvier 2025_
_Version Laravel : 12.41.1_
_Version PHP : 8.4.10_

