import type { Metadata } from 'next'
import Header from '@/stories/Header'
import './globals.css'

export const metadata: Metadata = {
    title: 'はっさくの旅ブログ',
    description:
        '私はっさくが旅ブログと称して、何でもかんでも書きたいことを各ブログ',
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
