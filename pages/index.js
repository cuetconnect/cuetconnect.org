import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

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
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}
