import TextBoxComponent from './components/text-box/TextBox'

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <TextBoxComponent
          text="hello this is a primary textbox component"
          theme="primary"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a secondary textbox component"
          theme="secondary"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a ghost textbox component"
          theme="ghost"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="warning"
          border={true}
        />{' '}
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="error"
          border={true}
        />{' '}
      </div>
      <div className="flex gap-2">
        <TextBoxComponent
          text="hello this is a primary textbox component"
          theme="primary"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a secondary textbox component"
          theme="secondary"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a ghost textbox component"
          theme="ghost"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="warning"
          border={false}
        />{' '}
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="error"
          border={false}
        />{' '}
      </div>
    </div>
  )
}
export default Home
