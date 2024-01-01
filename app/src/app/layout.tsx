import Header from '@/components/layout/Header/Header'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
    description:
        '私はっさくが旅ブログと称して、何でもかんでも書きたいことを書くブログ',
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon.ico',
        },
    ],
    manifest: '/manifest.json',
    title: 'はっさくの旅ブログ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ja'>
            <body>
                <Header></Header>
                {children}
            </body>
        </html>
    )
}
