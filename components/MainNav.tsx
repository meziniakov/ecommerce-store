'use client'
import React from "react"
import {usePathname} from 'next/navigation'
import Link from "next/link"
import {Category} from '@/types/types'
import {cn} from '@/lib/utils'

interface MainNavProps {
    data: Category[]
}
const MainNav: React.FC<MainNavProps> = ({data}) => {
    const pathname = usePathname()

    const routes = data.map(route => ({
        href: `/${route.slug}`,
        label: route.name,
        active: `/${route.name}` === pathname
    }))
    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map(route => (
                <Link 
                    key={route.href} 
                    href={route.href} 
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black', 
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}>
                        {route.label}
                </Link>
            ))}
        </nav>
    )
}
export default MainNav