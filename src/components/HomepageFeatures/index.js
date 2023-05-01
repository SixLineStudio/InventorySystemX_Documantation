import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Inventory System X is designed with ease of use in mind, allowing game developers to quickly and easily
                integrate a comprehensive inventory system into their projects.
            </>
        ),
    },
    {
        title: 'High quality and attention to detail',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Inventory System X is built with a focus on high quality and attention to detail. Every aspect of the
                system has been carefully crafted to ensure a smooth and intuitive experience for both developers and
                players.
            </>
        ),
    },
    {
        title: 'Fully Replicated',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Inventory System X is fully replicated, allowing for seamless integration into multiplayer games with ease.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
