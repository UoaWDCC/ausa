const Banner = () => {
  return <div className="border border-yellow-300 p-4"></div>
}

const FAQ = () => {
  return (
    <div className="mt-[70px] flex flex-col">
      <div className="grid h-[600px] w-full grid-cols-5">
        <div
          className="col-span-1 m-4 flex flex-col gap-4 border"
          id="section-left"
        >
          <h1 className="flex justify-center">How Can We Help?</h1>
          <div className="border">
            <h2>University Support</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="border">
            <h2>External Supoort</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="border">
            <h2>Emergency Support</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
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
