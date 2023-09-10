'use client'

import Image from 'next/image'
import Icon from '../../assets/icone.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { MobileNavbar } from '../molecules/MobileNavbar'
import { useState } from 'react'

interface HeaderProps {
  setScroll: (payload: boolean) => void
}

export const Header = ({ setScroll }: HeaderProps) => {
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false)

  const handleOpenOrCloseMobileNavbar = () => {
    setMobileNavbarOpened(!mobileNavbarOpened);
    setScroll(!mobileNavbarOpened);
  }

  return (
    <header className="bg-primary flex justify-center">
      <div className="lg:w-256 w-full flex py-2 px-10 lg:px-0 justify-between items-center">
        <div className="bg-gray-200 flex justify-center w-14 h-14 rounded-full">
          <Image src={Icon} alt="CDC Logo" />
        </div>
        <nav className="text-white font-bold text-lg md:flex gap-10 hidden">
          <a
            className="hover:opacity-70 transition-opacity duration-200"
            href=""
          >
            SOBRE NÓS
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200"
            href=""
          >
            MISSÃO
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200"
            href=""
          >
            SERVIÇOS
          </a>
          <a
            className="hover:opacity-70 transition-opacity duration-200"
            href=""
          >
            CONTATO
          </a>
        </nav>
        <div
          onClick={handleOpenOrCloseMobileNavbar}
          className="text-white p-1 -mr-1 cursor-pointer md:hidden"
        >
          <MenuIcon className="text-5xl" />
        </div>

        <MobileNavbar
          opened={mobileNavbarOpened}
          closeNavbar={handleOpenOrCloseMobileNavbar}
        />
      </div>
    </header>
  )
}
