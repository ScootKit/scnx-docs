---
title: "Bot Supporto V3 è ora in beta!"
description: "Il nostro nuovo Bot Supporto, precedentemente Modmail, aggiunge il supporto per un sistema di ticket, riassunti AI, log migliori e molto altro. E la notizia migliore: puoi provarlo tu stesso nella versione beta."
slug: 2025-support-bot-beta
date: 2025-10-28T10:00
authors:
 - scderox
 - salvo
tags:
 - Newsletter
 - SCNX
 - Support Bot
 - Modmail
---

# Modmail è ora Bot Supporto: annuncio della Beta V3 e di un nuovo sistema di ticket

Siamo entusiasti di annunciare il più grande aggiornamento nella storia del nostro prodotto e, con esso, un nome nuovo di zecca. Modmail sta diventando ufficialmente **Bot Supporto!**

Questo è più di un semplice rebranding. Per molto tempo, Modmail è stato un potente strumento per il supporto basato sui DM. Ma con la crescita della nostra piattaforma, l'abbiamo ricostruito da zero per essere una soluzione di supporto completa. Il nome "Modmail" semplicemente non era più sufficiente.

Oggi lanciamo la **Beta V3**, che è ora disponibile per tutti. Questo aggiornamento introduce la nostra singola funzionalità più richiesta: un **sistema di ticket** completo che vive direttamente all'interno del tuo server.

<!-- truncate --> 

## "Modmail" + "Ticket" = Bot Supporto {#rebrand}

Con la V3, Bot Supporto ora ti offre due potenti modi per gestire il supporto, che puoi utilizzare separatamente o contemporaneamente:

1. **Sistema Modmail (Classico):** Il sistema basato sui DM che già conosci. Gli utenti inviano un DM al bot e il tuo team lo gestisce in un thread privato.
2. **Sistema di Ticket (Novità!):** Un sistema basato su canali, molto richiesto. Gli utenti aprono un ticket tramite un messaggio dedicato e un canale privato viene creato per loro *all'interno* del tuo server.

Questo aggiornamento è incentrato sul darti la flessibilità di costruire l'esperienza di supporto perfetta per la tua community.

