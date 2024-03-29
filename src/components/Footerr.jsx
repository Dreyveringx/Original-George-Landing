import React from "react";
import Logo from "../assets/logo.svg";

const Footerr = () => {
  return (
    <>
      <footer class="rounded-lg mt-10">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} class="h-20" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Original George
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#Beneficios" class="hover:underline me-4 md:me-6">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#socials" class="hover:underline">
                  Sígueme
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-yellow-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            2024{" "}
            <a href="/" class="hover:underline">
              Original George™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footerr;
