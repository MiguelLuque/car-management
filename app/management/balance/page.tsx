import { PageHeader, StatCard, InfoAlert } from "@/components/common"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function BalancePage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Balance Economico" 
        description="Controla tus ingresos y gastos"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <StatCard
          title="Ingresos"
          description="Total de ingresos"
          value=""
          icon={TrendingUp}
          valueClassName="text-green-600"
        />
        <StatCard
          title="Gastos"
          description="Total de gastos"
          value=""
          icon={TrendingDown}
          valueClassName="text-red-600"
        />
      </div>

      <InfoAlert
        variant="info"
        title="En desarrollo"
        description="Esta pagina esta en construccion. Pronto podras gestionar tu balance economico."
      />
    </div>
  )
}