'use client'

import FAQItem, { FAQItemType } from './FAQItem'

type FaqAccordionProps = {
  items: FAQItemType[]
}

const FAQAccordion = ({ items }: FaqAccordionProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {items.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  )
}

export default FAQAccordion
