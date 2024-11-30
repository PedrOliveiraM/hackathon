import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'
import Image from 'next/image'
import { fetchCepData } from '../utils/fetchCepData' // Função para buscar os dados

export function Sidebar({
  setCepData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCepData: React.Dispatch<React.SetStateAction<any>>
}) {
  const [cep, setCep] = useState<string>('')

  const handleCepSearch = async () => {
    if (cep) {
      try {
        const data = await fetchCepData(cep) // Chamada à API para buscar os dados do CEP
        setCepData(data) // Atualiza o estado no componente pai (Layout)
      } catch (error) {
        console.error('Erro ao buscar dados do CEP:', error)
      }
    }
  }

  return (
    <div className="bg-backgroundSideBar h-full w-64 p-4 text-white">
      <h1 className="mb-8 flex gap-2 text-2xl font-bold text-green-600">
        <Image src="/assets/Logo.png" alt="Logo" width={200} height={80} />
      </h1>

      {/* Caixa de busca de CEP */}
      <div className="mb-6">
        <div className="text-xl font-semibold">Buscar CEP</div>
        <Input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="mt-2 rounded-lg bg-gray-700 px-4 py-2 text-white"
        />
        <Button
          className="bg-orange mt-2 w-full rounded-lg px-4 py-2 text-white"
          onClick={handleCepSearch}
        >
          Buscar
        </Button>
      </div>

      {/* Outras opções do menu */}
      <div className="mb-4 text-xl font-semibold">Menu</div>
      <div className="flex flex-col space-y-4">
        <Button className="w-full bg-gray-700 text-white">
          Melhores Rankings
        </Button>
        <Button className="w-full bg-gray-700 text-white">
          Melhor Área Verde
        </Button>
        <Button className="w-full bg-gray-700 text-white">Poluição</Button>
        <Button className="w-full bg-gray-700 text-white">Trânsito</Button>
      </div>
    </div>
  )
}
