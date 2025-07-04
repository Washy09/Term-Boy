import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import { mockTerms } from "@/lib/mock-data"

export function RecentlyViewed() {
  // Get 5 random terms for recently viewed
  const recentTerms = [...mockTerms].sort(() => 0.5 - Math.random()).slice(0, 5)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recently Viewed</CardTitle>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Terms you've recently explored</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <ul className="space-y-2">
          {recentTerms.map((term) => (
            <li key={term.id}>
              <Link href={`/dictionary/${term.id}`} className="text-sm hover:underline hover:text-primary">
                {term.name}
              </Link>
              <p className="text-xs text-muted-foreground">
                {term.category} • {term.difficulty}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/dictionary">
            View All Terms
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
