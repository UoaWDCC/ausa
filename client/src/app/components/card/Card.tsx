type CardProps = {
  title: string
  content: string
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-primary font-geist m-2 flex flex-col rounded-md border p-2">
      <div className="">{title}</div>
      <div className="">{content}</div>
      <button className="rounded-md border bg-gray-700 text-white">more</button>
    </div>
  )
}

export default Card
