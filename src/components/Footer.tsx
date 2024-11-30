import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Logo e Nome do Grupo */}
        <Link
          href={'/'}
          className="mb-6 flex gap-2 text-2xl font-bold text-green-600"
        >
          {/* Ajuste da imagem com proporção */}
          <div className="relative h-20 w-full">
            <img
              src="/assets/BannerHackathon.jpg"
              alt="Logo"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Copyright ou Outros Links */}
        <div className="mt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} EcoSync. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
