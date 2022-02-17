import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
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
    question: "Who are you?",
    answer:
      "We are some passonate students who love to think outside the box. From this POV, we are trying to build up a civilized CUET community!",
  },
  {
    question: "What are the funding source?",
    answer:
      "Currently, we bought a domain name only which costs $10/year. We are planning to buy a VPS from next year",
  },
  {
    question: "What you are actually building? ",
    answer:
      "We are building a platform for students to connect with each other. We are also trying to build a platform for students to share their knowledge and experience with others. Forum site, Alumni Lists, Students List, Course Materials, etc.",
  },
  {
    question: "How can I contact with you? ",
    answer:
      "Either You can email us at hi@cuetconnect.org or click on floating meassgae button on right-botton side of this page or you can contact us on our social media platforms. We are also open to any suggestions and feedbacks.",
  },
];
