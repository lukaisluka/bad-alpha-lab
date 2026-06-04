export default function StrategyRescuePage() {
  const entries = [
    {
      id: 'res-001',
      title: 'YES/NO 套利',
      verdict: '❌',
      verdictText: '不可救',
      verdictColor: 'text-lab-red',
      borderColor: 'border-lab-red/30',
      bgColor: 'bg-lab-red/10',
    },
    {
      id: 'res-002',
      title: '做市商策略',
      verdict: '⚠️',
      verdictText: '有条件可救',
      verdictColor: 'text-yellow-400',
      borderColor: 'border-yellow-400/30',
      bgColor: 'bg-yellow-400/10',
    },
    {
      id: 'res-003',
      title: '跟单策略',
      verdict: '❌',
      verdictText: '不可救',
      verdictColor: 'text-lab-red',
      borderColor: 'border-lab-red/30',
      bgColor: 'bg-lab-red/10',
    },
    {
      id: 'res-004',
      title: '回测优化策略',
      verdict: '⚠️',
      verdictText: '部分可救',
      verdictColor: 'text-yellow-400',
      borderColor: 'border-yellow-400/30',
      bgColor: 'bg-yellow-400/10',
    },
    {
      id: 'res-005',
      title: '策略生命周期管理',
      verdict: '✅',
      verdictText: '可救',
      verdictColor: 'text-lab-green',
      borderColor: 'border-lab-green/30',
      bgColor: 'bg-lab-green/10',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> STRATEGY RESCUE
      </p>
      <h1 className="section-title">策略可救吗</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        有些策略还有救。我们尝试诊断、修补、重新校准——
        但大多数情况下，结论是：不可救。少数幸存者会在报告中被特别标注。
      </p>

      <div className="space-y-4">
        {entries.map((entry) => (
          <a
            key={entry.id}
            href={`/strategy-rescue/${entry.id}`}
            className="lab-card group block"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">
                    {entry.id.toUpperCase()}
                  </span>
                  <span className="text-lab-red">|</span>
                  <span className="text-lab-muted font-mono text-xs">
                    诊断报告
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-lab-red transition-colors">
                  {entry.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`${entry.bgColor} ${entry.borderColor} border rounded px-3 py-1 font-mono text-sm ${entry.verdictColor}`}
                >
                  {entry.verdict} {entry.verdictText}
                </span>
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
