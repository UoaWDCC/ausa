'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

// Interface for resources in result screens
// Each resource has text and a URL to navigate to
interface Resource {
  text: string
  url: string
}

// Interface for options in question screens
// Each option has text and a nextScreenId to navigate to
interface Option {
  text: string
  nextScreenId: string
}

interface BaseScreen {
  type: string // Will be refined by specific screen types
  title?: string
  description?: string
}

// Intro screen interface with nextScreenId
interface IntroScreen extends BaseScreen {
  type: 'intro'
  title: string
  description: string
  buttonText: string
  nextScreenId: string
}

// Question screen interface with options
interface QuestionScreen extends BaseScreen {
  type: 'question'
  question: string
  options: Option[]
}

// Result screen interface with resources
interface ResultScreen extends BaseScreen {
  type: 'result'
  title: string
  description: string
  resources: Resource[]
}

// Union type for all possible screen types
type Screen = IntroScreen | QuestionScreen | ResultScreen

// Interface for the main quizData object
interface QuizData {
  [key: string]: Screen
}

// Main quiz data object containing all screens and their flow
// Each screen has a unique ID and can be of type intro, question, or result
const quizData: QuizData = {
  start: {
    type: 'intro',
    title: 'Accessing Support',
    description:
      'Welcome to the UoA Support Navigator. Answer a few quick questions so we can guide you to the right resources.',
    buttonText: 'Start!',
    nextScreenId: 'howAreYouFeeling',
  },
  howAreYouFeeling: {
    type: 'question',
    question: 'How are you feeling?',
    options: [
      { text: "I'm lost", nextScreenId: 'imLost' },
      { text: 'Anxious', nextScreenId: 'anxious' },
      { text: 'Overwhelmed', nextScreenId: 'poorMentalHealth' },
    ],
  },
  imLost: {
    type: 'result',
    title: 'Support for feeling lost',
    description:
      "It's okay to feel lost. Here are some resources that might help:",
    resources: [
      {
        text: 'Student Services Online',
        url: 'https://www.auckland.ac.nz/en/students/my-tools/sso.html',
      },
      { text: 'UoA Home Page', url: 'https://www.auckland.ac.nz/en.html' },
    ],
  },
  anxious: {
    type: 'question',
    question: 'Is your anxiety related to:',
    options: [
      { text: 'Financial reasons?', nextScreenId: 'financial' },
      { text: 'Academic reasons?', nextScreenId: 'academic' },
    ],
  },
  financial: {
    type: 'result',
    title: 'Financial Support',
    description: 'Financial worries can be tough. Consider these options:',
    resources: [
      { text: 'Student Job Search', url: 'https://www.sjs.co.nz/' },
      {
        text: 'StudyLink (Apply for loan or course cost)',
        url: 'https://www.studylink.govt.nz/',
      },
      {
        text: 'Financial Wellbeing',
        url: 'https://www.auckland.ac.nz/en/students/student-support/personal-support/be-well/financial-wellbeing.html',
      },
      {
        text: 'Student Emergency Fund',
        url: 'https://www.auckland.ac.nz/en/study/fees-and-money-matters/financial-support/hardship-support.html',
      },
    ],
  },
  academic: {
    type: 'result',
    title: 'Academic Support',
    description: 'For academic challenges, these resources can assist:',
    resources: [
      {
        text: 'UoA Learning Support',
        url: 'https://www.auckland.ac.nz/en/students/student-support/academic-support.htmll',
      },
      {
        text: 'Been accused of misconduct (Information)',
        url: 'https://www.auckland.ac.nz/en/staff/education-office/academic-integrity/academic-integrity-policies-and-guidelines/breaches-of-academic-integrity.html',
      },
    ],
  },
  poorMentalHealth: {
    type: 'question',
    question: 'Have you accessed UoA support yet?',
    options: [
      { text: 'Not yet', nextScreenId: 'notYetAccessedUoA' },
      { text: 'Yes', nextScreenId: 'lookingForExternalSupports' },
    ],
  },
  notYetAccessedUoA: {
    type: 'result',
    title: 'UoA Internal Support',
    description:
      "It's a great step to seek support. Here are some internal options:",
    resources: [
      {
        text: 'Campus Care (good place to start)',
        url: 'https://www.auckland.ac.nz/en/students/student-support/personal-support/te-papa-manaaki-campus-care.html',
      },
      {
        text: 'Health and Counselling Appointments',
        url: 'https://www.auckland.ac.nz/en/students/student-support/personal-support/student-health-counselling.html',
      },
    ],
  },
  lookingForExternalSupports: {
    type: 'result',
    title: 'External Support Options',
    description:
      "If you've already accessed UoA support, here are some external options:",
    resources: [
      {
        text: 'External resources in Auckland',
        url: 'https://mentalhealth.org.nz/help/accessing-mental-health-services',
      },
      { text: 'Urgent help', url: 'https://mentalhealth.org.nz/helplines' },
    ],
  },
}
const Quiz: React.FC = () => {
  // State to manage the current screen displayed to the user
  const [currentScreenId, setCurrentScreenId] = useState<string>('start')
  // State to store the option selected by the user for the current question
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  // History stack to enable 'Previous' button functionality
  const [history, setHistory] = useState<string[]>([])
  // Get the current screen data from quizData based on currentScreenId
  const currentScreen: Screen = quizData[currentScreenId]

  // Function to handle option clicks for questions
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  // Function to navigate to the next screen
  const handleNext = () => {
    // Add current screen to history before moving forward
    setHistory((prevHistory) => [...prevHistory, currentScreenId])

    // Determine the next screen ID based on the selected option or pre-defined flow
    let nextId: string | null = null
    if (currentScreen.type === 'intro') {
      nextId = currentScreen.nextScreenId
    } else if (currentScreen.type === 'question') {
      // Find the next screen ID based on the selected option's 'nextScreenId'
      const chosenOption = currentScreen.options.find(
        (opt: Option) => opt.text === selectedOption,
      )
      nextId = chosenOption ? chosenOption.nextScreenId : null
    }

    // If a valid next screen is determined, update the current screen and reset selected option
    if (nextId && quizData[nextId]) {
      setCurrentScreenId(nextId)
      setSelectedOption(null) // Clear selected option for the new screen
    }
  }

  // Function to navigate back to the previous screen
  const handlePrevious = () => {
    if (history.length > 0) {
      // Pop the last screen ID from history to get the previous one
      const prevScreenId = history[history.length - 1]
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1))
      setCurrentScreenId(prevScreenId)
      setSelectedOption(null) // Clear selected option when going back
    }
  }

  // Function to restart the quiz
  const handleRestart = () => {
    setCurrentScreenId('start')
    setSelectedOption(null)
    setHistory([])
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 font-sans">
      <div className="bg-neutral-200/80 text-[#2D3B4E] rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto border border-gray-200">
        {/* Render content based on the current screen type */}
        {currentScreen.type === 'intro' && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-blue-800">
              {(currentScreen as IntroScreen).title}
            </h1>
            <p className="text-lg mb-10 leading-relaxed">
              {(currentScreen as IntroScreen).description}
            </p>
            <Button onClick={handleNext} size="lg">
              {(currentScreen as IntroScreen).buttonText}
            </Button>
          </div>
        )}

        {currentScreen.type === 'question' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              {(currentScreen as QuestionScreen).question}
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {(currentScreen as QuestionScreen).options.map(
                (option: Option) => (
                  <Button
                    key={option.text}
                    onClick={() => handleOptionClick(option.text)}
                    className={`w-full py-3 rounded-lg text-lg transition-all duration-200 ease-in-out
                    ${
                      selectedOption === option.text
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-[#2D3B4E] border border-gray-300 hover:bg-gray-50'
                    }`}
                    variant="default"
                  >
                    {option.text}
                  </Button>
                ),
              )}
            </div>
            <div className="flex justify-between mt-6">
              <Button
                onClick={handlePrevious}
                variant="default"
                disabled={history.length === 0} // Disable if no history
              >
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!selectedOption}>
                Next
              </Button>
            </div>
          </div>
        )}

        {currentScreen.type === 'result' && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-blue-400">
              {(currentScreen as ResultScreen).title}
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              {(currentScreen as ResultScreen).description}
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {(currentScreen as ResultScreen).resources.map(
                (resource: Resource) => (
                  <a
                    key={resource.text}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 rounded-lg bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
                  >
                    {resource.text}
                  </a>
                ),
              )}
            </div>
            <div className="flex align-items justify-center mt-6">
              <Button onClick={handleRestart}>Restart Quiz</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
