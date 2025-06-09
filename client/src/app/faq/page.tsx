const Banner = () => {
  return <div className="border border-yellow-300 p-4"></div>
}

const FAQ = () => {
  return (
    <div className="mt-[70px] flex flex-col">
      <div className="font-geist flex h-[600px] w-full flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
        <div
          className="col-span-1 flex flex-col justify-center gap-4 bg-[#5A9B8C] p-8 text-white"
          id="section-left"
        >
          <h1 className="mb-2 flex justify-center text-2xl font-bold">
            How Can We Help?
          </h1>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="flex text-lg font-semibold">University Support</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">External Supoort</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">Emergency Support</h2>
            <ul className="ml-4 list-disc">
              <li>Campus Care</li>
              <li>General Wellbeing Support</li>
              <li>Privacy Concerns</li>
            </ul>
          </div>
        </div>
        <div
          className="border md:col-span-2 lg:col-span-3"
          id="section-right"
        ></div>
      </div>
      <Banner />
    </div>
  )
}

export default FAQ
