import ArbCheckerClient from './ArbCheckerClient'

export const metadata = {
  title: 'YES/NO 套利检查器 | Bad Alpha Lab',
  description: '理解"YES + NO < 1"为什么不等于无风险套利。输入价格，计算手续费和 partial fill 如何吃掉利润。',
}

export default function ArbCheckerPage() {
  return <ArbCheckerClient />
}
