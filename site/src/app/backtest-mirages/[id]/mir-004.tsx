export default function MIR004() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      {/* Mirage Label */}
      <div className="border-2 border-lab-red/40 rounded-lg p-4 mb-8 bg-lab-dark">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-lab-muted font-mono text-xs uppercase tracking-widest mb-1">
              BACKTEST MIRAGE
            </p>
            <p className="text-lab-red font-mono text-2xl md:text-3xl font-bold tracking-wider">
              MIR-004
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-purple-400 font-mono text-xs uppercase tracking-wider border border-purple-400/30 px-3 py-1 rounded-sm">
              成本遗漏
            </span>
            <div className="flex gap-0.5" aria-label="危险等级: 3/5">
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
        成本忽略 — 回测不算手续费和滑点
      </h1>
      <p className="text-lab-muted font-mono text-sm mb-8">
        Cost Omission / Transaction Cost Neglect
      </p>

      {/* 诈骗现场 */}
      <section className="mb-12">
        <h2 className="section-label mb-6">诈骗现场</h2>
        <div className="border-2 border-lab-red/30 rounded-lg p-8 bg-lab-dark/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                回测收益（未扣除成本）
              </p>
              <p className="text-lab-green text-4xl md:text-5xl font-bold font-mono">
                +25%
              </p>
            </div>
            <div className="text-lab-muted font-mono text-2xl font-bold">vs</div>
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                实盘收益（扣除成本后）
              </p>
              <p className="text-lab-red text-4xl md:text-5xl font-bold font-mono">
                -5%
              </p>
            </div>
          </div>
          <div className="border-t border-lab-border mt-6 pt-4">
            <p className="text-lab-gray text-sm text-center">
              差距原因：回测忽略了手续费、滑点、bid-ask spread
            </p>
          </div>
        </div>
      </section>

      {/* 拆穿过程 */}
      <section className="mb-12">
        <h2 className="section-label mb-6">拆穿过程</h2>
        <div className="space-y-0">
          <div className="border-l-2 border-lab-border pl-6 pb-6">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              最常见的遗漏
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span><span className="text-white font-semibold">手续费</span>：Polymarket 2% 的手续费，每笔交易都扣</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span><span className="text-white font-semibold">Slippage</span>：你用 close 价格回测，但实际要用 ask 买入、bid 卖出</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span><span className="text-white font-semibold">Bid-ask spread</span>：中间的差价就是成本</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">4.</span>
                <span><span className="text-white font-semibold">Partial fill</span>：不是每笔都能完整成交</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">5.</span>
                <span><span className="text-white font-semibold">资金成本</span>：锁定的资金有机会成本</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red pl-10 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              数学
            </p>
            <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-4 space-y-1 inline-block">
              <p className="text-lab-gray">策略每天交易 5 次</p>
              <p className="text-lab-gray">每次手续费 2% × 2（买入+卖出）= 4%</p>
              <p className="text-lab-gray">每天成本 = 5 × 4% = <span className="text-lab-red">20%</span></p>
              <p className="text-lab-gray">策略需要每天赚 20% 才能打平</p>
              <p className="text-lab-red font-semibold">大多数"盈利"策略的 edge 远小于 20%/天</p>
            </div>
          </div>
        </div>
      </section>

      {/* 如何识别 */}
      <section className="mb-12">
        <h2 className="section-label mb-4">如何识别</h2>
        <div className="border border-lab-border rounded-lg p-6 bg-lab-dark/50 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">检查回测是否包含手续费</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">检查是否使用 bid/ask 价格而非 close</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">检查是否考虑 slippage</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">计算盈亏平衡的交易成本</p>
          </div>
        </div>
      </section>

      {/* 正确做法 */}
      <section className="mb-12">
        <h2 className="section-label mb-4">正确做法</h2>
        <div className="border-2 border-lab-green/20 rounded-lg p-6 bg-lab-dark/50 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">回测必须包含所有交易成本</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">使用 bid/ask 价格而非 mid/close</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">加入合理的 slippage 估计</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">计算成本后的净利润</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/backtest-mirages/mir-003"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一个诈骗
        </a>
        <a
          href="/backtest-mirages/mir-005"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          下一个诈骗 →
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
