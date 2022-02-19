import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>CUET CONNECT💐</title>
        <meta
          name="description"
          content="Connecting CUETians with each other through events, workshops, and competitions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Some common questions about CUETConnect💐
      </SectionTitle>
      <Faq />
      <Footer />
    </>
  );
}
