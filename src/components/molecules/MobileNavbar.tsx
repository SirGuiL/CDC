import CloseIcon from '@mui/icons-material/Close'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

interface MobileNavbarProps {
  opened: boolean
  closeNavbar: () => void
}

export const MobileNavbar = ({ opened, closeNavbar }: MobileNavbarProps) => {
  return (
    <div
      className={`fixed bg-primary transition-all delay-100 h-screen w-screen flex left-0 z-100 md:hidden ${
        opened ? 'top-0' : '-top-nav-screen'
      } items-center justify-center`}
    >
      <div
        onClick={closeNavbar}
        className="cursor-pointer p-1 text-white absolute top-6 right-6"
      >
        <CloseIcon className="text-5xl" />
      </div>
      <nav className="h-3/4 flex flex-col justify-around text-3xl items-center text-white font-bold">
        <a className="hover:opacity-70 transition-opacity duration-200" href="">
          SOBRE NÓS
        </a>
        <a className="hover:opacity-70 transition-opacity duration-200" href="">
          MISSÃO
        </a>
        <a className="hover:opacity-70 transition-opacity duration-200" href="">
          SERVIÇOS
        </a>
        <a className="hover:opacity-70 transition-opacity duration-200" href="">
          CONTATO
        </a>
        <div className="text-white flex flex-row gap-4 -mb-10 mt-20">
          <a href="">
            <FacebookIcon className="text-5xl" />
          </a>
          <a href="">
            <InstagramIcon className="text-5xl" />
          </a>
          <a href="">
            <LinkedInIcon className="text-5xl" />
          </a>
        </div>
      </nav>
    </div>
  )
}
