import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn_components/ui/accordion'

const Banner = () => {
  return <div className="border border-yellow-300 p-4"></div>
}

const FAQ = () => {
  return (
    <div className="mt-[70px] flex flex-col">
      <div className="font-geist flex h-[600px] w-full flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
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
          className="flex flex-col gap-8 border p-10 text-[#2D3B4E] md:col-span-2 lg:col-span-3"
          id="section-right"
        >
          <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
          <h2 className="text-xl font-semibold">University Support</h2>
          <div className="border p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>1</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3</AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>{' '}
              <AccordionItem value="item-4">
                <AccordionTrigger>4</AccordionTrigger>
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
