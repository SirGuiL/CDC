import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

type iconType = {
  icon: Element[];
  link: string;
  id: number;
};

interface WhoWeAreBoxProps {
  name: string;
  role: string;
  description: string;
  textColor: "green" | "purple" | "blue";
  background: "white" | "black";
  icons: iconType[];
  portfolioLink: string;
}

export const WhoWeAreBox = (props: WhoWeAreBoxProps) => {
  const textColorPalette = {
    green: {
      text: "text-green-500",
      border: "border-green-500",
    },
    purple: {
      text: "text-orange-500",
      border: "border-orange-500",
    },
    blue: {
      text: "text-secondary-2",
      border: "border-secondary-2",
    },
  };

  return (
    <div
      className={`${
        props.background == "black" ? "bg-black" : "bg-white"
      } flex flex-col rounded-2xl max-w-xl ${
        textColorPalette[props.textColor].text
      }`}
    >
      <header
        className={`p-5 flex justify-between border-b-1 ${
          textColorPalette[props.textColor].border
        }`}
      >
        <span className="text-3xl">{props.name}</span>
        <span className="text-3xl font-extralight transition-all delay-75">
          {props.role}
        </span>
      </header>
      <main
        className={`p-5 flex justify-between border-b-1 ${
          textColorPalette[props.textColor].border
        }`}
      >
        <p className="text-3xl font-extralight transition-all delay-75">
          {props.description}
        </p>
      </main>
      <footer className="p-5 flex justify-between">
        <div className="flex gap-3">
          {props.icons.map((i: iconType) => (
            <a href={i.link} key={i.id} target="_blank">
              {/* @ts-ignore */}
              {i.icon}
            </a>
          ))}
        </div>
        <a href={props.portfolioLink} target="_blank">
          <span className="text-3xl font-extralight hover:font-light transition-all delay-75">
            Portfólio
          </span>
        </a>
      </footer>
    </div>
  );
};
