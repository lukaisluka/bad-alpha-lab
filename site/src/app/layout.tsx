import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bad Alpha Lab | 负 Alpha 实验室',
  description: '忠实复刻流行策略，公开它们如何亏钱。We replicate popular trading strategies and show how they lose money.',
  keywords: ['negative alpha', 'strategy replication', 'prediction market', 'backtest bias', 'execution risk'],
  authors: [{ name: 'Bad Alpha Lab' }],
  openGraph: {
    title: 'Bad Alpha Lab | 负 Alpha 实验室',
    description: '忠实复刻流行策略，公开它们如何亏钱。',
    type: 'website',
  },
}

const navLinks = [
  { href: '/replications', label: '策略复刻' },
  { href: '/autopsies', label: '验尸报告' },
  { href: '/backtest-mirages', label: '回测诈骗' },
  { href: '/negative-alpha-atlas', label: '负α图鉴' },
  { href: '/strategy-rescue', label: '策略可救吗' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="flex flex-col min-h-screen">
        <nav className="border-b border-lab-border bg-lab-black/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-1 hover:text-white">
              <span className="text-lab-muted font-mono">[</span>
              <span className="font-bold tracking-wider">BAD ALPHA</span>
              <span className="text-lab-muted font-mono">]</span>
              <span className="text-lab-muted text-xs ml-1 font-mono">LAB</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lab-gray hover:text-lab-red transition-colors font-mono text-xs uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-lab-border bg-lab-dark mt-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="font-mono text-sm">
                <span className="text-lab-muted">[</span>
                <span>BAD ALPHA</span>
                <span className="text-lab-muted">]</span>
                <span className="text-lab-muted ml-1">LAB</span>
              </div>
              <p className="text-lab-muted text-xs">
                ⚠️ 本站内容仅用于研究和教育目的，不构成投资建议，不提供带单，不承诺收益。
              </p>
              <p className="text-lab-muted text-xs">
                © {new Date().getFullYear()} Bad Alpha Lab — 不卖财富密码，只公开亏钱密码。
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
