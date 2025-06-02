import React from "react";
import logo from '../../assets/icons/logo.svg';
import Image, { StaticImageData } from "next/image";

type CardProp = {
  name: string;
  image: StaticImageData;
  alt: string;
}

const Card = ({name, image, alt} : CardProp) => {
  return (
    <div className="rounded-sm h-15 border-2 border-[#a3a3a3]/50 flex justify-between items-center">
      <div className="p-4">{name}</div>
      <div className="p-4 flex gap-2">
        <div><Image src={image} alt={alt} width={60} height={60} className="inline-block"/></div>
        <div> > </div> 
      </div>
    </div>
  );
}

const QuizPortal = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8 sm:px-10 md:px-14 lg:px-20 bg-[#F6F6F6]">
      <h3 className="text-center font-bold text-xl my-1 sm:text-2xl md:text-3xl md:my-2 lg:text-4xl lg:my-4">
        What Kind of Headspace are You In?
      </h3>
      <p className="text-center text-sm sm:text-lg md:text-xl">
        We can help lead you to the right resources
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-6">
        <Card name="Stress less" image={logo} alt='logo' />
        <Card name="Sleep soundly" image={logo} alt='logo' />
        <Card name="Manage anxiety" image={logo} alt='logo' />
        <Card name="Process thoughts" image={logo} alt='logo' />
        <Card name="Practice meditation" image={logo} alt='logo' />
        <Card name="Start therapy" image={logo} alt='logo' />
      </div>
      
    </div>
  );
}

export default QuizPortal
