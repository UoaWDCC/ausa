import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { MdOutlineSearch } from 'react-icons/md'
import { NavSearchCard } from '../navSearchCard/navSearchCard'

const NavSearch: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Input className="text-md h-6 px-2" placeholder={'Search'} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="mb-4">Search</p>
            </DialogTitle>
            <DialogDescription>
              <div className="flex h-6 items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input placeholder="Search" />
                </div>
                <MdOutlineSearch className="size-2 h-6 w-6 cursor-pointer" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <NavSearchCard title="Test" description="Hi test" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavSearch
