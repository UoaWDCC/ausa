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
import { Button } from '@/components/ui/button'

export interface PageInfo {
  title: string
  description: string
  href: string
  keywords?: string[]
}

// Constants
const isMac =
  typeof window !== 'undefined' &&
  window.navigator.platform.toUpperCase().indexOf('MAC') >= 0

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
      // Need to handle mac
      if ((event.metaKey || event.ctrlKey) && event.key === 'k' && !open) {
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])
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
    <Dialog open={open} onOpenChange={handleToggle}>
      <DialogTrigger>
        <Button
          variant="outline"
          className="group cursor-pointer relative flex w-48 items-center gap-3  bg-slate-800/50 px-3 shadow-sm backdrop-blur-sm transition-all duration-200  hover:bg-slate-800/70 hover:text-slate-300 focus:border-purple-800 focus:ring-2 focus:ring-blue-500/20"
        >
          <MdOutlineSearch className="h-4 w-4 flex-shrink-0" />
          <span className="flex-1 text-left">{SEARCH_PLACEHOLDER}</span>
          <div className="pointer-events-none absolute right-3 top-[50%] -translate-y-1/2 select-none items-center gap-1">
            {/**  Keyboard shortcut hint */}
            <kbd className="flex items-center gap-1 rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
              <span className="text-xs">{isMac ? '⌘' : 'Ctrl'}</span>
              <span>K</span>
            </kbd>
          </div>
        </Button>
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
  )
}

export default NavSearch
