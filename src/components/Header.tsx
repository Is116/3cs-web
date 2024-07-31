/* eslint-disable @typescript-eslint/no-explicit-any */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useEffect, useState } from "react";

const navigationLinks = [
  { url: "#Home", title: "Home" },
  { url: "#AboutUs", title: "About Us" },
  { url: "#Services", title: "Services" },
  { url: "#Contact", title: "Let's Talk" },
];

export default function Header() {
  const [isHideOnMobileVisible, setIsHideOnMobileVisible] = useState(false);
  const toggleHideOnMobile = () => {
    setIsHideOnMobileVisible(!isHideOnMobileVisible);
  };

  useEffect(() => {
    const handleScrollToElement = (
      e: MouseEvent<HTMLAnchorElement>,
      id: string
    ) => {
      e.preventDefault();
      const targetElement = document.querySelector(`#${id}`);
      if (targetElement instanceof Element) {
        const topOffset = (targetElement as HTMLElement).offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    };

    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e: any) => {
        e.preventDefault();
        const targetId = (link as HTMLAnchorElement)
          .getAttribute("href")
          ?.substring(1);
        if (targetId) {
          handleScrollToElement(e, targetId);
        }
      });
    });
  }, []);

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50  bg-white bg-opacity-10 backdrop-blur-md m-5 shadow-2xl mx-12  ${
        isHideOnMobileVisible ? "rounded-lg" : "rounded-full"
      } bg-opacity-20`}
      id="header"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-2">
        <div className="flex items-center justify-center m-2 ml-6">
          <a href="./" className="text-lg font-bold mr-4 text-white">CS3</a>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div
            className={`sm:flex flex flex-wrap items-center justify-center ${
              isHideOnMobileVisible ? "block" : "hidden"
            }`}
          >
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                className={`m-1 py-2 text-sm font-semibold rounded-lg text-center text-white hover:text-gray-200 scroll-link`}
                style={{ width: isHideOnMobileVisible ? "150px" : "110px" }}
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="relative md:hidden block">
            <div
              className={`absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white w-16 h-4 rounded-full flex md:hidden items-center justify-center  ${
                isHideOnMobileVisible ? "rotate-up" : "rotate-down"
              }`}
              onClick={toggleHideOnMobile}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                height={10}
                width={10}
                className="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
