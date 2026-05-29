"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type NavbarProps = {
  active?: string;
};

export function Navbar({ active }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/study-materials", label: "Study Materials" },
    { href: "/results", label: "Results" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="ExamYug Logo"
            width={50}
            height={50}
            className="block"
          />
          <span className="text-xl font-bold text-foreground">
            ExamYug24
          </span>
        </div>

        {/* Desktop Navbar */}
        {/* Changed from md:flex to min-[986px]:flex */}
        <div className="hidden min-[986px]:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`no-underline transition-colors pb-1 ${
                active === item.href
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 no-underline text-foreground hover:text-primary transition-colors outline-none">
              Courses <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                Data Science & Analytics
              </DropdownMenuItem>
              <DropdownMenuItem>
                Digital Marketing With AI
              </DropdownMenuItem>
              <DropdownMenuItem>
                Software Development
              </DropdownMenuItem>
              <DropdownMenuItem>
                Placement Program
              </DropdownMenuItem>
              <DropdownMenuItem>
                Banking & Finance
              </DropdownMenuItem>
              <DropdownMenuItem>DSA Courses</DropdownMenuItem>
              <DropdownMenuItem>Generative AI</DropdownMenuItem>
              <DropdownMenuItem>Project Garage</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            type="text"
            placeholder="Search courses..."
            className="hidden xl:block w-[220px]"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Desktop Buttons */}
          <Button
            variant="outline"
            className="hidden min-[986px]:inline-flex"
          >
            Login
          </Button>

          <Button
            variant="default"
            className="hidden min-[986px]:inline-flex"
          >
            Sign Up
          </Button>

          {/* Mobile Toggle */}
          {/* Changed from md:hidden to max-[985px]:block */}
          <button
            className="min-[986px]:hidden p-2 rounded-md border border-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="min-[986px]:hidden bg-light border-t border-border px-4 py-4 space-y-4">
          
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block no-underline transition-colors ${
                active === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Dropdown Links */}
          <div className="space-y-2 pt-2 border-t border-border">
            <p className="font-semibold text-foreground">Courses</p>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Data Science & Analytics</span>
              <span>Digital Marketing With AI</span>
              <span>Software Development</span>
              <span>Placement Program</span>
              <span>Banking & Finance</span>
              <span>DSA Courses</span>
              <span>Generative AI</span>
              <span>Project Garage</span>
            </div>
          </div>

          {/* Mobile Search */}
          <Input
            type="text"
            placeholder="Search courses..."
            className="w-full"
          />

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full">
              Login
            </Button>

            <Button variant="default" className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}