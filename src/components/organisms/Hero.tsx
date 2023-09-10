import Image from 'next/image'
import HeroImage from '../../assets/hero.png'
import Logo from '../../assets/logo.svg'
import CamelOutlined from '../../assets/camel-outline.svg'
import { GreenCircle } from '../atoms/GreenCircle'

export const Hero = () => {
  return (
    <section className="flex md:justify-center relative h-110.5 overflow-hidden">
      <Image
        src={HeroImage}
        alt="Imagem princípal"
        className="w-full absolute z-0 h-110.5 object-cover hidden md:block"
      />
      <Image
        src={Logo}
        alt="Logo CDC Marketing"
        className="z-10 hidden md:block"
      />

      <Image
        src={CamelOutlined}
        alt="Logo CDC Marketing"
        className="h-40 ml-5 mt-16 block md:hidden"
      />

      <div className="block md:hidden">
        <GreenCircle lg={true} />
        <GreenCircle />
      </div>
    </section>
  )
}
