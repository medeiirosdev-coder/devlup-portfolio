import Image from "next/image";
import budgetIcon from "../../../public/images/orcamento.png";
import wppIcon from "../../../public/images/wpp-icon.png";
import logo from "../../../public/images/logo_devlup.webp";
export function Hero() {
  return (
    <section className="overflow-hidden py-16 px-10 font-clash bg-[url('/images/bg-hero-mobile.webp')] bg-cover bg-no-repeat bg-center md:bg-[url('/images/bg-hero-nowolf.webp')] md:bg-cover md:bg-center md:bg-no-repeat h-screen">
      <div className="relative ">
        <Image
          src={logo}
          alt="Logo DEVLUP"
          className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:z-1 md:opacity-50 md:block hidden"
        />
        <h2 className="text-white text-center text-[24px] md:text-[44px]">
          construindo uma <b>melhor</b> experiência
        </h2>
        <h1
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
          <p className="text-[rgba(255,255,255,0.6)] font-normal text-center  md:text-[18px] md:w-[50%] ">
            Somos uma agência de desenvolvimento criativo especializada em
            projetos modernos, interativos e focados em conversão. Transformamos
            ideias em produtos digitais funcionais e escaláveis.
          </p>
        </div>
        <div className="md:relative hidden md:flex-col md:flex md:justify-between md:mt-30 ">
          <div className="md:absolute md:left-0 md:[writing-mode:vertical-rl] md:text-white/80 md:text-sm md:tracking-[8px] md:uppercase md:flex md:items-center md:gap-12">
            <p className="md:h-50">Rolar Página</p>
            <div className="h-44 w-px bg-white/70" />
          </div>
          <div className="md:text-end md:flex md:flex-col md:gap-2 md:text-[rgba(255,255,255,0.8)] md:text-[16px] md:mt-20 hidden">
            <a href="#">/ Instagram</a>
            <a href="#">/ WhatsApp</a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col mt-10 justify-center items-center gap-4 md:flex-row md:mt-20">
          <button className="bg-[#FF6B01] cursor-pointer py-3 w-fit pl-6 pr-3 rounded-full flex items-center gap-4 text-[rgba(255,255,255,0.8)]">
            Solicitar Orçamento
            <Image
              src={budgetIcon}
              alt="Solicitar Orçamento"
              quality={100}
              width={36}
              height={35}
            />
          </button>
          <button className="bg-[rgba(22,9,0,0.6)] border border-[rgba(255,255,255,0.09)] cursor-pointer w-fit py-3 pl-6 pr-3 rounded-full flex items-center gap-4 text-[rgba(255,255,255,0.8)]">
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
