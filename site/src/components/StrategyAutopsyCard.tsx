interface StrategyAutopsyCardProps {
  name: string
  market: string
  surfaceEdge: string
  replicationFidelity: string
  primaryCauseOfDeath: string
  negativeAlphaRating: number // 1-5
  verdict: string
}

export default function StrategyAutopsyCard({
  name,
  market,
  surfaceEdge,
  replicationFidelity,
  primaryCauseOfDeath,
  negativeAlphaRating,
  verdict,
}: StrategyAutopsyCardProps) {
  return (
    <div className="lab-card group relative overflow-hidden">
      {/* Red top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-lab-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="autopsy-tag mb-2">验尸报告</span>
          <h3 className="text-lg font-bold mt-2 font-mono">{name}</h3>
        </div>
        <div className="flex gap-0.5" aria-label={`负Alpha指数: ${negativeAlphaRating}/5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`neg-alpha-star text-sm ${i < negativeAlphaRating ? 'active' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between border-b border-lab-border/50 pb-2">
          <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">市场</span>
          <span className="text-lab-gray">{market}</span>
        </div>
        <div className="flex justify-between border-b border-lab-border/50 pb-2">
          <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">表面Edge</span>
          <span className="text-lab-green font-mono">{surfaceEdge}</span>
        </div>
        <div className="flex justify-between border-b border-lab-border/50 pb-2">
          <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">复刻完整度</span>
          <span className="text-lab-gray">{replicationFidelity}</span>
        </div>
        <div className="flex justify-between border-b border-lab-border/50 pb-2">
          <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">主要死因</span>
          <span className="text-lab-red">{primaryCauseOfDeath}</span>
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-4 pt-3 border-t border-lab-border">
        <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">最终判定</span>
        <p className="text-white font-semibold mt-1 text-sm">{verdict}</p>
      </div>
    </div>
  )
}
