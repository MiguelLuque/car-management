"use client"

import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SidebarNavItem } from "@/components/layout/sidebar-nav-item"
import { MENU_ITEMS } from "@/lib/constants/menu"

interface SidebarProps {
  className?: string
  userEmail?: string
  onSignOut?: () => void
}

export function Sidebar({ className, userEmail, onSignOut }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={cn("w-64 border-r bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm flex flex-col", className)}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6">
          <h2 className="text-xl font-bold">Car Management</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <SidebarNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.title}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
        
        {/* User Section */}
        <div className="p-4 border-t space-y-3">
          {userEmail && (
            <div className="px-4 py-2 text-sm text-muted-foreground truncate" title={userEmail}>
              {userEmail}
            </div>
          )}
          {onSignOut && (
            <form action={onSignOut} className="w-full">
              <Button 
                variant="outline" 
                type="submit" 
                className="w-full justify-start gap-3"
              >
                <LogOut className="h-5 w-5" />
                Cerrar sesion
              </Button>
            </form>
          )}
        </div>
      </div>
    </aside>
  )
}