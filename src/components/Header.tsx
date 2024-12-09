import React from "react";
import { PopziLogo } from "@/components/PopziLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <PopziLogo className="z-10 h-full cursor-pointer text-sky-800" />
    </header>
  );
}
