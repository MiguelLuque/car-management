import { Car, DollarSign, LayoutDashboard, LucideIcon } from "lucide-react"
import { ROUTES } from "@/lib/constants/routes"

export interface MenuItem {
  title: string
  href: string
  icon: LucideIcon
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "Dashboard",
    href: ROUTES.MANAGEMENT.ROOT,
    icon: LayoutDashboard,
  },
  {
    title: "Vehiculos",
    href: ROUTES.MANAGEMENT.CARS,
    icon: Car,
  },
  {
    title: "Balance Economico",
    href: ROUTES.MANAGEMENT.BALANCE,
    icon: DollarSign,
  },
]