import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

export default function Contact() {
  return (
    <>
      <Head>
        <title> Contact| CUET CONNECT</title>

        <meta
          name="description"
          content="For any types of queries you can contact us by this page."
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

      <div class="container mx-auto px-0 py-2">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="max-w-screen-xl px-3 mx-auto md:px-8">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                General Enquiry
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                For Genral Enquiry, Please contact us at: hi@cuetconnect.org
              </p>
              <p className="text-center">
                <a
                  href="mailto:hi@cuetconnect.org"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mail
                </a>
              </p>
            </div>
          </div>
          <div class="max-w-screen-xl px-3 mx-auto md:px-8">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Website Security
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                For contacting related to website security email us at
                admin@cuetconnect.org
              </p>
              <p className="text-center">
                <a
                  href="mailto:admin@cuetconnect.org"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mail(Admin)
                </a>
              </p>
            </div>
          </div>
          <div class="max-w-screen-xl px-3 mx-auto md:px-8">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Legal(Press/Law Enforcement)
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                For Legal contact, Please contact us at: legal@cuetconnect.org
              </p>
              <p className="text-center">
                <a
                  href="mailto:legal@cuetconnect.org"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Mail(Legal)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <PopupWidget />
    </>
  );
}
