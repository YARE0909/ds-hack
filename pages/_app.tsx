import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import Layout from "../components/layout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Head>
        <title>OmniCare</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </MantineProvider>
  );
}
