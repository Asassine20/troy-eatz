"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex min-w-full justify-between p-2 border-b">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="https://utfs.io/f/7LRLp6c9mzQV3JxiYnksejPmg8NLUXJTqSay4tD6cEIMBY2Z"
                        width={100}
                        height={50}
                        alt="logo"
                    />
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden max-[825px]:hidden md:flex">
                    <NavigationMenuList>
                        {/* Products */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                    <ListItem href="/snacks" title="Snacks">
                                        Chips, cookies, candy, and more.
                                    </ListItem>
                                    <ListItem href="/drinks" title="Drinks">
                                        Energy drinks, coffee, pop, juice.
                                    </ListItem>
                                    <ListItem href="/vapes" title="Vapes">
                                        Breeze and Mr Vapor.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* DoorDash */}
                        <NavigationMenuItem>
                            <Link
                                href="https://www.doordash.com/store/troy-eatz-troy-29736891/"
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    DoorDash
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Lottery */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Lottery</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                    <ListItem href="/lottery" title="Lottery">
                                        Try your luck with various lottery games.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* About Us */}
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="block md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
        <ul className="flex flex-col p-4">
            <li>
                <Link
                    href="/snacks"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    Snacks
                </Link>
            </li>
            <li>
                <Link
                    href="/drinks"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    Drinks
                </Link>
            </li>
            <li>
                <Link
                    href="/vapes"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    Vapes
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.doordash.com/store/troy-eatz-troy-29736891/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    DoorDash
                </Link>
            </li>
            <li>
                <Link
                    href="/lottery"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    Lottery
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                >
                    About Us
                </Link>
            </li>
        </ul>
    </div>
)}

        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
