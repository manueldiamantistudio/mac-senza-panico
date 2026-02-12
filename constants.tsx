import React from 'react';
import { BookOpen, CheckCircle, Shield, Folder, Zap, Command, Heart, Battery } from 'lucide-react';

export const CHECKOUT_URL = "https://payhip.com/b/phEdj";

export const HERO_DATA = {
  superhead: "Edizione 2026 • Aggiornata a macOS Tahoe",
  headline: "MAC SENZA PANICO",
  subheadline: "La guida definitiva per passare da Windows a Mac (e non perdere la testa)",
  description: "Il manuale pratico che ti accompagna dal \"Dov’è il tasto Start?\" a un Mac configurato, veloce e affidabile, pronto per lavorare e studiare ogni giorno.",
  bullets: [
    "Pensata sia per chi arriva da Windows sia per chi usa un Mac per la prima volta.",
    "Percorso progressivo: dal primo avvio alla produttività avanzata, con checklist operative passo passo.",
    "Eviti gli errori più comuni di configurazione, migrazione dati e manutenzione che possono rovinarti i prossimi 7–10 anni col Mac."
  ],
  priceFull: "24,90€",
  priceDiscount: "14,90€"
};

export const PROBLEM_DATA = {
  title: "Se ti riconosci in queste situazioni, non sei tu il problema (è il passaggio a Mac)",
  intro: "Hai appena acceso il tuo nuovo Mac. È bellissimo, lucido, perfetto. Ma dopo dieci minuti, l'entusiasmo lascia spazio a una sottile frustrazione.",
  points: [
    "Non trovi il tasto Start e Ctrl+C non funziona più.",
    "Chiudi le finestre ma vedi ancora i puntini sotto le icone nel Dock e non capisci se le app sono chiuse.",
    "Non trovi il drive C:, la cartella Utenti e un vero “Pannello di Controllo”.",
    "Il Dock è pieno di app inutili e dopo poche settimane Desktop e Download sono nel caos.",
    "Online trovi solo video scollegati tra loro, nessun percorso unico e chiaro."
  ],
  quote: "Non ti serve un altro tutorial singolo: ti serve una guida completa che ti accompagni in ogni passo, dal primo avvio alla manutenzione."
};

export const SOLUTION_DATA = {
  title: "La guida pratica per sentirti a casa sul tuo Mac, in pochi giorni",
  intro: "Mac Senza Panico non è un trattato teorico. È un manuale operativo: spiega, mostra, fa agire, con checklist stampabili pronte all'uso.",
  subtitle: "Cosa sarai in grado di fare:",
  features: [
    { title: "Primo Avvio Perfetto", desc: "Configurare il Mac correttamente fin dal primo avvio, senza cadere nelle trappole dell’assistente iniziale.", icon: <Zap className="w-6 h-6 text-apple-blue" /> },
    { title: "Sicurezza & Privacy", desc: "Aggiornare subito a macOS Tahoe e impostare firewall, privacy e “Trova il mio Mac”.", icon: <Shield className="w-6 h-6 text-apple-blue" /> },
    { title: "Filosofia Apple", desc: "Capire la filosofia Mac e smettere di usarlo come “un Windows più bello”.", icon: <Command className="w-6 h-6 text-apple-blue" /> },
    { title: "Migrazione Dati", desc: "Trasferire in sicurezza dati, foto, preferiti e password da Windows al Mac.", icon: <Folder className="w-6 h-6 text-apple-blue" /> },
    { title: "Organizzazione Totale", desc: "Organizzare cartelle, progetti e archivio con un sistema semplice, logico e scalabile.", icon: <BookOpen className="w-6 h-6 text-apple-blue" /> },
    { title: "Desktop Zero", desc: "Tenere Desktop e Download sempre sotto controllo (Desktop Zero).", icon: <CheckCircle className="w-6 h-6 text-apple-blue" /> },
    { title: "App Essenziali", desc: "Scegliere poche app essenziali invece di installare 50 strumenti superflui.", icon: <Heart className="w-6 h-6 text-apple-blue" /> },
    { title: "Manutenzione & Longevità", desc: "Mantenere il Mac veloce per anni con manutenzione di pochi minuti al mese.", icon: <Battery className="w-6 h-6 text-apple-blue" /> },
  ]
};

export const TARGET_DATA = {
  forYou: [
    "Hai appena comprato il tuo primo Mac e vuoi una guida da seguire con il computer acceso, passo dopo passo.",
    "Arrivi da anni di Windows e vuoi evitare settimane di frustrazione con tasti e abitudini nuove.",
    "Usi già il Mac ma ti senti costantemente nel caos: file sparsi, nessuna struttura, disco quasi pieno.",
    "Vuoi trasformare il tuo Mac in una vera macchina da lavoro o studio, non solo in un oggetto “carino”."
  ],
  notForYou: [
    "Cerchi un manuale ultra–tecnico da amministratore di sistema.",
    "Ti piace installare app a caso e smanettare senza un metodo.",
    "Pensi che basti un singolo video YouTube per sistemare una volta per tutte il tuo flusso di lavoro."
  ]
};

