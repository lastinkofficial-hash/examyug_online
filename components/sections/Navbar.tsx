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
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="ExamYug Logo"
            width={50}
            height={50}
            className="block rounded-full"
          />
          <span className="text-xl font-bold text-foreground">
            ExamYug24
          </span>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden min-[986px]:flex items-center gap-6">

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-dark hover:text-red-500 font-bold hover:text-red-500 ${
                active === item.href
                  ? "text-accent"
                  : "text-foreground"
              
                } `}
              style={{ textDecoration:"none"} }
            >
              {item.label}
            </a>
          ))}

          {/* Courses Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="relative flex items-center gap-1 text-[15px] font-medium text-foreground no-underline transition-all duration-300 hover:text-primary outline-none">
              <span className="text-dark hover:text-red-500 font-bold">
                Courses
              </span>

              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Data Science & Analytics
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Digital Marketing With AI
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Software Development
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Placement Program
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Banking & Finance
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                DSA Courses
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Generative AI
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer hover:bg-primary/10">
                Project Garage
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <Link href="/search">
            <Input
              type="text"
              placeholder="Search courses..."
              className="hidden xl:block w-[220px] focus-visible:ring-primary cursor-pointer"
              readOnly
            />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Buttons */}
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden min-[986px]:inline-flex hover:scale-105 transition-transform duration-300"
            >
              Login
            </Button>
          </Link>

          <Button
            variant="destructive"
            className="hidden min-[986px]:inline-flex hover:scale-105 transition-transform duration-300 hover:bg-primary/90"
          >
            Sign Up
          </Button>

          {/* Mobile Toggle */}
          <button
            className="min-[986px]:hidden p-2 rounded-md border border-border hover:bg-primary/10 transition-colors duration-300"
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
        <div className="min-[986px]:hidden bg-white border-t border-border px-4 py-4 space-y-4 shadow-md">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[15px] font-medium transition-all duration-300 hover:text-red-300 hover:translate-x-1
              ${
                active === item.href
                  ? "text-accent"
                  : "text-dark"
              }`} style={{ textDecoration:"none"} }
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Courses */}
          <div className="space-y-2 pt-2 border-t border-border">
            <p className="font-semibold text-foreground">
              Courses
            </p>

            <div className="flex flex-col gap-2 text-sm">
              {[
                "Data Science & Analytics",
                "Digital Marketing With AI",
                "Software Development",
                "Placement Program",
                "Banking & Finance",
                "DSA Courses",
                "Generative AI",
                "Project Garage",
              ].map((course, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Search */}
          <Link href="/search" className="w-full">
            <Input
              type="text"
              placeholder="Search courses..."
              className="w-full focus-visible:ring-primary cursor-pointer"
              readOnly
            />
          </Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/login" className="w-full">
              <Button
                variant="outline"
                className="w-full hover:scale-[1.02] transition-transform duration-300"
              >
                Login
              </Button>
            </Link>

            <Button
              variant="default"
              className="w-full hover:scale-[1.02] transition-transform duration-300"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
