"use client"

import { Button } from "@/components/ui/button"
import { LogIn, LogOut, UserPlus } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { signOut } from "@/lib/auth"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function AuthButton() {
  const { user, loading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  if (loading) {
    return null
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" asChild>
          <Link href="/auth/sign-in">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-up">
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Link>
        </Button>
      </div>
    )
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: "Signed out successfully",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Error signing out",
        variant: "destructive",
      })
    }
  }

  return (
    <Button variant="outline" onClick={handleSignOut}>
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  )
}