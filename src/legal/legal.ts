/**
 * Legal texts (Impressum, Datenschutzerklärung). Plain data, no React. The German text is binding; the English
 * text is a courtesy translation. Update both when the app starts to use analytics, ads, accounts or payments
 * (docs/legal.md).
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}
export interface LegalDoc {
  title: string;
  sections: LegalSection[];
}
export type LegalId = 'impressum' | 'datenschutz';

/**
 * Who runs this deployment. Build variables, never source: every fork supplies its own (docs/legal.md).
 * Read on each call so tests can stub them.
 */
export function operator() {
  const e = import.meta.env;
  const name = e.VITE_OPERATOR_NAME?.trim() ?? '';
  const street = e.VITE_OPERATOR_STREET?.trim() ?? '';
  const city = e.VITE_OPERATOR_CITY?.trim() ?? '';
  const email = e.VITE_OPERATOR_EMAIL?.trim() ?? '';
  return { name, street, city, email, configured: Boolean(name && street && city && email) };
}
type Operator = ReturnType<typeof operator>;

const impressumDe = (o: Operator): LegalDoc => ({
  title: 'Impressum',
  sections: [
    {
      heading: 'Angaben gemäß § 5 DDG',
      paragraphs: [`${o.name}\n${o.street}\n${o.city}\nDeutschland`],
    },
    {
      heading: 'Kontakt',
      paragraphs: [`E-Mail: ${o.email}`],
    },
    {
      heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
      paragraphs: [`${o.name}, ${o.street}, ${o.city}`],
    },
    {
      heading: 'Bildnachweise',
      paragraphs: [
        'Die Wortfotos stammen von Pixabay und stehen unter der Pixabay-Inhaltslizenz. Die Urheber der einzelnen Fotos sind auf der Seite „Image credits“ genannt.',
      ],
    },
  ],
});

const impressumEn = (o: Operator): LegalDoc => ({
  title: 'Legal notice (Impressum)',
  sections: [
    {
      heading: 'Information according to § 5 DDG',
      paragraphs: [`${o.name}\n${o.street}\n${o.city}\nGermany`],
    },
    { heading: 'Contact', paragraphs: [`Email: ${o.email}`] },
    {
      heading: 'Responsible for the content according to § 18 (2) MStV',
      paragraphs: [`${o.name}, ${o.street}, ${o.city}`],
    },
    {
      heading: 'Image credits',
      paragraphs: [
        'The word photos come from Pixabay and are used under the Pixabay Content License. The authors of the individual photos are named on the “Image credits” page.',
      ],
    },
  ],
});

