import budgetIcon from "../../../public/images/orcamento.png";
import wppIcon from "../../../public/images/wpp-icon.png";
import Image from "next/image";
export function Footer() {
  return (
    <footer
      id="footer"
      className=" flex flex-col justify-end font-clash overflow-hidden pt-26 relative z-20 h-screen px-10"
    >
      <video
        src="/videos/footer_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover  z-0"
      ></video>
      <div className="text-center md:text-start mb-40 z-10 relative grid grid-cols-1 md:grid-cols-2 ">
        <div className="md:order-2">
          <h2 className="md:text-[44px] text-[24px] md:text-end">
            Seu negócio é único, seu projeto também precisa ser
          </h2>
          <div className="relative z-10 flex flex-col mt-10 justify-center items-center gap-4 md:flex-row md:justify-end">
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
        <div>
          <h2 className="text-[64px] mt-10 md:text-[120px]">
            <span className="font-bold">dev</span>lup
          </h2>
        </div>
      </div>
    </footer>
  );
}
