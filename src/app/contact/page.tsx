'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button' // Botão do ShadCN
import { Input } from '@/components/ui/input' // Input do ShadCN
import { Textarea } from '@/components/ui/textarea' // Textarea do ShadCN
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card' // Card do ShadCN
import { Sidebar } from '@/components/Sidebar'
import { useRouter } from 'next/navigation'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    // Aqui você pode integrar com uma API ou banco de dados para enviar os dados
    console.log('Mensagem enviada:', formData)

    // Resetando o formulário
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    alert('Mensagem enviada com sucesso!')
  }
  const handleSidebarClick = () => {
    // Redireciona para a página "home"
    router.push('/') // Redireciona para a página home
  }

  return (
    <div className="flex h-screen">
      {/* Passa a função handleSidebarClick para a Sidebar */}
      <Sidebar setCepData={handleSidebarClick} />
      <div className="flex-1 bg-gray-100 p-6"></div>
      <div className="container mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-center text-4xl font-semibold">
            Entre em Contato
          </h1>
          <p className="mt-2 text-center text-lg text-gray-700">
            Preencha o formulário abaixo para enviar sua mensagem.
          </p>
        </header>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Formulário de Contato</CardTitle>
              <CardDescription>
                Estamos aqui para ajudá-lo. Envie suas dúvidas ou sugestões.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Seu e-mail"
                    className="mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sua mensagem"
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="mt-4 w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
