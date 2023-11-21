import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../../public/banner.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sylvera Technical Task',
  description: 'Technical task displaying devices and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center w-100 h-20 relative">
          <Image
            src={banner}
            alt=""
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <nav>
          <ul className="list-none flex flex-wrap gap-10 justify-start bg-cyan-900 text-gray-100 px-5 py-3">
            <li className='text-xl font-bold'>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='text-xl font-bold'>
              <Link href="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className='text-center text-2xl font-extrabold py-3'>
          Sylvera Technical Task
        </h1>
        <main className="px-5 pb-5">
          {children}
        </main>
      </body>
    </html>
  )
}
