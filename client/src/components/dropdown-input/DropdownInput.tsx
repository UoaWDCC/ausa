import { Check } from 'lucide-react'
import React from 'react'

interface IDropdownInput extends React.HTMLProps<HTMLInputElement> {
  options: string[]
}

const DropdownInput = ({ options, ...props }: IDropdownInput) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState('')

  const toggleDropdown = () => setIsOpen(!isOpen)
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="mt-1 cursor-pointer rounded-lg text-neutral-600 bg-white p-2 placeholder-[#9D9D9D]"
        onClick={toggleDropdown}
      >
        <span className={selectedOption ? 'font-bold' : 'font-light'}>
          {selectedOption || { ...props }.placeholder}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-lg bg-white shadow-lg text-black">
          {options.map((option) => (
            <div
              className="flex items-center justify-between p-2 font-light hover:rounded-lg hover:bg-blue-300"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {selectedOption === option && (
                <Check className="text-[#9D9D9D]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownInput
