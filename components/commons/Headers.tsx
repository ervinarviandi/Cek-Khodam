"use client";
import React from "react";
import { ModeToggle } from "../organisms/mode-toggle";
import Image from "next/image";
import Brands from "@/assets/_525b1de5-acf9-4461-b7b8-2920f23ba501.jpg";
import { useState } from "react";

const Headers = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full backdrop-blur border-b">
      <div className="lg:max-w-6xl mx-auto  flex justify-between items-center p-4">
        <div className="flex items-center gap-x-2">
          <Image
            src={Brands}
            width={30}
            height={30}
            alt="My Brands Khodam"
            className={`
              duration-700 ease-in-out group-hover:opacity-75 lg:hidden block
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
            onLoad={() => setLoading(false)}
          />

          <Image
            src={Brands}
            width={50}
            height={50}
            alt="My Brands Khodam"
            className={`
              duration-700 ease-in-out group-hover:opacity-75 lg:block hidden
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
            onLoad={() => setLoading(false)}
          />
          {/* <p className="font-bold">
            Cek <span className="p-2 rounded-lg bg-purple-500"> kodam-mu</span>
          </p> */}
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Headers;
