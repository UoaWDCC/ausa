import React from 'react'
import { ResourcesCarousel } from '@/components/ResourcesCarousel/ResourcesCarousel'
import { ResourcesTitle } from '@/components/ResourcesTitle/ResourcesTitle'
import client from '@/services/fetch-client'
import type { ExternalResource, ExternalResourceCategory } from '@/types/types'

// import Footer from '@/components/footer/Footer'

export default async function Resources() {
  const externalResourceMap: Record<string, ExternalResource[]> = {}

  const res = await client.GET('/external-resource-category')

  const externalResourceCategories = res.data?.data || []

  await Promise.all(
    externalResourceCategories.map(
      async (category: ExternalResourceCategory) => {
        const res = await client.GET('/external-resources', {
          params: { query: { category: category.id } },
        })
        const externalResourceData = res.data?.data || []
        externalResourceMap[category.id] = externalResourceData.sort(
          (a: ExternalResource, b: ExternalResource) =>
            a.title.localeCompare(b.title),
        )
      },
    ),
  )

  // test comment
  const categories = Object.keys(externalResourceMap)

  return (
    <div>
      {/* Financial */}
      <div className="pt-25">
        {categories.map((categoryId) => {
          const resources = externalResourceMap[categoryId]
          if (resources.length === 0) return null
          const category = externalResourceCategories.find(
            (cat: ExternalResourceCategory) => cat.id === categoryId,
          )
          if (!category) return null
          return (
            <React.Fragment key={categoryId}>
              <ResourcesTitle
                description={category.description}
                title={category.name}
              />
              <ResourcesCarousel resources={resources} />
            </React.Fragment>
          )
        })}
      </div>
      {/* <footer className="relative z-20 mt-auto">
        <Footer />
      </footer> */}
    </div>
  )
}
