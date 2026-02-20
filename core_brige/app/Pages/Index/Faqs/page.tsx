"use client";

import { useState } from "react";

const GeneralFaqsData = [
  {
    id: 1,
    question: " Why does the pricing look different?",
    answer:
      "We believe that meaningful change starts with purpose-driven people. That’s why we’re honored to support registered nonprofits with special discounted rates",
  },
  {
    id: 2,
    question: " I am a nonprofit. Do you offer any discounts?",
    answer:
      "At Corebridge, we’re proud to support mission-driven organizations. We offer exclusive discounted rates for registered nonprofits as part of our commitment to helping impactful causes grow.",
  },
  {
    id: 3,
    question: " What payment methods do you support?",
    answer:
      "Our goal is to make professional tools accessible to organizations that drive positive social impact. We proudly offer special discounted rates to registered nonprofits",
  },
  {
    id: 4,
    question: " Can I upgrade to a different plan at a later time?",
    answer:
      "Doing good should never come with limits. That’s why Corebridge partners with nonprofits by offering exclusive discounts—so they can focus on their mission while we help power their growth.",
  },
  {
    id: 5,
    question: " What’s the cost of additional users?",
    answer:
      "We’re inspired by organizations that dedicate themselves to making the world better. To support their missions, we provide exclusive discounted plans and services for registered nonprofits.",
  },
];

const SupportFaqsData = [
  {
    id: 1,
    question: " Why do I need professional support?",
    answer:
      "Whether you’re advancing education, protecting the environment, or empowering communities, Corebridge is here to help you grow your impact efficiently and affordably.",
  },
  {
    id: 2,
    question: " What types of businesses do you support?",
    answer:
      "This initiative is part of our ongoing commitment to helping organizations with a purpose grow sustainably, access professional tools affordably, and focus more resources on what truly matters — their mission.",
  },
  {
    id: 3,
    question: "Do I need to hire a full-time bookkeeper?",
    answer:
      "We believe that organizations making a positive difference in the world deserve extra support. That’s why our pricing may look different — registered nonprofits receive exclusive discounted rates",
  },
  {
    id: 4,
    question: " Can you help set up my accounting software?",
    answer:
      "We’re committed to helping those who help others. Our nonprofit pricing reflects our belief that impactful causes should have access to the same professional tools as large enterprises.",
  },
];

const LincenseFaqData = [
  {
    id: 1,
    question: " Do I need a license to offer services?",
    answer:
      "Our pricing may vary because we offer special rates for verified nonprofits. At Corebridge, we’re dedicated to supporting mission-driven organizations through affordable access to our tools—helping impactful",
  },
  {
    id: 2,
    question: "Can I use my CPA license across all states?",
    answer:
      "That’s why registered nonprofits enjoy exclusive discounts, flexible plans, and dedicated support—so they can focus on making the world a better place while we take care of the rest.",
  },
  {
    id: 3,
    question: "Do I need a license to prepare taxes?",
    answer:
      "That’s why registered nonprofits enjoy exclusive discounts, flexible plans, and dedicated support—so they can focus on making the world a better place while we take care of the rest.",
  },
];

