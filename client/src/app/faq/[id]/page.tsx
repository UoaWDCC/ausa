import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn_components/ui/accordion'
import type { Faq, FaqCategory } from '@/types/types'
import { redirect } from 'next/navigation'

interface FAQProps {
  params: Promise<{ id: string }>
}

const Banner = () => {
  return (
    <div className="bg-slate-900/80 text-white p-2">
      <div className="group mx-auto flex w-full gap-[0.5rem] overflow-hidden">
        <div className="animate-infinite-scrolling flex w-full flex-none gap-4 transition-transform">
          <div className="font-geist flex items-center justify-center">
            <div className="flex items-center text-base md:text-2xl">
              Support Available 24/7
            </div>
            <div className="m-0.5 h-[20px] w-[20px] rounded-full bg-[#5A9B8C]"></div>
          </div>{' '}
        </div>
        <div className="animate-infinite-scrolling flex w-full flex-none gap-2 transition-transform">
          {' '}
          <div className="font-geist flex items-center justify-center">
            <div className="flex items-center text-base md:text-2xl">
              Support Available 24/7
            </div>
            <div className="m-0.5 h-[20px] w-[20px] rounded-full bg-[#5A9B8C]"></div>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}

export default async function FAQ({ params }: FAQProps) {
  const faqCategoryMap: Record<string, Faq[]> = {}

  const { id } = await params
  /*if (!title[id]) {
    redirect('/404')
  }*/
  const url = process.env.BACKEND_URL || 'http://localhost:8000'
  const res = await fetch(`${url}/faq-category?url=${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })
  const faqCategory = await res.json()

  if (res.status !== 200 || faqCategory.data.length === 0) {
    redirect('/404')
  }

  const res2 = await fetch(`${url}/faq-category`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })
  const faqCategories = await res2.json()
  if (res2.status !== 200) {
    redirect('/500') //redirect to error page?
  }

  await Promise.all(
    faqCategories.data.map(async (category: FaqCategory) => {
      const res = await fetch(`${url}/faq?category=${category.id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
        mode: 'cors',
      })
      const faqData = await res.json()
      faqCategoryMap[category.id] = faqData.data.sort((a: Faq, b: Faq) =>
        a.question.localeCompare(b.question),
      )
    }),
  )

  //console.log("faqCategory", faqCategories)
  //console.log('faqCategoryMap', faqCategoryMap)

  return (
    <div className="mt-[70px] flex min-h-[100vh] flex-col">
      <div className="font-geist flex min-h-[100vh] w-full flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
        <div
          className="hidden md:flex flex-col col-span-1 justify-center gap-4 bg-slate-900/50 p-8 text-white"
          id="section-left"
        >
          <h1 className="mb-2 flex justify-center text-2xl font-bold">
            How Can We Help?
          </h1>
          {faqCategories.data.map((category: FaqCategory) => (
            <div
              key={category.id}
              className="mb-4 flex flex-col items-center gap-2"
            >
              <h2 className="flex text-lg font-semibold">{category.name}</h2>
              <ul className="ml-4 list-disc">
                {faqCategoryMap[category.id]?.map((faq: Faq) => (
                  <li key={faq.id}>{faq.question}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col gap-8 border bg-[#FAF7F2] px-[5%] py-[15%] text-[#2D3B4E] md:col-span-2 lg:col-span-3"
          id="section-right"
        >
          <h1 className="text-2xl md:text-4xl">Frequently Asked Questions</h1>
          <h2 className="text-2xl font-semibold">{faqCategory.data[0].name}</h2>
          <div className="">
            <Accordion type="single" collapsible className="w-full">
              {faqCategoryMap[faqCategory.data[0].id]?.map(
                (faq: Faq) => (
                  console.log('faq', faq),
                  (
                    <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  )
                ),
              )}
            </Accordion>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  )
}
