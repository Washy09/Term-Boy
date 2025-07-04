"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen } from "lucide-react"
import { TermCard } from "@/components/term-card"
import { CategoryFilter } from "@/components/category-filter"
import { DifficultyFilter } from "@/components/difficulty-filter"
import { terms, categories } from "@/lib/terminology-data"
import { Badge } from "@/components/ui/badge"

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")

  const filteredTerms = terms.filter((term) => {
    const matchesSearch =
      term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || term.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getCategoryTerms = (categoryId: string) => {
    return terms.filter((term) => term.category === categoryId)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Financial Dictionary</h1>
          <p className="text-muted-foreground">
            Explore over 1000 financial terms organized by category and difficulty level
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search terms..."
              className="w-full pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            <DifficultyFilter selectedDifficulty={selectedDifficulty} onDifficultyChange={setSelectedDifficulty} />
          </div>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="text-center p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-sm font-medium">{category.name}</div>
              <Badge variant="secondary" className="text-xs mt-1">
                {category.termCount}
              </Badge>
            </div>
          ))}
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="investing">Investing</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="economics">Economics</TabsTrigger>
            <TabsTrigger value="technology">FinTech</TabsTrigger>
            <TabsTrigger value="sustainability">ESG</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredTerms.length} of {terms.length} terms
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((term) => (
                <TermCard key={term.id} term={term} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="mb-6 p-6 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <Badge className={category.color}>{category.termCount} terms in this category</Badge>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getCategoryTerms(category.id).map((term) => (
                  <TermCard key={term.id} term={term} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No terms found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
