import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 nunito-sans">
        <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="" alt="logo" />
          </a>
          <div class="bg-white flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="rounded-[50px] before:ease relative px-4 py-2 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
            >
              Contact Us
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
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
          </div>
          <div
            class="bg-white items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-sm"
            id="navbar-sticky"
          >
            <ul class="text-gray-500 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center">
                  BLOG
                </a>
              </li>
              <li>
                <a class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center">
                  PODCASTS
                </a>
              </li>
              <li>
                <a class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center">
                  STARTER STORIES
                </a>
              </li>
              <li>
                <a class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center">
                  TESTOMONIAL
                </a>
              </li>
              <li>
                <a class="cursor-pointer py-2 px-3 rounded md:bg-transparent md:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#61aa68] after:w-full after:scale-x-0 after:hover:scale-x-100 hover:text-black after:transition after:duration-300 after:origin-center">
                  ABOUT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
