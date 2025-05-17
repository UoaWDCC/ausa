import { Button } from './components/button/Button'

const Home = () => {
  return (
    <div className="m-4 flex gap-2">
      <Button>Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
export default Home
