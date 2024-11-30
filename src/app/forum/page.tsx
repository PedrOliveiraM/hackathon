'use client'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { Button } from '@/components/ui/button' // Botão do ShadCN
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card' // Card do ShadCN
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog' // Dialog do ShadCN
import { Input } from '@/components/ui/input' // Input do ShadCN
import { Textarea } from '@/components/ui/textarea' // Textarea do ShadCN
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Dados simulados de tópicos
const topics = [
  {
    id: 1,
    title: 'Infraestrutura da Marginal Botafogo',
    description: 'Discussão sobre conserto da marginal botafogo',
    photos: 3,
    replies: 5,
  },
  {
    id: 2,
    title: 'Poluição no Lago Paranoá',
    description: 'Como resolver o problema de poluição no lago Paranoá?',
    photos: 1,
    replies: 4,
  },
  {
    id: 3,
    title: 'Problemas de segurança no centro?',
    description:
      'O centro está cada vez mais perigoso, o que podemos fazer para melhorar?',
    photos: 5,
    replies: 7,
  },
]

export default function ForumPage() {
  const [newTopicTitle, setNewTopicTitle] = useState('')
  const [newTopicDescription, setNewTopicDescription] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter() // Inicializa o useRouter para redirecionamento

  const handleCreateTopic = () => {
    if (!newTopicTitle || !newTopicDescription) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    // Aqui você pode fazer a lógica para salvar o novo tópico no banco de dados ou estado global
    console.log('Novo tópico criado:', { newTopicTitle, newTopicDescription })

    topics.push({
      id: 2,
      title: newTopicTitle,
      description: newTopicDescription,
      photos: 1,
      replies: 4,
    })

    // Resetando os campos e fechando o modal
    setNewTopicTitle('')
    setNewTopicDescription('')
    setIsModalOpen(false)
  }

  const handleSidebarClick = () => {
    // Redireciona para a página "home"
    router.push('/') // Redireciona para a página home
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-screen">
        {/* Passa a função handleSidebarClick para a Sidebar */}
        <Sidebar setCepData={handleSidebarClick} />
        <div className="flex-1 bg-gray-100 p-6">
          <div className="container mx-auto p-6">
            <header className="mb-8">
              <h1 className="text-center text-4xl font-semibold">
                Fórum de Discussões
              </h1>
            </header>

            <section>
              <h2 className="mb-4 text-2xl font-medium">Tópicos Recentes</h2>

              <div className="space-y-4">
                {topics.map((topic) => (
                  <Card key={topic.id}>
                    <CardHeader>
                      <CardTitle>{topic.title}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                      <CardDescription>{topic.photos} Fotos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{topic.replies} Respostas</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                {/* Dialog para criar novo tópico */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button>Criar Novo Tópico</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex justify-center text-xl font-bold">
                      Criar Novo Tópico
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="topicTitle"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Título do Tópico
                        </label>
                        <Input
                          id="topicTitle"
                          value={newTopicTitle}
                          onChange={(e) => setNewTopicTitle(e.target.value)}
                          placeholder="Digite o título do tópico"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="topicDescription"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Descrição do Tópico
                        </label>
                        <Textarea
                          id="topicDescription"
                          value={newTopicDescription}
                          onChange={(e) =>
                            setNewTopicDescription(e.target.value)
                          }
                          placeholder="Digite a descrição do tópico"
                          className="mt-2"
                        />
                      </div>
                      <label
                        htmlFor="photo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Envie a foto do problema
                      </label>
                      <Input
                        id="photo"
                        type="file"
                        placeholder="Envie a foto do problema"
                      />
                    </div>

                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancelar
                      </Button>
                      <Button onClick={handleCreateTopic}>Criar Tópico</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
