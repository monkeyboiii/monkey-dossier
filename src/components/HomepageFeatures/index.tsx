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
        I love building projects, exploring new technologies, and solving problems with code.
      </>
    ),
  },
  {
    title: 'Fitness',
    Svg: FitnessSvg,
    description: (
      <>
        Staying active through workouts and outdoor adventures has always been my passion.
      </>
    ),
  },
  {
    title: 'Traveling',
    Svg: TravelSvg,
    description: (
      <>
        I enjoy discovering new places, cultures, and creating lasting memories on the road.
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
        backgroundImage: "url('/img/lifestyle.jpg')",
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
