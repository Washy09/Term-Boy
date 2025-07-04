"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="text-2xl">📚</span>
        <span className="hidden font-bold sm:inline-block">Term Boy</span>
        <Badge variant="secondary" className="ml-2">
          Beta
        </Badge>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dictionary"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dictionary" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Dictionary
        </Link>
        <Link
          href="/learning-paths"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/learning-paths" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Learning Paths
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/achievements"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/achievements" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Achievements
        </Link>
      </nav>
    </div>
  )
}
