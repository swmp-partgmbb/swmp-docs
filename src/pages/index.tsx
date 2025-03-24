import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import React, { useEffect, useRef } from 'react';

import styles from './index.module.css';

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

        {/* Блок - Преимущества */}
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
