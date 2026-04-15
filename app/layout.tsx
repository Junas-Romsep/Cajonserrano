import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans"
})

export const metadata: Metadata = {
  title: 'Cajon Serrano | Construction & Transport Services',
  description: 'Professional construction and transport services with Swedish quality standards. Operating in Sweden with excellence, precision, and attention to detail.',
  keywords: ['construction', 'transport', 'Sweden', 'building', 'logistics', 'Cajon Serrano'],
  authors: [{ name: 'Cajon Serrano' }],
  openGraph: {
    title: 'Cajon Serrano | Construction & Transport Services',
    description: 'Professional construction and transport services with Swedish quality standards.',
    url: 'https://cajonserrano.com',
    siteName: 'Cajon Serrano',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
