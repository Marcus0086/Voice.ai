import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Voice AI</title>
      <link rel="icon" href="/favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
