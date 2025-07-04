"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, ChevronDown } from "lucide-react"

interface DifficultyFilterProps {
  selectedDifficulty: string
  onDifficultyChange: (difficulty: string) => void
}

export function DifficultyFilter({ selectedDifficulty, onDifficultyChange }: DifficultyFilterProps) {
  const difficultyOptions = [
    { value: "all", label: "All Levels" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ]

  const selectedLabel = difficultyOptions.find((d) => d.value === selectedDifficulty)?.label || "All Levels"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center bg-transparent">
          <GraduationCap className="mr-2 h-4 w-4" />
          {selectedLabel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Filter by Difficulty</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedDifficulty} onValueChange={onDifficultyChange}>
          {difficultyOptions.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
