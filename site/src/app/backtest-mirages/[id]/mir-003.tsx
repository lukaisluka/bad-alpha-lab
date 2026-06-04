export default function MIR003() {
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
              MIR-003
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono text-xs uppercase tracking-wider border border-blue-400/30 px-3 py-1 rounded-sm">
              选择偏差
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
        幸存者偏差 — 只看活下来的策略
      </h1>
      <p className="text-lab-muted font-mono text-sm mb-8">
        Survivorship Bias / Selection Bias
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
                +50%
              </p>
            </div>
            <div className="text-lab-muted font-mono text-2xl font-bold">vs</div>
            <div className="text-center">
              <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
                实盘收益
              </p>
              <p className="text-lab-red text-4xl md:text-5xl font-bold font-mono">
                -10%
              </p>
            </div>
          </div>
          <div className="border-t border-lab-border mt-6 pt-4">
            <p className="text-lab-gray text-sm text-center">
              "我测试了 100 个策略，选出了最好的 3 个，年化收益 +50%！"——100 个策略中总有几个靠运气表现好的
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
              数学
            </p>
            <ol className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">1.</span>
                <span>100 个随机策略</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">2.</span>
                <span>显著性水平 5%</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">3.</span>
                <span>纯靠运气，5 个策略会"显著盈利"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">4.</span>
                <span>这 5 个策略的回测曲线看起来很棒</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">5.</span>
                <span>但它们的实盘表现 = 随机</span>
              </li>
            </ol>
          </div>
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              预测市场版本
            </p>
            <ul className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>"我回测了 50 个信号，找到了 3 个有效的"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>但你没有报告另外 47 个无效的</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>3 个"有效"的可能只是运气</span>
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              更隐蔽的版本
            </p>
            <ul className="space-y-2 text-lab-gray">
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>你只回测了"还在运行"的市场</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span>已经关闭/结算亏损的市场被排除了</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red shrink-0">•</span>
                <span className="text-lab-red font-semibold">这等于只看赢家，不看输家</span>
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
              <span className="text-white font-semibold">多重测试校正</span>
              ：如果测试了 N 个策略，显著性阈值应该除以 N
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">报告所有测试</span>
              ：包括失败的策略
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">✓</span>
            <p className="text-lab-gray">
              <span className="text-white font-semibold">预注册</span>
              ：在测试前声明你要测试什么
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
            <p className="text-lab-gray">使用 Bonferroni 校正或 FDR 控制</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">报告所有测试的策略，不只是最好的</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">预注册研究假设</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lab-green shrink-0 mt-0.5">→</span>
            <p className="text-lab-gray">样本外验证</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/backtest-mirages/mir-002"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一个诈骗
        </a>
        <a
          href="/backtest-mirages/mir-004"
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
