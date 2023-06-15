import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '민싱진의 로동요 리스트',
  description: '노동요들을 모아놨습니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    	<body>
			<div className="navbar">
				<Link href="/">홈</Link>
				<Link href="/list">List</Link>
			</div>
			{children}
		</body>
    </html>
  )
}
