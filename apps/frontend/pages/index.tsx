import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Exceltta - Simulação Tributária e Viabilidade Econômica</title>
        <meta name="description" content="Plataforma completa para simulação tributária e análise de viabilidade econômica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Exceltta
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simulação Tributária e Viabilidade Econômica
            </p>
            <div className="space-x-4">
              <Link 
                href="/login" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Entrar
              </Link>
              <Link 
                href="/cadastro" 
                className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 transition-colors"
              >
                Cadastrar
              </Link>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Upload Inteligente</h3>
              <p className="text-gray-600">
                Faça upload de editais, invoices e relatórios técnicos. Nossa IA extrai e classifica automaticamente os produtos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Simulação Tributária</h3>
              <p className="text-gray-600">
                Calcule impostos linha a linha, considerando ICMS, ST, DIFAL, incentivos fiscais e regimes especiais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Viabilidade Econômica</h3>
              <p className="text-gray-600">
                Compare custos nacionais vs. importados e analise a viabilidade de cada operação.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 