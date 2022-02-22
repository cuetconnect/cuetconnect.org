import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Alumni from "../components/alumni/page-1";

export default function AlumniPage() {
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

      <Alumni />

      <Footer />
    </>
  );
}
