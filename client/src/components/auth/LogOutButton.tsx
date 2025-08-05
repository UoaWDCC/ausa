'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/auth/AuthContext'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/login')
  }

  return <Button onClick={handleLogout}>Log out</Button>
}
