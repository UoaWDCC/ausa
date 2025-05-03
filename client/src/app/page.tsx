import ButtonComponent from './components/button/Button'
const Home = () => {
  return (
    <div className="m-4 flex gap-2">
      <ButtonComponent theme="primary" border={true} />
      <ButtonComponent theme="primary" border={false} />
      <ButtonComponent theme="secondary" border={true} />
      <ButtonComponent theme="secondary" border={false} />
      <ButtonComponent theme="warning" border={true} />
      <ButtonComponent theme="ghost" border={true} />
      <ButtonComponent theme="error" border={true} />
      <ButtonComponent theme="primary-out" border={true} />
      <ButtonComponent theme="secondary-out" border={true} />
    </div>
  )
}
export default Home
