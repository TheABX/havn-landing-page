import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HAVN - All-Natural Solid Cologne',
  description: 'A clean alternative to chemical colognes. All-natural solid cologne for men.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#05070A] text-slate-100">{children}</body>
    </html>
  )
}

