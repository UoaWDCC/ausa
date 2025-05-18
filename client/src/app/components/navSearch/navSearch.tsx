import { Button } from '../button/Button'
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

const NavSearch: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Input placeholder={'Search'} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              <Input placeholder={'What are you searching for?'} />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="default">Search</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavSearch
