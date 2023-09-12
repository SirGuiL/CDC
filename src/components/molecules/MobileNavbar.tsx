import CloseIcon from "@mui/icons-material/Close";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XCircle,
} from "@phosphor-icons/react";

interface MobileNavbarProps {
  opened: boolean;
  closeNavbar: () => void;
}

export const MobileNavbar = ({ opened, closeNavbar }: MobileNavbarProps) => {
  return (
    <div
      className={`fixed bg-primary transition-all delay-100 h-screen w-screen flex left-0 z-100 md:hidden ${
        opened ? "top-0" : "-top-nav-screen"
      } items-center justify-center`}
    >
      <div
        onClick={closeNavbar}
        className="cursor-pointer p-1 text-white absolute top-6 right-6"
      >
        <XCircle className="text-default" />
      </div>
      <nav className="h-3/4 flex flex-col justify-between text-3xl items-center text-white">
        <div className="flex flex-col gap-8 mt-28 items-center">
          <a
            className="hover:opacity-70 transition-opacity duration-200 tracking-widest"
            href=""
          >
            SOBRE NÓS
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200 tracking-widest"
            href=""
          >
            MISSÃO
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200 tracking-widest"
            href=""
          >
            SERVIÇOS
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200 tracking-widest"
            href=""
          >
            CONTATO
          </a>
        </div>

        <div className="text-white flex flex-row gap-7 -mb-10">
          <a href="">
            <FacebookLogo className="text-default-2" />
          </a>
          <a href="">
            <InstagramLogo className="text-default-2" />
          </a>
          <a href="">
            <LinkedinLogo className="text-default-2" />
          </a>
        </div>
      </nav>
    </div>
  );
};
