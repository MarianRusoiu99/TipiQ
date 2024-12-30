"use client"

import { useEffect, useState } from "react"
import { databases } from "@/lib/appwrite"
import { Post } from "@/types"
import { PostCard } from "@/components/post-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { Query } from "appwrite"

// This is required for static site generation with `output: export`
export async function generateStaticParams() {
  try {
    // Fetch all posts from Appwrite
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      "posts"
    )

    // Generate params for each post
    return response.documents.map((post) => ({
      community: post.communityId,
      postId: post.$id,
    }))
  } catch (error) {
    // Return empty array if fetch fails
    return []
  }
}

interface PostPageProps {
  params: {
    community: string
    postId: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          "posts",
          [Query.equal("$id", params.postId)]
        )

        if (response.documents.length === 0) {
          throw new Error("Post not found")
        }

        setPost(response.documents[0] as Post)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load post",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.postId, toast])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[200px] w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <Card className="p-6">
        <h1 className="text-xl font-semibold">Post not found</h1>
        <p className="mt-2 text-muted-foreground">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <PostCard
        title={post.title}
        content={post.content}
        author={post.authorId}
        community={params.community}
        votes={post.votes}
        commentCount={0}
        createdAt={post.createdAt}
      />
      
      <Card className="p-4">
        <h2 className="text-lg font-semibold">Comments</h2>
        <p className="text-muted-foreground">Comments coming soon...</p>
      </Card>
    </div>
  )
}