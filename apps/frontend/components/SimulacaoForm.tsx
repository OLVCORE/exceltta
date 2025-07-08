import { useState } from 'react'

interface Produto {
  id: string
  descricao: string
  ncm: string
  valorUnitario: number
  quantidade: number
}

export default function SimulacaoForm() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (produtos.length === 0) return

    setLoading(true)
    setMessage('')

    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/simulacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          empresaId: 'empresa-exemplo',
          tipo: 'importacao',
          linhas: produtos.map(p => ({
            produtoId: p.id,
            origemUF: 'SP',
            destinoUF: 'SC',
            valorUnitario: p.valorUnitario,
            quantidade: p.quantidade,
            tipoOperacao: 'compra',
          })),
        }),
      })

      if (response.ok) {
        setMessage('Simulação criada com sucesso!')
        setProdutos([])
      } else {
        setMessage('Erro ao criar simulação')
      }
    } catch (error) {
      setMessage('Erro ao criar simulação')
    } finally {
      setLoading(false)
    }
  }

  const addProduto = () => {
    const novoProduto: Produto = {
      id: `prod-${Date.now()}`,
      descricao: '',
      ncm: '',
      valorUnitario: 0,
      quantidade: 1,
    }
    setProdutos([...produtos, novoProduto])
  }

  const updateProduto = (index: number, field: keyof Produto, value: any) => {
    const novosProdutos = [...produtos]
    novosProdutos[index] = { ...novosProdutos[index], [field]: value }
    setProdutos(novosProdutos)
  }

  const removeProduto = (index: number) => {
    setProdutos(produtos.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Produtos da Simulação</h3>
          <button
            type="button"
            onClick={addProduto}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Adicionar Produto
          </button>
        </div>

        {produtos.map((produto, index) => (
          <div key={produto.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                <input
                  type="text"
                  value={produto.descricao}
                  onChange={(e) => updateProduto(index, 'descricao', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">NCM</label>
                <input
                  type="text"
                  value={produto.ncm}
                  onChange={(e) => updateProduto(index, 'ncm', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Valor Unitário</label>
                <input
                  type="number"
                  step="0.01"
                  value={produto.valorUnitario}
                  onChange={(e) => updateProduto(index, 'valorUnitario', parseFloat(e.target.value))}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantidade</label>
                <input
                  type="number"
                  value={produto.quantidade}
                  onChange={(e) => updateProduto(index, 'quantidade', parseInt(e.target.value))}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeProduto(index)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remover
            </button>
          </div>
        ))}

        {message && (
          <div className={`text-sm ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={produtos.length === 0 || loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Criando simulação...' : 'Criar Simulação'}
        </button>
      </form>
    </div>
  )
} 