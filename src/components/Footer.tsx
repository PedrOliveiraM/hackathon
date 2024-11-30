import { Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-8">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Logo e Nome do Grupo */}
        <Link
          href={'/'}
          className="flex gap-2 text-2xl font-bold text-green-600 mb-6"
        >
          {/* Ajuste da imagem com proporção */}
          <div className="relative w-full h-20">
            <img
              src="/assets/BannerHackathon.jpg"
              alt="Logo"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Copyright ou Outros Links */}
        <div className="text-center text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} EcoSync. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
