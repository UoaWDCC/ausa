import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faq',
  fields: [
    {
        name: "question",
        type: "text",
        required: true,
        admin:{
            description: "The question that will be asked in the FAQ section."
        }
    },
    {
        name: "answer",
        type: "textarea",
        required: true,
        admin:{
            description: "The answer to the question in the FAQ section."
        }
    },
  ],
}
