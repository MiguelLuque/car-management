import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { ROUTES } from "@/lib/constants/routes"

interface UseAuthReturn {
  isLoading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  clearError: () => void
}

export function useAuth(): UseAuthReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        return
      }

      router.push(ROUTES.MANAGEMENT.ROOT)
      router.refresh()
    } catch (err) {
      setError("Ocurrio un error inesperado")
    } finally {
      setIsLoading(false)
    }
  }

  const clearError = () => setError(null)

  return { isLoading, error, signIn, clearError }
}