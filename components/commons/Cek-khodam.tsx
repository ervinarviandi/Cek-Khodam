"use client";
import { useState, useEffect } from "react";
import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { BorderBeam } from "../magicui/Border-beam";
import { name_list } from "./Khodam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CircularProgress from "@mui/material/CircularProgress";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
// import { Label } from "@/components/ui/label"

const Cekkhodam = () => {
  const [result, setResult] = useState<string>("");
  // const [result, setResult] = useState<boolean>(false);

  const handleCek = (event: any) => {
    event.preventDefault();

    if (localStorage.getItem("name_cache") === null) {
      localStorage.setItem("name_cache", JSON.stringify([]));
    }

    const search = event.target.search.value;
    if (search === "") {
      setResult("");
      return;
    }

    const nameCache = JSON.parse(localStorage.getItem("name_cache")!);
    const findNameCache = nameCache.find((i: any) => i.name === search);

    if (findNameCache !== undefined) {
      setResult(findNameCache.result);
      setIsLoading(true);

      return;
    }

    const randomIndex = Math.floor(Math.random() * 100);
    setResult(name_list[randomIndex]);
    setIsLoading(true);

    nameCache.push({
      name: search,
      result: name_list[randomIndex],
    });
    localStorage.setItem("name_cache", JSON.stringify(nameCache));
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [result]);

  const handleReset = () => {
    setResult("");
    // setTime(1500);
  };

  return (
    <HeroHighlight className="w-full lg:pt-20 pt-24 min-h-screen my-7 ">
      <div className=" lg:max-w-6xl mx-auto px-5  ">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Cek
          <Highlight className="text-black dark:text-white">
            Khodam-mu
          </Highlight>
        </motion.h1>
        <p className="text-center text-md my-5">
          Cek khodam yang ada pada diri kamu melalui nama !
        </p>
        <Card className="lg:w-[380px] md:w-[380px] w-[300px] dark:bg-[#18181b] bg-gray-300  mx-auto border-none relative overflow-hiden shrink-0 overflow-inherit color-inherit subpixel-antialiased ">
          <CardHeader>
            <CardTitle className="text-white font-bold"></CardTitle>
            <CardDescription className="text-center flex justify-center dark:text-gray-400 text-gray-600">
              Cek khodam yang ada pada diri <br /> kamu sekarang ! 😉
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCek}>
              <div className="grid w-full items-center gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    type="search"
                    name="search"
                    id="name"
                    placeholder="tuliskan nama kamu disini....."
                    className="z-20 focus:bg-green-900 bg-green-900 text-green-600 placeholder:text-green-500 focus:outline-none border-none rounded-xl  "
                  />

                  <Button className="bg-purple-700 hover:bg-purple-600 text-white w-full  flex items-center gap-x-2 rounded-xl z-20">
                    <IoSparklesSharp size={18} />
                    Cek Khodam
                  </Button>

                  <Button
                    className="py-2 px-5 w-full bg-amber-600 hover:bg-amber-500 text-[#fff] rounded-xl flex items-center gap-x-2 z-20  justify-center"
                    onClick={handleReset}
                  >
                    <HiOutlineRefresh />
                    Ulangi
                  </Button>
                </div>
              </div>
            </form>
            <div className="text-lg dark:text-white mt-6 p-4 dark:bg-zinc-800 bg-gray-200 text-black rounded-xl relative mx-auto text-center">
              <p className="text-center">
                Khodam yang ada di dalam diri Kamu adalah :{" "}
              </p>
              {isLoading ? (
                <>
                  <CircularProgress size={15} color="secondary" />{" "}
                  <p className="text-xs ">sedang mencari</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-2xl text-purple-500 my-3">
                    {result}
                  </p>
                </>
              )}
            </div>
          </CardContent>
          <BorderBeam size={60} duration={12} delay={9} />
          {/* <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
            </CardFooter> */}
        </Card>
      </div>
    </HeroHighlight>
  );
};

export default Cekkhodam;
