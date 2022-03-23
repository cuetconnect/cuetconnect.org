import React from "react";

export default function Sites() {
  return (
    <section class="bg-white dark:bg-trueGray-900">
      <div class=" container px-0 py-2 grid mx-auto grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Forum
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              A civilized forumsite only for CUETians with valid student email!
              Where you can ask questions, share your thoughts, and get help
              from fellow CUETians.
            </p>
            <p className="text-center">
              <a
                href="https://forum.cuetconnect.org/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                Forum
              </a>
            </p>
          </div>
        </div>
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Admission
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              A site for non-CUETians who wants to explore CUET and want to get
              into CUET. Also this site help fresher to get updated info about
              CUET!
            </p>
            <p className="text-center">
              <a
                href="https://admission.cuetconnect.org/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                Admission
              </a>
            </p>
          </div>
        </div>
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Notices
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              Just a jekyll site to publish internal& external(mostly external)
              CUET notices. You can also get updates about CUET from here.
            </p>
            <p className="text-center">
              <a
                href="https://notices.cuetconnect.org/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                Notices
              </a>
            </p>
          </div>
        </div>
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Shop
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              A ecommerce site for CUETians who can buy/sell new/used product to
              other CUETians. Just you need to login with CUET email!
            </p>
            <p className="text-center">
              <a
                href="https://shop.cuetconnect.org/"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
              >
                Shop
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
