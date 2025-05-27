import { pageInfo } from '@/app/components/navSearch/navSearch'
import { ExternalResource, Faq } from '@/types/types'

export async function navSearchHandler(pages: pageInfo[]): Promise<pageInfo[]> {
  const res = await fetch('http://localhost:8000/faq', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })

  if (res.ok) {
    const { data, error } = await res.json()
    const keywords = pages[1].keywords || []
    if (error) {
      console.error('Error fetching FAQ data:', error)
    } else {
      try {
        for (const faq of data) {
          const faqItem = faq as Faq
          keywords.push(faqItem.question)
          keywords.push(faqItem.answer)
        }
        pages[1].keywords = keywords
      } catch (error) {
        console.error('Error processing FAQ data:', error)
      }
    }
  }

  const res1 = await fetch('http://localhost:8000/external-resource', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
  })

  if (res1.ok) {
    const keywords = pages[2].keywords || []
    const { data, error } = await res1.json()
    if (error) {
      console.error('Error fetching ExternalResource data:', error)
    } else {
      try {
        for (const externalResource of data) {
          const resource = externalResource as ExternalResource
          keywords.push(resource.title)
          keywords.push(resource.description ?? '')
          keywords.push(resource.url)
        }
      } catch (error) {
        console.error('Error processing ExternalResource data:', error)
      }
    }
  }
  console.log('pages', pages)
  return pages
}
