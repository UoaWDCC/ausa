'use client'

import { redirect } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { navSearchHandler } from '@/lib/navSearchHandler'
import { NavSearchCard } from '../navSearchCard/navSearchCard'

export interface PageInfo {
  title: string
  description: string
  href: string
  keywords?: string[]
}

// Constants
const INITIAL_PAGES: PageInfo[] = [
  {
    title: 'Home',
    description: 'Stuff about home',
    href: '/',
    keywords: ['home', 'index'],
  },
  {
    title: 'FAQ',
    description: 'Stuff about FAQ',
    href: '/faq',
    keywords: ['faq', 'questions'],
  },
  {
    title: 'External Resources',
    description: 'Stuff about External Resources',
    href: '/external-resources',
    keywords: ['external', 'resources'],
  },
  {
    title: 'Contact',
    description: 'Stuff about Contact',
    href: '/contact',
    keywords: ['contact', 'get in touch'],
  },
]

const SEARCH_PLACEHOLDER = 'Search'

const NavSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<PageInfo[]>(INITIAL_PAGES)
  const [pagesData, setPagesData] = useState<PageInfo[]>(INITIAL_PAGES)
  const [open, setOpen] = useState(false)

  // Initialize pages data
  useEffect(() => {
    navSearchHandler(INITIAL_PAGES).then((data) => setPagesData(data))
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleToggle = () => setOpen(!open)

  const filterPages = (value: string): PageInfo[] => {
    const searchTerm = value.toLowerCase()
    return pagesData.filter(
      (page) =>
        page.title.toLowerCase().includes(searchTerm) ||
        page.description.toLowerCase().includes(searchTerm) ||
        page.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm),
        ),
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    setSearchResults(filterPages(value))
  }

  const resetSearchAndClose = () => {
    setSearchValue('')
    setSearchResults(INITIAL_PAGES)
    setOpen(false)
  }

  const handleResultClick = (href: string) => {
    resetSearchAndClose()
    redirect(href)
  }

  const renderSearchResults = () => {
    if (searchResults.length === 0) {
      return <p className="text-sm">No results found</p>
    }

    return searchResults.map((result) => (
      <button
        type="button"
        key={result.title}
        onClick={() => handleResultClick(result.href)}
      >
        <NavSearchCard title={result.title} description={result.description} />
      </button>
    ))
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={handleToggle}>
        <DialogTrigger>
          <button
            type="button"
            className="group cursor-pointer relative flex h-9 w-48 items-center gap-3 rounded-sm border border-slate-50/50 bg-slate-800/50 px-3 py-2 text-sm text-slate-50 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-slate-50 hover:bg-slate-800/70 hover:text-slate-300 focus:border-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <MdOutlineSearch className="h-4 w-4 flex-shrink-0" />
            <span className="flex-1 text-left">{SEARCH_PLACEHOLDER}</span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="mb-4">Search</p>
            </DialogTitle>
            <DialogDescription>
              <div className="flex h-6 items-center space-x-2 z-10">
                <Input
                  placeholder={SEARCH_PLACEHOLDER}
                  value={searchValue}
                  onChange={handleSearch}
                />
                <MdOutlineSearch className="size-2 h-6 w-6 cursor-pointer" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full flex-col gap-2 z-10">
              {renderSearchResults()}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavSearch
