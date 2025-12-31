import Link from "next/link";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "./theme_toggle";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Terminal className="h-6 w-6 text-primary" />
          <span>Codexa</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Button asChild size="sm">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
