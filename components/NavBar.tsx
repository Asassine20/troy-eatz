"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"


export function NavBar() {
    return (
        <div className="flex min-w-full justify-between p-2 border-b z-10">
            <NavigationMenu>
                <NavigationMenuList className="max-[825px]:hidden ">
                    <Link href="/">
                        <Image src="https://utfs.io/f/7LRLp6c9mzQV3JxiYnksejPmg8NLUXJTqSay4tD6cEIMBY2Z" width={100} height={50} alt="logo" />
                    </Link>
                    
                    {/* Products Dropdown */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                <ListItem href="/snacks" title="Snacks">Chips, cookies, candy, and more.</ListItem>
                                <ListItem href="/drinks" title="Drinks">Energy drinks, coffee, pop, juice.</ListItem>
                                <ListItem href="/vapes" title="Vapes">Breeze and Mr Vapor.</ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* DoorDash (External Link) */}
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

                    {/* Lottery Dropdown */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Lottery</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                                <ListItem href="/lottery" title="Lottery">Try your luck with various lottery games.</ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* About Us */}
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref className="cursor-pointer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3"></div>
        </div>
    )
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
    )
})
ListItem.displayName = "ListItem"
