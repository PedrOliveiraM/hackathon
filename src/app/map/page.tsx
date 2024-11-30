import dynamic from 'next/dynamic'

// Importação dinâmica para evitar renderização no servidor
const DynamicMap = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
})

export default function MapPage() {
  return (
    <main style={{ height: '50vh', width: '50%' }}>
      <DynamicMap />
    </main>
  )
}
