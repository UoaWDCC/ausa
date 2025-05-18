import ButtonComponent from './components/button/Button'
import TextBoxComponent from './components/text-box/TextBox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/accordion/Accordion'

const Home = () => {
  return (
    <div>
      <div className="m-4 flex gap-2">
        <TextBoxComponent theme="primary" border={true} text="example text" />
        <TextBoxComponent theme="secondary" border={true} text="example text" />
        <TextBoxComponent theme="ghost" border={true} text="example text" />
        <TextBoxComponent theme="warning" border={true} text="example text" />
        <TextBoxComponent theme="error" border={true} text="example text" />
        <ButtonComponent theme="primary" border={true} />
        <ButtonComponent theme="primary" border={false} />
        <ButtonComponent theme="secondary" border={true} />
        <ButtonComponent theme="secondary" border={false} />
        <ButtonComponent theme="warning" border={true} />
        <ButtonComponent theme="ghost" border={true} />
        <ButtonComponent theme="error" border={true} />
        <ButtonComponent theme="primary-out" border={true} />
        <ButtonComponent theme="secondary-out" border={true} />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p>askjdhaskdhsald</p>
    </div>
  )
}
export default Home
