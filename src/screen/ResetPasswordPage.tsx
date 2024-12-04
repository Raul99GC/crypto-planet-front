
import { useState } from "react"
import { Eye, EyeOff, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavLink } from 'react-router'

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para verificar y cambiar la contraseña
    console.log("Verificando código y cambiando contraseña...")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Enter New Password</h1>
          <NavLink to="/login" className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </NavLink>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative">
              <Input
                id="new-password"
                type={showPassword ? "text" : "password"}
                className="h-12 pr-10"
                placeholder="Enter your new password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                className="h-12 pr-10"
                placeholder="Confirm your new password"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button type="submit" className="h-12 w-full bg-blue-600 text-white hover:bg-blue-700">
            Verify Code
          </Button>
        </form>
      </div>
    </div>
  )
}
