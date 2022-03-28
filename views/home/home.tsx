import Head from "next/head";

import Header from "~/components/header"

function Home() {
  return (
    <>
      <Head>
        <title>Home // CSS for JS developers</title>
        <link href="/favicon.png" rel="shortcut icon" type="image/png" />
      </Head>

      <Header>Header</Header>
    </>
  );
}

export default Home;
