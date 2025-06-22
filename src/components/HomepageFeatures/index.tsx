import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import CodeSvg from '@site/static/img/coding.svg';
import FitnessSvg from '@site/static/img/fitness.svg';
import TravelSvg from '@site/static/img/travel.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Coding',
    Svg: CodeSvg,
    description: (
      <>

        Currently learning massive parallel programming 🧵
      </>
    ),
  },
  {
    title: 'Fitness',
    Svg: FitnessSvg,
    description: (
      <>
        strength training && soccer ⚽️
      </>
    ),
  },
  {
    title: 'Traveling',
    Svg: TravelSvg,
    description: (
      <>
        <a href="/blog/china-adventures">
          🇨🇳<span className="sr-only">China</span>
        </a>{' '}
        <a href="/blog/usa-roadtrip">
          🇺🇸<span className="sr-only">United States</span>
        </a>{' '}
        🇳🇿<span className="sr-only">New Zealand</span>{' '}
        <a href="/blog/iceland-ring-road">
          🇮🇸<span className="sr-only">Iceland</span>
        </a>{' '}
        🇦🇹<span className="sr-only">Austria</span>{' '}
        🇭🇺<span className="sr-only">Hungary</span>{' '}
        🇸🇬<span className="sr-only">Singapore</span>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section
      className={styles.features}
      style={{
        position: 'relative',
        backgroundImage: "url('/img/lifestyle-portrait.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
