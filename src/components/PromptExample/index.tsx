import React, { useState } from 'react';
import styles from './styles.module.css';

export interface PromptExampleProps {
  badPrompt: string;
  goodPrompt: string;
  description?: string;
  badReasons?: string[];
  goodReasons?: string[];
  badLabel?: string;
  goodLabel?: string;
  language?: 'de';
}

const LABELS = {
  de: {
    bad: 'Ineffektiv',
    good: 'Effektiv',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    whyBad: 'Warum ineffektiv:',
    whyGood: 'Warum effektiv:',
  }
};

export default function PromptExample({
  badPrompt,
  goodPrompt,
  description,
  badReasons = [],
  goodReasons = [],
  badLabel,
  goodLabel,
  language = 'de',
}: PromptExampleProps): JSX.Element {
  const labels = LABELS[language];
  const [copiedBad, setCopiedBad] = useState(false);
  const [copiedGood, setCopiedGood] = useState(false);
  
  const defaultBadReasons = description ? ['Zu allgemein', 'Keine klare Struktur vorgegeben'] : [];
  const defaultGoodReasons = description ? ['Präzise und spezifisch', 'Klares Format und Umfang definiert'] : [];
  
  const finalBadReasons = badReasons.length > 0 ? badReasons : defaultBadReasons;
  const finalGoodReasons = goodReasons.length > 0 ? goodReasons : defaultGoodReasons;
  
  const copyToClipboard = (text: string, isBad: boolean) => {
    navigator.clipboard.writeText(text).then(() => {
      if (isBad) {
        setCopiedBad(true);
        setTimeout(() => setCopiedBad(false), 2000);
      } else {
        setCopiedGood(true);
        setTimeout(() => setCopiedGood(false), 2000);
      }
    });
  };

  return (
    <div className={styles.promptExampleContainer}>
      {description && (
        <div className={styles.promptDescription}>
          {description}
        </div>
      )}
      <div className={styles.promptsWrapper}>
        <div className={styles.promptBox}>
          <div className={styles.promptHeader}>
            <span className={styles.badLabel}>{badLabel || labels.bad}</span>
            <button 
              className={styles.copyButton}
              onClick={() => copyToClipboard(badPrompt, true)}
            >
              {copiedBad ? labels.copied : labels.copy}
            </button>
          </div>
          <div className={styles.promptContent}>
            <p>{badPrompt}</p>
          </div>
          {finalBadReasons.length > 0 && (
            <div className={styles.promptReasons}>
              <div className={styles.reasonsTitle}>{labels.whyBad}</div>
              <ul className={styles.reasonsList}>
                {finalBadReasons.map((reason, index) => (
                  <li key={`bad-reason-${index}`}>{reason}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.promptArrow}>→</div>
        <div className={styles.promptBox}>
          <div className={styles.promptHeader}>
            <span className={styles.goodLabel}>{goodLabel || labels.good}</span>
            <button 
              className={styles.copyButton}
              onClick={() => copyToClipboard(goodPrompt, false)}
            >
              {copiedGood ? labels.copied : labels.copy}
            </button>
          </div>
          <div className={styles.promptContent}>
            <p>{goodPrompt}</p>
          </div>
          {finalGoodReasons.length > 0 && (
            <div className={styles.promptReasons}>
              <div className={styles.reasonsTitle}>{labels.whyGood}</div>
              <ul className={styles.reasonsList}>
                {finalGoodReasons.map((reason, index) => (
                  <li key={`good-reason-${index}`}>{reason}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 