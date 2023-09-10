interface GreenCircleProps {
  lg?: boolean
}

export const GreenCircle = ({ lg }: GreenCircleProps) => {
  return (
    <div
      className={`flex absolute opacity-90 rounded-full text-transparent ${
        lg ? 'w-47.75 h-47.75 -right-20 top-14' : 'w-24 h-24 right-14 top-56'
      } bg-primary`}
    >
      .
    </div>
  )
}
