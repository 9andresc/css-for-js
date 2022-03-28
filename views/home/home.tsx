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
        <Heading.h1 mb="m">CSS for JS developers</Heading.h1>

        <Text.p>Some text blablabla</Text.p>
      </Header>
    </>
  );
}

export default Home;
