import React from 'react'
import { ResourcesCarousel } from '@/components/ResourcesCarousel/ResourcesCarousel'
import { ResourcesTitle } from '@/components/ResourcesTitle/ResourcesTitle'
import type { ExternalResource } from '@/types/types'

// import Footer from '@/components/footer/Footer'

export default async function Resources() {
  const externalResourceMap: Record<string, ExternalResource[]> = {}

  const url = process.env.BACKEND_URL || 'http://localhost:8000'
  const res = await fetch(`${url}/external-resource-category`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })
  const externalResourceCategories = await res.json()

  await Promise.all(
    externalResourceCategories.data.map(async (category: ExternalResource) => {
      const res = await fetch(
        `${url}/external-resources?category=${category.id}`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
          mode: 'cors',
        },
      )
      const externalResourceData = await res.json()
      externalResourceMap[category.id] = externalResourceData.data.sort(
        (a: ExternalResource, b: ExternalResource) =>
          a.title.localeCompare(b.title),
      )
    }),
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
          const category = externalResourceCategories.data.find(
            (cat: ExternalResource) => cat.id === categoryId,
          )
          if (!category) return null
          return (
            <React.Fragment key={categoryId}>
              <ResourcesTitle
                title={category.name}
                description={category.description}
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
