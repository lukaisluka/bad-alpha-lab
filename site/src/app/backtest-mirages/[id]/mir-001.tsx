export default function MIR001() {
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
              MIR-001
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-mono text-xs uppercase tracking-wider border border-yellow-400/30 px-3 py-1 rounded-sm">
              数据泄露
            </span>
            <div className="flex gap-0.5" aria-label="危险等级: 5/5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`neg-alpha-star text-lg ${i < 5 ? 'active' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        未来函数 — 用明天的数据做今天的决策
      </h1>
      <p className="text-lab-muted font-mono text-sm mb-8">
        Look-Ahead Bias / Data Leakage
      </p>

      {/* 诈骗现场 */}
      <section className="mb-12">
        <h2 className="section-label mb-6">诈骗现场</h2>
        <div className="border-2 border-lab-red/30 rounded-lg p-8 bg-lab-dark/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                回测收益
              </p>
              <p className="text-lab-green text-4xl md:text-5xl font-bold font-mono">
                +87.3%
              </p>
            </div>
            <div className="text-lab-muted font-mono text-2xl font-bold">vs</div>
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                实盘收益
              </p>
              <p className="text-lab-red text-4xl md:text-5xl font-bold font-mono">
                -23.1%
              </p>
            </div>
          </div>
          <div className="border-t border-lab-border mt-6 pt-4">
            <p className="text-lab-gray text-sm text-center">
              差距原因：回测中使用了未来才有的数据
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
              典型案例
            </p>
            <p className="text-white font-semibold mb-3">
              策略声称"在财报发布前买入超预期股票"
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span>回测中，策略在财报发布前一天买入</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span>但"超预期"这个信息，在财报发布前你是不知道的</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span>回测用了财报发布后的数据来决定财报发布前的交易</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              预测市场版本
            </p>
            <p className="text-white font-semibold mb-3">
              策略声称"在事件结果确定前买入正确方向"
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span>回测中，策略在事件结算前买入</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span>但"正确方向"在结算前是未知的</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span>回测用了结算结果来决定结算前的交易</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-red font-semibold">
              这是最常见的回测诈骗，也是最隐蔽的。你用未来数据做决策，当然能"预测"未来。
            </p>
          </div>
        </div>
      </section>

      {/* 如何识别 */}
      <section className="mb-12">
        <h2 className="section-label mb-4">如何识别</h2>
        <div className="border border-lab-border rounded-lg p-6 bg-lab-dark/50 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">信号时间检查</span>
              ：信号的生成时间是否早于信号所需数据的可用时间？
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">数据可用性检查</span>
              ：策略使用的数据，在当时是否真的可以获取？
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">信息发布时间检查</span>
              ：新闻/公告的发布时间 vs 交易时间
            </p>
          </div>
        </div>
      </section>

      {/* 正确做法 */}
      <section className="mb-12">
        <h2 className="section-label mb-4">正确做法</h2>
        <div className="border-2 border-lab-green/20 rounded-lg p-6 bg-lab-dark/50 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">严格使用"当时可获取"的数据</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">信号生成时间必须早于交易执行时间</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">对每个数据源，确认其发布延迟</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/backtest-mirages"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 返回诈骗列表
        </a>
        <a
          href="/backtest-mirages/mir-002"
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
