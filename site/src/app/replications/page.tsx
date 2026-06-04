export default function ReplicationsPage() {
  const replications = [
    {
      slug: 'bal-001',
      title: 'YES + NO < 1 就是无风险套利？',
      subtitle: 'YES/NO 补数套利',
      causeOfDeath: 'partial fill + 手续费侵蚀',
      rating: 4,
    },
    {
      slug: 'bal-002',
      title: 'Polymarket 不是 Fair Price',
      subtitle: 'Polymarket 价格锚定策略',
      causeOfDeath: '噪声定价 + 结算规则差异 + 延迟',
      rating: 3,
    },
    {
      slug: 'bal-003',
      title: '做市商策略：spread capture 的幻觉',
      subtitle: 'Polymarket 做市商策略',
      causeOfDeath: 'inventory risk + adverse selection + spread 压缩',
      rating: 4,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> REPLICATIONS
      </p>
      <h1 className="section-title">亏钱策略复刻</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        忠实复刻流行策略的完整流程——从信号生成到执行，每一个环节都不省略。
        我们不简化、不省略、不美化。你看到的就是策略运行的真实过程。
      </p>

      <div className="space-y-4">
        {replications.map((r) => (
          <a
            key={r.slug}
            href={`/replications/${r.slug}`}
            className="lab-card group block"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">
                    {r.slug.toUpperCase()}
                  </span>
                  <span className="text-lab-red">|</span>
                  <span className="text-lab-muted font-mono text-xs">
                    {r.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-lab-red transition-colors">
                  {r.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lab-red text-sm font-mono">
                  {r.causeOfDeath}
                </span>
                <div className="flex gap-0.5" aria-label={`负Alpha指数: ${r.rating}/5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`neg-alpha-star text-sm ${i < r.rating ? 'active' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-lab-red opacity-0 group-hover:opacity-100 transition-opacity font-mono text-sm">
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
