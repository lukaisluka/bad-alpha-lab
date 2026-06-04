export default function RES005() {
  const schemes = [
    { scheme: '早期发现', desc: '在策略传播前进入', effect: '✅ 但需要独立研究能力' },
    { scheme: 'Alpha 衰减监控', desc: '实时跟踪策略有效性', effect: '✅ 可以在衰亡前退出' },
    { scheme: '快速迭代', desc: '策略失效时快速切换', effect: '✅ 需要研发能力' },
    { scheme: '模块化设计', desc: '把策略拆成可复用模块', effect: '✅ 策略死了，模块还活着' },
    { scheme: '接受负 Alpha', desc: '把亏钱当研究成本', effect: '⚠️ 需要充足的资金和心理准备' },
  ]

  const mindsetShifts = [
    { from: '策略是投资', to: '策略是消耗品', note: '不存在"永远赚钱的策略"' },
    { from: 'Alpha 恒定', to: 'Alpha 会衰减', note: '任何公开的策略都会失效' },
    { from: '策略最值钱', to: '模块比策略值钱', note: '策略会死，但检测器、信号源、风险模型可以复用' },
    { from: '精度优先', to: '速度比精度重要', note: '快速发现和退出比优化参数更重要' },
    { from: '亏钱是失败', to: '亏钱是数据', note: '每次亏损都是在告诉你市场结构' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> RESCUE RES-005
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        策略生命周期管理
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-6">
        原策略：所有策略（通用）
      </p>

      {/* Verdict Badge */}
      <div className="mb-8">
        <span className="bg-lab-green/10 border border-lab-green/30 text-lab-green rounded px-4 py-2 font-mono text-lg font-bold">
          ✅ 可救
        </span>
        <p className="text-lab-gray text-sm mt-2">但需要根本性的思维转变</p>
      </div>

      {/* Diagnosis Report */}
      <section className="mb-12">
        <h2 className="section-label mb-3">诊断报告</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-white font-bold mb-2">病情摘要</p>
          <p className="text-lab-gray leading-relaxed">
            策略有生命周期，从发现到衰亡。大多数人在<span className="text-lab-red font-bold">衰亡期</span>才进场。
          </p>
        </div>
      </section>

      {/* Rescue Schemes */}
      <section className="mb-12">
        <h2 className="section-label mb-3">救治方案</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-lab-border">
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">方案</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">描述</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">效果</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              {schemes.map((s, i) => (
                <tr key={i} className="border-b border-lab-border/50">
                  <td className="py-3 px-4 text-white">{s.scheme}</td>
                  <td className="py-3 px-4">{s.desc}</td>
                  <td className="py-3 px-4">{s.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Core Mindset Shift */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心思维转变</h2>
        <div className="space-y-3">
          {mindsetShifts.map((m, i) => (
            <div key={i} className="bg-lab-dark border border-lab-border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-lab-red line-through font-mono text-sm shrink-0">{m.from}</span>
              <span className="text-lab-muted hidden sm:inline">→</span>
              <span className="text-lab-green font-mono text-sm font-bold shrink-0">{m.to}</span>
              <span className="text-lab-muted text-xs sm:ml-auto">{m.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Diagnosis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">最终诊断</h2>
        <div className="bg-lab-dark border border-lab-green rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            策略本身不可救，但<span className="text-lab-green font-bold">"策略管理"的方法论可救</span>。
            从"找一个赚钱的策略"转变为<span className="text-white font-bold">"建立一个发现、验证、退出的系统"</span>。
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-lab-border pt-8">
        <p className="text-lab-muted text-xs text-center">
          *免责声明：本报告仅用于研究和教育目的，不构成投资建议，不提供带单，不承诺收益。
        </p>
        <p className="text-lab-muted text-xs text-center mt-4">
          Bad Alpha Lab — 不卖财富密码，只公开亏钱密码。
        </p>
      </div>
    </div>
  )
}
