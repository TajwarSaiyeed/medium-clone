import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { BookOpen, PenSquare, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <BookOpen className="size-4" />
            </div>
            Medium Clone
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link
                href="/explore"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/membership"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                href="/protected/server"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Protected
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <SignedIn>
            <Link href="/write">
              <Button variant="ghost" size="sm" className="gap-2">
                <PenSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Write</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm" className="hidden sm:flex">
                Get started
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
