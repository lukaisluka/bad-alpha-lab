export default function AUT001() {
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
              AUT-001
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-mono text-xs uppercase tracking-wider border border-yellow-400/30 px-3 py-1 rounded-sm">
              执行风险
            </span>
            <div className="flex gap-0.5" aria-label="负Alpha评级: 4/5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`neg-alpha-star text-lg ${i < 4 ? 'active' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Partial Fill 综合征
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
            策略在回测中完美运行，双边同时成交，利润确定。实盘中，只有一边成交，"无风险套利"变成单边赌博。
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
            <p className="text-white font-semibold">订单没有同时成交</p>
          </div>
          {/* Level 2 */}
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              真正死因
            </p>
            <p className="text-white font-semibold">
              预测市场的成交机制不支持"原子性双边成交"
            </p>
          </div>
          {/* Level 3 */}
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              深度分析
            </p>
            <p className="text-lab-gray mb-4">
              在传统金融中，你可以用 IOC（Immediate or Cancel）订单确保双边要么同时成交，要么同时取消。但在 Polymarket 上：
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span>你先下 YES 单，等待成交</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span>YES 单成交了</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span>你下 NO 单，但价格已经变了</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">4.</span>
                <span>NO 单成交不了，或者成交价更差</span>
              </li>
            </ol>
            <p className="text-lab-red font-semibold mt-4">
              这不是 bug，是结构性的。Polymarket 的 CLOB 不支持跨市场原子订单。你永远无法保证双边同时成交。
            </p>
          </div>
        </div>
      </section>

      {/* 亏损路径 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">亏损路径</h2>
        <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-6 space-y-1">
          <p className="text-lab-muted">理想路径：</p>
          <p className="text-lab-green">买YES + 买NO → 结算 → 赚价差</p>
          <p className="text-lab-muted mt-4">实际路径：</p>
          <p className="text-lab-red">买YES → NO价格变了 → 只持YES → 结算 → 可能大亏</p>
        </div>
      </section>

      {/* 验尸结论 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">验尸结论</h2>
        <div className="border-2 border-lab-red/50 rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed mb-4">
            Partial fill 不是"偶尔发生的小问题"，而是预测市场套利策略的结构性缺陷。任何依赖"双边同时成交"的策略，在 Polymarket 上都有这个致命伤。
          </p>
          <div className="border-t border-lab-red/30 pt-4 mt-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              同类死因策略
            </p>
            <p className="text-lab-red text-sm">
              所有跨合约套利、做市商的 round trip 假设
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/autopsies"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 返回验尸列表
        </a>
        <a
          href="/autopsies/aut-002"
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
