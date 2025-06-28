import PortalItem from '@/components/portal/portal-item/portal-item'
const Portal = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <PortalItem title="faq" content="this is a string" link="/faq" />
        <PortalItem title="quiz" content="this is a string" link="/quiz" />
      </div>
      <div className="font-geist mt-[70px] flex h-screen flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-4 rounded-sm bg-white p-8">
          <h1 className="border text-xl font-bold">portal component</h1>
          <div className="flex gap-4">
            {' '}
            <PortalItem title="faq" content="this is a string" link="/faq" />
            <PortalItem title="quiz" content="this is a string" link="/quiz" />
          </div>
          <div className="flex gap-4">
            <button className="rounded-sm border bg-blue-800 p-2 text-white">
              sign up
            </button>
            <button className="rounded-sm border bg-blue-800 p-2 text-white">
              log in
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portal
