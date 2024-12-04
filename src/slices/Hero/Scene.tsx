"use client";

import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "@/components/FloatingCan";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

export default function Scene({}: Props) {
  return (
    <group>
      <FloatingCan />

      {/* <OrbitControls /> */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