const datenschutzDe = (o: Operator): LegalDoc => ({
  title: 'Datenschutzerklärung',
  sections: [
    {
      heading: '1. Verantwortlicher',
      paragraphs: [
        `Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: ${o.name}, ${o.street}, ${o.city}, Deutschland, E-Mail: ${o.email}.`,
      ],
    },
    {
      heading: '2. Kurzfassung',
      paragraphs: [
        'Lingoat benötigt kein Konto und setzt weder Tracking noch Analyse- oder Werbedienste ein. Ihr Lernfortschritt bleibt auf Ihrem Gerät. Personenbezogene Daten werden nur technisch bedingt beim Aufruf der Seite und, wenn Sie ein Problem melden, in dem dafür nötigen Umfang verarbeitet.',
      ],
    },
    {
      heading: '3. Hosting und Server-Logfiles (Cloudflare)',
      paragraphs: [
        'Die Website wird bei Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (Cloudflare Workers und Cloudflare R2) betrieben. Beim Aufruf verarbeitet Cloudflare technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit, die aufgerufene Adresse, den Browsertyp und die übertragene Datenmenge. Die Daten werden in Server- und Anwendungsprotokollen zur Sicherheit und zum stabilen Betrieb gespeichert.',
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und zuverlässigen Betrieb). Mit Cloudflare besteht ein Vertrag zur Auftragsverarbeitung. Eine Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework und auf Standardvertragsklauseln. Die Schriftarten werden von unserem eigenen Server ausgeliefert; es werden keine Schriftarten von Google geladen.',
      ],
    },
    {
      heading: '4. Speicherung auf Ihrem Gerät (localStorage)',
      paragraphs: [
        'Lingoat speichert Ihren Lernfortschritt (XP, Serie, Sterne, Fehler, Tagesziel) und Ihre Einstellungen (Design, Ton, Sprachausgabe) im localStorage Ihres Browsers. Diese Daten verlassen Ihr Gerät nicht und werden nicht an uns übertragen. Sie sind für die von Ihnen gewünschte Funktion der App unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG); eine Einwilligung ist daher nicht erforderlich. Sie können die Daten jederzeit im Profil zurücksetzen, exportieren oder über die Browsereinstellungen löschen.',
        'Wir verwenden keine Cookies zu Werbe- oder Analysezwecken.',
      ],
    },
    {
      heading: '5. „Problem melden“ (Cloudflare Turnstile und GitHub)',
      paragraphs: [
        'Wenn Sie im Spiel „Problem melden“ öffnen, wird Cloudflare Turnstile von challenges.cloudflare.com geladen, um automatisierten Missbrauch zu verhindern. Dabei verarbeitet Cloudflare Ihre IP-Adresse und Browserdaten und kann Informationen auf Ihrem Gerät speichern oder abrufen; das ist für den von Ihnen ausdrücklich gewünschten Meldedienst erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Ohne Öffnen des Dialogs wird Turnstile nicht geladen.',
        'Beim Absenden wird Ihre Meldung an unseren Server gesendet und dort automatisch als öffentliches „Issue“ im öffentlichen GitHub-Repository dieses Projekts angelegt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Die Meldung enthält die Art des Problems, Stufe, Einheit, Aktivität, Spiel, Element, App-Version und Ihre optionale Notiz (höchstens 200 Zeichen). Ihre IP-Adresse wird nicht an GitHub weitergegeben, sie dient nur der Missbrauchsabwehr und der Begrenzung der Anzahl von Meldungen. Bitte schreiben Sie keine personenbezogenen Daten in die Notiz: Sie ist für jedermann sichtbar. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Verbesserung der Inhalte); die Meldung ist freiwillig. Die Issues bleiben gespeichert, bis wir sie löschen.',
      ],
    },
    {
      heading: '6. Sprachausgabe',
      paragraphs: [
        'Die Vorlesefunktion nutzt die Sprachausgabe Ihres Browsers oder Betriebssystems. Einige Browser verwenden dafür Online-Stimmen ihres Herstellers; dabei kann der vorzulesende Text an diesen übermittelt werden. Wir erhalten keine Daten.',
      ],
    },
    {
      heading: '7. Externe Links',
      paragraphs: [
        'Links zu Pixabay und GitHub öffnen Seiten Dritter. Sobald Sie diese aufrufen, gilt deren Datenschutzerklärung.',
      ],
    },
    {
      heading: '8. Ihre Rechte',
      paragraphs: [
        'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21). Wenden Sie sich dazu an ' +
          o.email +
          '. Außerdem können Sie sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO), zum Beispiel bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.',
        'Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Eine automatisierte Entscheidungsfindung oder ein Profiling findet nicht statt.',
      ],
    },
  ],
});

