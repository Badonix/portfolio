import { Cursor } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
