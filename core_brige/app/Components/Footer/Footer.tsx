import Link from "next/link";
import React from "react";

interface LinkItem {
  id: number;
  title: string;
  href: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: LinkItem[];
}

const FOOTER_LINKS_DATA: FooterSection[] = [
  {
    id: 1,
    title: "Useful links",
    links: [
      { id: 1, title: "About", href: "#about" },
      { id: 2, title: "Services", href: "#services" },
      { id: 3, title: "Pricing", href: "#pricing" },
      { id: 4, title: "Blogs", href: "#blogs" },
      { id: 5, title: "Faq's", href: "#faqs" },
    ],
  },
  {
    id: 2,
    title: "Our Company",
    links: [
      { id: 1, title: "Our Story", href: "/" },
      { id: 2, title: "News Article", href: "/" },
      { id: 3, title: "Terms of Services", href: "/" },
      { id: 4, title: "Case Study", href: "/" },
      { id: 5, title: "Privacy Policy", href: "/" },
    ],
  },
  {
    id: 3,
    title: "Follow Us",
    links: [
      { id: 1, title: "Facebook", href: "/" },
      { id: 2, title: "Twitter", href: "/" },
      { id: 3, title: "Dribble", href: "/" },
      { id: 4, title: "Instagram", href: "/" },
      { id: 5, title: "Pinterest", href: "/" },
    ],
  },
];

const FOOTER_BOTTOM_LINKS: LinkItem[] = [
  { id: 1, title: "TERMS & CONDITIONS", href: "/" },
  { id: 2, title: "PRIVACY POLICY", href: "/" },
  { id: 3, title: "SECURITY", href: "/" },
];

const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 lg:py-28 relative">
        <div className="footer-shape"></div>
        <div className="footer-shape2"></div>

        <footer>
          <div className="footer-grid">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                gap-10 lg:gap-5"
            >
              {FOOTER_LINKS_DATA.map((section) => (
                <div key={section.id} className="footer-col">
                  <h2 className="text-3xl tracking-wide mb-5">
                    {section.title}
                  </h2>

                  <div className=" flex flex-col gap-2">
                    {section.links.map((item) => (
                      <Link
                        href={item.href}
                        key={item.id}
                        className="text-xl text-gray-800 hover:text-(--prim) hover:ps-1
                    transition-all duration-200"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="footer-col">
                <h2 className="text-3xl tracking-wide mb-5">Contact Info</h2>

                <p className="text-xl tracking-wide text-gray-800 font-light">
                  Royal Ln. Mesa, New Jersey 454 New York, USA
                </p>

                <h2 className="text-3xl my-2 text-gray-800">
                  Example@support.com
                </h2>
                <h5
                  className="text-xl tracking-wide text-gray-800 cursor-pointer hover:text-(--prim)
                 transition-all duration-200"
                >
                  (+91) 234 567 890
                </h5>
              </div>
            </div>
          </div>

          <div className="footer-bottom pt-20">
            <div
              className="flex flex-wrap justify-center lg:justify-between items-center 
            text-center gap-3 border-t border-gray-300 pt-10"
            >
              <p>
                © Copyright 2026. All Rights Reserved by{" "}
                <Link href="/" className="font-semibold text-black">
                  Joran Fred
                </Link>{" "}
              </p>
              <div className=" flex flex-wrap justify-center items-center gap-3 lg:gap-8">
                {FOOTER_BOTTOM_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className=" text-xl text-gray-800 hover:text-(--prim) hover:-translate-y-1 transition-all duration-200"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
