import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn_components/ui/accordion'

const Banner = () => {
  return (
    <div className="bg-[#FFDE91] p-6">
      <div className="group mx-auto flex w-full gap-[0.5rem] overflow-hidden">
        <div className="animate-infinite-scrolling flex w-full flex-none gap-8 transition-transform">
          <div className="font-geist flex w-[25%] justify-center gap-4">
            <div className="flex flex-col justify-center text-2xl">
              Support Available 24/7
            </div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#5A9B8C]"></div>
          </div>{' '}
        </div>
        <div className="animate-infinite-scrolling flex w-full flex-none gap-8 transition-transform">
          {' '}
          <div className="font-geist flex w-[25%] justify-center gap-4">
            <div className="flex flex-col justify-center text-2xl">
              Support Available 24/7
            </div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#5A9B8C]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div className="mt-[70px] flex min-h-[100vh] flex-col">
      <div className="font-geist flex min-h-[100vh] w-full flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
        <div
          className="col-span-1 flex flex-col justify-center gap-4 bg-[#5A9B8C] p-8 text-white"
          id="section-left"
        >
          <h1 className="mb-2 flex justify-center text-2xl font-bold">
            How Can We Help?
          </h1>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="flex text-lg font-semibold">University Support</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">External Supoort</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">Emergency Support</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
        </div>
        <div
          className="flex flex-col gap-8 border bg-[#FAF7F2] px-[5%] py-[15%] text-[#2D3B4E] md:col-span-2 lg:col-span-3"
          id="section-right"
        >
          <h1 className="text-2xl md:text-4xl">Frequently Asked Questions</h1>
          <h2 className="text-2xl font-semibold">University Support</h2>
          <div className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Campus Care</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>General Wellbeing Support</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Privacy Concerns</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>{' '}
              <AccordionItem value="item-4">
                <AccordionTrigger>Quiz Matching</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5"></AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default FAQ
