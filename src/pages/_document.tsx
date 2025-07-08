import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./navbar"
import  Footer from "./footer"


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
