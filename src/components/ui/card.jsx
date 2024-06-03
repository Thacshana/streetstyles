import Image from "next/image";
import React from "react";
import { Button } from "./button";
import currencyFormatter from "@/utils/currencyFormatter";

const Card = ({
  image,
  title = "Title",
  description = "Description",
  amount = 300,
}) => {
  return (
    <div className="w-full flex flex-col rounded-xl border shadow p-1">
      <div className="relative rounded-lg min-h-60 shadow-md">
        <div className="absolute inset-0 rounded-lg bg-gray-200 animate-pulse w-full h-full z-10"></div>
        <Image
          fill
          src={image}
          className="z-20 rounded-lg  bg-cover object-cover w-full h-full"
          alt={`Image for ${title}`}
          loading="lazy"
        />
      </div>

      <div className="mt-3 px-3 flex-1">
        <h4 className="mt-2 text-sm font-medium line-clamp-2 text-gray-800">
          {title}
        </h4>

        <p className="mt-2 text-xs text-gray-600 line-clamp-3">{description}</p>
      </div>

      <div className="mt-5 px-3 pb-3 flex w-full items-end justify-between gap-5">
        <h3 className="text-xl font-semibold text-gray-800 flex-shrink-0">
          {currencyFormatter(amount)}
        </h3>
        <div className="w-full flex items-center justify-end gap-2">
          <Button className="w-full">Buy</Button>
          <Button className="w-full p-1 md:p-1 bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
              />
              <path
                fill="currentColor"
                d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362c.024.222.037.468.044.738H17.13c1.685 0 3.202 0 3.646.577c.444.577.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742c-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914c-.866-.914-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957"
                opacity="0.5"
              />
              <path
                fill="currentColor"
                d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.displayName = "Card";
export { Card };
