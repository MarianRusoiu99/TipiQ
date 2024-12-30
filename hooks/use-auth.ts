"use client"

import { useEffect, useState } from "react"
import { getCurrentUser } from "@/lib/auth"
import type { Models } from "appwrite"

export function useAuth() {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false))
  }, [])

  return {
    user,
    loading,
    isAuthenticated: !!user,
  }
}