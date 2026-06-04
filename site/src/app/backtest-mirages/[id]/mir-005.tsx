export default function MIR005() {
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
              MIR-005
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lab-red font-mono text-xs uppercase tracking-wider border border-lab-red/30 px-3 py-1 rounded-sm">
              人为操纵
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
        曲线拟合 — 画出来的回测曲线
      </h1>
      <p className="text-lab-muted font-mono text-sm mb-8">
        Curve Fitting / Cherry Picking
      </p>

      {/* 诈骗现场 */}
      <section className="mb-12">
        <h2 className="section-label mb-6">诈骗现场</h2>
        <div className="border-2 border-lab-red/30 rounded-lg p-8 bg-lab-dark/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                回测曲线
              </p>
              <p className="text-lab-green text-3xl md:text-4xl font-bold font-mono">
                平滑上升
              </p>
              <p className="text-lab-green/60 text-xs font-mono mt-1">几乎无回撤</p>
            </div>
            <div className="text-lab-muted font-mono text-2xl font-bold">vs</div>
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                实盘曲线
              </p>
              <p className="text-lab-red text-3xl md:text-4xl font-bold font-mono">
                持续亏损
              </p>
              <p className="text-lab-red/60 text-xs font-mono mt-1">剧烈波动</p>
            </div>
          </div>
          <div className="border-t border-lab-border mt-6 pt-4">
            <p className="text-lab-gray text-sm text-center">
              差距原因：回测曲线是人为调整出来的
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
              常见手法
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span><span className="text-white font-semibold">选择性时间窗口</span>：只展示策略表现好的时间段</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span><span className="text-white font-semibold">事后止损</span>：在回测中"恰好"在最低点止损</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span><span className="text-white font-semibold">参数回测优化</span>：不断调参直到曲线好看</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">4.</span>
                <span><span className="text-white font-semibold">数据清洗</span>：去掉"异常"数据点（恰好是亏损的）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">5.</span>
                <span><span className="text-white font-semibold">重新定义信号</span>：看到亏损后，修改信号定义</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red pl-10 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              预测市场特有手法
            </p>
            <ul className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>只回测流动性好的市场（忽略流动性差的市场）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>用结算价格而非实时价格计算收益</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>忽略市场关闭期间的价格跳空</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>选择性展示某些事件的结果</span>
              </li>
            </ul>
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
              <span className="text-white font-semibold">回测曲线太完美</span>
              ：真实交易不可能没有波动
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">无法解释的参数值</span>
              ：为什么止损恰好是 13.7%？
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">时间窗口可疑</span>
              ：为什么从 2024年3月开始，而不是 2024年1月？
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">拒绝提供原始数据</span>
              ：如果对方不提供可复现的回测代码
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
            <p className="text-lab-gray">提供完整的可复现回测代码</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">展示全时间段的表现</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">使用预定义的参数，不做事后优化</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">接受回测的不完美</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/backtest-mirages/mir-004"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一个诈骗
        </a>
        <a
          href="/backtest-mirages"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          返回诈骗列表 →
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
