import Card from './components/card/Card'
// Removed unused imports and fixed module path if necessary
const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="grid grid-cols-1">
          <Card title="11" content="hello" />
        </div>{' '}
        <div className="grid grid-cols-2">
          <Card title="11" content="hello" />
          <Card title="11" content="hello" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <Card title="11" content="hello" />
          <Card title="11" content="hello" />
        </div>{' '}
        <div className="grid grid-cols-1">
          <Card title="11" content="hello" />
        </div>
      </div>
    </div>
  )
}
export default Home
