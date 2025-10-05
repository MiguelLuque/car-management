import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ManagementPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const handleSignOut = async () => {
        'use server'
        const supabase = await createClient()
        await supabase.auth.signOut()
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">Car Management</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">
                            {user.email}
                        </span>
                        <form action={handleSignOut}>
                            <Button variant="outline" type="submit">
                                Cerrar sesión
                            </Button>
                        </form>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Mis Vehículos</h2>
                    <p className="text-muted-foreground">
                        Gestiona tu flota de vehículos
                    </p>
                </div>

                {/* Placeholder Content */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-dashed">
                        <CardHeader>
                            <CardTitle className="text-center text-muted-foreground">
                                Sin vehículos
                            </CardTitle>
                            <CardDescription className="text-center">
                                Aún no has agregado ningún vehículo
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <Button disabled>
                                Agregar vehículo
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Info Card */}
                <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                        <CardTitle className="text-blue-900 dark:text-blue-100">
                            🚧 En desarrollo
                        </CardTitle>
                        <CardDescription className="text-blue-700 dark:text-blue-300">
                            Esta página está en construcción. Pronto podrás gestionar tus vehículos desde aquí.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </main>
        </div>
    )
}
