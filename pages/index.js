import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Sites from "../components/sites";
import StudentOrg from "../components/studentorg";
import Emergency from "../components/emergency";

export default function Home() {
  return (
    <>
      <Head>
        <title>CUET CONNECT | Center of excelence</title>

        <meta
          name="description"
          content="A non-profit non-political virtual organization to represent CUET on the internet. "
        />

        <meta itemprop="name" content="CUET CONNECT | Center of excelence" />
        <meta itemprop="og:image" content="/img/cuet-og.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="CUET CONNECT | Center of excelence"
        />
        <meta name="twitter:site" content="@abusayed0206" />
        <meta name="twitter:creator" content="@abusayed0206" />
        <meta name="twitter:image:src" content="/img/cuet-og.png" />

        <meta name="og:title" content="CUET CONNECT | Center of excelence" />
        <meta name="og:image" content="/img/cuet-og.png" />

        <meta
          property="og:image:secure_url"
          content="https://cuetconnect.org/img/cuet-og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="explicitly provided" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="og:url" content="https://cuetconnect.org/" />
        <meta name="og:site_name" content="CUET CONNECT-Center of Excelence" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="CUET CONNECT" title="CUETCONNECT.ORG">
        How CUET Connect is helping CUETians/non-CUETians!
      </SectionTitle>
      <Sites />

      <SectionTitle
        pretitle="Center of Excelence"
        title="Student Organizations"
      >
        A summery of all the student organizations in CUET.
      </SectionTitle>
      <StudentOrg />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Some common questions about CUETConnect💐
      </SectionTitle>
      <Faq />
      <SectionTitle pretitle="SOS" title="Emergency Information">
        All emergency information. SOS: CUETConnect gathered all necessary resources to help you when you stack in an unavoidable situation. We are here to help you. If you are in an emergency, please call 999. Otherwise get help from our emergency resources.
      </SectionTitle>
      <Emergency />
      <Footer />
    </>
  );
}
