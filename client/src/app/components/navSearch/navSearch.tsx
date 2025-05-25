'use client'

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
import { MdOutlineSearch } from 'react-icons/md'
import { NavSearchCard } from '../navSearchCard/navSearchCard'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'

interface pageInfo {
  title: string
  description: string
  href: string
  keywords?: string[]
}

const NavSearch: React.FC = () => {
  const pages: pageInfo[] = [
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

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<pageInfo[]>(pages)
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    const filteredResults = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(value.toLowerCase()) ||
        page.description.toLowerCase().includes(value.toLowerCase()) ||
        (page.keywords &&
          page.keywords.some((keyword) =>
            keyword.toLowerCase().includes(value.toLowerCase()),
          )),
    )
    setSearchResults(filteredResults)
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={handleToggle}>
        <DialogTrigger>
          <Input className="text-md h-6 px-2" placeholder={'Search'} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="mb-4">Search</p>
            </DialogTitle>
            <DialogDescription>
              <div className="flex h-6 items-center space-x-2">
                {/* <div className="grid flex-1 gap-2"> */}
                <Input
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleSearch}
                />
                {/* </div> */}
                <MdOutlineSearch className="size-2 h-6 w-6 cursor-pointer" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full flex-col gap-2">
              {searchResults.map((res) => (
                <button
                  key={res.title}
                  onClick={() => {
                    setSearchValue('')
                    setSearchResults(pages)
                    setOpen(false)
                    redirect(res.href)
                  }}
                >
                  <NavSearchCard
                    title={res.title}
                    description={res.description}
                  />
                </button>
              ))}
              {searchResults.length === 0 && (
                <p className="text-sm"> No results found </p>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavSearch
