"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { AuthButton } from './auth-button'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Menu className="h-6 w-6" />
            <span className="font-bold">Reddit Clone</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center space-x-4 px-4">
          <form className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Reddit"
                className="pl-8"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}