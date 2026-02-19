import Image from "next/image";
import sectionBG from "@/public/Images/section-bg.webp";

const HistoryData = [
  {
    id: 1,
    date: "2005",
    title: "Launch Corebridge 1.0",
    description:
      "Corebridge was established with a clear mission: to simplify complex financial strategies and empower businesses of all sizes with smarter financial solutions.",
  },
  {
    id: 2,
    date: "2012",
    title: "AWARDED FOR EXCELLENCE",
    description:
      "Corebridge was recognized by a leading industry association for excellence in corporate financial strategy, validating our commitment to ethical guidance and measurable results.",
  },
  {
    id: 3,
    date: "2016",
    title: "REGIONAL OFFICE OPENED",
    description:
      "To better serve clients outside the founding city, Xelo opened its first regional office, extending its reach and strengthening client relationships across the region.",
  },
  {
    id: 4,
    date: "2026",
    title: "CELEBRATING 20 YEARS",
    description:
      "Corebridge 20th anniversary marked the launch of a bold new vision: empowering clients with financial strategies built for sustainability, resilience, and growth.",
  },
];
const History = () => {
  return (
    <>
      <section
        className="px-[8%] lg:px-[16%] py-10 md:py-20 lg:py-30 relative"
        id="history"
      >
        <Image
          src={sectionBG}
          alt="sectionBG"
          className="absolute top-20 left-0 w-full h-full object-cover -z-1"
        />
        <div className="flex flex-col lg:flex-row justify-between gap-5 z-5">
          <div className="w-full lg:w-1/2 lg:sticky top-40 left-0 h-full">
            <div className="title">
              <h5 className="syne text-2xl">( OUR HISTORY )</h5>
              <h1 className="syne font-extrabold text-6xl marker:text-6xl">
                A HISTORY OF INNOVATION AND IMPACT{" "}
              </h1>
              <p className="tracking-wide text-xl text-gray-600 w-full mt-5 lg:w-[80%]">
                We’re passionate about solving problems through creative
                communications.
              </p>
              <button
                className="mt-5 border border-gray-400 px-6 py-2 text-2xl rounded-full
              hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                Explore More <i className="bi bi-arrow-right ps-2 text-2xl"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:mt-0 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {HistoryData.map((history, index) => (
                <div
                  className="history-card bg-white p-7 rounded-lg"
                  key={index}
                >
                  <div
                    className="history-box flex flex-col gap-3 bg-[#f4f3f8] p-8
                rounded-2xl"
                  >
                    <div>
                      <span className="px-4 py-2 bg-white text-xl shadow shadow-lg rounded-lg">
                        {history.date}
                      </span>
                    </div>
                    <h2 className="mt-5 text-4xl">{history.title}</h2>
                  </div>
                  <div className="px-5 pt-3">
                    <p className="text-gray-500 font-light text-lg tracking-wide">
                      {history.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
