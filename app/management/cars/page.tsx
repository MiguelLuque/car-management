import { PageHeader, EmptyState, InfoAlert } from "@/components/common"
import { Button } from "@/components/ui/button"
import { Car, Plus } from "lucide-react"

export default function CarsPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Mis Vehiculos" 
        description="Gestiona tu flota de vehiculos"
        action={
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            Agregar vehiculo
          </Button>
        }
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EmptyState
          icon={Car}
          title="Sin vehiculos"
          description="Aun no has agregado ningun vehiculo"
          action={
            <Button disabled variant="outline">
              Comenzar
            </Button>
          }
        />
      </div>

      <InfoAlert
        variant="info"
        title="En desarrollo"
        description="Esta pagina esta en construccion. Pronto podras gestionar tus vehiculos desde aqui."
      />
    </div>
  )
}