import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import RandomNews from '@/components/RandomNews'

const tripspace = Trispace({ weight: ['400','500','600'],
subsets: ['latin']})

export const metadata: Metadata = {
  title: 'New-U',
  description: 'news for you where you can find what you need find',
  icons:{
    icon:[{url: '/img/favicon-32x32.png', sizes:"32x32"}, {url: '/img/favicon-16x16.png', sizes:"16x16"}],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180"
    }
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: 'New-U',
    description: 'news for you where you can find what you need',
    type: 'article',
    authors: 'theoyoth',
  },
  keywords:['news-u', 'news', 'news about everything']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={tripspace.className}>
          <main className=' px-2 md:px-20'>
            <Header />
            <Navbar />
            <section className=' flex justify-between'>
              {children}
            <RandomNews />
            </section>
          </main>
        </body>
    </html>
  )
}
