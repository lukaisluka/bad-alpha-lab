const mirages = [
  {
    id: 'mir-001',
    name: '未来函数',
    category: '数据泄露' as const,
    rating: 5,
    backtestReturn: '+87.3%',
    liveReturn: '-23.1%',
    description:
      '用明天的数据做今天的决策——回测中使用了未来才有的数据，"超预期"在财报发布前你是不知道的。',
  },
  {
    id: 'mir-002',
    name: '过拟合',
    category: '过度拟合' as const,
    rating: 4,
    backtestReturn: '+312%',
    liveReturn: '-45%',
    description:
      '为历史数据量身定制的策略——20 个可调参数的网格搜索，回测夏普比 5.0，实盘完全失效。',
  },
  {
    id: 'mir-003',
    name: '幸存者偏差',
    category: '选择偏差' as const,
    rating: 4,
    backtestReturn: '+50%',
    liveReturn: '-10%',
    description:
      '只看活下来的策略——测试 100 个策略选出最好的 3 个，纯靠运气"显著盈利"的必然存在。',
  },
  {
    id: 'mir-004',
    name: '成本忽略',
    category: '成本遗漏' as const,
    rating: 3,
    backtestReturn: '+25%',
    liveReturn: '-5%',
    description:
      '回测不算手续费和滑点——每天交易 5 次，4% 双边手续费，策略需要每天赚 20% 才能打平。',
  },
  {
    id: 'mir-005',
    name: '曲线拟合',
    category: '人为操纵' as const,
    rating: 5,
    backtestReturn: '平滑上升',
    liveReturn: '持续亏损',
    description:
      '画出来的回测曲线——选择性时间窗口、事后止损、参数回测优化，回测曲线完美无回撤。',
  },
]

type Category = '数据泄露' | '过度拟合' | '选择偏差' | '成本遗漏' | '人为操纵'

const categoryColors: Record<Category, string> = {
  数据泄露: 'text-yellow-400',
  过度拟合: 'text-orange-400',
  选择偏差: 'text-blue-400',
  成本遗漏: 'text-purple-400',
  人为操纵: 'text-lab-red',
}

const categoryBorderColors: Record<Category, string> = {
  数据泄露: 'border-yellow-400/30',
  过度拟合: 'border-orange-400/30',
  选择偏差: 'border-blue-400/30',
  成本遗漏: 'border-purple-400/30',
  人为操纵: 'border-lab-red/30',
}

export default function BacktestMiragesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> BACKTEST MIRAGES
      </p>
      <h1 className="section-title">回测诈骗现场</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        那些回测曲线完美的策略，为什么一上实盘就面目全非？
        我们逐条拆穿回测幻象——幸存者偏差、过度拟合、前视偏差、数据挖掘。
      </p>

      <div className="space-y-4">
        {mirages.map((mirage) => (
          <a
            key={mirage.id}
            href={`/backtest-mirages/${mirage.id}`}
            className="lab-card group block relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-lab-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left: ID + Category + Name + Description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">
                    {mirage.id.toUpperCase()}
                  </span>
                  <span className="text-lab-red">|</span>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded-sm border ${categoryColors[mirage.category]} ${categoryBorderColors[mirage.category]}`}
                  >
                    {mirage.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-lab-red transition-colors mb-1">
                  {mirage.name}
                </h3>
                <p className="text-lab-muted text-sm leading-relaxed line-clamp-2">
                  {mirage.description}
                </p>
              </div>

              {/* Right: Returns comparison + Rating + Arrow */}
              <div className="flex items-center gap-5 shrink-0">
                {/* Backtest vs Live returns */}
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="text-lab-green font-bold">{mirage.backtestReturn}</span>
                  <span className="text-lab-muted text-xs">vs</span>
                  <span className="text-lab-red font-bold">{mirage.liveReturn}</span>
                </div>

                {/* Rating stars */}
                <div
                  className="flex gap-0.5"
                  aria-label={`危险等级: ${mirage.rating}/5`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`neg-alpha-star text-sm ${i < mirage.rating ? 'active' : ''}`}
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
