import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Noyra',
  description: 'Noyra',
  generator: 'Noyra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
