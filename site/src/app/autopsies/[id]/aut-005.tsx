export default function AUT005() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      {/* Autopsy Label */}
      <div className="border-2 border-lab-red/40 rounded-lg p-4 mb-8 bg-lab-dark">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-lab-muted font-mono text-xs uppercase tracking-widest mb-1">
              AUTOPSY REPORT
            </p>
            <p className="text-lab-red font-mono text-2xl md:text-3xl font-bold tracking-wider">
              AUT-005
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-mono text-xs uppercase tracking-wider border border-yellow-400/30 px-3 py-1 rounded-sm">
              执行风险
            </span>
            <div className="flex gap-0.5" aria-label="负Alpha评级: 3/5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`neg-alpha-star text-lg ${i < 3 ? 'active' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        延迟侵蚀
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-lab-muted font-mono text-sm">涉及策略：</span>
        <a
          href="/replications/bal-003"
          className="text-lab-gray hover:text-lab-red font-mono text-sm border border-lab-border/50 px-2 py-0.5 rounded transition-colors"
        >
          BAL-003
        </a>
        <a
          href="/replications/bal-004"
          className="text-lab-gray hover:text-lab-red font-mono text-sm border border-lab-border/50 px-2 py-0.5 rounded transition-colors"
        >
          BAL-004
        </a>
      </div>

      {/* 尸体描述 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">尸体描述</h2>
        <div className="border border-dashed border-lab-border rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed">
            策略信号正确，但执行延迟导致买入价更高、卖出价更低，利润被侵蚀。
          </p>
        </div>
      </section>

      {/* 死因解剖 */}
      <section className="mb-12">
        <h2 className="section-label mb-6">死因解剖</h2>
        <div className="space-y-0">
          {/* Level 1 */}
          <div className="border-l-2 border-lab-border pl-6 pb-6">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              表面死因
            </p>
            <p className="text-white font-semibold">系统太慢</p>
          </div>
          {/* Level 2 */}
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              真正死因
            </p>
            <p className="text-white font-semibold">
              信息在传播过程中已经被价格反映
            </p>
          </div>
          {/* Level 3 */}
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              深度分析
            </p>
            <p className="text-lab-gray mb-4">
              从大户交易到跟单者执行，存在不可避免的延迟：
            </p>
            <ul className="text-lab-gray ml-4 mb-4 space-y-2">
              <li className="flex gap-3">
                <span className="text-lab-muted font-mono text-sm shrink-0 w-32">区块确认</span>
                <span>5-15秒</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-muted font-mono text-sm shrink-0 w-32">检测系统</span>
                <span>10-30秒</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-muted font-mono text-sm shrink-0 w-32">决策+下单</span>
                <span>5-30秒</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0 w-32">总延迟</span>
                <span className="text-lab-red font-semibold">20秒-2分钟</span>
              </li>
            </ul>
            <p className="text-lab-gray mb-4">
              在这段时间内，价格已经移动了。你买到的价格，已经不是大户买到的价格。
            </p>
            <p className="text-white font-semibold mb-3">延迟不对称：</p>
            <ul className="text-lab-gray ml-4 space-y-2">
              <li>- 大户在 0.50 买入，你在 0.55 跟入</li>
              <li>- 如果价格到 0.60：大户赚 20%，你赚 9%</li>
              <li>- 如果价格回到 0.50：大户不亏，<span className="text-lab-red font-semibold">你亏 9%</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 亏损路径 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">亏损路径</h2>
        <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-6 space-y-1">
          <p className="text-lab-muted">延迟不对称的致命后果：</p>
          <p className="text-lab-green">大户买入价 0.50 → 价格涨至 0.60 → 大户赚 20%</p>
          <p className="text-lab-red">跟单买入价 0.55 → 价格涨至 0.60 → 你赚 9%</p>
          <p className="text-lab-red font-semibold mt-2">价格回落至 0.50 → 大户不亏 → 你亏 9%</p>
        </div>
      </section>

      {/* 验尸结论 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">验尸结论</h2>
        <div className="border-2 border-lab-red/50 rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed mb-4">
            延迟不是"可以优化"的技术问题，而是跟单策略的结构性劣势。你永远比信号源慢，这意味着你的利润永远比信号源少，亏损永远比信号源多。
          </p>
          <div className="border-t border-lab-red/30 pt-4 mt-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              同类死因策略
            </p>
            <p className="text-lab-red text-sm">
              所有依赖他人交易信号的策略
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/autopsies/aut-004"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一份验尸
        </a>
        <a
          href="/autopsies"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          返回验尸列表 →
        </a>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-lab-border pt-8 mt-8">
        <p className="text-lab-muted text-xs text-center">
          *免责声明：本报告仅用于研究和教育目的，不构成投资建议，不提供带单，不承诺收益。
        </p>
        <p className="text-lab-muted text-xs text-center mt-2">
          Bad Alpha Lab — 不卖财富密码，只公开亏钱密码。
        </p>
      </div>
    </div>
  )
}
