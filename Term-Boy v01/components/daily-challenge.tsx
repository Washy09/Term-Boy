import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { mockTerms } from "@/lib/mock-data"

export function DailyChallenge() {
  // Get a random term for the daily challenge
  const dailyTerm = mockTerms[Math.floor(Math.random() * mockTerms.length)]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Daily Challenge</CardTitle>
          <Calendar className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Learn a new term every day</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <h3 className="font-medium">{dailyTerm.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{dailyTerm.shortDefinition}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" asChild>
          <Link href={`/dictionary/${dailyTerm.id}`}>Learn This Term</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
