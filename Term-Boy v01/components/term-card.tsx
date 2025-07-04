import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookmarkPlus, ExternalLink, TrendingUp, Building, Globe, Cpu, Leaf, Home } from "lucide-react"
import type { Term } from "@/lib/types"

interface TermCardProps {
  term: Term
}

const categoryIcons = {
  fundamentals: TrendingUp,
  investing: TrendingUp,
  trading: TrendingUp,
  corporate: Building,
  economics: Globe,
  technology: Cpu,
  sustainability: Leaf,
  "real-estate": Home,
}

export function TermCard({ term }: TermCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const CategoryIcon = categoryIcons[term.category as keyof typeof categoryIcons] || TrendingUp

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CategoryIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground capitalize">{term.category.replace("-", " ")}</span>
            </div>
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{term.name}</CardTitle>
            {term.subcategories && (
              <div className="flex flex-wrap gap-1 mt-2">
                {term.subcategories.slice(0, 2).map((sub) => (
                  <Badge key={sub} variant="outline" className="text-xs">
                    {sub}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <Badge className={difficultyColor[term.difficulty]}>{term.difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{term.shortDefinition}</p>
        {term.exampleUsage && (
          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-xs text-muted-foreground mb-1">Example:</p>
            <p className="text-sm italic line-clamp-2">"{term.exampleUsage}"</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="ghost" size="sm">
          <BookmarkPlus className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dictionary/${term.id}`}>
            Learn More
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
