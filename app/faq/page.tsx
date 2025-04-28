import FAQAccordion from '../components/faq/FAQAccordion'
import FAQButton from '../components/faq/FAQButton'

const FAQItems = [
  {
    question: 'What is academic misconduct?',
    answer:
      'Lorem, ipsum dolor sit amet earum molestiae quisquam! Eveniet magnam mollitia praesentium molestias, repudiandae officia enim qui laudantium iure illo quia ipsa alias dicta harum nihil cupiditate placeat? Natus dolores distinctio debitis numquam odio provident fugiat accusamus maiores. Rem molestias distinctio animi unde accusamus!',
  },
  {
    question: 'What are the different types of academic misconduct at the university?',
    answer:
      'Lorem, ipsum dolor sit amet earum molestiae quisquam! Eveniet magnam mollitia praesentium molestias, repudiandae officia enim qui laudantium iure illo quia ipsa alias dicta harum nihil cupiditate placeat? Natus dolores distinctio debitis numquam odio provident fugiat accusamus maiores. Rem molestias distinctio animi unde accusamus!',
  },
  {
    question: "What is the university's disciplinary committee?",
    answer:
      'Lorem, ipsum dolor sit amet earum molestiae quisquam! Eveniet magnam mollitia praesentium molestias, repudiandae officia enim qui laudantium iure illo quia ipsa alias dicta harum nihil cupiditate placeat? Natus dolores distinctio debitis numquam odio provident fugiat accusamus maiores. Rem molestias distinctio animi unde accusamus!',
  },
  {
    question: 'Is counselling free for all students?',
    answer:
      'Lorem, ipsum dolor sit amet earum molestiae quisquam! Eveniet magnam mollitia praesentium molestias, repudiandae officia enim qui laudantium iure illo quia ipsa alias dicta harum nihil cupiditate placeat? Natus dolores distinctio debitis numquam odio provident fugiat accusamus maiores. Rem molestias distinctio animi unde accusamus!',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi ex quibusdam nostrum sequi ab ipsa!',
  },
  {
    question: 'Are services confidential?',
    answer:
      'Lorem ipsum, suscipit id ipsam, minus pariatur! Harum molestias dolore velit atque recusandae corporis fugiat nulla voluptatibus.',
  },
]

const FAQ = () => {
  return (
    <div className="font-RG bg-white min-h-screen flex flex-col">
      <div className="w-full bg-gray-300 py-28 flex justify-center">
        <h1 className="text-6xl text-black">FAQs</h1>
      </div>
      <div className="m-4">
        <div className="py-10 flex justify-center">
          <p className="text-3xl font-RK font-semibold text-gray-600">
            Anything you want to know from us?
          </p>
        </div>
        <FAQAccordion items={FAQItems} />
        <div className="pt-10 flex justify-center">
          <p className="text-3xl font-RK font-semibold text-gray-600">
            Didn't find the answer you were looking for?
          </p>
        </div>
        <FAQButton />
      </div>
    </div>
  )
}
export default FAQ
