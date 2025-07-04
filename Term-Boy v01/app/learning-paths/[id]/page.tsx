import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Check, Clock, Users } from "lucide-react"
import { mockLearningPaths, mockTerms } from "@/lib/mock-data"

interface LearningPathPageProps {
  params: {
    id: string
  }
}

export default function LearningPathPage({ params }: LearningPathPageProps) {
  // Find the learning path by ID
  const path = mockLearningPaths.find((p) => p.id === params.id) || mockLearningPaths[0]

  // Get terms for this learning path (random selection for demo)
  const pathTerms = [...mockTerms]
    .sort(() => 0.5 - Math.random())
    .slice(0, path.termCount)
    .map((term, index) => ({
      ...term,
      completed: index < (path.termCount * path.progress) / 100,
      current: index === Math.floor((path.termCount * path.progress) / 100),
    }))

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/learning-paths">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Paths
            </Link>
          </Button>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tight">{path.title}</h1>
            <Badge
              className={
                path.difficulty === "Beginner"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : path.difficulty === "Intermediate"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              }
            >
              {path.difficulty}
            </Badge>
          </div>
          <p className="text-muted-foreground">{path.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{path.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{path.termCount} terms</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{path.enrolledCount} enrolled</span>
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{path.progress}%</span>
            </div>
            <Progress value={path.progress} className="h-2" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Learning Path Content</h2>
          <div className="space-y-4">
            {pathTerms.map((term, index) => (
              <Card
                key={term.id}
                className={
                  term.completed
                    ? "border-green-200 bg-green-50 dark:bg-green-950/10 dark:border-green-900/50"
                    : term.current
                      ? "border-blue-200 bg-blue-50 dark:bg-blue-950/10 dark:border-blue-900/50"
                      : ""
                }
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          term.completed
                            ? "bg-green-500 text-white"
                            : term.current
                              ? "bg-blue-500 text-white"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {term.completed ? <Check className="h-4 w-4" /> : index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">{term.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {term.category} • {term.difficulty}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={term.completed ? "outline" : term.current ? "default" : "outline"}
                      size="sm"
                      disabled={!term.completed && !term.current}
                      asChild
                    >
                      <Link href={`/dictionary/${term.id}`}>{term.completed ? "Review" : "Learn"}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
