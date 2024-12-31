import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">
        The page you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Go Home </Link>
      </Button>
    </div>
  )
}