import React from "react";
import "./Hero.css";

import Logo from "../../assets/Hero/logo.png";

const Hero = () => {
  //   const containerStyle = {
  //     BackgroundImage,
  //     backgroundSize: "cover",
  //     // Add more styles if needed
  //   };
  return (
    <>
      <nav class=" border-gray-200 bg-black  pt-6">
        <div class="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class=" text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black">
              <li>
                <a
                  href="#about"
                  class="block my-1 py-2 pl-3 pr-4 text-white  bg-gray-900 rounded md:bg-transparent  md:p-0 hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  class="block py-2 pl-3 pr-4 text-white my-1 bg-gray-900 rounded md:bg-transparent  md:p-0 hover:text-gray-300"
                >
                  Rules
                </a>
              </li>
              <li>
                <a
                  href="#objectives"
                  class="block py-2 pl-3 pr-4 text-white  my-1 bg-gray-900 rounded md:bg-transparent  md:p-0 hover:text-gray-300"
                >
                  Objectives
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  class="block py-2 pl-3 pr-4 text-white my-1 bg-gray-900 rounded md:bg-transparent  md:p-0 hover:text-gray-300"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block py-2 pl-3 pr-4 text-white my-1 bg-gray-900 rounded md:bg-transparent  md:p-0 hover:text-gray-300"
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        class=" overflow-hidden  h-[90vh] flex items-center justify-center background-image  "
        // style={containerStyle}
      >
        <div className=" flex flex-col  items-center md:items-start container md:px-28 h-[90vh] gap-20">
          <img
            className="w-[22rem]  md:w-[20rem]  relative  bottom-2"
            src={Logo}
          />
          <div className="flex flex-col">
            <h2 class="text-4xl font-extrabold text-white">Event on :</h2>

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                16th SEPTEMBER’ 23
              </span>
            </h1>
          </div>
        </div>

        {/* <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
