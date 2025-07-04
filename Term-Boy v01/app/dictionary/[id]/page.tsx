import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Lightbulb, TrendingUp, ExternalLink, Share2 } from "lucide-react"
import { terms } from "@/lib/terminology-data"
import { RelatedTerms } from "@/components/related-terms"

interface TermPageProps {
  params: {
    id: string
  }
}

export default function TermPage({ params }: TermPageProps) {
  const term = terms.find((t) => t.id === params.id) || terms[0]

  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  return (
    <div className="container py-10 max-w-4xl">
      <div className="flex flex-col space-y-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dictionary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dictionary
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Term Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">{term.name}</h1>
              <div className="flex items-center space-x-2">
                <Badge className={difficultyColor[term.difficulty]}>{term.difficulty}</Badge>
                <Badge variant="outline" className="capitalize">
                  {term.category.replace("-", " ")}
                </Badge>
              </div>
            </div>
          </div>

          {term.subcategories && (
            <div className="flex flex-wrap gap-2">
              {term.subcategories.map((sub) => (
                <Badge key={sub} variant="secondary">
                  {sub}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Quick Definition */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Quick Definition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{term.shortDefinition}</p>
          </CardContent>
        </Card>

        {/* Detailed Definition */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Explanation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{term.definition}</p>
          </CardContent>
        </Card>

        {/* Plain English */}
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
              <Lightbulb className="mr-2 h-5 w-5" />
              In Plain English
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">{term.plainEnglish}</p>
          </CardContent>
        </Card>

        {/* Example Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Example Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg border-l-4 border-l-orange-500">
              <p className="italic text-muted-foreground">"{term.exampleUsage}"</p>
            </div>
          </CardContent>
        </Card>

        {/* Context & Applications */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Context</CardTitle>
              <CardDescription>When and where this term is used</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{term.context}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Real-World Applications
              </CardTitle>
              <CardDescription>How this applies in practice</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{term.realWorldApplications}</p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Related Terms */}
        <RelatedTerms currentTermId={term.id} category={term.category} />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button className="flex-1" asChild>
            <Link href="/learning-paths">
              <BookOpen className="mr-2 h-4 w-4" />
              Find Learning Path
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <ExternalLink className="mr-2 h-4 w-4" />
            Practice Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}
