import { GithubLogo } from "@phosphor-icons/react";
import { LinkedinLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";

import { Title } from "../atoms/Title";
import { WhoWeAreBox } from "../molecules/WhoWeAreBox";
import Image from "next/image";

import Lucas from "../../assets/lucas.png";
import Guilherme from "../../assets/guilherme.png";
import Felipe from "../../assets/felipe.png";

export const WhoWeAre = () => {
  const desc_Guilherme =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias dignissimos blanditiis ipsum. Accusamus asperiores placeat ad non ea. Ipsa inventore quaerat adipisci voluptatem dolores exercitationem eveniet est doloremque nobis!";
  return (
    <section className="flex justify-center bg-hero-pattern border-t-1 border-main-red">
      <div className="lg:w-256 w-full py-9 px-10 lg:px-0 mt-24">
        <Title text="QUEM SOMOS" />

        <div className="flex items-end mt-36">
          <Image src={Guilherme} alt="Guilherme Lima" className="-mr-5" />
          <WhoWeAreBox
            name="Guilherme"
            role="Programador"
            description={desc_Guilherme}
            textColor="green"
            background="black"
            portfolioLink="https://sirguil.github.io"
            icons={[
              {
                //@ts-ignore
                icon: <LinkedinLogo className="text-4xl" />,
                link: "https://www.linkedin.com/in/guilherme-lima-de-souza-5422991b5/",
                id: 0,
              },
              {
                //@ts-ignore
                icon: <GithubLogo className="text-4xl" />,
                link: "https://github.com/SirGuiL",
                id: 1,
              },
            ]}
          />
        </div>

        <div className="flex items-end mt-24">
          <Image src={Lucas} alt="Lucas Kattenege" className="-mr-5" />
          <WhoWeAreBox
            name="Lucas"
            role="Designer"
            description={desc_Guilherme}
            textColor="purple"
            background="black"
            portfolioLink=""
            icons={[
              {
                //@ts-ignore
                icon: <LinkedinLogo className="text-4xl" />,
                link: "",
                id: 0,
              },
              {
                //@ts-ignore
                icon: <InstagramLogo className="text-4xl" />,
                link: "",
                id: 1,
              },
            ]}
          />
        </div>

        <div className="flex items-end mt-24">
          <Image src={Felipe} alt="Felipe" className="h-628px w-auto" />
          <WhoWeAreBox
            name="Felipe"
            role="Fotógrafo"
            description={desc_Guilherme}
            textColor="blue"
            background="black"
            portfolioLink=""
            icons={[
              {
                //@ts-ignore
                icon: <LinkedinLogo className="text-4xl" />,
                link: "",
                id: 0,
              },
              {
                //@ts-ignore
                icon: <InstagramLogo className="text-4xl" />,
                link: "",
                id: 1,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
