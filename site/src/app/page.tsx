import StrategyAutopsyCard from '@/components/StrategyAutopsyCard'

const sections = [
  {
    href: '/replications',
    title: '亏钱策略复刻',
    titleEn: 'Replications',
    description: '忠实复刻流行策略的完整流程——从信号生成到执行，每一个环节都不省略。',
  },
  {
    href: '/autopsies',
    title: '策略验尸报告',
    titleEn: 'Autopsies',
    description: '拆解策略的死因：手续费侵蚀、滑点扩散、延迟吞噬、流动性枯竭、风控踩踏。',
  },
  {
    href: '/backtest-mirages',
    title: '回测诈骗现场',
    titleEn: 'Backtest Mirages',
    description: '那些回测曲线完美的策略，为什么一上实盘就面目全非？逐条拆穿回测幻象。',
  },
  {
    href: '/negative-alpha-atlas',
    title: '负Alpha图鉴',
    titleEn: 'Negative Alpha Atlas',
    description: '一张图看清策略的Alpha是如何一步步变成负数的。可视化呈现亏损的精确路径。',
  },
  {
    href: '/strategy-rescue',
    title: '策略可救吗',
    titleEn: 'Strategy Rescue',
    description: '有些策略还有救。我们尝试诊断、修补、重新校准——但大多数情况下，结论是：不可救。',
  },
]

const sampleAutopsies = [
  {
    name: 'Polymarket 动量追踪',
    market: '预测市场',
    surfaceEdge: '+12.3% 回测年化',
    replicationFidelity: '94.2%',
    primaryCauseOfDeath: '滑点 + 手续费双重侵蚀',
    negativeAlphaRating: 4,
    verdict: '回测盈利，实盘亏损。表面 Edge 全部被交易成本吃掉。',
    href: '/replications/bal-001',
  },
  {
    name: 'Kalshi 宏观事件套利',
    market: '预测市场',
    surfaceEdge: '+8.7% 事件驱动',
    replicationFidelity: '87.6%',
    primaryCauseOfDeath: '流动性不足导致滑点失控',
    negativeAlphaRating: 3,
    verdict: '理论可行，但订单簿深度不够，实际成交价远劣于信号价。',
    href: '/replications/bal-002',
  },
  {
    name: 'Polymarket 做市商策略',
    market: '预测市场',
    surfaceEdge: '+6.8% spread capture 年化',
    replicationFidelity: '80.0%',
    primaryCauseOfDeath: 'inventory risk + adverse selection',
    negativeAlphaRating: 4,
    verdict: 'Spread 收入确定但有限，库存亏损和逆向选择亏损不确定且致命。Rebate 是补贴不是收入。',
    href: '/replications/bal-003',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative border-b border-lab-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Lab designation */}
            <p className="section-label mb-4">
              <span className="text-lab-red">//</span> NEGATIVE ALPHA RESEARCH LAB
            </p>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Bad Alpha Lab
            </h1>
            <p className="text-xl md:text-2xl text-lab-gray font-mono mb-6">
              负 Alpha 实验室
            </p>

            {/* Tagline */}
            <div className="inline-block bg-lab-red/10 border border-lab-red/30 rounded px-4 py-2 mb-4">
              <p className="text-lab-red font-semibold text-lg">
                不卖财富密码，只公开亏钱密码
              </p>
            </div>

            {/* Manifesto link */}
            <div className="mb-8">
              <a
                href="/manifesto"
                className="inline-block text-lab-gray hover:text-lab-red transition-colors font-mono text-sm"
              >
                阅读品牌宣言 →
              </a>
            </div>

            {/* Core description */}
            <p className="text-lab-gray text-base md:text-lg leading-relaxed max-w-2xl">
              我们专门复刻那些广为流传的量化和预测市场策略。它们看起来很聪明，但一进入真实市场，手续费、滑点、延迟、成交深度和风控约束会一点点吃掉它们的 Alpha。
            </p>
          </div>

          {/* Decorative element */}
          <div className="absolute top-6 right-8 hidden md:block">
            <div className="flex flex-col items-end gap-1 opacity-20">
              <div className="w-32 h-[2px] bg-lab-red" />
              <div className="w-24 h-[2px] bg-lab-red" />
              <div className="w-16 h-[2px] bg-lab-red" />
            </div>
          </div>
        </div>
      </section>

      {/* Sections Navigation */}
      <section className="border-b border-lab-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="section-label">
            <span className="text-lab-red">//</span> RESEARCH DIVISION
          </p>
          <h2 className="section-title">栏目</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="lab-card group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">
                    {section.titleEn}
                  </span>
                  <span className="text-lab-red opacity-0 group-hover:opacity-100 transition-opacity font-mono text-sm">
                    →
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-lab-red transition-colors">
                  {section.title}
                </h3>
                <p className="text-lab-muted text-sm leading-relaxed">
                  {section.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Autopsy Preview */}
      <section className="border-b border-lab-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="section-label">
            <span className="text-lab-red">//</span> RECENT AUTOPSIES
          </p>
          <h2 className="section-title">策略验尸预览</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAutopsies.map((autopsy) => (
              <a key={autopsy.name} href={autopsy.href} className="block">
                <StrategyAutopsyCard {...autopsy} />
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/autopsies"
              className="inline-block border border-lab-border text-lab-gray hover:border-lab-red hover:text-lab-red px-6 py-2 rounded font-mono text-sm uppercase tracking-wider transition-colors"
            >
              查看全部验尸报告 →
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="border border-lab-border rounded-lg p-6 text-center">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              ⚠️ DISCLAIMER
            </p>
            <p className="text-lab-gray text-sm">
              不带单。不承诺收益。不构成投资建议。
            </p>
            <p className="text-lab-muted text-xs mt-1">
              No signals. No promises. No investment advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
