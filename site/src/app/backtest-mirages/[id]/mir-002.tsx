export default function MIR002() {
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
              MIR-002
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-400 font-mono text-xs uppercase tracking-wider border border-orange-400/30 px-3 py-1 rounded-sm">
              过度拟合
            </span>
            <div className="flex gap-0.5" aria-label="危险等级: 4/5">
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
        过拟合 — 为历史数据量身定制的策略
      </h1>
      <p className="text-lab-muted font-mono text-sm mb-8">
        Overfitting
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
                +312%
              </p>
            </div>
            <div className="text-lab-muted font-mono text-2xl font-bold">vs</div>
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                实盘收益
              </p>
              <p className="text-lab-red text-4xl md:text-5xl font-bold font-mono">
                -45%
              </p>
            </div>
          </div>
          <div className="border-t border-lab-border mt-6 pt-4">
            <p className="text-lab-gray text-sm text-center">
              差距原因：策略参数是为历史数据优化的，对未来没有预测力
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
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span>策略有 20 个可调参数</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span>通过网格搜索找到历史最优参数组合</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span>回测曲线完美，夏普比 5.0</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">4.</span>
                <span>实盘完全失效</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              为什么过拟合在预测市场特别严重
            </p>
            <ul className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>预测市场历史数据短（Polymarket 2020年才上线）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>事件不重复（每个选举、每个判决都是唯一的）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>样本量小（活跃市场数量有限）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>市场结构在变化（流动性、参与者、规则都在变）</span>
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              数学
            </p>
            <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-4 space-y-1 inline-block">
              <p className="text-lab-gray">20 个参数，每个 10 个取值</p>
              <p className="text-lab-gray">参数空间 = <span className="text-lab-red">10^20</span></p>
              <p className="text-lab-gray">历史数据点 = ~1000</p>
              <p className="text-lab-gray">参数/数据比 = <span className="text-lab-red">10^17</span></p>
              <p className="text-lab-red font-semibold">过拟合概率 ≈ 100%</p>
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
            <p className="text-lab-gray">
              <span className="text-white font-semibold">参数数量 vs 数据量</span>
              ：参数越多、数据越少，过拟合越严重
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">样本外测试</span>
              ：在未参与优化的数据上测试
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">参数敏感性</span>
              ：微调参数是否导致结果剧变？
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">Walk-forward 测试</span>
              ：滚动窗口优化+测试
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
            <p className="text-lab-gray">参数越少越好（parsimony principle）</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">必须做样本外测试</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">使用 walk-forward 分析</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">如果样本外表现远差于样本内，就是过拟合</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/backtest-mirages/mir-001"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一个诈骗
        </a>
        <a
          href="/backtest-mirages/mir-003"
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
