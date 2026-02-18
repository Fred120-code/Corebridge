import Image from "next/image";
import ServiceIcon1 from "@/public/Images/service-icon1.svg";
import ServiceIcon2 from "@/public/Images/service-icon2.svg";
import ServiceIcon3 from "@/public/Images/service-icon3.svg";
import ServiceIcon4 from "@/public/Images/service-icon4.svg";
import ServiceIcon5 from "@/public/Images/service-icon5.svg";
import ServiceIcon6 from "@/public/Images/service-icon6.svg";

const ServiceData = [
  {
    id: 1,
    img: ServiceIcon1,
    title: "Social Influence Tactics",
    description:
      "We identify influential voices that connect authentically with your audience and strengthen brand credibility.",
  },
  {
    id: 2,
    img: ServiceIcon2,
    title: "Targeted Social Advertising",
    description:
      "Strategic social ads designed to reach ideal customers, maximize engagement, and improve measurable conversions.",
  },
  {
    id: 3,
    img: ServiceIcon3,
    title: "Paid Media Strategy",
    description:
      "Data-driven paid media strategies focused on boosting visibility, traffic, and consistent campaign performance.",
  },
  {
    id: 4,
    img: ServiceIcon4,
    title: "More Click Rise Media",
    description:
      "Optimized media campaigns built to increase clicks, grow reach, and deliver meaningful audience interactions.",
  },
  {
    id: 5,
    img: ServiceIcon5,
    title: "Social Media Strategy",
    description:
      "Customized social strategies that build trust, grow communities, and encourage long-term customer engagement.",
  },
  {
    id: 6,
    img: ServiceIcon6,
    title: "Social Impact Studio",
    description:
      "Creative solutions that align brand values with impactful storytelling across multiple social platforms.",
  },
];

const Services = () => {
  return (
    <>
      <section
        className="px-[8%] lg:px-[16%] py-20 pt-40 lg:pt-30"
        id="services"
      >
        <div className="title text-center mb-20">
          <h5 className="syne text-2xl">( POTENTIAL SERVICES )</h5>
          <h1 className="syne font-extrabold text-4xl marker:text-6xl">
            OUR BEST SERVICE
          </h1>
        </div>

        <div className="grid services-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ServiceData.map((service, index) => (
              <div
                key={index}
                className="service-card flex items-center bg-white/50 p-4 border border-white
                      shadow-lg shadow-gray-200 flex-col rounded-lg "
              >
                <div
                  className="bg-white flex flex-col items-center shadow-lg 
                      shadow-gray-300 rounded-2xl p-5"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={50}
                    height={60}
                  />

                  <h1
                    className="syne text-2xl hover:text-(--prim) cursor-pointer 
                  transition-all duration-300 font-semibold my-5"
                  >
                    {service.title}
                  </h1>

                  <p className="text-center tracking-wider">
                    {service.description}
                  </p>

                  <button
                    className="serivce-btn bg-black text-white px-5 py-2 rounded-lg
                  mt-5 border border-black transition-all duration-300 cursor-pointer"
                  >
                    <div className="service-btn-text">
                      Read More <i className="bi bi-arrow-right ps-2"></i>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
