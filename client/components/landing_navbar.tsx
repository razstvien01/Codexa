import Link from "next/link";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "./theme_toggle";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Terminal className="h-6 w-6 text-primary"/>
          <span>Codexa</span>
        </Link>
      </div>
    </nav>
  );
}
