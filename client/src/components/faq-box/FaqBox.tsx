import Image from 'next/image'

type FaqBoxProps = {
  icon: string
  content: string
  title: string
}

const FaqBox = ({ icon, content, title }: FaqBoxProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 max-w-[300px] sm:max-w-[280px] md:max-w-[350px] border-blue-200/30 border-3 rounded-md p-2 m-2 bg-neutral-400/70  hover:bg-neutral-400/80 transition-all duration-300">
      <div className="flex-shrink-0 flex items-center">
        <Image alt="" height={40} src={icon} width={40} />
      </div>
      <div className="text-white">
        <h1 className="text-lg">{title}</h1>
        <p className="text-neutral-300">{content}</p>
      </div>
    </div>
  )
}
export default FaqBox
