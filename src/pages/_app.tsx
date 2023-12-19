import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { Theme,ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <Theme appearance="dark" accentColor="brown" grayColor="slate" panelBackground="solid">
      <Head>
        
        <title>NewAru</title>
        <meta
          name="description"
          content="Aplicacion de aprenda lengua Aimara"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Theme>
    </>
      
  );
};

export default MyApp;
