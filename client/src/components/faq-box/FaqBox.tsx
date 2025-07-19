import Image from "next/image"

type FaqBoxProps = {
    icon: string
    content: string
    title: string
}

const FaqBox = ({icon, content, title}: FaqBoxProps) => {
    return(
    <div className = "flex gap-4 w-[250px] border-neutral-400 border-3 rounded-md p-2 m-4 bg-neutral-200 hover:bg-white transition-all duration-300 font-ReemKufi">
        <div >
            <Image src = {icon} width = {20} height = {20} alt = ""/>
        </div>
        <div className="text-black">
            <h1 className= "text-lg ">
                {title}
            </h1>
            <p className = "text-[#2D3B4E]">
                {content}
            </p>
        </div>
        
        
    </div>
    )  
}
export default FaqBox