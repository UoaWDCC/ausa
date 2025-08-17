import Image from 'next/image'

type FaqBoxProps = {
  icon: string
  content: string
  title: string
}

const FaqBox = ({ icon, content, title }: FaqBoxProps) => {
  return (
    <div className="flex gap-4 w-[250px] border rounded-md p-2 bg-slate-500/70 hover:bg-slate-500/80 transition-all duration-300 font-ReemKufi">
      <div>
        <Image alt="" height={20} src={icon} width={20} />
      </div>
      <div className="text-slate-200">
        <h1 className="text-lg ">{title}</h1>
        <p className="text-slate-400">{content}</p>
      </div>
    </div>
  )
}
export default FaqBox
