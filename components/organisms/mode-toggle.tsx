"use client";

import * as React from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-lg ">
          <SunIcon className="h-[1.0rem] w-[1.0rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.0rem] w-[1.0rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex items-center gap-2 dark:hover:bg-[#161618] hover:bg-gray-100 cursor-pointer relative "
          onClick={() => setTheme("light")}
        >
          <SunIcon />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 dark:hover:bg-[#161618] hover:bg-gray-100 cursor-pointer  "
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 dark:hover:bg-[#161618] hover:bg-gray-100 cursor-pointer  "
          onClick={() => setTheme("system")}
        >
          <DesktopIcon />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
