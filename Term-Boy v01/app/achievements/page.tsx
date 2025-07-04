import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Clock, Flame, Trophy, Users } from "lucide-react"
import { mockAchievements } from "@/lib/mock-data"

export default function AchievementsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
          <p className="text-muted-foreground">Track your progress and unlock rewards as you learn</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold">1,250 XP</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-2xl font-bold">Level 5</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
                <span className="text-2xl font-bold">12 / 30</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold">#1,245</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Next Level: 1,500 XP</span>
            <span>1,250 / 1,500 XP</span>
          </div>
          <Progress value={83} className="h-2" />
        </div>

        <Tabs defaultValue="badges" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="levels">Levels</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          <TabsContent value="badges" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockAchievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.unlocked ? "" : "opacity-60"}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                        <CardDescription className="mt-1">{achievement.description}</CardDescription>
                      </div>
                      {achievement.unlocked ? (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          Unlocked
                        </Badge>
                      ) : (
                        <Badge variant="outline">Locked</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          achievement.unlocked ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {achievement.icon === "trophy" && <Trophy className="h-8 w-8" />}
                        {achievement.icon === "flame" && <Flame className="h-8 w-8" />}
                        {achievement.icon === "book" && <BookOpen className="h-8 w-8" />}
                        {achievement.icon === "clock" && <Clock className="h-8 w-8" />}
                      </div>
                    </div>
                    {!achievement.unlocked && achievement.progress > 0 && (
                      <div className="space-y-1 mt-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="levels" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Level Progression</CardTitle>
                <CardDescription>Earn XP to level up and unlock new features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
                    <div key={level} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                              level <= 5 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {level}
                          </div>
                          <div>
                            <h3 className="font-medium">Level {level}</h3>
                            <p className="text-sm text-muted-foreground">{level * 300} XP required</p>
                          </div>
                        </div>
                        <Badge className={level <= 5 ? "bg-green-100 text-green-800" : "bg-muted"}>
                          {level <= 5 ? "Achieved" : "Locked"}
                        </Badge>
                      </div>
                      {level === 5 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Next Level: {(level + 1) * 300} XP</span>
                            <span>1,250 / {(level + 1) * 300} XP</span>
                          </div>
                          <Progress value={83} className="h-2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leaderboard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Leaderboard</CardTitle>
                <CardDescription>See how you rank against other learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 10 }, (_, i) => ({
                    rank: i + 1,
                    name: i === 4 ? "You" : `User ${1000 + i}`,
                    xp: 5000 - i * 400 + (i === 4 ? 50 : 0),
                    isCurrentUser: i === 4,
                  })).map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-3 rounded-md ${
                        user.isCurrentUser ? "bg-muted" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            user.rank <= 3
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {user.rank}
                        </div>
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">Level {Math.floor(user.xp / 300)}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{user.xp} XP</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
