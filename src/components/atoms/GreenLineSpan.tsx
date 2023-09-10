interface GreenLineSpanProps {
  text: string
}

export const GreenLineSpan = ({ text }: GreenLineSpanProps) => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="w-11 h-11 bg-custom-gray-600 rounded-full flex items-center justify-center">
        <div className="rounded-full w-10 h-10 bg-primary"></div>
      </div>
      <span className="text-2xl ml-3 text-custom-gray-600">{text}</span>
    </div>
  )
}
