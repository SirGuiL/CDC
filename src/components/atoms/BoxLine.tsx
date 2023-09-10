import Image from 'next/image'
import Checked from '../../assets/check.svg'
import Unchecked from '../../assets/uncheck.svg'

interface BoxLineProps {
  text: string
  active: boolean
}

export const BoxLine = ({ active, text }: BoxLineProps) => {
  return (
    <div
      className={`border-b-2 border-main-orange flex items-center ${
        active ? 'py-3' : 'py-1'
      }`}
    >
      <Image src={active ? Checked : Unchecked} alt="check" />
      <span className="text-main-red text-2xl tracking-wide ml-5">{text}</span>
    </div>
  )
}