![Screenshot che mostra la funzione Modmail a destra dal punto di vista dell'utente e il sistema di ticket a sinistra](@site/blog/assets/support-bot-beta/en/1.png)

## Il nuovissimo sistema di ticket: un'analisi approfondita {#ticket-system}

Questa è la star dello spettacolo. Il nuovo sistema di ticket è costruito per flessibilità, potenza e flussi di lavoro di supporto professionali. Sposta il supporto dai DM ai canali privati direttamente sul tuo server.

### 🏷️ Topic dei Ticket avanzati {#ticket-system-advanced-topics}

I topic dei ticket sono ora completamente integrati nel nuovo sistema. Puoi impostare topic diversi per ciascun pannello di ticket, aiutandoti a categorizzare e instradare le richieste dal momento in cui vengono create. Ancora meglio, puoi abilitare i pulsanti nel canale per consentire al tuo team di modificare il topic di un ticket *dopo* che è stato aperto, assicurando che tutto rimanga organizzato.

![Screenshot che mostra un embed di selezione ticket, come spostare un ticket e la configurazione degli argomenti del ticket](@site/blog/assets/support-bot-beta/en/2.png)

### 🙋 Sistema d'Assegnazione del Team {#ticket-system-claiming}

Consenti al tuo staff di gestire in modo efficiente le richieste in arrivo. I nuovi ticket possono essere annunciati in un canale di notifica dedicato. I membri del team possono quindi assegnarsi ai ticket, promuovendo la responsabilità e riducendo i tempi di risposta.

![Uno screenshot che mostra i messaggi di stato della presa in carico e come prendere in carico un ticket](@site/blog/assets/support-bot-beta/en/claiming.png)

### 👥 Ticket multi-utente e ticket multipli per utente {#ticket-system-multiple-users}

La flessibilità è la chiave. Un singolo utente può ora aprire più ticket contemporaneamente. Inoltre, puoi (opzionalmente) consentire agli utenti di aggiungere *altri* membri del server al loro ticket, rendendolo perfetto per scenari di supporto di gruppo o risoluzione collaborativa dei problemi.

![Uno screenshot che mostra come aggiungere un altro utente a un ticket](@site/blog/assets/support-bot-beta/en/multi-users.png)

### ⏰ Promemoria e chiusure automatiche per inattività {#ticket-system-ticket-closing}

Mantieni la tua coda pulita ed efficiente. Configura il bot per sollecitare gentilmente gli utenti nei ticket inattivi. Se un ticket rimane inattivo per troppo tempo, puoi fare in modo che il Bot Supporto lo chiuda automaticamente, assicurando che solo le conversazioni attive occupino il tempo del tuo team.

![Uno screenshot che mostra la configurazione della chiusura dei ticket](@site/blog/assets/support-bot-beta/en/autoclose.png)

### ⭐ Valutazioni e recensioni dei ticket {#ticket-system-reviews}

Raccogliere feedback è essenziale. Il sistema di valutazione a 5 stelle è ora disponibile per il sistema di ticket! Quando un ticket viene chiuso, l'utente può valutare la propria esperienza, offrendoti preziose informazioni sulle prestazioni del tuo team.

![Uno screenshot che mostra come gli utenti possono lasciare recensioni e come i messaggi di recensione vengono inviati a un canale dello staff](@site/blog/assets/support-bot-beta/en/reviews.png)

### ✨ Messaggi di apertura ticket illimitati e intelligenti {#ticket-system-opening-messages}

Crea quanti pannelli "Apri un ticket" desideri, posizionandoli in canali diversi con topic e autorizzazioni unici. Il sistema è intelligente: se hai meno di cinque topic dei ticket per un pannello, li visualizzerà automaticamente come pulsanti semplici e puliti invece di un menù a tendina, rendendo l'interazione ancora più rapida.

![Uno screenshot che mostra diverse configurazioni dei messaggi di apertura in Discord](@site/blog/assets/support-bot-beta/en/open-message.png)

## Funzionalità rivoluzionarie per ENTRAMBI i sistemi {#combined}

Non abbiamo solo aggiunto un nuovo sistema; abbiamo potenziato l'intera piattaforma. Queste nuove funzionalità sono disponibili sia per il sistema Modmail che per quello dei ticket.

### ✨ Riassunti dei ticket basati sull'AI {#combined-ai-summaries}

Questa è una svolta. Invece di leggere un log di 200 messaggi, la nostra nuova **funzione di riepilogo AI (opzionale)** genererà un breve riassunto dell'intera conversazione alla chiusura di un ticket. Puoi comprendere il problema dell'utente e la soluzione del team in pochi secondi.

![Screenshot di un riepilogo AI di un ticket](@site/blog/assets/support-bot-beta/en/ai-summary.png)

### ✨ Un nuovo visualizzatore di log basato sul Web {#combined-modmail-net}

Dì addio ai noiosi file .txt! Abbiamo creato un nuovo e bellissimo visualizzatore di log basato sul web. I log sono ora visualizzati in un'interfaccia pulita, simile a una chat, facile da leggere, cercare e condividere. Puoi anche vedere un [esempio dal vivo in azione](https://logs.modmail.net/logs/session/019a12ca-ac91-7c40-954c-57898ba08842#98d33363b9261313a1c624da4f318f0e135a1994929f30f6de0fdbab935b490f).

![Screenshot che mostra un ticket sul nostro visualizzatore di log ticket basato sul web](@site/blog/assets/support-bot-beta/en/modmail-net.png)

### ✨ Nomi dei canali dinamici {#combined-dynamic-names}

Ora puoi configurare i topic dei ticket per sovrascrivere automaticamente il formato del nome del canale. Ciò significa che puoi identificare immediatamente lo scopo di un ticket solo dal suo nome!

Per esempio:

* `❗-ticket-123` per una Segnalazione di Bug
* `⭐-ticket-219` per una Partnership

### Altri potenti strumenti per la V3: {#combined-more-v3}

* **Statistiche combinate:** La dashboard ora presenta una panoramica combinata, che mostra le statistiche di Modmail e dei ticket, fianco a fianco.
* **Cronologia ticket:** Un nuovo comando `/ticket-history` ti consente di visualizzare facilmente i ticket di supporto passati di un utente.
* **Rinominare i ticket:** I membri del team possono ora rinominare i ticket per una migliore organizzazione.
* **ID dei ticket personalizzati:** Modifica il formato degli ID dei ticket, aggiungendo prefissi o utilizzando ID casuali invece di numeri sequenziali.
* **Importazione festività:** Importa facilmente le tue festività locali per gestire la disponibilità del tuo team.

## Aggiornamenti al sistema Modmail classico {#modmail}

Non abbiamo dimenticato le nostre radici della Modmail! Anche il classico sistema dei DM ha ricevuto alcune fantastiche nuove funzionalità:

* **Messaggi informativi avanzati:** Ora puoi impostare *più* messaggi informativi e configurarli per essere visualizzati solo per specifici topic dei ticket. Se un topic ha una sola opzione, il menù a tendina diventa automaticamente un semplice bottone. (Nota: se avevi un messaggio informativo V2, dovrai configurarlo di nuovo nel nuovo sistema più potente).
* **Statistiche dei topic:** La scheda delle statistiche ora mostra i topic dei ticket più utilizzati, aiutandoti a capire di cosa hanno più bisogno i tuoi utenti.
* **Messaggi di valutazione personalizzabili:** I messaggi di valutazione del team alla fine di un ticket sono stati migliorati e ora possono essere completamente personalizzati.

## Ottieni Bot Supporto oggi {#get-today}

:::warning
Si prega di notare che il Bot Supporto V3 è una versione Beta e può essere instabile. Una volta effettuato il passaggio, non è possibile tornare indietro. Si prega di utilizzare a proprio rischio e di farci sapere il vostro feedback o eventuali problemi nella nostra [assistenza clienti](https://scnx.app/help).
:::

Questo enorme aggiornamento è disponibile subito nella versione Beta. Si prega di notare che il Bot Supporto è incluso in tutti i nostri piani a pagamento, con il [piano Unlimited](/docs/scnx/guilds/plans) a partire da soli <PlanPrice plan="UNLIMITED" type="MONTHLY" /> (o <PlanPrice plan="UNLIMITED" type="YEARLY" />), ma i prezzi potrebbero differire al di fuori dell'Unione Europea in base alla tua regione.

Per passare al nuovo Bot Supporto V3, segui queste istruzioni:

1.  Apri la nostra [dashboard Modmail](https://scnx.app/glink?page=support-system/manage).
2.  Fai clic su "Cambia" accanto al ramo visualizzato.
3.  Seleziona il ramo Beta.
4.  Fai clic su "Conferma" per confermare il passaggio e si prega di prendere atto che non è possibile tornare alla vecchia versione.
5.  La migrazione inizierà. Potrebbero essere necessari alcuni minuti, si prega di essere pazienti. Se riscontri problemi, attendi qualche minuto e ricarica la pagina. Se ciò non dovesse aiutare, [contatta la nostra assistenza clienti](https://scnx.app/help).

![Screenshot che mostra come passare alla versione beta](@site/blog/assets/support-bot-beta/en/switch-beta.png)