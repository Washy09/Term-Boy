export interface Term {
  id: string
  name: string
  category: string
  subcategories?: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  shortDefinition: string
  definition: string
  plainEnglish: string
  exampleUsage: string
  context: string
  realWorldApplications: string
  relatedTerms?: string[]
}

export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  termCount: number
  enrolledCount: number
  progress: number
  category: string
  terms: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: "trophy" | "flame" | "book" | "clock" | "star" | "target"
  unlocked: boolean
  progress: number
  category: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  color: string
  termCount: number
}
