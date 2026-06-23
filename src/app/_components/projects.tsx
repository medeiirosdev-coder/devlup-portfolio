import Image from "next/image";
import project1 from "../../../public/images/project1.webp";
import project2 from "../../../public/images/project2.webp";

export function Projects() {
  return (
    <section className="overflow-hidden pb-16 px-10 font-clash text-center">
      <h1 className="text-[24px]">Projetos Recentes</h1>
      <p className="text-[16px] text-white/60">
        Veja projetos reais que criamos para clientes que confiaram no nosso
        trabalho
      </p>
      <div className="-mx-4 mt-9 md:flex md:justify-center">
        <Image
          src={project2}
          alt="Projeto 1"
          className="object-cover w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
