import { Layout } from "~/components/layout";

import styles from "./selectors.module.css";

export function Selectors() {
  return (
    <Layout
      headerDescription="Fundamentals Recap - Selectors"
      headerTitle="CSS for JS developers"
      pageTitle="Fundamentals Recap - Selectors // CSS for JS developers"
    >
      <article className={styles.article}>
        <h2 className={styles.h2}>Chicken Vindaloo</h2>
        <p className={styles.p}>
          “Vindaloo” is a popular Indian{" "}
          <a className={styles.a} href="">
            curry dish
          </a>{" "}
          that calls for meat to be marinated in a highly flavorful spicy mixture with vinegar, then quickly cooked up
          when you&apos;re ready to eat.
        </p>
        <p className={styles.p}>
          While this dish has a long list of spices, most are quite common in the average spice rack. If you find
          you&apos;re missing one, it&apos;s not a deal breaker. You will still have a lovely, fragrant curry.
        </p>
        <aside className={styles.aside}>
          <p className={styles.p}>
            Quick warning:{" "}
            <strong>
              this recipe is <em>spicy</em>
            </strong>
            .{" "}
            <a className={styles.a} href="">
              Click here
            </a>{" "}
            for an alternative recipe with less heat.
          </p>
        </aside>
      </article>
    </Layout>
  );
}
