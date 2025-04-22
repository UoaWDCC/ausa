'use client'

import { DisclosureButton, Disclosure, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  items: FAQItem[]
}

const FAQAccordion = ({ items }: FaqAccordionProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div
              className={`rounded-xl border-black border-2  ${
                open ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-800'
              }`}
            >
              <DisclosureButton className="gap-4 flex font-RK text-xl justify-between w-full p-4 text-left font-medium">
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`h-6 min-w-6 bg-gray-300 rounded-full transition-transform duration-300 ${
                    open ? 'rotate-180 text-black' : 'text-white'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel
                className={`font-RK text-sm px-4 pb-4  ${open ? 'text-white' : 'text-gray-600'} `}
              >
                {item.answer}
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default FAQAccordion
