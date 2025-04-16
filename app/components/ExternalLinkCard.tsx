import Image, { StaticImageData } from "next/image";

type Props = {
  ExternalLinkImage: StaticImageData;
  title: string;
  description: string;
};

const ExternalLinkCard = ({ ExternalLinkImage, title, description }: Props) => {
  return (
    <div className="w-64 rounded-md w-full h-full overflow-hidden bg-white shadow-[5px_5px_5px_hsla(0,0%,0%,0.1)] border border-[#CCCCCC]">
      <Image
        className="w-100 h-70 object-cover"
        src={ExternalLinkImage}
        alt={title}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ExternalLinkCard;
