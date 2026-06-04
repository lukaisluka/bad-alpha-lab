export default function AUT003() {
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
              AUT-003
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lab-red font-mono text-xs uppercase tracking-wider border border-lab-red/30 px-3 py-1 rounded-sm">
              信息不对称
            </span>
            <div className="flex gap-0.5" aria-label="负Alpha评级: 5/5">
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
        Adverse Selection 陷阱
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
            策略提供流动性或跟单，但对手方总是"知道得更多"。每次成交都是亏钱的。
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
            <p className="text-white font-semibold">对手方太聪明</p>
          </div>
          {/* Level 2 */}
          <div className="border-l-2 border-lab-red/50 pl-8 pb-6 ml-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              真正死因
            </p>
            <p className="text-white font-semibold">
              预测市场的交易主要是信息驱动的，不是流动性驱动的
            </p>
          </div>
          {/* Level 3 */}
          <div className="border-l-2 border-lab-red pl-10 ml-8">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
              深度分析
            </p>
            <p className="text-lab-gray mb-4">在传统市场中：</p>
            <ul className="text-lab-gray ml-4 mb-4 space-y-1">
              <li>- 70% 的交易是流动性驱动的（随机、无方向）</li>
              <li>- 30% 的交易是信息驱动的（有方向、有观点）</li>
            </ul>
            <p className="text-lab-gray mb-4">在预测市场中：</p>
            <ul className="text-lab-gray ml-4 mb-4 space-y-1">
              <li>- 30% 的交易是流动性驱动的</li>
              <li>- <span className="text-lab-red font-semibold">70% 的交易是信息驱动的</span></li>
            </ul>
            <p className="text-lab-red font-semibold">
              这意味着：在预测市场中做市，你 70% 的成交对手是知情交易者。你每提供 1 份流动性，就有 0.7 份是在和比你聪明的人交易。
            </p>
          </div>
        </div>
      </section>

      {/* 亏损路径 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">亏损路径</h2>
        <div className="bg-lab-black font-mono text-sm border border-lab-border rounded-lg p-6 space-y-1">
          <p className="text-lab-muted">做市商路径：</p>
          <p className="text-lab-red">做市商挂单 → 知情交易者成交 → 价格移动 → 做市商亏损</p>
          <p className="text-lab-muted mt-4">跟单者路径：</p>
          <p className="text-lab-red">跟单者买入 → 大户已经获利了结 → 价格回落 → 跟单者亏损</p>
        </div>
      </section>

      {/* 验尸结论 */}
      <section className="mb-12">
        <h2 className="section-label mb-3">验尸结论</h2>
        <div className="border-2 border-lab-red/50 rounded-lg p-6 bg-lab-dark/50">
          <p className="text-lab-gray leading-relaxed mb-4">
            Adverse selection 是预测市场中最致命的风险。它不是"可以管理"的风险，而是"结构性存在"的风险。预测市场的本质就是信息交易，做市商和跟单者天然处于信息劣势。
          </p>
          <div className="border-t border-lab-red/30 pt-4 mt-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              同类死因策略
            </p>
            <p className="text-lab-red text-sm">
              所有提供流动性的策略、所有依赖他人交易的策略
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t border-lab-border pt-8">
        <a
          href="/autopsies/aut-002"
          className="text-lab-muted hover:text-lab-red font-mono text-sm transition-colors"
        >
          ← 上一份验尸
        </a>
        <a
          href="/autopsies/aut-004"
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
