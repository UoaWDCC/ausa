import Sidebar from '@/components/sidebar/sidebar'
import { IoMdPerson } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default async function Me() {
  /*return (
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
  )*/
  const links = [
    { label: 'Profile', href: '/me/profile', icon: IoMdPerson },
    { label: 'Notifications', href: '/me/notifications', icon: FaBell },
    { label: 'Privacy', href: '/me/privacy', icon: MdLock },
    { label: 'Language', href: '/me/languages', icon: TbWorld },
    { label: 'Help', href: '/me/events' },
  ];
  return (
    <div className="w-full min-h-[100vh] h-full">
      <Sidebar links={links} />
    </div>
    )
}