export const CHAPTERS_DATA = [
  { id: 1, title: "Il primo avvio (Ora o mai più)", desc: "Unboxing strategico, scelta delle opzioni giuste nell’assistente iniziale, aggiornamento “day zero” a macOS Tahoe, rimozione del bloatware Apple dal Dock, impostazioni di sicurezza base." },
  { id: 2, title: "Da Windows a Mac: la migrazione senza dolori", desc: "Dizionario tasti e scorciatoie equivalenti, mappa delle cartelle, Spotlight come nuovo Start, migrazione dati da Windows (assistente o metodo manuale consigliato), gestione dischi NTFS/ExFAT." },
  { id: 3, title: "Le impostazioni vincenti", desc: "Dock minimalista, Finder potenziato, trackpad e gesti multitouch, Mission Control, Spazi e Hot Corners, notifiche e Focus, sicurezza avanzata (FileVault, Firewall, privacy), Time Machine con strategia 3–2–1." },
  { id: 4, title: "Organizzazione del caos", desc: "Sistema cartelle universale in 3 livelli, Tag ed etichette, alias intelligenti, Desktop Zero, gestione SSD e regola dell’80%, audit periodici dello spazio." },
  { id: 5, title: "Le app essenziali", desc: "Metodo in 7 domande per scegliere le app giuste, lista essenziale delle app per produttività, gestione file, sicurezza e menubar, più le utility potentissime già incluse in macOS." },
  { id: 6, title: "Workflow e produttività", desc: "10 app gratuite obbligatorie, workflow “Giorno 1” per passare da Mac spento a lavoro vero in 10 minuti, Shortcuts, stack multi–app per profili diversi e tecniche avanzate (Spaces, Text Replacement, batch processing)." },
  { id: 7, title: "Manutenzione e longevità", desc: "Pulizia disco sicura senza app truffa, diagnosi dei problemi tipici (Mac lento, batteria, crash, mancato avvio), checklist settimanali/mensili/trimestrali/annuali, quando fare upgrade hardware." },
  { id: "App", title: "Appendice – Toolkit pronto all’uso", desc: "Tabelle comparative Windows–Mac, template per fatture, pianificazione e budget, reference card di Terminal, glossario di 50+ termini e 50 FAQ reali." }
];

export const SOCIAL_DATA = {
  stats: [
    { label: "Iscritti YouTube", value: "20.000+" },
    { label: "Visualizzazioni macOS", value: "750.000+" },
    { label: "Utenti aiutati", value: "200.000+" }
  ],
  testimonials: [
    { name: "Luca B.", role: "Impiegato amministrativo, ex utente Windows", text: "Dopo 15 anni su Windows ero spaesato. In un weekend, grazie alle checklist, ho configurato tutto. Quando torno su Windows mi sembra vecchio e pesante." },
    { name: "Sara P.", role: "Fotografa freelance", text: "Desktop strapieno, SSD quasi rosso. Ho applicato il sistema cartelle e il concetto di Desktop Zero. Ora trovo i file dei clienti in 5 secondi." },
    { name: "Gianni R.", role: "Studente universitario", text: "Usavo il Mac come un telefono gigante. Grazie ai capitoli su workflow e manutenzione, ho creato scrivanie separate per studio e svago." }
  ]
};

export const FAQ_DATA = [
  { q: "È utile anche se non vengo da Windows ma è il mio primo Mac?", a: "Sì, i capitoli 1, 3, 4, 5, 6 e 7 coprono tutto il percorso di apprendimento, configurazione e gestione anche per chi non ha un passato Windows." },
  { q: "È utile se uso già il Mac da qualche mese o da anni?", a: "Sì, è prezioso per impostazioni avanzate, organizzazione del caos digitale, scelta app essenziali, workflow e manutenzione." },
  { q: "In quanto tempo vedrò risultati concreti?", a: "1–2 giorni per setup/migrazione, 3–4 ore totali per avere un sistema molto più ordinato e produttivo." },
  { q: "In che formato ricevo l’ebook?", a: "PDF ottimizzato per Mac, iPad e tablet; stampabile per checklist e tabelle." },
  { q: "Gli aggiornamenti futuri sono inclusi?", a: "Sì, per tutta l’edizione 2026 e per i bonus che verranno aggiunti." },
  { q: "Serve un modello specifico di Mac o una versione precisa di macOS?", a: "Pensato per macOS Tahoe, ma i concetti valgono anche per versioni recenti; qualsiasi Mac compatibile è OK." },
  { q: "Non sono molto “tecnico”: riuscirò a seguirla?", a: "Sì, perché il linguaggio è semplice, con tabelle comparative e checklist passo passo." }
];