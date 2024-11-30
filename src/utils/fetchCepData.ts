// src/utils/fetchCepData.ts
import { ViaCepResponse } from '../types/ViaCepResponse'

export const fetchCepData = async (cep: string): Promise<ViaCepResponse> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data: ViaCepResponse = await response.json() // Tipando com ViaCepResponse

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do CEP')
    }

    return data // Retorna os dados tipados corretamente
  } catch (error) {
    console.error('Erro ao buscar dados do CEP:', error)
    throw error
  }
}
