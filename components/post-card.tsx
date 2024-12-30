"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2 } from 'lucide-react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface PostCardProps {
  title: string
  content: string
  author: string
  community: string
  votes: number
  commentCount: number
  createdAt: string
}

export function PostCard({
  title,
  content,
  author,
  community,
  votes,
  commentCount,
  createdAt,
}: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <div className="flex flex-col items-center bg-muted px-2 py-4">
          <Button variant="ghost" size="icon">
            <ArrowBigUp className="h-5 w-5" />
          </Button>
          <span className="text-sm font-medium">{votes}</span>
          <Button variant="ghost" size="icon">
            <ArrowBigDown className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 p-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href={`/r/${community}`}
              className="font-medium hover:underline"
            >
              r/{community}
            </Link>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              Posted by u/{author}{' '}
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </span>
          </div>

          <h2 className="mt-2 text-xl font-semibold">
            <Link href={`/r/${community}/comments/1`} className="hover:underline">
              {title}
            </Link>
          </h2>

          <p className="mt-2 text-muted-foreground">{content}</p>

          <div className="mt-4 flex space-x-4">
            <Button variant="ghost" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              {commentCount} Comments
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}