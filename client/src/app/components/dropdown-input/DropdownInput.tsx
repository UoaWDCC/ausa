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
        onClick={toggleDropdown}
        className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 cursor-pointer"
      >
        <span className={selectedOption ? 'font-bold' : 'font-light'}>
          {selectedOption || { ...props }.placeholder}
        </span>
      </div>
      {isOpen && (
        <div className="absolute bg-[#E2E2E2] rounded-lg mt-1 w-full shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-[#9D9D9D] hover:rounded-lg font-light flex justify-between items-center"
            >
              {option}
              {selectedOption === option && <Check className="text-[#9D9D9D]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownInput
