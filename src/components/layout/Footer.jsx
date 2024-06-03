import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="px-3 xl:px-0 py-3  w-full max-w-screen-xl mx-auto">
      <div className="w-full flex-col md:flex-row flex items-start justify-between gap-10">
        <div className="w-full md:w-auto flex items-center justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 text-[#480ca8] flex-shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"
            />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75"
              clip-rule="evenodd"
              opacity="0.5"
            />
            <path
              fill="currentColor"
              d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"
            />
            <path
              fill="currentColor"
              d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"
              opacity="0.7"
            />
          </svg>
          <div className="">
            <p className="text-sm font-bold tracking-wider text-gray-800">
              StreetStyles
            </p>
            <p className="text-xs text-gray-600">Your shopping made easy!.</p>
          </div>
        </div>

        <div className="w-full md:w-auto flex items-end md:justify-end gap-3">
          <div className="w-full md:w-auto">
            <label
              className="text-sm font-medium text-gray-800"
              htmlFor="email"
            >
              Stay up to date
            </label>
            <Input id="email" className="mt-2" placeholder="Enter your email" />
          </div>

          <Button className="bg-[#3a0ca3] text-white hover:bg-[#3F37C9]">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="mt-7 md:flex items-center justify-start gap-8 hidden">
        <Link href="#">
          <p className="text-sm text-gray-700 hover:text-gray-800 hover:underline">
            Home
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-gray-700 hover:text-gray-800 hover:underline">
            Products
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-gray-700 hover:text-gray-800 hover:underline">
            Resources
          </p>
        </Link>
        <Link href="#">
          <p className="text-sm text-gray-700 hover:text-gray-800 hover:underline">
            Contact Us
          </p>
        </Link>
      </div>

      <hr className="border-t w-full mt-10" />
      <div className="mt-5 pb-5 w-full flex items-center justify-between gap-10">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} StreetStyles, All rights reserved.
        </p>

        <div className="md:flex items-center justify-start gap-8 hidden">
          <Link href="#">
            <p className="text-xs text-gray-500 hover:text-gray-600 hover:underline">
              Terms
            </p>
          </Link>
          <Link href="#">
            <p className="text-xs text-gray-500 hover:text-gray-600 hover:underline">
              Privacy
            </p>
          </Link>
          <Link href="#">
            <p className="text-xs text-gray-500 hover:text-gray-600 hover:underline">
              Cookies
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
