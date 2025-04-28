'use client'

import FAQItem, { FAQItemType } from './FAQItem'

type FaqAccordionProps = {
  items: FAQItemType[]
}

const FAQAccordion = ({ items }: FaqAccordionProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {items.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  )
}

export default FAQAccordion
