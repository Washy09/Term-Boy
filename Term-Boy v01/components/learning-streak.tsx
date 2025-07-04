import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"

export function LearningStreak() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const today = new Date().getDay() // 0 is Sunday, 1 is Monday, etc.
  const adjustedToday = today === 0 ? 6 : today - 1 // Adjust to match our days array

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Learning Streak</CardTitle>
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            <Flame className="mr-1 h-3 w-3" />7 days
          </Badge>
        </div>
        <CardDescription>Keep your streak going</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {days.map((day, index) => (
            <div key={day} className="flex flex-col items-center">
              <div className="text-xs text-muted-foreground mb-2">{day}</div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < adjustedToday
                    ? "bg-primary text-primary-foreground"
                    : index === adjustedToday
                      ? "bg-orange-500 text-white"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {index < adjustedToday ? "✓" : index === adjustedToday ? "!" : ""}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
