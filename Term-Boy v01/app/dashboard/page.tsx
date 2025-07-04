import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Flame, Trophy } from "lucide-react"
import { DailyChallenge } from "@/components/daily-challenge"
import { LearningStreak } from "@/components/learning-streak"
import { RecentlyViewed } from "@/components/recently-viewed"
import { mockLearningPaths } from "@/lib/mock-data"

export default function DashboardPage() {
  // Get the user's active learning paths (with progress > 0)
  const activePaths = mockLearningPaths.filter((path) => path.progress > 0)

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Flame className="mr-2 h-5 w-5 text-orange-500" />
                  <span className="text-2xl font-bold">7 days</span>
                </div>
                <Badge variant="outline">Best: 14 days</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Terms Learned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-2xl font-bold">42 terms</span>
                </div>
                <Badge variant="outline">+3 today</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">XP Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="text-2xl font-bold">1,250 XP</span>
                </div>
                <Badge variant="outline">Level 5</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-2xl font-bold">12.5 hours</span>
                </div>
                <Badge variant="outline">+15 min today</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Paths</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activePaths.length > 0 ? (
                    activePaths.slice(0, 3).map((path) => (
                      <div key={path.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{path.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {path.termCount} terms • {path.duration}
                            </p>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={`/learning-paths/${path.id}`}>Continue</Link>
                          </Button>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{path.progress}%</span>
                          </div>
                          <Progress value={path.progress} className="h-2" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground mb-4">You haven't started any learning paths yet</p>
                      <Button asChild>
                        <Link href="/learning-paths">Browse Learning Paths</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              {activePaths.length > 0 && (
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learning-paths">
                      View All Learning Paths
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Activity</CardTitle>
                <CardDescription>Your learning progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Learning activity chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <DailyChallenge />
            <LearningStreak />
            <RecentlyViewed />
          </div>
        </div>
      </div>
    </div>
  )
}
