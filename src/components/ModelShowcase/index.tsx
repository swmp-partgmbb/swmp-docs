import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Benchmark = {
    description: string;
};

type Price = {
    label: string;
    value: string;
};

type ModelItem = {
    name: string;
    date?: string;
    description: string[];
    benchmarks: Benchmark[];
    relevance: string;
    prices: Price[];
};

type ModelCategory = {
    logo: string;
    description: string;
    models: ModelItem[];
};

const ModelCard: React.FC<{ model: ModelItem }> = ({ model }) => {
    return (
        <div className={styles.modelCard}>
            <div className={styles.modelHeader}>
                <h3 className={styles.modelName}>{model.name}</h3>
                {model.date && <div className={styles.modelDate}>{model.date}</div>}
                {model.description.map((desc, index) => (
                    <p key={index} className={styles.modelDescription}>
                        {desc}
                    </p>
                ))}
            </div>
            <div className={styles.modelBody}>
                <div className={styles.relevanceSection}>
                    <h4 className={styles.sectionTitle}>Kanzlei-Relevanz:</h4>
                    <p>{model.relevance}</p>
                </div>

                <div>
                    <h4 className={styles.sectionTitle}>Benchmarks:</h4>
                    <ul className={styles.benchmarkList}>
                        {model.benchmarks.map((benchmark, index) => (
                            <li key={index} className={styles.benchmarkItem}>
                                {benchmark.description}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.pricingSection}>
                    <h4 className={styles.sectionTitle}>Kosten:</h4>
                    {model.prices.map((price, index) => (
                        <div key={index} className={styles.priceItem}>
                            <span className={styles.priceLabel}>{price.label}</span>
                            <span className={styles.priceValue}>{price.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ModelCategory: React.FC<{ category: ModelCategory }> = ({ category }) => {
    return (
        <div className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <img src={category.logo} alt={`${category.description} logo`} className={styles.categoryLogo} />
                <p className={styles.categoryDescription}>{category.description}</p>
            </div>
            <div className={styles.modelGrid}>
                {category.models.map((model, idx) => (
                    <ModelCard key={idx} model={model} />
                ))}
            </div>
        </div>
    );
};

const ModelShowcase: React.FC = () => {
    const openaiLogo = '/swmp-docs/img/logos/openai-logo.svg';
    const perplexityLogo = '/swmp-docs/img/logos/perplexity-logo.svg';

    const modelCategories: ModelCategory[] = [
        {
            logo: openaiLogo,
            description: 'Optimiert für Dokumentenverarbeitung, Datenbankinteraktionen (Deubner und Kanzlei Wissensarchiv) und Nutzerkommunikation.',
            models: [
                {
                    name: 'GPT-4.1',
                    date: 'Veröffentlicht am 14. April 2025',
                    description: [
                        '1 Million Token Kontextfenster',
                        'Wissensstand bis Juni 2024',
                        'Herausragende Verbesserungen bei Coding und Anweisungsbefolgung'
                    ],
                    benchmarks: [
                        { description: '54,6% auf SWE-bench Verified (21,4% besser als GPT-4o)' },
                        { description: '38,3% auf MultiChallenge (10,5% besser als GPT-4o)' },
                        { description: '72,0% auf Video-MME (für Multimodal-Verständnis)' }
                    ],
                    relevance: 'GPT-4.1 eignet sich hervorragend für komplexe Analysen und die Bearbeitung umfangreicher Dokumente. Der erweiterte Kontextumfang ermöglicht es, ganze Vertragswerke zu erfassen und Inkonsistenzen zwischen verschiedenen Klauseln aufzudecken – eine kritische Fähigkeit für die Praxis.',
                    prices: [
                        { label: 'Input-Token:', value: '$2,00 pro Million' },
                        { label: 'Output-Token:', value: '$8,00 pro Million' }
                    ]
                },
                {
                    name: 'GPT-4.1 Mini',
                    date: 'Veröffentlicht parallel zum Hauptmodell am 14. April 2025',
                    description: [
                        '1 Million Token Kontextfenster',
                        'Wissensstand bis Juni 2024',
                        'Optimiert für Balance zwischen Leistung und Geschwindigkeit'
                    ],
                    benchmarks: [
                        { description: 'Übertrifft in vielen Tests GPT-4o bei geringeren Kosten' },
                        { description: '83% günstiger als GPT-4o bei etwa halber Latenz' }
                    ],
                    relevance: 'Ein ausgezeichnetes Modell für den täglichen Einsatz in Kanzleien, da es schnelle Antworten bei Standardanfragen liefert und gleichzeitig umfangreiche Dokumente verarbeiten kann.',
                    prices: [
                        { label: 'Input-Token:', value: '$0,40 pro Million' },
                        { label: 'Output-Token:', value: '$1,60 pro Million' }
                    ]
                },
                {
                    name: 'GPT-4.1 Nano',
                    date: 'Schnellstes und kostengünstigstes Modell der 4.1-Familie',
                    description: [
                        '1 Million Token Kontextfenster trotz kompakter Größe',
                        'Besonders schnell und kostengünstig'
                    ],
                    benchmarks: [
                        { description: 'MMLU-Score: 80,1%' },
                        { description: 'GPQA-Score: 50,3%' },
                        { description: 'Aider Polyglot Coding: 9,8%' }
                    ],
                    relevance: 'Ideal für schnelle Klassifikationsaufgaben und das automatische Vervollständigen standardisierter Rechtsdokumente.',
                    prices: [
                        { label: 'Input-Token:', value: '$0,10 pro Million' },
                        { label: 'Output-Token:', value: '$0,40 pro Million' }
                    ]
                },
                {
                    name: 'O4-Mini',
                    date: 'OpenAIs neuestes kleines Reasoning-Modell der o-Serie',
                    description: [
                        '200.000 Token Kontextfenster',
                        'Analysiert die Anfrage in mehreren Schritten'
                    ],
                    benchmarks: [
                        { description: 'Vergleichbare Leistung zu o3 bei etwa 10-fach geringeren Kosten' },
                        { description: 'Humanity\'s Last Exam: 14.28% Low & 17.7% High' }
                    ],
                    relevance: 'Bietet eine gute Balance zwischen Geschwindigkeit und Genauigkeit für komplexe Analysen. Die hohe Genauigkeit macht es besonders wertvoll für Anwendungen wie Semantic Search in Rechtsdatenbanken, Textklassifikation von Schriftsätzen und Dokumentenanalyse.',
                    prices: [
                        { label: 'Input-Token:', value: '$1,10 pro Million' },
                        { label: 'Output-Token:', value: '$4,40 pro Million' }
                    ]
                },
                {
                    name: 'text-embedding-3-small',
                    date: 'Nachfolger von text-embedding-ada-002',
                    description: [
                        '1536 Standard-Dimensionen',
                        'Optimiert für Effizienz, niedrige Kosten und verbesserte Genauigkeit',
                    ],
                    benchmarks: [
                        { description: 'MIRACL (Multilingual Retrieval): 44,0% (ada-002: 31,4%)' },
                        { description: 'MTEB (Massive Text Embedding Benchmark): 62,3% (ada-002: 61,0%)' },
                        { description: 'Bei reduzierter Dimension (512): MTEB-Score 61,6%' }
                    ],
                    relevance: 'Ideal für Anwendungen wie Semantic Search in Rechtsdatenbanken, Textklassifikation von Schriftsätzen und Dokumentenanalyse. Die verbesserten multilingualen Fähigkeiten machen es besonders wertvoll für deutsche Sprache.',
                    prices: [
                        { label: 'Input:', value: '$0,02 pro Million' }
                    ]
                }
            ]
        },
        {
            logo: perplexityLogo,
            description: 'Spezialisiert auf Internetrecherche, Informationssuche und Synthese aktueller Daten.',
            models: [
                {
                    name: 'Sonar',
                    date: '',
                    description: [
                        'Hauseigenes KI-Suchmodell von Perplexity AI',
                        'Basiert auf Llama 3.3 70B',
                        'Ultraschnelle Antwortgeschwindigkeit (1.200 Token pro Sekunde)',
                    ],
                    benchmarks: [
                        { description: 'Übertrifft in internen Tests Modelle wie GPT-4o mini und Claude 3.5 Haiku deutlich in der Nutzerzufriedenheit' },
                        { description: 'Erreichte hohe Platzierungen in der Search Arena Evaluation' }
                    ],
                    relevance: 'Besonders wertvoll für juristische Recherchen, da es aktuelle Informationen aus dem Internet in Echtzeit abrufen und verarbeiten kann. Die hohe Geschwindigkeit macht es ideal für den Einsatz bei Beratungsgesprächen, wo schnelle Antworten auf juristische Fragen benötigt werden.',
                    prices: [
                        {
                            label: 'Input:',
                            value: '1$ pro Million'
                        },
                        {
                            label: 'Output:',
                            value: '1$ pro Million'
                        }
                    ]
                },
                {
                    name: 'Sonar-Reasoning',
                    date: '',
                    description: [
                        'Erweiterte Version des Sonar-Modells mit verstärkten Reasoning-Fähigkeiten',
                        'Optimiert für komplexe analytische Aufgaben',
                        'Focus Academic-Modus für wissenschaftliche Quellen'
                    ],
                    benchmarks: [
                        { description: 'Sonar-Reasoning-Pro erreichte einen Arena Score von 1136, statistisch gleichauf mit Gemini-2.5-Pro-Grounding (1142)' },
                        { description: 'In direkten Vergleichen besiegte Sonar-Reasoning-Pro-High Gemini-2.5-Pro-Grounding in 53% der Fälle' }
                    ],
                    relevance: 'Die verbesserten Reasoning-Fähigkeiten machen dieses Modell besonders wertvoll für komplexe juristische Analysen und das Erarbeiten von Rechtsgutachten. Der Focus Academic-Modus ermöglicht gezielte Recherchen in wissenschaftlichen Quellen, was für fundierte rechtliche Argumentationen wichtig ist.',
                    prices: [
                        { label: 'Input:', value: '1$ pro Million' },
                        { label: 'Output:', value: '5$ pro Million' },
                        { label: 'Zusätzliche Kosten:', value: '$5 pro 1000 Suchen' }
                    ]
                },
                {
                    name: 'Sonar-Deep-Research',
                    date: '',
                    description: [
                        'Spezialisiertes Modell für mehrstufige Informationssuche und komplexe Themen',
                        'Führt autonom Dutzende von Suchen durch und analysiert Hunderte von Quellen',
                        'Erstellt umfassende, quellenbasierte Berichte',
                    ],
                    benchmarks: [
                        { description: 'Hohe Bewertungen bei komplexen Rechercheaufgaben' },
                        { description: '21.1% Score in Humanity\'s Last Exam' }
                    ],
                    relevance: 'Ideal für tiefgehende juristische Recherchen, Fallanalysen und die Erstellung fundierter Rechtsgutachten. Die Fähigkeit, autonom komplexe Rechercheaufgaben durchzuführen und Informationen aus verschiedenen Quellen zu synthetisieren, macht es zu einem wertvollen Werkzeug für Anwälte bei der Bearbeitung komplizierter Rechtsfälle.',
                    prices: [
                        { label: 'Input-Token:', value: '$2 pro Million' },
                        { label: 'Output-Token:', value: '$8 pro Million' },
                        { label: 'Reasoning:', value: '$3 pro Million' },
                        { label: 'Zusätzliche Kosten:', value: '$5 pro 1000 Suchen' }
                    ]
                }
            ]
        }
    ];

    return (
        <section className={styles.modelShowcase}>
            <div className="container">

                {modelCategories.map((category, idx) => (
                    <ModelCategory key={idx} category={category} />
                ))}
            </div>
        </section>
    );
};

export default ModelShowcase;