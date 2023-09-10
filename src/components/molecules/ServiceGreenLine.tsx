import Image from 'next/image'
import CameraCamel from '../../assets/camera-camel.svg'
import DesignerCamel from '../../assets/designer-camel.svg'
import ProgrammerCamel from '../../assets/camel-glasses.svg'

interface ServiceGreenLineProps {
  text: string
  image: 'camera' | 'programmer' | 'designer'
  altImage?: string
}

export const ServiceGreenLine = ({
  text,
  image,
  altImage,
}: ServiceGreenLineProps) => {
  const ImagePath = (img: string) => {
    switch (img) {
      case 'camera':
        return CameraCamel
      case 'programmer':
        return ProgrammerCamel
      case 'designer':
        return DesignerCamel
    }
  }
  return (
    <div
      className="w-full h-24 flex justify-center relative"
      id={`${image}-line`}
    >
      <div className="absolute w-full h-full bg-primary left-0 mix-blend-multiply  drop-shadow-md"></div>
      <div className="lg:w-256 w-full px-4 lg:px-0 flex items-center justify-between z-50">
        <span className="text-white text-4xl tracking-wide font-bold">
          {text}
        </span>
        <Image
          src={ImagePath(image)}
          alt={altImage || 'Camelo'}
          className={
            image === 'designer'
              ? 'w-32 mb-12 mix-blend-normal'
              : image === 'programmer'
              ? 'w-32 mb-14 mix-blend-normal'
              : 'mix-blend-normal'
          }
        />
      </div>
    </div>
  )
}
