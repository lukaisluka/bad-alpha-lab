export default function AUT002() {
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
              AUT-002
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-400 font-mono text-xs uppercase tracking-wider border border-orange-400/30 px-3 py-1 rounded-sm">
              成本侵蚀
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
        手续费黑洞
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-lab-muted font-mono text-sm">涉及策略：</span>
        <a
          href="/replications/bal-001"
          className="text-lab-gray hover:text-lab-red font-mono text-sm border border-lab-border/50 px-2 py-0.5 rounded transition-colors"
        >
          BAL-001
        </a>
        <a
          href="/replications/bal-003"
          className="text-lab-gray hover:text-lab-red font-mono text-sm border border-lab-border/50 px-2 py-0.5 rounded transition-colors"
        >
          BAL-003
        </a>
      </div>

      {/* 尸体描述 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">尸体描述</h2>
        <div className="border border-dashed border-lab-border rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed">
            策略的表面利润（spread/价差）看起来可观，但扣除手续费后变成亏损。
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
            <p className="text-white font-semibold">手续费太高</p>
          </div>
          {/* Level 2 */}
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              真正死因
            </p>
            <p className="text-white font-semibold">
              策略的利润来源（spread/价差）太小，无法覆盖交易成本
            </p>
          </div>
          {/* Level 3 */}
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              深度分析
            </p>
            <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-4 mb-4 space-y-1">
              <p><span className="text-lab-muted">价差</span> = <span className="text-lab-green">3%</span></p>
              <p><span className="text-lab-muted">手续费</span> = <span className="text-lab-red">2% × 2次 = 4%</span>（双边各一次）</p>
              <p><span className="text-lab-muted">净利润</span> = 3% - 4% = <span className="text-lab-red">-1%</span></p>
            </div>
            <p className="text-lab-red font-semibold">
              关键洞察：手续费不是"额外成本"，而是策略利润的"天花板"。当你的利润来源是 3-5% 的价差时，2% 的手续费就是致命的。
            </p>
          </div>
        </div>
      </section>

      {/* 亏损路径 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">亏损路径</h2>
        <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-6 space-y-1">
          <p className="text-lab-muted">理想：</p>
          <p className="text-lab-green">价差3% → 赚3%</p>
          <p className="text-lab-muted mt-4">实际：</p>
          <p className="text-lab-red">价差3% - 手续费4% → 亏1%</p>
          <p className="text-lab-muted mt-4">更实际：</p>
          <p className="text-lab-red">价差3% - 手续费4% - 滑点1% → 亏2%</p>
        </div>
      </section>

      {/* 验尸结论 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">验尸结论</h2>
        <div className="border-2 border-lab-red/50 rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed mb-4">
            任何利润来源是"小价差"的策略，在预测市场中都面临手续费黑洞。这不是手续费"太高"的问题，而是策略的 edge 太薄。
          </p>
          <div className="border-t border-lab-red/30 pt-4 mt-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              同类死因策略
            </p>
            <p className="text-lab-red text-sm">
              所有 spread-based 策略、高频做市
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/autopsies/aut-001"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一份验尸
        </a>
        <a
          href="/autopsies/aut-003"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          下一份验尸 →
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
