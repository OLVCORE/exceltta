import { useState } from 'react'

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    setMessage('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('tipo', 'edital')

    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/upload/documento', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      })

      if (response.ok) {
        setMessage('Documento enviado com sucesso!')
        setFile(null)
      } else {
        setMessage('Erro ao enviar documento')
      }
    } catch (error) {
      setMessage('Erro ao enviar documento')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Selecione um arquivo
          </label>
          <input
            type="file"
            accept=".pdf,.xlsx,.xls,.doc,.docx"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {message && (
          <div className={`text-sm ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={!file || loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Documento'}
        </button>
      </form>
    </div>
  )
} 