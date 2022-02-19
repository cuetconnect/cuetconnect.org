import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title> Contact| CUET CONNECT💐</title>
        <meta
          name="description"
          content="Connecting CUETians with each other through events, workshops, and competitions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white align-content: center">
          General Enquiry
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          For Genral Enquiry, Please contact us at: hi@cuetconnect.org
        </p>
        <a
          href="mailto:hi@cuetconnect.org"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Mail
        </a>
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}
