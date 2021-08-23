import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Robin Nilsson - Software Developer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          description="Robin Nilsson -- Software Developer from Sweden. Dad and nerd. This is his personal website."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
