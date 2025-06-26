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
        strength training && soccer{' '}
        <a href="/lifestyle/">
          ⚽️<span className="sr-only">lifestyle hidden link</span>
        </a>
      </>
    ),
  },
  {
    title: 'Traveling',
    Svg: TravelSvg,
    description: (
      <>
        🇨🇳<span className="sr-only">China</span>{' '}
        🇹🇼<span className="sr-only">Hong Kong</span>{' '}
        🇲🇴<span className="sr-only">Macao</span>{' '}
        🇭🇰<span className="sr-only">Taiwan</span>{' '}

        <br></br>

        <a href="/lifestyle/us-trip-west">
          🇺🇸<span className="sr-only">United States</span>
        </a>{' '}

        🇦🇹<span className="sr-only">Austria</span>{' '}
        🇭🇺<span className="sr-only">Hungary</span>{' '}

        🇳🇿<span className="sr-only">New Zealand</span>{' '}

        🇩🇰<span className="sr-only">Denmark</span>{' '}
        🇮🇸<span className="sr-only">Iceland</span>{' '}

        🇮🇱<span className="sr-only">Israel</span>{' '}
        🇯🇴<span className="sr-only">Jordan</span>{' '}
        🇷🇺<span className="sr-only">Russia</span>{' '}

        🇸🇬<span className="sr-only">Singapore</span>{' '}
        🇰🇭<span className="sr-only">Cambodia</span>{' '}
        🇹🇭<span className="sr-only">Thailand</span>{' '}
        🇵🇭<span className="sr-only">Philippine</span>{' '}
        🇲🇾<span className="sr-only">Malaysia</span>{' '}
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
