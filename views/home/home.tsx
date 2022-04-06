import { Card, CardsContainer } from "~/components/card";
import { Layout } from "~/components/layout";

export function Home() {
  return (
    <Layout
      headerDescription="These are my practices from the course"
      headerTitle="CSS for JS developers"
      pageTitle="Home // CSS for JS developers"
    >
      <CardsContainer>
        <Card title="Fundamentals Recap">asd</Card>

        <Card title="Fundamentals Recap">asd</Card>

        <Card title="Fundamentals Recap">asd</Card>

        <Card title="Fundamentals Recap">asd</Card>
      </CardsContainer>
    </Layout>
  );
}
