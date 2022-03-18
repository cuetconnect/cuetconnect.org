import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Sites from "../components/sites";
import StudentOrg from "../components/studentorg";


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
      <SectionTitle pretitle="CUET CONNECT" title="CUETCONNECT.ORG">
        How CUET Connect is helping CUETians/non-CUETians!
      </SectionTitle>
      <Sites/>

      <SectionTitle pretitle="Center of Excelence" title="Student Organizations">
        A summery of all the student organizations in CUET.
      </SectionTitle>
      <StudentOrg/>
    
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Some common questions about CUETConnect💐
      </SectionTitle>
      <Faq />
      <Footer />
    </>
  );
}
