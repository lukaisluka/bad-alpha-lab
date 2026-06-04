export default function NegativeAlphaAtlasPage() {
  const entries = [
    {
      id: 'atl-001',
      title: '套利策略的 Alpha 消亡路径',
      strategy: 'BAL-001',
      theoryAlpha: '+5%',
      actualAlpha: '-2%',
      theoryNum: 5,
      actualNum: -2,
    },
    {
      id: 'atl-002',
      title: '做市商策略的 Alpha 消亡路径',
      strategy: 'BAL-003',
      theoryAlpha: '+4%',
      actualAlpha: '-6%',
      theoryNum: 4,
      actualNum: -6,
    },
    {
      id: 'atl-003',
      title: '跟单策略的 Alpha 消亡路径',
      strategy: 'BAL-004',
      theoryAlpha: '+15%',
      actualAlpha: '-5%',
      theoryNum: 15,
      actualNum: -5,
    },
    {
      id: 'atl-004',
      title: '回测到实盘的 Alpha 消亡路径',
      strategy: 'MIR-001~005',
      theoryAlpha: '+50%',
      actualAlpha: '-10%',
      theoryNum: 50,
      actualNum: -10,
    },
    {
      id: 'atl-005',
      title: '策略生命周期 Alpha 曲线',
      strategy: '综合',
      theoryAlpha: '发现',
      actualAlpha: '衰亡',
      theoryNum: 0,
      actualNum: 0,
      isLifecycle: true,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> NEGATIVE ALPHA ATLAS
      </p>
      <h1 className="section-title">负Alpha图鉴</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        一张图看清策略的Alpha是如何一步步变成负数的。
        可视化呈现亏损的精确路径——从理论盈利到实际亏损的每一个转折点。
      </p>

      <div className="space-y-4">
        {entries.map((entry) => (
          <a
            key={entry.id}
            href={`/negative-alpha-atlas/${entry.id}`}
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
                    {entry.strategy}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-lab-red transition-colors">
                  {entry.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                {entry.isLifecycle ? (
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-lab-green">发现</span>
                    <span className="text-lab-muted">→</span>
                    <span className="text-lab-red">衰亡</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-lab-green">{entry.theoryAlpha}</span>
                    <span className="text-lab-muted">→</span>
                    <span className="text-lab-red">{entry.actualAlpha}</span>
                  </div>
                )}
                <span className="text-lab-red opacity-0 group-hover:opacity-100 transition-opacity font-mono text-sm">
                  →
                </span>
              </div>
            </div>
            {/* Alpha decay bar */}
            {!entry.isLifecycle && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-lab-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(entry.theoryNum, 0)}%`,
                      background: 'linear-gradient(to right, #44ff44, #ff4444)',
                    }}
                  />
                </div>
                <span className="text-lab-muted font-mono text-xs shrink-0">
                  Alpha 衰减 {Math.abs(entry.theoryNum - entry.actualNum)}%
                </span>
              </div>
            )}
            {entry.isLifecycle && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-lab-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '100%',
                      background: 'linear-gradient(to right, #44ff44 20%, #a0a0a0 50%, #ff4444 80%)',
                    }}
                  />
                </div>
                <span className="text-lab-muted font-mono text-xs shrink-0">
                  发现 → 传播 → 竞争 → 衰亡
                </span>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
