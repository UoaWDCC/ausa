import { redirect } from 'next/navigation'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import client from '@/services/fetch-client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn_components/ui/accordion'
import type { Faq, FaqCategory } from '@/types/types'
import FaqBox from '../../../components/faq-box/FaqBox'
import ausa from '../../assets/icons/ausa.svg'

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
            <div className="m-0.5 h-[20px] w-[20px] rounded-full bg-[#5A9B8C]" />
          </div>{' '}
        </div>
        <div className="animate-infinite-scrolling flex w-full flex-none gap-2 transition-transform">
          {' '}
          <div className="font-geist flex items-center justify-center">
            <div className="flex items-center text-base md:text-2xl">
              Support Available 24/7
            </div>
            <div className="m-0.5 h-[20px] w-[20px] rounded-full bg-[#5A9B8C]" />
          </div>{' '}
        </div>
      </div>
    </div>
  )
}

export default async function FAQ({ params }: FAQProps) {
  const faqCategoryMap: Record<string, Faq[]> = {}

  const { id } = await params
  const res = await client.GET('/faq-category', {
    params: { query: { url: id } },
  })

  console.log(res)

  if (res.response.status !== 200 || res.data?.data?.length === 0) {
    redirect('/404')
  }
  const faqCategory = res.data?.data || []

  const res2 = await client.GET('/faq-category')
  if (res2.response.status !== 200) {
    redirect('/500') //redirect to error page?
  }
  const faqCategories = res2.data?.data || []

  await Promise.all(
    faqCategories.map(async (category: FaqCategory) => {
      const res = await client.GET('/faq', {
        params: { query: { category: category.id } },
      })
      console.log('res', res.response.url)
      const faqData = res.data?.data || []
      faqCategoryMap[category.id] = faqData.sort((a: Faq, b: Faq) =>
        a.question.localeCompare(b.question),
      )
    }),
  )

  //console.log("faqCategory", faqCategories)
  console.log('faqCategoryMap', faqCategoryMap)

  return (
    <div className="mt-[70px] flex min-h-[100vh] flex-col">
      <div className="font-geist flex min-h-[100vh] w-full flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
        <div
          className="md:flex flex-col col-span-1 justify-center gap-4 bg-slate-900/50 p-8 text-white"
          id="section-left"
        >
          <h1 className="mb-2 flex justify-center text-3xl font-bold">
            How Can We Help?
          </h1>
          <FaqBox
            content="becky cheng"
            icon={ausa}
            title={faqCategories[0].name}
          />
          <FaqBox
            content="nicky tian"
            icon={ausa}
            title={faqCategories[1].name}
          />
          <FaqBox content="eve lee" icon={ausa} title={faqCategories[2].name} />

          {/* {faqCategories.data.map((category: FaqCategory) => (
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
          ))} */}
        </div>

        <div
          className="relative border-r-2 border-slate-900 rounded-tr-lg flex flex-col gap-8 bg-slate-800/55 px-[5%] py-[15%] text-white md:col-span-2 lg:col-span-3"
          id="section-right"
        >
          <h1 className="text-2xl md:text-4xl">Frequently Asked Questions</h1>
          <h2 className="text-2xl font-semibold">{faqCategory[0]?.name}</h2>
          <div className="">
            <Accordion className="w-full" collapsible type="single">
              {faqCategoryMap[faqCategory[0]?.id]?.map((faq: Faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  )
}
