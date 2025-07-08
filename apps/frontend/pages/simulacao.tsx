import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SimulacaoForm from '../components/SimulacaoForm'

export default function Simulacao() {
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    } else {
      setAuthenticated(true)
    }
  }, [router])

  if (!authenticated) {
    return <div>Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Exceltta</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nova Simulação</h2>
            <p className="text-gray-600 mb-6">
              Crie uma nova simulação tributária e de viabilidade econômica.
            </p>
            <SimulacaoForm />
          </div>
        </div>
      </main>
    </div>
  )
} 