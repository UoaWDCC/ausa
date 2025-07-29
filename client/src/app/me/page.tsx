import EventsList from '@/components/EventsList/EventsList'
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'

export default async function Me() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center py-30 gap-4">
      <ProfileInfo />
      <EventsList
        events={[
          {
            id: '1',
            title: 'Event 1',
            date: '2023-10-01',
            location: 'New York, NY',
          },
          {
            id: '2',
            title: 'Event 2',
            date: '2023-10-05',
            location: 'Los Angeles, CA',
          },
          {
            id: '3',
            title: 'Event 3',
            date: '2023-10-10',
            location: 'Chicago, IL',
          },
        ]}
      />
    </div>
  )
}
