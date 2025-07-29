import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'

export default async function Me() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center p-30">
      <ProfileInfo />
    </div>
  )
}
