import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DonationFaq from "../components/donation-faq";

export default function Home() {
  return (
    <>
      <Head>
        <title> Donate 🏃🏽| CUET CONNECT</title>

        <meta
          name="description"
          content="Donate to keep running all these websites!. "
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

      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Donation Page
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Support us by donating to CUET CONNECT💐 It tooks us a lot of time to
          develop this website.
        </p>
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Frequently Asked Questions about Donation
        </h1>
        <DonationFaq />
      </div>

      <div>
        <h4 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Donate via MFS 🇧🇩(Mobile Financial Services)
        </h4>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 item mx-auto container px-6 py-10">
          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class=" w-100% h-100% md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/img/bkash.jpg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">bKash</h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Scan the QR to Donate!
                </p>

                <div class="alert shadow-lg alert-info">
                  <span>01820253834</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class=" w-100% h-100% md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/img/rocket.jpg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Rocket</h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Scan the QR to Donate!
                </p>
                <div class="alert shadow-lg alert-info">
                  <span>01820253834</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class=" w-100% h-100% md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="/img/Nagad-Vertical-Logo.svg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Nagad</h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Donate to this Nagad Number!
                </p>
                <div class="alert shadow-lg alert-info">
                  <span>01820253834</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Donate via Bank Account 🏦
        </h4>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 item mx-auto container px-6 py-10">
          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Islami Bank Bangladesh Limited 🇧🇩
                </h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Branch Name: Burichang SME Branch
                  <br></br>
                  Bank address: Burichang Bazar, Comilla 3520
                  <br></br>SWIFT Code: IBBLBDDH
                  <br></br> Routing: 125190824<br></br>Account type: SAVINGS{" "}
                  <br></br>Beneficiary name: MD ABU SAYED
                </p>

                <div class="alert shadow-lg alert-info">
                  <p>Account Number:</p>
                  <span> 20500236700086018 </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Dutch-Bangla Bank Limited 🇧🇩
                </h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Branch Name: Jhawtala SME Branch
                  <br></br>
                  Bank address: Holding 1040/2, Jhawtala, Comilla
                  <br></br>SWIFT Code: DBBLBDDH
                  <br></br> Routing: 090191161<br></br>Account type: SAVINGS{" "}
                  <br></br>Beneficiary name: MD ABU SAYED
                </p>

                <div class="alert shadow-lg alert-info">
                  <p>Account Number:</p>
                  <span>1941050021918</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  First Century Bank(🇺🇸 USD only)
                </h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Bank address: 1731 N Elm St Commerce, GA 30529 USA
                  <br></br> Routing (ABA): 061120084<br></br>Account type:
                  CHECKING <br></br>Beneficiary name: MD ABU SAYED
                </p>

                <div class="alert shadow-lg alert-info">
                  <p>Account Number:</p>
                  <span>4026766770729 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Barclays(🇬🇧 GBP only)
                </h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Sort Code: 231486 <br></br>Beneficiary name: MD ABU SAYED
                </p>

                <div class="alert shadow-lg alert-info">
                  <p>Account Number:</p>
                  <span>11664764 </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Citibank(🇪🇺 EUR only)
                </h5>
                <p class="text-gray-700 text-base mb-4 items-center">
                  Bank address: 1 North Wall Quay, International Financial
                  Services Centre (IFSC), Dublin 1, Ireland
                  <br></br> IBAN: IE85CITI99005170590006<br></br>BIC: CITIIE2X{" "}
                  <br></br>Beneficiary name: MD ABU SAYED
                </p>

                <div class="alert shadow-lg alert-info">
                  <p>Account Number:</p>
                  <span>4026766770729 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items justify-center">
          <a href="https://www.buymeacoffee.com/abusayed" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
              alt="Buy Me A Coffee"
              height="41"
              width="174"
            />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
