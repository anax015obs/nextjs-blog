//  global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
import "../styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