const datenschutzEn = (o: Operator): LegalDoc => ({
  title: 'Privacy policy (Datenschutzerklärung)',
  sections: [
    {
      heading: '1. Controller',
      paragraphs: [
        `The controller under the General Data Protection Regulation (GDPR) is: ${o.name}, ${o.street}, ${o.city}, Germany, email: ${o.email}.`,
      ],
    },
    {
      heading: '2. In short',
      paragraphs: [
        'Lingoat needs no account and uses no tracking, analytics or advertising services. Your learning progress stays on your device. Personal data is processed only as technically necessary when you open the site and, if you report a problem, to the extent needed for that.',
      ],
    },
    {
      heading: '3. Hosting and server logs (Cloudflare)',
      paragraphs: [
        'The website runs on Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (Cloudflare Workers and Cloudflare R2). When you open it, Cloudflare processes technically necessary data, in particular your IP address, date and time, the requested address, the browser type and the amount of data sent. The data is kept in server and application logs for security and stable operation.',
        'The legal basis is Art. 6 (1) (f) GDPR (legitimate interest in secure and reliable operation). A data processing agreement exists with Cloudflare. Transfers to the USA rely on the European Commission’s adequacy decision for the EU-US Data Privacy Framework and on standard contractual clauses. Fonts are served from our own server; no Google fonts are loaded.',
      ],
    },
    {
      heading: '4. Storage on your device (localStorage)',
      paragraphs: [
        'Lingoat stores your learning progress (XP, streak, stars, mistakes, daily goal) and your settings (theme, sound, speech) in your browser’s localStorage. This data does not leave your device and is not sent to us. It is strictly necessary for the app function you asked for (§ 25 (2) no. 2 TDDDG), so no consent is needed. You can reset or export it in the profile at any time, or delete it in your browser settings.',
        'We do not use cookies for advertising or analytics.',
      ],
    },
    {
      heading: '5. “Report a problem” (Cloudflare Turnstile and GitHub)',
      paragraphs: [
        'When you open “Report a problem” in a game, Cloudflare Turnstile is loaded from challenges.cloudflare.com to prevent automated abuse. Cloudflare then processes your IP address and browser data and may store or read information on your device; this is necessary for the reporting service you explicitly asked for (§ 25 (2) no. 2 TDDDG). The legal basis is Art. 6 (1) (f) GDPR. Turnstile is not loaded unless you open the dialog.',
        'When you send the report, it goes to our server and is created automatically as a public issue in this project’s public GitHub repository (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). The report contains the problem type, level, unit, activity, game, item, app version and your optional note (at most 200 characters). Your IP address is not passed to GitHub; it is used only to prevent abuse and limit the number of reports. Please do not write personal data in the note: everyone can read it. The legal basis is Art. 6 (1) (f) GDPR (improving the content); reporting is voluntary. Issues stay stored until we delete them.',
      ],
    },
    {
      heading: '6. Text to speech',
      paragraphs: [
        'The read-aloud feature uses the speech synthesis of your browser or operating system. Some browsers use online voices of their vendor, in which case the text to be read may be sent to that vendor. We receive no data.',
      ],
    },
    {
      heading: '7. External links',
      paragraphs: [
        'Links to Pixabay and GitHub open third-party sites. Their privacy policies apply once you visit them.',
      ],
    },
    {
      heading: '8. Your rights',
      paragraphs: [
        `You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection to processing based on legitimate interests (Art. 21). Contact ${o.email} for this. You may also lodge a complaint with a supervisory authority (Art. 77 GDPR), for example the Berlin Commissioner for Data Protection and Freedom of Information (Berliner Beauftragte für Datenschutz und Informationsfreiheit), Alt-Moabit 59–61, 10555 Berlin.`,
        'Providing personal data is neither legally nor contractually required. There is no automated decision-making or profiling.',
      ],
    },
  ],
});

const NOTICE: Record<'de' | 'en', LegalDoc> = {
  de: {
    title: 'Rechtliche Angaben fehlen',
    sections: [
      {
        heading: 'Nicht konfiguriert',
        paragraphs: [
          'Für diese Installation sind keine Betreiberangaben hinterlegt. Setzen Sie beim Build die Variablen VITE_OPERATOR_NAME, VITE_OPERATOR_STREET, VITE_OPERATOR_CITY und VITE_OPERATOR_EMAIL (siehe docs/legal.md) und prüfen Sie die Texte für Ihren Betrieb.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal details missing',
    sections: [
      {
        heading: 'Not configured',
        paragraphs: [
          'No operator details are set for this installation. Set the build variables VITE_OPERATOR_NAME, VITE_OPERATOR_STREET, VITE_OPERATOR_CITY and VITE_OPERATOR_EMAIL (see docs/legal.md) and review the texts for your own setup.',
        ],
      },
    ],
  },
};

/** The documents for this deployment; a notice instead when the operator details are not configured. */
export function getLegal(id: LegalId): { de: LegalDoc; en: LegalDoc } {
  const o = operator();
  if (!o.configured) return NOTICE;
  return id === 'impressum'
    ? { de: impressumDe(o), en: impressumEn(o) }
    : { de: datenschutzDe(o), en: datenschutzEn(o) };
}
