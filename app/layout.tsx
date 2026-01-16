import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Página de apresentação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
