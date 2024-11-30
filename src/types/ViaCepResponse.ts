// src/types/ViaCepResponse.ts

export interface ViaCepResponse {
  cep: string // O CEP (Exemplo: "01001-000")
  logradouro: string // Logradouro (Exemplo: "Praça da Sé")
  complemento: string // Complemento (Exemplo: "lado ímpar")
  unidade: string // Unidade (geralmente vazio)
  bairro: string // Bairro (Exemplo: "Sé")
  localidade: string // Cidade (Exemplo: "São Paulo")
  uf: string // Unidade da federação (Exemplo: "SP")
  estado: string // Nome do estado (Exemplo: "São Paulo")
  regiao: string // Região geográfica (Exemplo: "Sudeste")
  ibge: string // Código IBGE da cidade (Exemplo: "3550308")
  gia: string // Código GIA (Exemplo: "1004")
  ddd: string // Código DDD (Exemplo: "11")
  siafi: string // Código SIAFI (Exemplo: "7107")
}
