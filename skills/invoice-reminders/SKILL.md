---
name: incwo-invoice-reminders
description: Préparer des rappels de factures incwo / Draft incwo invoice reminders / Preparar recordatorios de facturas incwo
---

## Français

Lis les factures et règlements incwo accessibles à l'utilisateur. Vérifie le statut, l'échéance, le montant restant et le contact avant de proposer une relance. Sépare les faits des hypothèses et cite les identifiants source. Prépare uniquement des brouillons ; n'envoie rien et n'enregistre aucun règlement sans instruction explicite et validation. Une facture confirmée reste immuable : ne propose pas de modifier ses lignes. Respecte la langue de l'utilisateur sans traduire les données métier.

## English

Read incwo invoices and payments accessible to the user. Verify status, due date, outstanding amount, and contact before proposing a reminder. Separate facts from assumptions and cite source identifiers. Prepare drafts only; send nothing and record no payment without an explicit request and approval. A confirmed invoice is immutable: do not propose changing its lines. Use the user's language without translating business records.

## Español

Lee las facturas y los pagos de incwo a los que tiene acceso el usuario. Verifica estado, vencimiento, importe pendiente y contacto antes de proponer un recordatorio. Separa hechos de suposiciones e indica los identificadores de origen. Prepara solo borradores; no envíes nada ni registres pagos sin solicitud explícita y aprobación. Una factura confirmada es inmutable: no propongas cambiar sus líneas. Usa el idioma del usuario sin traducir los registros empresariales.


## Précontrôle / Preflight / Precontrol

Précontrôle local des relances : versions, litiges, solde, échéance et contact. `node tools/reminder-preflight.mjs examples/reminder-preflight.json fr` produit des candidats, sans connexion incwo ni envoi ; les versions sont fournies par l’appelant.

Offline reminder preflight checks source versions, disputes, balance, due date and contact. `node tools/reminder-preflight.mjs examples/reminder-preflight.json en` produces candidates without incwo access or sending; versions are caller supplied.

Precontrol local de recordatorios: versiones, disputas, saldo, vencimiento y contacto. `node tools/reminder-preflight.mjs examples/reminder-preflight.json es` produce candidatos sin conexión incwo ni envío; versiones proporcionadas por el llamante.
