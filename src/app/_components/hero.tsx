"use client";
import { gsap } from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import budgetIcon from "../../../public/images/orcamento.png";
import wppIcon from "../../../public/images/wpp-icon.png";
import heroBg from '../../../public/images/bg_1.webp'
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const titleRef = useRef(null);
  const btnBudget = useRef(null);
  const btnContact = useRef(null);
  const socialMediaBtn = useRef(null);
  const scrollPageTxt = useRef(null);

  useEffect(() => {
    const headerTxt = new SplitType("#headerTxt", {
      types: "chars",
    });

    const subTitleTxt = new SplitType("#subTitleTxt", {
      types: "chars",
    });

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.2,
      duration: 1.2,
    })
      .from(headerTxt.chars, {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        stagger: {
          each: 0.03,
          from: "random",
        },
        ease: "power3.out",
      })
      .from(
        subTitleTxt.chars,
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          stagger: {
            each: 0.005,
            from: "random",
          },
          ease: "power3.out",
        },
        "<",
      )
      .from(
        btnBudget.current,
        {
          scale: 1.2,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
        },
        "<",
      )
      .from(
        btnContact.current,
        {
          scale: 1.2,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
        },
        "<",
      )
      .from(
        socialMediaBtn.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          right: -20,
        },
        "<",
      )

      .from(
        scrollPageTxt.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          left: -20,
        },
        "<",
      );

    return () => {
      tl.kill();
      headerTxt.revert();
      subTitleTxt.revert();
    };
  }, []);


  return (
    <section className="relative overflow-hidden py-16 px-10 font-clash md:bg-cover md:bg-center md:bg-no-repeat h-screen">
      <div className="mediaBackground w-full h-full object-cover absolute object-center inset-0">
        <video src="/videos/hero_video.mp4" autoPlay muted loop playsInline preload="auto"  onCanPlayThrough={() => setVideoLoaded(true)}
      className={`absolute h-full w-full object-cover transition-opacity duration-700 ${
        videoLoaded ? "opacity-20" : "opacity-0"
      }`}/>
        <Image src={heroBg} alt="heroBackground" fill quality={100} className={`object-cover transition-opacity duration-700 ${
        videoLoaded ? "opacity-0" : "opacity-100"
      }`}/>
       </div>
      <div className="relative">
        <h2
          id="headerTxt"
          className="text-white text-center text-[24px] md:text-[44px]"
        >
          construindo uma <b>melhor</b> experiência
        </h2>
        <h1
          ref={titleRef}
          className=" relative z-10
            text-[52px] text-center font-clash font-semibold tracking-[12px] 
            bg-linear-to-r from-[#FF6B01] via-[#FFAC58] to-[#FF6B01] 
            bg-clip-text text-transparent
            md:text-[140px]

            "
        >
          DEVLUP
        </h1>
        <div className="mt-32 md:mt-0 flex justify-center relative z-10">
          <p
            id="subTitleTxt"
            className="text-[rgba(255,255,255,0.6)] font-normal text-center  md:text-[18px] md:w-[50%] "
          >
            Somos uma agência de desenvolvimento criativo especializada em
            projetos modernos, interativos e focados em conversão. Transformamos
            ideias em produtos digitais funcionais e escaláveis.
          </p>
        </div>
        <div className="md:relative hidden md:flex-col md:flex md:justify-between md:mt-30 ">
          <div
            ref={scrollPageTxt}
            className="md:absolute md:left-0 md:[writing-mode:vertical-rl] md:text-white/80 md:text-sm md:tracking-[8px] md:uppercase md:flex md:items-center md:gap-12"
          >
            <p className="md:h-50">Rolar Página</p>
            <div className="h-44 w-px bg-white/70" />
          </div>
          <div
            ref={socialMediaBtn}
            className="md:relative md:text-end md:flex md:flex-col md:gap-2 md:text-[rgba(255,255,255,0.8)] md:text-[16px] md:mt-20 hidden"
          >
            <a href="https://www.instagram.com/agencia_devlup/" target="_blank">
              / Instagram
            </a>
            <a
              href="https://wa.me/5531996259145?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20o%20desenvolvimento%20de%20uma%20landing%20page."
              target="_blank"
            >
              / WhatsApp
            </a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col mt-10 justify-center items-center gap-4 md:flex-row md:mt-20">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5531996259145?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20o%20desenvolvimento%20de%20uma%20landing%20page.",
                "_blank",
              )
            }
            ref={btnBudget}
            className="bg-[#FF6B01] cursor-pointer py-3 w-fit pl-6 pr-3 rounded-full flex items-center gap-4 text-[rgba(255,255,255,0.8)]"
          >
            Solicitar Orçamento
            <Image
              src={budgetIcon}
              alt="Solicitar Orçamento"
              quality={100}
              width={36}
              height={35}
            />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5531996259145?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.",
                "_blank",
              )
            }
            ref={btnContact}
            className="bg-[rgba(22,9,0,0.6)] border border-[rgba(255,255,255,0.09)] cursor-pointer w-fit py-3 pl-6 pr-3 rounded-full flex items-center gap-4 text-[rgba(255,255,255,0.8)]"
          >
            Entrar em contato
            <Image
              src={wppIcon}
              alt="Botão entrar em contato"
              quality={100}
              width={36}
              height={35}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
