# rcs-messenger-api

## Description

**rcs-messenger-api** est une API REST développée avec NestJS permettant d’envoyer des messages enrichis (texte, image, fichier, template) via RCS, en s’appuyant sur la passerelle Twilio.

### Fonctionnalités principales

- Envoi de messages enrichis (texte, image, fichier, template)
- Mode test (simulation) ou mode réel (envoi via Twilio)
- Gestion et personnalisation de templates de messages
- Authentification simple par clé API (`x-api-key`)
- Documentation automatique via Swagger

### Objectifs

- Fournir une API réutilisable par d’autres applications ou services
- Permettre aux entreprises ou développeurs d’intégrer facilement la messagerie RCS enrichie
- Sécuriser l’accès par une authentification simple
- Offrir un mode test pour faciliter le développement et la démonstration

---

## Stack technique

- [NestJS](https://nestjs.com/)
- [Twilio Programmable Messaging](https://www.twilio.com/messaging/channels/rcs)
- TypeScript

---

## Démarrage rapide

1. Cloner le dépôt
2. Installer les dépendances (`npm install`)
3. Configurer le fichier `.env`
4. Lancer le serveur (`npm run start`)

---

## Auteur

- Projet initié par [Mc Doni] et Cascade AI