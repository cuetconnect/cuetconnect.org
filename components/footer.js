import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/">
                <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <img
                      src="/img/cuet.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  </span>
                  <span>CONNECT💐</span>
                </a>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              CUET CONNECT💐 is a platform for connecting students, alumni and
              teachers with each other.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <div className="w-full lg:w-1/2">
                <ul class="list-disc">
                  <li>
                    <Link href="/donate">
                      <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        Donate
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/cuetconnect/cuetconnect.org">
                      <a
                        className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                        target="_blank"
                      >
                        Contribute(Source)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://status.cuetconnect.org">
                      <a
                        className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                        target="_blank"
                      >
                        Status
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <ul class="list-disc">
                <li>
                  <Link href="/legal">
                    <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                      Legal
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/tos">
                    <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                      Term & Conditions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div>Social</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://facebook.com/cuetconnect"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
            Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
            <a href="https://abusayed.dev/">SAYED</a>
          </div>

          <div className="flex h-24 w-full items-center justify-center border-t">
            <a href="https://vercel.com/?utm_source=cuetconnect&utm_campaign=oss">
              <img src="/img/powered-by-vercel.svg"></img>
            </a>
          </div>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Backlink = () => {
  return <div></div>;
};
