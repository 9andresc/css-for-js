import { Card, CardsContainer } from "~/components/card";
import { Layout } from "~/components/layout";
import { Link } from "~/components/link";

export function Home() {
  return (
    <Layout
      headerDescription="These are my practices from the course"
      headerTitle="CSS for JS developers"
      pageTitle="Home // CSS for JS developers"
    >
      <CardsContainer>
        <Card title="Fundamentals Recap">
          <Link href="/exercises/fundamentals-recap/selectors" label="Selectors Exercise" />
        </Card>
      </CardsContainer>
    </Layout>
  );
}
