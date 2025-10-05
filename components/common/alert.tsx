import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertProps {
  message: string
  variant?: "error" | "warning" | "info"
  className?: string
}

const variantStyles = {
  error: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800",
  warning: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",
  info: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
}

export function Alert({ message, variant = "error", className }: AlertProps) {
  return (
    <div className={cn("flex items-start gap-2 p-3 rounded-md text-sm", variantStyles[variant], className)}>
      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
      <p>{message}</p>
    </div>
  )
}