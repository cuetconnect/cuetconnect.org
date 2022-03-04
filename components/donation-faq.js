import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function DonationFaq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Why I need to donate?",
    answer:
      "To pay domain renewal fee, hosting fee(most systems ar free though), and other expenses. We need to pay for the domain to keep the website up and running. We also need to pay for hosting to keep the website up and running. We also need to pay for other expenses like domain renewal fee, hosting fee, etc.",
  },
  {
    question: "How much do you need to pay yearly?",
    answer:
      "Currently, we bought a domain name only which costs $10/year. We are planning to buy a VPS from next year Also, for Shoppingsite we need hosting which is not free! It costs 25$/year. Also planing to buy SMS plan for notify buyers on shopping site! It costs $2/month.",
  },
  {
    question: "Where the other donation will go?",
    answer:
      "You know, building website is easy but maintaining 5 sites with updated info is not easy! Also, I am a full time student at CUET! So, extra donation will help me to keep all of these sites with updated info, also encourage me to works on these sites! ",
  },
  {
    question: "How can I contact with you? ",
    answer:
      "Either You can email me at hi@abusayed.dev or catch me on twitter @abusayed0206",
  },
];
