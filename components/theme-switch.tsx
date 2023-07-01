"use client";

import { classNames } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch = ({
  classNamePosition = "top-4 left-4",
}: {
  classNamePosition?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classNames(" fixed h-100 w-100 p", classNamePosition)}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
