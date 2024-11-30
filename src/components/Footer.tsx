import { Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mt-8 bg-gray-800 py-6 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo e Nome do Grupo */}
        <div className="flex items-center space-x-4">
          <Link
            href={'/'}
            className="mb-8 flex gap-2 text-2xl font-bold text-green-600"
          >
            <Image src="/assets/Logo.png" alt="Logo" width={200} height={80} />
          </Link>
          <div>
            <h3 className="text-lg font-semibold">EcoSync</h3>
            <p className="text-sm">Viva Goiás</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white transition-colors hover:text-green-400"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} EcoSync. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
