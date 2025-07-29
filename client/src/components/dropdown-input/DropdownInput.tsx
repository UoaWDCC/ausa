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
        className="mt-1 cursor-pointer rounded-lg bg-white/10 p-2 placeholder-[#9D9D9D]"
      >
        <span className={selectedOption ? 'font-bold text-white' : 'text-[#9D9D9D]'}>
          {selectedOption || { ...props }.placeholder}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-lg bg-[#3D4146] shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="flex items-center justify-between p-2 font-light hover:rounded-lg hover:text-white hover:outline-2 hover:outline-white"
            >
              {option}
              {selectedOption === option && (
                <Check className="text-white"/>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownInput
