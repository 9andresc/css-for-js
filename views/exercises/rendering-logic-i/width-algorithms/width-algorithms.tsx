/* eslint-disable @next/next/no-img-element */

import { Layout } from "~/components/layout";

import styles from "./width-algorithms.module.css";

export function WidthAlgorithms() {
  return (
    <Layout
      headerDescription="Rendering Logic I - Width Algorithms"
      headerTitle="CSS for JS developers"
      pageTitle="Rendering Logic I - Width Algorithms // CSS for JS developers"
    >
      <article className={styles.article}>
        <div className={styles.maxWidthWrapper}>
          <div className={styles.card}>
            <p className={styles.paragraph}>
              Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the
              powerful webbed feet used to swim, and their seal-like abilities holding breath underwater.
            </p>
          </div>
        </div>
      </article>

      <article className={styles.article} style={{ padding: "16px" }}>
        <figure className={styles.figure}>
          <img
            alt="A hallway with rainbow-coloured lighting"
            className={styles.img}
            src="/images/wall-art.jpg"
            style={{ width: "200px" }}
          />
          <figcaption className={styles.figcaption}>
            Photo by Efe Kurnaz in Camp Nou, Barcelona, Spain. Found on Unsplash.
          </figcaption>
        </figure>

        <figure className={styles.figure}>
          <img
            alt="A yawning kitten"
            src="/images/cat-avatar-250px.jpg"
            className={styles.img}
            style={{ width: "250px" }}
          />
          <figcaption className={styles.figcaption}>Unknown photographer. Found on Unsplash.</figcaption>
        </figure>
      </article>
    </Layout>
  );
}
