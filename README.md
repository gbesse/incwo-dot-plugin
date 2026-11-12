# Plugin incwo pour dots et ChatGPT

[English](README.en.md) · [Español](README.es.md)

Ce dépôt contient un Agent Plugin portable : il déclare le [MCP officiel incwo](https://go.incwo.com/agents/pour-vos-agents/) et trois compétences de travail pour les devis, les rappels de factures et les stocks. Il ne contient ni clé ni copie de données client.

Le plugin prépare des propositions sourcées. Les actions qui créent, confirment, envoient ou paient exigent la demande et la validation de l'utilisateur, ainsi que les autorisations de la plateforme et d'incwo. Les compétences préservent la langue et les données source.

## Installer et vérifier

Publiez ou installez ce dossier depuis une source de plugins compatible avec le format Agent Plugins. Connectez ensuite le serveur MCP incwo avec votre propre compte via le flux d'authentification proposé par le client. Vérifiez les outils visibles, puis testez d'abord une lecture de devis. Exécutez npm test pour valider la structure locale.

Les [dots peuvent utiliser les plugins autorisés](https://learn.chatgpt.com/docs/dots), mais la présence de ce dépôt sur GitHub ne l'inscrit pas automatiquement au répertoire public OpenAI. La connexion, les droits, le déploiement et le fonctionnement dans un dot réel restent à vérifier avec un compte éligible. Ce dépôt ne remplace pas les garde-fous natifs de ChatGPT ou d'incwo.

Licence MIT.


## 2026-11-12 — FR / EN / ES

FR : Précontrôle local des relances : versions, litiges, solde, échéance et contact. `node tools/reminder-preflight.mjs examples/reminder-preflight.json fr` produit des candidats, sans connexion incwo ni envoi ; les versions sont fournies par l’appelant.

EN: Offline reminder preflight checks source versions, disputes, balance, due date and contact. `node tools/reminder-preflight.mjs examples/reminder-preflight.json en` produces candidates without incwo access or sending; versions are caller supplied.

ES: Precontrol local de recordatorios: versiones, disputas, saldo, vencimiento y contacto. `node tools/reminder-preflight.mjs examples/reminder-preflight.json es` produce candidatos sin conexión incwo ni envío; versiones proporcionadas por el llamante.
