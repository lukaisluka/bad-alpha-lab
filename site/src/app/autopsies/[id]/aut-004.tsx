export default function AUT004() {
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
              AUT-004
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-mono text-xs uppercase tracking-wider border border-blue-400/30 px-3 py-1 rounded-sm">
              统计陷阱
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
        幸存者偏差幻觉
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-lab-muted font-mono text-sm">涉及策略：</span>
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
            "过去赚钱的大户"在未来不再赚钱，跟单者亏损。
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
            <p className="text-white font-semibold">大户变笨了</p>
          </div>
          {/* Level 2 */}
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              真正死因
            </p>
            <p className="text-white font-semibold">
              大户从来没有"聪明"过，他们只是"幸运"过
            </p>
          </div>
          {/* Level 3 */}
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              深度分析
            </p>
            <p className="text-lab-gray mb-4">
              1000 个随机交易者中，3 个月后纯靠运气会有约 50 个盈利。这 50 个人就是"聪明钱"。但他们的未来表现和随机交易者没有区别。
            </p>
            <p className="text-white font-semibold mb-3">更隐蔽的版本：</p>
            <ul className="text-lab-gray ml-4 space-y-2">
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">•</span>
                <span>你选择"过去 30 天盈利 top 10"的大户</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">•</span>
                <span>但 30 天的样本太小，无法区分运气和能力</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lab-red font-mono text-sm shrink-0">•</span>
                <span>即使 1 年的样本，在预测市场这种高波动环境中也不够</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 亏损路径 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">亏损路径</h2>
        <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-6 space-y-1">
          <p className="text-lab-red">选择过去赚钱的大户 → 跟单 → 大户回归均值 → 跟单者亏损</p>
        </div>
      </section>

      {/* 验尸结论 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">验尸结论</h2>
        <div className="border-2 border-lab-red/50 rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed mb-4">
            幸存者偏差是跟单策略的根基性缺陷。你无法从历史数据中区分"聪明"和"幸运"，这意味着跟单策略的信号源本身就是不可靠的。
          </p>
          <div className="border-t border-lab-red/30 pt-4 mt-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              同类死因策略
            </p>
            <p className="text-lab-red text-sm">
              所有基于历史排名的策略、所有"跟着赢家走"的策略
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/autopsies/aut-003"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一份验尸
        </a>
        <a
          href="/autopsies/aut-005"
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
