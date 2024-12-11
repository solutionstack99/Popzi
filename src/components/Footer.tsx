import React from "react";
import { PopziLogo } from "./PopziLogo";
import CircleText from "./CircleText";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-bg-[#D4E4BC] text-[#075985]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <PopziLogo />
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
}
