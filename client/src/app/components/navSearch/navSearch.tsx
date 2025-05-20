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
import React, { useState } from 'react'

interface pageInfo {
  title: string
  description: string
}

const NavSearch: React.FC = () => {
  const pages = [
    {
      title: 'Home',
      description: 'Stuff about home',
    },
    {
      title: 'FAQ',
      description: 'Stuff about FAQ',
    },
    {
      title: 'External Resources',
      description: 'Stuff about External Resources',
    },
    {
      title: 'Contact',
      description: 'Stuff about Contact',
    },
  ]

  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<pageInfo[]>(pages)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    const filteredResults = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(value.toLowerCase()) ||
        page.description.toLowerCase().includes(value.toLowerCase()),
    )
    setSearchResults(filteredResults)
  }

  return (
    <div>
      <Dialog>
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
                <div className="grid flex-1 gap-2">
                  <Input
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </div>
                <MdOutlineSearch className="size-2 h-6 w-6 cursor-pointer" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full flex-col gap-2">
              {searchResults.map((res) => (
                <NavSearchCard
                  key={res.title}
                  title={res.title}
                  description={res.description}
                />
              ))}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavSearch
