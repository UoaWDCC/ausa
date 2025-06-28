import PortalItem from '@/components/portal/portal-item/portal-item'
const Portal = () => {
  return (
    <div className="font-geist mt-[70px] flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4 rounded-md border-4 border-gray-500 bg-white p-8">
        <h1 className="border text-xl font-bold">portal component</h1>
        <div className="flex gap-4">
          {' '}
          <PortalItem title="faq" content="this is a string" link="/faq" />
          <PortalItem title="quiz" content="this is a string" link="/quiz" />
        </div>
        <div className="flex gap-4">
          <button className="rounded-sm border p-2">sign up</button>
          <button className="rounded-sm border p-2">log in</button>
        </div>
      </div>
    </div>
  )
}

export default Portal
