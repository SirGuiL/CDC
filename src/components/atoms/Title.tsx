interface TitleProps {
  text: string
  color?: string
}

export const Title = ({ text, color }: TitleProps) => {
  return (
    <h1
      className={`${
        color || 'text-main-orange'
      } text-3xl underline font-bold decoration-wavy`}
    >
      {text}
    </h1>
  )
}
