import { Layout } from "~/components/layout";
// import otterImage from "~/public/images/otter.jpg";

import styles from "./margin.module.css";

export function Margin() {
  return (
    <Layout
      headerDescription="Rendering Logic I - Margin"
      headerTitle="CSS for JS developers"
      pageTitle="Rendering Logic I - Margin // CSS for JS developers"
    >
      <article className={styles.article}>
        <div className={styles.card}>
          <h1 className={styles.heading}>An Otter Essay</h1>
          <p>
            Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the
            powerful webbed feet used to swim, and their seal-like abilities holding breath underwater.
          </p>
        </div>
      </article>

      <article className={styles.article}>
        <div className={styles.card}>
          <p className={styles.paragraph}>
            Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the
            powerful webbed feet used to swim, and their seal-like abilities holding breath underwater.
          </p>
          <div className={styles.imageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="A cute otter in water" className={styles.image} src="/images/otter.jpg" />
          </div>
          <p className={styles.paragraph}>
            More importantly, otters are glorious water dogs, playful and curious. The otter, no other, is the best
            animal.
          </p>
        </div>
      </article>
    </Layout>
  );
}
