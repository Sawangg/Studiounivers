"use client";

import { useEffect } from "react";
import { Button as RAButton } from "react-aria-components";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export type DarkModeToggleProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const DarkModeToggle: React.FC<DarkModeToggleProps> = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handlePress = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <RAButton
      className="size-5 rounded-full focus:outline-none data-[focused]:outline data-[focused]:outline-2 data-[focused]:outline-blue-500"
      onPress={() => handlePress()}
    >
      <MoonIcon className="block text-zinc-400 dark:hidden" />
      <SunIcon className="hidden text-white dark:block" />
    </RAButton>
  );
};
