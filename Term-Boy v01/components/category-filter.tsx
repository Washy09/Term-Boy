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
import { BookOpen, ChevronDown } from "lucide-react"
import { categories } from "@/lib/terminology-data"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const selectedCategoryName =
    selectedCategory === "all"
      ? "All Categories"
      : categories.find((c) => c.id === selectedCategory)?.name || "All Categories"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center bg-transparent">
          <BookOpen className="mr-2 h-4 w-4" />
          {selectedCategoryName}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
          <DropdownMenuRadioItem value="all">All Categories</DropdownMenuRadioItem>
          {categories.map((category) => (
            <DropdownMenuRadioItem key={category.id} value={category.id}>
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
