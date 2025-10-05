import { PageHeader, StatCard, InfoAlert } from "@/components/common"
import { Car, DollarSign, TrendingDown } from "lucide-react"

export default function ManagementPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard" 
        description="Bienvenido a tu panel de gestion"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Vehiculos"
          description="Total de vehiculos registrados"
          value={0}
          icon={Car}
        />
        <StatCard
          title="Balance"
          description="Balance economico total"
          value=""
          icon={DollarSign}
          valueClassName="text-green-600"
        />
        <StatCard
          title="Gastos del mes"
          description="Gastos acumulados este mes"
          value=""
          icon={TrendingDown}
          valueClassName="text-red-600"
        />
      </div>

      <InfoAlert
        variant="info"
        title="En desarrollo"
        description="Esta pagina esta en construccion. Pronto podras ver estadisticas detalladas."
      />
    </div>
  )
}