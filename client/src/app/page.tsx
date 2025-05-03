import ButtonComponent from './components/button/Button'
const Home = () => {
  return (
    <div className="m-4 flex gap-2">
      <ButtonComponent theme="primary" border={true} />
      <ButtonComponent theme="primary" border={false} />
    </div>
  )
}
export default Home
