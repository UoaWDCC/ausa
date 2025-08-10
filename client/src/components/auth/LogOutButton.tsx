'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/auth/AuthContext'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    alert('You have been logged out.')
    router.push('/')
  }

  return (
    <Button 
      onClick={handleLogout}
      variant="outline"
      className="text-xs sm:text-sm px-2 sm:px-3"
    >
      Log out
    </Button>
  )
}
