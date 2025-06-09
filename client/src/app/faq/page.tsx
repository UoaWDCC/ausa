const Banner = () => {
  return <div className="border border-yellow-300 p-4"></div>
}

const FAQ = () => {
  return (
    <div className="mt-[70px] flex min-h-screen flex-col">
      <div className="grid h-[200px] w-full grid-cols-5">
        {' '}
        <div className="col-span-1 border" id="section-left">
          1
        </div>
        <div className="col-span-4 border" id="section-right">
          4
        </div>
      </div>
      <Banner />
    </div>
  )
}

export default FAQ
