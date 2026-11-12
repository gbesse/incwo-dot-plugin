import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const messages={fr:'Plan local, aucun message envoyé',en:'Local plan, no message sent',es:'Plan local, ningún mensaje enviado'};
function day(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value)||!Number.isFinite(Date.parse(value+'T00:00:00Z'))||new Date(value+'T00:00:00Z').toISOString().slice(0,10)!==value)throw new TypeError('Date invalide / Invalid date / Fecha no válida');return value;}
export function reminderPreflight(input,lang='en'){
 if(!Object.hasOwn(messages,lang)||!Array.isArray(input?.invoices)||input.invoices.length>1000||!input.currentVersions||typeof input.currentVersions!=='object')throw new TypeError('Entrée invalide / Invalid input / Entrada no válida');
 const asOf=day(input.asOf),seen=new Set();
 const items=input.invoices.map(row=>{if(typeof row?.id!=='string'||!row.id||seen.has(row.id)||!['open','paid','void','disputed'].includes(row.status)||!Number.isSafeInteger(row.outstandingCents)||row.outstandingCents<0||row.outstandingCents>1e12||typeof row.currency!=='string'||!/^[A-Z]{3}$/.test(row.currency))throw new TypeError('Facture invalide / Invalid invoice / Factura no válida');seen.add(row.id);day(row.dueDate);
 let reason;if(typeof row.sourceVersion!=='string'||!row.sourceVersion||!Object.hasOwn(input.currentVersions,row.id)||input.currentVersions[row.id]!==row.sourceVersion)reason='stale_or_missing_version';else if(row.status==='disputed')reason='disputed';else if(row.status!=='open'&&row.outstandingCents>0)reason='status_balance_conflict';else if(row.outstandingCents===0)reason='no_balance';else if(row.dueDate>=asOf)reason='not_overdue';else if(typeof row.contactId!=='string'||!row.contactId.trim())reason='missing_contact';else reason='eligible';
 return {id:row.id,reason,status:reason==='eligible'?'draft_candidate':['stale_or_missing_version','disputed','status_balance_conflict','missing_contact'].includes(reason)?'manual_review':'excluded',currency:row.currency,outstandingCents:row.outstandingCents};});
 return {asOf,items,message:messages[lang],sent:false,sourceVerifiedExternally:false};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){try{const lang=process.argv[3]??'en';console.log(JSON.stringify(reminderPreflight(JSON.parse(readFileSync(process.argv[2],'utf8')),lang),null,2));}catch{console.error('Précontrôle invalide / Invalid preflight / Precontrol no válido');process.exitCode=2;}}
