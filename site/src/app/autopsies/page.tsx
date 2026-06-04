const autopsies = [
  {
    id: 'aut-001',
    name: 'Partial Fill 综合征',
    category: '执行风险' as const,
    rating: 4,
    strategies: ['BAL-001', 'BAL-003'],
    description:
      '策略在回测中双边同时成交，利润确定。实盘中只有一边成交，"无风险套利"变成单边赌博。',
  },
  {
    id: 'aut-002',
    name: '手续费黑洞',
    category: '成本侵蚀' as const,
    rating: 3,
    strategies: ['BAL-001', 'BAL-003'],
    description:
      '策略的表面利润看起来可观，但扣除手续费后变成亏损。利润来源太小，无法覆盖交易成本。',
  },
  {
    id: 'aut-003',
    name: 'Adverse Selection 陷阱',
    category: '信息不对称' as const,
    rating: 5,
    strategies: ['BAL-003', 'BAL-004'],
    description:
      '策略提供流动性或跟单，但对手方总是"知道得更多"。每次成交都是亏钱的。',
  },
  {
    id: 'aut-004',
    name: '幸存者偏差幻觉',
    category: '统计陷阱' as const,
    rating: 4,
    strategies: ['BAL-004'],
    description:
      '"过去赚钱的大户"在未来不再赚钱。你无法从历史数据中区分"聪明"和"幸运"。',
  },
  {
    id: 'aut-005',
    name: '延迟侵蚀',
    category: '执行风险' as const,
    rating: 3,
    strategies: ['BAL-003', 'BAL-004'],
    description:
      '策略信号正确，但执行延迟导致买入价更高、卖出价更低。你永远比信号源慢。',
  },
]

type Category = '执行风险' | '成本侵蚀' | '信息不对称' | '统计陷阱'

const categoryColors: Record<Category, string> = {
  执行风险: 'text-yellow-400',
  成本侵蚀: 'text-orange-400',
  信息不对称: 'text-lab-red',
  统计陷阱: 'text-blue-400',
}

const categoryBorderColors: Record<Category, string> = {
  执行风险: 'border-yellow-400/30',
  成本侵蚀: 'border-orange-400/30',
  信息不对称: 'border-lab-red/30',
  统计陷阱: 'border-blue-400/30',
}

export default function AutopsiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> AUTOPSIES
      </p>
      <h1 className="section-title">策略验尸报告</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        拆解策略的死因：手续费侵蚀、滑点扩散、延迟吞噬、流动性枯竭、风控踩踏。
        每一份验尸报告都是一份法医档案——冷酷、精确、不留情面。
      </p>

      <div className="space-y-4">
        {autopsies.map((autopsy) => (
          <a
            key={autopsy.id}
            href={`/autopsies/${autopsy.id}`}
            className="lab-card group block relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-lab-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left: ID + Category + Name + Description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">
                    {autopsy.id.toUpperCase()}
                  </span>
                  <span className="text-lab-red">|</span>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded-sm border ${categoryColors[autopsy.category]} ${categoryBorderColors[autopsy.category]}`}
                  >
                    {autopsy.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-lab-red transition-colors mb-1">
                  {autopsy.name}
                </h3>
                <p className="text-lab-muted text-sm leading-relaxed line-clamp-2">
                  {autopsy.description}
                </p>
              </div>

              {/* Right: Strategies + Rating + Arrow */}
              <div className="flex items-center gap-5 shrink-0">
                <div className="flex gap-2">
                  {autopsy.strategies.map((s) => (
                    <span
                      key={s}
                      className="text-lab-muted font-mono text-xs border border-lab-border/50 px-2 py-0.5 rounded"
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div
                  className="flex gap-0.5"
                  aria-label={`负Alpha评级: ${autopsy.rating}/5`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`neg-alpha-star text-sm ${i < autopsy.rating ? 'active' : ''}`}
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
