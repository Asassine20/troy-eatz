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
                        <Image src="https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/TBF.webp" width={50} height={50} alt="logo" />
                    </Link>
                    <NavigationMenuItem>
                        <Link
                            href="https://www.google.com/search?gl=US&tbm=shop&sfm=ChoIvOyQixQQvevJ48a06uZOOJPS4fn0uoCACBgBIAs%3D&lsf=seller:5392053820,store:5678381228843234749,store_mid:576462776562116883&sts=11&q=gum,+candy+%26+chocolate&tbs=vw:g&sa=X&ved=2ahUKEwj834HNiK2KAxULGAoDHXJeEvQQz5oGegQIAhAH"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Products
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href="https://www.doordash.com/store/troy-eatz-troy-29736891/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJ0cm95IGVhdHoiLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoidHJveSBlYXR6IiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTc3LDE5MywxOTVdfQ==&pickup=false"
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

                    <NavigationMenuItem>
                        <Link href="https://www.michiganlottery.com/" 
                            legacyBehavior 
                            passHref 
                            className="cursor-pointer">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                target="_blank"
                                rel="noopener noreferrer"
                            >                                
                            Lottery
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref className="cursor-pointer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3">
            </div>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
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
