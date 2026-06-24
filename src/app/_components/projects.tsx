"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import apaepl from "../../../public/images/apaepl.webp";
import devlup from "../../../public/images/devlup.png";
import irmaoanimal from "../../../public/images/projetoirmaoanimal.png";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const projectSubtitle = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const projectTitle = new SplitType("#projectTitle", {
      types: "chars",
    });

    mm.add("(max-width: 767px)", () => {
      const images = gsap.utils.toArray<HTMLElement>(".project-img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projectsSection",
          start: "top 90%",
          end: "bottom 70%",
        },
      });

      tl.from(projectTitle.chars, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        stagger: {
          each: 0.03,
          from: "random",
        },
        ease: "power3.out",
        duration: 0.8,
      }).from(
        projectSubtitle.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.6,
        },
        "-=.7",
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            clipPath: "inset(0 25% 0 25% round 30px)",
            filter: "grayscale(100%)",
          },
          {
            clipPath: "inset(0 0% 0 0% round 6px)",
            filter: "grayscale(0%)",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              end: "top 45%",
              scrub: 1,
            },
          },
        );
      });
    });

    mm.add("(min-width: 768px)", () => {
      const images = gsap.utils.toArray<HTMLElement>(".project-img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projectsSection",
          start: "top 80%",
          end: "bottom 60%",
        },
      });

      tl.from(projectTitle.chars, {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
        stagger: {
          each: 0.03,
          from: "random",
        },
        ease: "power3.out",
        duration: 0.8,
      }).from(
        projectSubtitle.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.6,
        },
        "-=.7",
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            clipPath: "inset(0 30% 0 30% round 60px)",
            filter: "grayscale(100%)",
          },
          {
            clipPath: "inset(0 0% 0 0% round 6px)",
            filter: "grayscale(0%)",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              end: "40% 60%",
              scrub: 2,
            },
          },
        );
      });

      ScrollTrigger.create({
        trigger: "#projectsSection",
        start: "bottom bottom",
        endTrigger: "#footer",
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => {
      mm.revert();
      projectTitle.revert();
    };
  }, []);

  return (
    <section
      id="projectsSection"
      className="overflow-hidden pb-16 px-10 font-clash text-center relative z-10"
    >
      <h1 id="projectTitle" className="text-[24px] md:text-[64px]">
        Projetos Recentes
      </h1>

      <p ref={projectSubtitle} className="text-[16px] text-white/60">
        Veja projetos reais que criamos para clientes que confiaram no nosso
        trabalho
      </p>

      <div className="-mx-4 mt-9 md:flex md:justify-center rounded-md overflow-hidden md:flex-col md:gap-8 flex flex-col gap-10">
        <Image
          src={apaepl}
          alt="Projeto 1"
          className="project-img object-cover w-full"
        />
        <Image
          src={devlup}
          alt="Projeto 1"
          className="project-img object-cover w-full"
        />
        <Image
          src={irmaoanimal}
          alt="Projeto 1"
          className="project-img object-cover w-full"
        />
      </div>
    </section>
  );
}
