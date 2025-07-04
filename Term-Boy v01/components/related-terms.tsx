import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { terms } from "@/lib/terminology-data"

interface RelatedTermsProps {
  currentTermId: string
  category: string
}

export function RelatedTerms({ currentTermId, category }: RelatedTermsProps) {
  // Get related terms from the same category, excluding the current term
  const relatedTerms = terms.filter((term) => term.category === category && term.id !== currentTermId).slice(0, 3)

  if (relatedTerms.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Related Terms</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedTerms.map((term) => (
          <Card key={term.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                <Link href={`/dictionary/${term.id}`} className="hover:text-blue-600 transition-colors">
                  {term.name}
                </Link>
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {term.difficulty}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">{term.shortDefinition}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
