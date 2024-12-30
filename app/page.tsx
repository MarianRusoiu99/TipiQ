import { PostCard } from '@/components/post-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Popular Posts</h1>
          <Button asChild>
            <Link href="/submit">
              <Plus className="mr-2 h-4 w-4" />
              Create Post
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          {/* Placeholder posts - will be replaced with real data */}
          <PostCard
            title="Welcome to our Reddit Clone!"
            content="This is a sample post to demonstrate the layout and design."
            author="admin"
            community="general"
            votes={42}
            commentCount={10}
            createdAt={new Date().toISOString()}
          />
        </div>
      </div>

      <div className="hidden w-80 space-y-6 lg:block">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-semibold">About Reddit Clone</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A modern Reddit clone built with Next.js, shadcn/ui, and Appwrite.
            Join our community to share and discuss interesting content!
          </p>
          <Button className="mt-4 w-full">Create Account</Button>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-semibold">Popular Communities</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/r/technology" className="text-sm hover:underline">
                r/technology
              </Link>
            </li>
            <li>
              <Link href="/r/gaming" className="text-sm hover:underline">
                r/gaming
              </Link>
            </li>
            <li>
              <Link href="/r/movies" className="text-sm hover:underline">
                r/movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}