"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/app/assets/footer.png";
import MenuDetail from "@/app/assets/menuDetail.png";
import LogoBackground from "@/app/assets/logoBackground.png";
import Bee from "@/app/assets/Bee.png";
import DetailLink from "@/app/assets/detailink.png";
import Gif from "@/app/assets/Gif.gif";
import { useEffect, useState } from "react";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Home() {
  const [isSlideInComplete, setIsSlideInComplete] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSlideInComplete(true);
      setIsContentVisible(true);
    }, 500); // Delay in milliseconds before showing the content
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-center inset-0 object-cover relative bg-no-repeat bg-cover bg-back_home">
        <Image
          src={MenuDetail}
          alt=""
          className="h-full w-screen absolute"
          style={{
            transform: isSlideInComplete
              ? "translateY(0)"
              : "translateY(-100%)",
            transition: "transform 500ms ease",
          }}
        />

        {/*NavBar*/}
        <nav className="flex items-center justify-center font-second z-30 pt-20 absolute top-0 text-center text-base md:text-lg font-bold text uppercase underline">
          {/* Left side items */}
          {/* <a href="/" className="flex items-center space-x-8 font-logo text-red-300xl text-2xl md:text-4xl 2xl:text-6xl">
                <h1>Tayná Caldas</h1>
              </a>
               */}

          <div className="hidden md:flex md:space-x-8">
            <Link
              className="hover:scale-105 transition-transform duration-200"
              href="/Sobre"
            >
              <h3>Quem sou</h3>
            </Link>
            <div className="mx-2"> </div>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link
              className="hover:scale-105 transition-transform duration-200"
              href="/Sobre"
            >
              <h3>Minha formação</h3>
            </Link>
            <div className="mx-2"> </div>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link
              className="hover:scale-105 transition-transform duration-200"
              href="/Sobre"
            >
              <h3>Fale comigo</h3>
            </Link>
            <div className="mx-2"> </div>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link
              className="hover:scale-105 transition-transform duration-200"
              href="/Sobre"
            >
              <h3>Me acompanhe</h3>
            </Link>
            <div className="mx-2"> </div>
          </div>
        </nav>
        {/*NavBar*/}
        <Image
          src={Bee}
          alt=""
          className="object-cover absolute bottom-20 left-0"
          style={{
            transform: isSlideInComplete
              ? "translateX(0)"
              : "translateX(calc(-100% - 20px))", // Adjust the distance (-20px is an example)
            transition:
              "transform 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          }}
        />

        <div className="flex z-20 bottom-8 left-10 absolute">
          <Link
            href="https://www.instagram.com/tayna.rau/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 pr-4 cursor-pointer"
          >
            <InstagramLogo size={32} />
          </Link>
          <Link
          href="https://www.linkedin.com/in/tayn%C3%A1-rau-3087402a3/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-110 cursor-pointer pl-4">
            <LinkedinLogo size={32} className="absolute" />
          </Link>
        </div>

        <div className="absolute">
          <h1 className="font-sans  text-8xl pb-16">
            Olá, seja bem-vindo!
          </h1>
          <Image src={Gif} alt="" className="absolute top-[-70px] left-[195px]" />
        </div>

        <h2 className={"font-serif absolute text-3xl pt-24"}>
          Falar sobre suicídio não é falar sobre a morte,{" "}
          <span className="bg-white font-bold">é falar sobre a vida.</span>
        </h2>
        <Link
          href="/"
          className="font-sans text-5xl z-20 pt-[270px] absolute hover:scale-105 transition-transform duration-200"
        >
          <h3 className="items-center justify-center flex">
            Vamos nos conhecer?
          </h3>
          <Image src={DetailLink} alt="" className="relative top-[-40px]" />

        </Link>
        <div
          style={{ position: "relative", overflow: "hidden", height: "100vh" }}
        >
          <Image
            src={Footer}
            alt=""
            className="h-screen w-screen"
            style={{
              transform: isSlideInComplete
                ? "translateY(0)"
                : "translateY(100%)",
              transition: "transform 1000ms ease",
            }}
          />
        </div>

        <h2
          className={`font-serif text-2xl max-w-[300px] absolute bottom-5 right-8 text-center transition-opacity duration-[4000ms] ${
            isContentVisible ? "opacity-1" : "opacity-0"
          }`}
        >
          ‘‘Nem sempre são as lágrimas que medem a dor. <br></br>
          <div className="font-bold">Às vezes é o sorriso que fingimos’’.</div>
        </h2>

        <Image src={LogoBackground} alt="" className="absolute w-full h-full" />
      </div>
    </>
  );
}
