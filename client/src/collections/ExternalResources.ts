import type { CollectionConfig } from 'payload'

export const ExternalResources: CollectionConfig = {
  slug: 'externalResources',
  fields: [
    {
        name: "title",
        type: "text",
        required: true,
        admin:{
            description: "The title of the resource"
        }
    },
    {
        name: "description",
        type: "textarea",
        required: true,
        admin:{
            description: "The answer to the question in the FAQ section."
        }
    },
    {
        name: "url",
        type: "text",
        required: true,
        admin:{
            description: "The URL of the resource"
        }
    }
  ],
}
