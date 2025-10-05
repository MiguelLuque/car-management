import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Info, CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoAlertProps {
  title: string
  description: string
  variant?: "info" | "success" | "warning" | "error"
}

const variantConfig = {
  info: {
    icon: Info,
    cardClass: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    titleClass: "text-blue-900 dark:text-blue-100",
    descClass: "text-blue-700 dark:text-blue-300",
  },
  success: {
    icon: CheckCircle,
    cardClass: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    titleClass: "text-green-900 dark:text-green-100",
    descClass: "text-green-700 dark:text-green-300",
  },
  warning: {
    icon: AlertCircle,
    cardClass: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
    titleClass: "text-yellow-900 dark:text-yellow-100",
    descClass: "text-yellow-700 dark:text-yellow-300",
  },
  error: {
    icon: XCircle,
    cardClass: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    titleClass: "text-red-900 dark:text-red-100",
    descClass: "text-red-700 dark:text-red-300",
  },
}

export function InfoAlert({ title, description, variant = "info" }: InfoAlertProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <Card className={config.cardClass}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <Icon className={cn("h-5 w-5 mt-0.5", config.titleClass)} />
          <div className="space-y-1">
            <CardTitle className={config.titleClass}>{title}</CardTitle>
            <CardDescription className={config.descClass}>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}