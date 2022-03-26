import React from "react";

export default function Emergency() {
  return (
    <section class="bg-white dark:bg-trueGray-900">
      <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 align-content: center place-items-center">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            SOS: CUETConnect gathered all necessary resources to help you when you stack in an unavoidable situation. We are here to help you. If you are in an emergency, please call 999. Otherwise get help from our emergency resources.
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
    </section>
  );
}
