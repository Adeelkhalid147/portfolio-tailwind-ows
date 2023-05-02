"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import OurMission from "./component/OurMission";
import Blog from "./component/Blog";
import ThreComp from "./component/ThreComp";
import Feature from "./component/Feature";
import MostRecent from "./component/MostRecent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <OurMission /> */}
      <Blog/>
      <ThreComp/>
      <Feature/>
      <MostRecent/>
    </>
  );
}
