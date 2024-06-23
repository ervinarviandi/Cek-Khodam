"use client";
import React from "react";
import { ModeToggle } from "../organisms/mode-toggle";
import Image from "next/image";
// import Brands from "@/assets/_525b1de5-acf9-4461-b7b8-2920f23ba501.jpg";
import Brands from "@/assets/khodam.jpg";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import { PiSealWarningBold } from "react-icons/pi";
import { LiaBlogSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            width={40}
            height={40}
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

        <div className="flex items-center gap-x-3 ">
          <Dialog>
            <DialogTrigger>
              <PiSealWarningBold size={20} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                {/* <DialogTitle>
                  Terimaksih sudah mengunjugi website ini !
                </DialogTitle> */}
                <DialogDescription>
                  Jangan Lupa di share ke yang lain, agar mereka tahu sosok asli
                  didalam diri kamu ! 😉👋🤞
                </DialogDescription>
                <p className="my-5">Follow Social Media Kami :</p>
                <div className="mt-5 flex lg:justify-start justify-center items-center gap-x-2">
                  <Link href="https://github.com/ervinarviandi" target="blank">
                    <IoLogoGithub size={18} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ervinarviandi/"
                    target="blank"
                  >
                    <FaInstagram size={18} />
                  </Link>
                  <Link href="https://ceritaervin.vercel.app/" target="blank">
                    <LiaBlogSolid size={18} />
                  </Link>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
