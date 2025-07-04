"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What is a stock?",
    options: [
      { id: "a", text: "A type of bond issued by corporations" },
      { id: "b", text: "A loan given to a company" },
      { id: "c", text: "A share of ownership in a company" },
      { id: "d", text: "A government-issued security" },
    ],
    correctAnswer: "c",
  },
  {
    id: 2,
    question: "What does 'bull market' refer to?",
    options: [
      { id: "a", text: "A market where prices are falling" },
      { id: "b", text: "A market where prices are rising" },
      { id: "c", text: "A market with high volatility" },
      { id: "d", text: "A market dominated by agricultural commodities" },
    ],
    correctAnswer: "b",
  },
  {
    id: 3,
    question: "What is diversification?",
    options: [
      { id: "a", text: "Investing all your money in one promising stock" },
      { id: "b", text: "Spreading investments across various asset classes to reduce risk" },
      { id: "c", text: "Changing your investment strategy frequently" },
      { id: "d", text: "Investing only in foreign markets" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    question: "What is inflation?",
    options: [
      { id: "a", text: "The increase in a company's stock price" },
      { id: "b", text: "The decrease in the value of a currency" },
      { id: "c", text: "The general increase in prices and fall in purchasing value of money" },
      { id: "d", text: "The growth rate of an economy" },
    ],
    correctAnswer: "c",
  },
  {
    id: 5,
    question: "What is a dividend?",
    options: [
      { id: "a", text: "A fee paid to a broker for trading stocks" },
      { id: "b", text: "A portion of a company's earnings paid to shareholders" },
      { id: "c", text: "The difference between buying and selling price" },
      { id: "d", text: "A type of tax on investments" },
    ],
    correctAnswer: "b",
  },
]

export default function AssessmentPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++
      }
    })
    return score
  }

  const getRecommendedPath = () => {
    const score = calculateScore()
    if (score <= 2) {
      return "Investing Basics"
    } else if (score <= 4) {
      return "Stock Market 101"
    } else {
      return "Portfolio Management"
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const score = calculateScore()
    const recommendedPath = getRecommendedPath()

    return (
      <div className="container py-10 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Assessment Results</CardTitle>
            <CardDescription>Based on your answers, we've created a personalized learning path for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-6">
              <div className="text-5xl font-bold mb-2">
                {score} / {questions.length}
              </div>
              <p className="text-muted-foreground">Your score</p>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Recommended Learning Path</h3>
              <p className="mb-4">{recommendedPath}</p>
              <p className="text-sm text-muted-foreground">
                This path is tailored to your current knowledge level and will help you build a strong foundation in
                financial terminology.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowResults(false)}>
              Review Answers
            </Button>
            <Button onClick={() => router.push("/learning-paths")}>Start Learning</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="container py-10 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Knowledge Assessment</CardTitle>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <CardDescription>This assessment will help us create a personalized learning path for you</CardDescription>
          <Progress value={progress} className="h-2 mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">{question.question}</h2>
            <RadioGroup value={answers[question.id] || ""} onValueChange={handleAnswer}>
              {question.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 p-3 rounded-md hover:bg-muted">
                  <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                  <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!answers[question.id]}>
            {currentQuestion < questions.length - 1 ? (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Finish
                <Check className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