const Faqs = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [activeISupportId, setActiveISupportId] = useState<number | null>(null);
  const [activeLincenseId, setActiveLincenseId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const toggleSupportFaq = (id: number) => {
    setActiveISupportId(activeISupportId === id ? null : id);
  };

  const toggleLicenseFaq = (id: number) => {
    setActiveLincenseId(activeLincenseId === id ? null : id);
  };

  return (
    <>
      <section className="px-[8%] lg:px-[16%] py-10 lg:py-30" id="faqs">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/1">
            <div className="title">
              <h5 className="syne text-2xl">( ASK AN QUESTION )</h5>
              <h1 className="syne font-extrabold text-6xl marker:text-6xl">
                Client Queries And Our Responses{" "}
              </h1>
              <p className=" tracking-wide text-xl text-gray-600 w-full mt-5">
                While WordPress themes offer customization, they often follow
                common design patterns, making it difficult to achieve true
                uniqueness. Many users rely on pre-built themes, resulting in
                websites that look similar, reducing brand differentiation.
              </p>
            </div>

            <div>
              <div className="border-b border-gray-400 my-5"></div>

              <div className="mb-20">
                <h2 className="text-3xl text-gray-700 w-full mt-5">
                  General Questions
                </h2>
                <p className=" tracking-wide text-xl text-gray-600 w-full mt-5">
                  Gain insights into WordPress themes and their role in building
                  a unique website, ensuring seamless compatibility,
                  incorporating demo content, and assisting with setup and
                  installation.
                </p>

                {/* Qusetion & Response */}
                <div>
                  {GeneralFaqsData.map((faq) => (
                    <div key={faq.id} className="mt-5">
                      <div
                        onClick={() => toggleFaq(faq.id)}
                        className="faq-question flex justify-between items-center
                            bg-white p-5 gap-3 cursor-pointer"
                      >
                        <h3 className="text-gray-700 text-xl">
                          Q &nbsp;{faq.question}
                        </h3>
                        <i
                          className={`bi ${activeId === faq.id ? "bi-dash" : "bi-plus"} text-3xl`}
                        ></i>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 
                        ease-in-out ${
                          activeId === faq.id
                            ? "max-h-40 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-2 text-gray-600 tracking-wide">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl text-gray-700 w-full mt-5">
                  Support & Updates
                </h2>
                <p className=" tracking-wide text-xl text-gray-600 w-full mt-5">
                  Check out the update and support package that comes with your
                  theme, including how long you’re supported and the types of
                  help offered
                </p>

                {/* Qusetion & Response */}
                <div>
                  {SupportFaqsData.map((faq) => (
                    <div key={faq.id} className="mt-5">
                      <div
                        onClick={() => toggleSupportFaq(faq.id)}
                        className="faq-question flex justify-between items-center
                            bg-white p-5 gap-3 cursor-pointer"
                      >
                        <h3 className="text-gray-700 text-xl">
                          Q &nbsp;{faq.question}
                        </h3>
                        <i
                          className={`bi ${activeISupportId === faq.id ? "bi-dash" : "bi-plus"} text-3xl`}
                        ></i>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 
                        ease-in-out ${
                          activeISupportId === faq.id
                            ? "max-h-40 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-2 text-gray-600 tracking-wide">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-gray-700 w-full mt-5">
                  License Usage
                </h2>
                <p className=" tracking-wide text-xl text-gray-600 w-full mt-5">
                  Explore our guidelines for using themes on client sites,
                  customizing the design and code, renewing licenses
                </p>

                {/* Qusetion & Response */}
                <div>
                  {LincenseFaqData.map((faq) => (
                    <div key={faq.id} className="mt-5">
                      <div
                        onClick={() => toggleLicenseFaq(faq.id)}
                        className="faq-question flex justify-between items-center
                            bg-white p-5 gap-3 cursor-pointer"
                      >
                        <h3 className="text-gray-700 text-xl">
                          Q &nbsp;{faq.question}
                        </h3>
                        <i
                          className={`bi ${activeLincenseId === faq.id ? "bi-dash" : "bi-plus"} text-3xl`}
                        ></i>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 
                        ease-in-out ${
                          activeLincenseId === faq.id
                            ? "max-h-40 opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 pb-2 text-gray-600 tracking-wide">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 sticky top-20 left-0 h-full">
            <div className="faq-form-wrap">
              <div
                className="bg-white/40 backdrop-blur-2xl border border-white p-5
                rounded-xl"
              >
                <div className="bg-white rounded-xl p-6">
                  <h2 className="text-3xl">Ask An Question</h2>
                  <div className="flex flex-col mt-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400
                        text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />

                    <input
                      type="text"
                      placeholder="Email-Address"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400
                        text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />

                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400
                        text-lg border border-gray-200 transition-all duration-300 mt-4"
                    />

                    <textarea
                      rows={5}
                      placeholder="Message"
                      className="w-full h-full px-4 py-2 outline-none rounded-md focus:border-gray-400
                        text-lg border border-gray-200 transition-all duration-300 mt-4"
                    ></textarea>

                    <button>
                      <div
                        className="btn faq-btn text-white text-xl px-6 py-3 rounded-md mt-5
                         transition-all duration-300 cursor-pointer"
                      >
                        <div className="btn-text">
                          Ask Questions
                          <i className="bi bi-arrow-right ps-2"></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
