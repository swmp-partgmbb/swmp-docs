import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import React, { useEffect, useRef } from 'react';

import styles from './index.module.css';

// KI-Modellkarte Komponente
const AIModelCard = ({ model }) => (
  <div className={styles.aiModelCard}>
    <div className={styles.aiModelContent}>
      <h3>{model.name}</h3>
      <p>{model.description}</p>
      {model.features && (
        <ul className={styles.aiModelFeatures}>
          {model.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default function Home(): JSX.Element {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, { threshold: 0.15 });

    const fadeElements = document.querySelectorAll(
      `.${styles.fadeInSection}, .${styles.staggeredItem}, .${styles.slideInLeft}, .${styles.slideInRight}, .${styles.scaleIn}`
    );
    
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Daten für KI-Modelle
  const aiModels = [
    {
      type: 'openai',
      title: '',
      logo: 'img/logos/openai-logo.svg',
      models: [
        {
          name: 'GPT-4.1',
          icon: 'img/logos/openai-logo.svg',
          description: 'Flaggschiff-Modell mit erweitertem Kontextfenster von bis zu 1 Million Token und verbesserten Reasoning-Fähigkeiten.',
          features: [
            '1M Token Kontextfenster',
            'Verbessertes Verständnis juristischer Dokumente',
            'Präzise Befolgung komplexer Anweisungen'
          ]
        },
        {
          name: 'GPT-4.1-Mini',
          icon: 'img/logos/openai-logo.svg',
          description: 'Schnelleres Modell mit 1 Million Token Kontextfenster und optimierter Balance zwischen Leistung und Geschwindigkeit.',
          features: [
            '1M Token Kontextfenster',
            'Wissensstand bis Juni 2024',
            'Verbesserte Qualität bei geringeren Kosten'
          ]
        },
        {
          name: 'GPT-4.1-Nano',
          icon: 'img/logos/openai-logo.svg',
          description: 'Schnellstes und kostengünstigstes Modell der 4.1-Familie mit 1 Million Token Kontextfenster trotz kompakter Größe.',
          features: [
            '1M Token Kontextfenster',
            'Extrem schnell und kostengünstig',
            'Ideal für Standardaufgaben und Dokumentenvervollständigung'
          ]
        }
      ]
    },
    {
      type: 'perplexity',
      title: '',
      logo: 'img/logos/perplexity-logo.svg',
      models: [
        {
          name: 'Sonar',
          icon: 'img/logos/perplexity-logo.svg',
          description: 'Spezialisiertes Modell für Internetsuche mit Integration aktueller Informationsquellen in Echtzeit.',
          features: [
            'Zugriff auf aktuelle Quellen',
            'Zitierung und Faktenkontrolle',
            'Schnelle Antworten zu juristischen Fragen'
          ]
        },
        {
          name: 'Sonar-Reasoning',
          icon: 'img/logos/perplexity-logo.svg',
          description: 'Fortschrittliches Modell für komplexe analytische Aufgaben mit erweiterten Reasoning-Fähigkeiten.',
          features: [
            'Vertiefte Analyse komplexer Fragen',
            'Akademischer Modus für wissenschaftliche Quellen',
            'Mehrstufige Argumentation'
          ]
        },
        {
          name: 'Sonar-Deep-Research',
          icon: 'img/logos/perplexity-logo.svg',
          description: 'Spezialisiertes Modell für mehrstufige Informationssuche und komplexe Themen mit autonomer Recherchefähigkeit.',
          features: [
            'Autonom Dutzende Suchen durchführen',
            'Analyse Hunderter von Quellen',
            'Erstellung umfassender, quellenbasierter Berichte'
          ]
        }
      ]
    }
  ];

  return (
    <Layout
      title={`SWMP`}
      description="SWMP">
      <main>
        <section className={`${styles.featureBlock} ${styles.alternateBlock}`}>
          <div className="container">
            <div className={styles.featureContent}>
              <div className={`${styles.textColumn} ${styles.fadeInSection}`}>
                <Heading as="h2" className={styles.sectionTitle}>
                  SW<span className={styles.highlight}>A</span>MP<span className={styles.highlight}>I</span> - KI-gestütztes Chatsystem
        </Heading>
                <p className={styles.featureDescription}>
                  SWAMPI ist ein KI-gestütztes Chatsystem, das speziell entwickelt wurde, um die Mitarbeiter der Kanzlei SWMP effizient zu unterstützen. Die Anwendung bietet eine benutzerfreundliche Oberfläche, die es ermöglicht, Fragen zu stellen und präzise, fundierte und verständliche Antworten zu erhalten.
                </p>
                <div className={styles.ctaButton}>
          <Link
            className="button button--primary button--lg"
            to="/docs/Benutzer/introduction">
                    Mehr erfahren
                  </Link>
                </div>
              </div>
              <div className={`${styles.imageColumn} ${styles.slideInRight}`}>
                <img src="img/logo_mini_color.svg" style={{width: '50%'}} alt="SWMP Dashboard" />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.featureBlock}`}>
          <div className="container">
            <div className={styles.featureContent}>
            <div className={`${styles.imageColumn} ${styles.slideInLeft}`}>
                <div className={styles.dualImageContainer}>
                  <img src="img/data-integration.svg" alt="Datenintegration" className={styles.primaryImage} />
                </div>
              </div>
              <div className={`${styles.textColumn} ${styles.fadeInSection}`}>
                <Heading as="h2" className={styles.sectionTitle}>
                  Intelligente Integration & KI-Technologie
                </Heading>
                <p className={styles.featureDescription}>
                  SWAMPI kombiniert nahtlose Datenintegration mit fortschrittlichen KI-Modellen, um komplexe juristische Fragestellungen präzise zu beantworten. Das System verbindet interne Dokumente, vertrauliche Datenbanken und öffentliche Quellen mit den leistungsstärksten KI-Modellen der Branche.
                </p>
                <ul className={styles.featurePoints}>
                  {[
                    'Verknüpfung von OpenAI KI-Modellen mit internen und externen Wissensdatenbanken',
                    'Benutzung von Perplexity für Internetrecherche',
                    'Intelligente Priorisierung verschiedener Quellen je nach Fragestellung mit RAG-Technologie',
                    'Kontextbezogenes Verständnis komplexer juristischer Anfragen',
                    'Kontinuierliche Aktualisierung der Datenbanken und KI-Modelle'
                  ].map((point, index) => (
                    <li 
                      key={index} 
                      className={styles.staggeredItem}
                      style={{'--item-index': index.toString()} as React.CSSProperties}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {/* <div className={styles.ctaButton}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/technology">
                    Technologie erkunden
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.featureBlock} ${styles.alternateBlock}`}>
          <div className="container">
            <div className={styles.aiModelShowcase}>
              <Heading as="h2" className={`${styles.sectionTitle} ${styles.fadeInSection}`}>
                Fortschrittliche <span className={styles.highlight}>KI-Modelle</span>
              </Heading>
              <p className={`${styles.featureDescription} ${styles.fadeInSection}`}>
                Unser System nutzt die besten KI-Modelle führender Unternehmen
              </p>
              
              {aiModels.map((category, index) => (
                <div key={index} className={`${styles.aiModelCategory} ${styles.slideInLeft}`}>
                  <div className={styles.aiModelCategoryHeader}>
                    <img 
                      src={category.logo} 
                      alt={`${category.title} Logo`} 
                      className={styles.aiModelCategoryLogo} 
                    />
                    <h3>{category.title}</h3>
                  </div>
                  <div className={styles.aiModelGrid}>
                    {category.models.map((model, idx) => (
                      <AIModelCard key={idx} model={model} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.featureBlock}`}>
          <div className="container">
            <div className={styles.featureContent}>
              <div className={`${styles.textColumn} ${styles.fadeInSection}`}>
                <Heading as="h2" className={styles.sectionTitle}>
                  Umfassende Sicherheit
                </Heading>
                <p className={styles.featureDescription}>
                  Der Schutz der Daten steht im Mittelpunkt unserer Architektur. SWAMPI implementiert mehrschichtige Sicherheitsmechanismen, die die sensiblen Informationen auf allen Ebenen schützen.
                </p>
                <div className={styles.securityGrid}>
                  {[
                    {
                      iconSrc: "img/icons/authentication.svg",
                      title: 'Authentifizierung & Zugriffskontrolle',
                      description: 'Microsoft Entra ID Integration mit IP-Adressbeschränkung und Multi-Faktor-Authentifizierung schützt vor unbefugtem Zugriff. Nur Anfragen von autorisierten IP-Adressen werden zugelassen.'
                    },
                    {
                      iconSrc: "img/icons/encryption.svg",
                      title: 'Datenverschlüsselung',
                      description: 'AES-256 für ruhende Daten und HTTPS/TLS 1.2+ mit strenger TLS Cipher Suite für die Datenübertragung bieten maximalen Schutz.'
                    },
                    {
                      iconSrc: "img/icons/privacy.svg",
                      title: 'Datenschutz',
                      description: 'Alle Daten verbleiben ausschließlich in EU-Rechenzentren, werden mandantengetrennt verarbeitet und nicht zum LLM-Training verwendet. Überwachung erfolgt nur durch autorisierte Microsoft-Mitarbeiter im EWR.'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`${styles.securityItem} ${styles.scaleIn}`}
                      style={{'--item-index': index.toString()} as React.CSSProperties}
                    >
                      <div className={styles.securityHeader}>
                        <img src={item.iconSrc} alt="" className={styles.securityIcon} />
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile-Block */}
        {/* <section className={styles.featureBlock}>
          <div className="container">
            <div className={styles.featureContent}>
              <div className={`${styles.textColumn} ${styles.fadeInSection}`}>
                <Heading as="h2" className={styles.sectionTitle}>
                  Vorteile für Ihre Kanzlei
                </Heading>
                <p className={styles.featureDescription}>
                  SWAMPI steigert die Effizienz Ihrer Mitarbeiter durch sofortigen Zugriff auf relevantes Wissen und personalisierte Unterstützung bei täglichen Aufgaben.
                </p>
                <ul className={styles.featurePoints}>
                  {[
                    'Präzise und fundierte Antworten auf komplexe Fragen',
                    'Zeitersparnis durch schnellen Zugriff auf kanzleispezifisches Wissen',
                    'Aktuelle Informationen durch gesteuerten Internetzugriff',
                    'Konsistente Informationen über alle Abteilungen hinweg',
                    'Optimierte Arbeitsabläufe durch intelligente Assistenz'
                  ].map((point, index) => (
                    <li 
                      key={index} 
                      className={styles.staggeredItem}
                      style={{'--item-index': index.toString()} as React.CSSProperties}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className={styles.ctaButton}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/features">
                    Alle Funktionen entdecken
                  </Link>
                </div>
              </div>
              <div className={`${styles.imageColumn} ${styles.slideInRight}`}>
                <img src="img/benefits.png" alt="Vorteile von SWAMPI" />
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}
