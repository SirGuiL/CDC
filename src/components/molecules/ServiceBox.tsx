import { BoxLine } from '../atoms/BoxLine'

interface line {
  text: string
  status: boolean
}

interface ServiceBoxProps {
  lines: line[]
  title: string
  price: string
  fixedHeader?: boolean
  hideCurrency?: boolean
}

export const ServiceBox = ({
  lines,
  title,
  price,
  fixedHeader,
  hideCurrency,
}: ServiceBoxProps) => {
  return (
    <div className="group flex flex-col items-center">
      <header
        className={`bg-main-orange py-8 ${
          fixedHeader ? 'w-80' : ''
        } flex justify-center rounded-t-box-radius`}
      >
        <span className="text-white text-3xl font-bold">{title}</span>
      </header>
      <main className={`border-2 border-b-0 border-main-orange p-4 ${
          fixedHeader ? 'w-80' : ''
        }`}>
        {lines.map((line) => (
          <BoxLine active={line.status} text={line.text} key={line.text} />
        ))}
      </main>
      <footer
        className={`border-2 border-t-0 relative ${
          hideCurrency ? 'h-28' : 'h-20'
        } border-main-orange p-4 flex ${
          fixedHeader ? 'w-80' : ''
        } justify-center items-center rounded-b-2xl`}
      >
        <span
          className={`text-main-red ${
            hideCurrency ? 'text-3xl mb-2' : 'text-4xl'
          } -mt-5 font-bold tracking-wide max-w-sm flex text-center`}
        >
          {!hideCurrency && 'R$'} {price}
        </span>
        <button
          className={`text-white flex text-3xl opacity-0 transition-all duration-300 group-hover:opacity-100 font-bold absolute rounded-full py-4 px-14 bg-main-orange ${
            hideCurrency
              ? 'top-14 group-hover:top-20'
              : 'top-10 group-hover:top-14'
          }`}
        >
          EU QUERO!
        </button>
      </footer>
    </div>
  )
}
