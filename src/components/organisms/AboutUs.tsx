import Image from "next/image";
import YellowCamel from "../../assets/yellow-camel.svg";
import { Title } from "../atoms/Title";

export const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center my-32">
      <div className="lg:w-256 w-full py-9 px-10 lg:px-0">
        <Title text="SOBRE NÓS" />
        <div className="mt-6 lg:flex hidden gap-36">
          <p className="text-custom-gray-500 flex max-w-xl text-justify text-2xl font-default">
            Nosso diferencial é o encher linguiça pra ganhar espaço e tals
            encher linguiça pra ganhar espaço e tals encher linguiça pra ganhar
            espaço e tals encher linguiça pra ganhar espaço e tals encher
            linguiça pra ganhar espaço e tals encher linguiça pra ganhar espaço
            e tals encher linguiça pra ganhar espaço e tals encher linguiça pra
            ganhar espaço e tals encher linguiça pra ganhar espaço e tals encher
            linguiça pra ganhar espaço e tals encher linguiça pra ganhar espaço
            e tals encher linguiça pra ganhar espaço e tals
          </p>
          <div className="bg-primary h-64 w-64 rounded-full flex items-center justify-center">
            <Image src={YellowCamel} alt="Camelo amarelo" />
          </div>
        </div>
      </div>
    </section>
  );
};
