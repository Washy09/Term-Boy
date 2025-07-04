import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground max-w-[700px] md:text-xl">
          Start for free and upgrade when you're ready. Our pricing is designed to grow with you.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Card className="border-muted">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $0
              <span className="ml-1 text-sm font-medium text-muted-foreground">/forever</span>
            </div>
            <CardDescription className="mt-4">
              Perfect for beginners just starting their financial learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Access to 50+ basic financial terms</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>5 new terms per day</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Basic learning paths</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Progress tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Daily challenges</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <div className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full w-fit mb-4">
              Most Popular
            </div>
            <CardTitle>Premium</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-bold">
              $2
              <span className="ml-1 text-sm font-medium text-muted-foreground">one-time payment</span>
            </div>
            <CardDescription className="mt-4">
              Unlock the full potential of Term Boy with unlimited access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Access to 1000+ financial terms</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Unlimited terms per day</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>All learning paths</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Advanced progress analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Personalized recommendations</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>No ads</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Visual learning aids</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Community features</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/login">Upgrade Now</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-muted">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <div className="mt-4 flex items-baseline text-5xl font-bold">Custom</div>
            <CardDescription className="mt-4">For educational institutions and organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Everything in Premium</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Bulk user management</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Custom learning paths</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Detailed analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>API access</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span>Dedicated support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-left">
            <h3 className="font-semibold mb-2">What's included in the free plan?</h3>
            <p className="text-muted-foreground">
              The free plan includes access to 50+ basic financial terms, 5 new terms per day, basic learning paths,
              progress tracking, and daily challenges.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Is the Premium plan really a one-time payment?</h3>
            <p className="text-muted-foreground">
              Yes! Pay once and get lifetime access to all Premium features. No recurring subscriptions or hidden fees.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Can I upgrade from Free to Premium later?</h3>
            <p className="text-muted-foreground">
              You can start with the Free plan and upgrade to Premium whenever you're ready. Your progress will be
              saved.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              We offer a 7-day money-back guarantee if you're not satisfied with your Premium purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
