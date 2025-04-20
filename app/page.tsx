const Card = () => {
  return (
    <div className="border-2 border-gray-500 w-[100px] lg:w-[300px]">this is a card component</div>
  )
}

const Home = () => {
  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <div className="border border-gray-800 h-[500px] w-[400px] flex flex-col items-center justify-center lg:w-[1200px] md:w-[800px] m-4 p-4 gap-4">
        <div className="border border-gray-800 w-full p-2">section 1</div>
        {/* <div className="border border-gray-600 rounded-md w-[200px] h-[200px] mt-4 hover:bg-black hover:-translate-y-4 hover:translate-x-4 duration-300"></div> */}
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 md:grid-cols-3">
          {' '}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
export default Home
