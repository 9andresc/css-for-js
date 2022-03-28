import Head from "next/head";

import Header from "~/components/header";
import Heading from "~/components/heading";
import Text from "~/components/text";

function Home() {
  return (
    <>
      <Head>
        <title>Home // CSS for JS developers</title>
      </Head>

      <Header>
        <Heading mb="s">CSS for JS developers</Heading>

        <Text>Some text blablabla</Text>
      </Header>
    </>
  );
}

export default Home;
