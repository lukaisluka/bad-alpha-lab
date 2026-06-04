export default function RES002() {
  const attempts = [
    { scheme: 'Skew quoting', expected: '减少库存', result: '部分有效', feasibility: '✅ 可行，但只能减缓，不能消除' },
    { scheme: '仓位上限', expected: '限制亏损', result: '有效', feasibility: '✅ 可行，但限制了利润上限' },
    { scheme: '事件日历暂停', expected: '避免大波动', result: '部分有效', feasibility: '✅ 可行，但错过最佳交易时机' },
    { scheme: 'Adverse selection 检测', expected: '避开知情交易者', result: '理论可行', feasibility: '⚠️ 极难实现，需要深度数据' },
    { scheme: '跨市场对冲', expected: '对冲库存', result: '有限', feasibility: '⚠️ 预测市场对冲工具极少' },
    { scheme: '只做冷门市场', expected: '减少 adverse selection', result: '部分有效', feasibility: '⚠️ 但流动性更差' },
  ]

  const rescueApproaches = [
    { name: 'Liquidity scanner', desc: '做市商的 spread 数据是市场健康度指标' },
    { name: 'Adverse selection 检测器', desc: '当做市商被"吃"的时候，说明有新信息进入' },
    { name: '库存信号', desc: '做市商的库存方向可以反映市场倾向' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> RESCUE RES-002
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        做市商策略
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-6">
        原策略：BAL-003 (Spread capture 做市商)
      </p>

      {/* Verdict Badge */}
      <div className="mb-8">
        <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded px-4 py-2 font-mono text-lg font-bold">
          ⚠️ 有条件可救
        </span>
        <p className="text-lab-gray text-sm mt-2">但不是你以为的那种"救"</p>
      </div>

      {/* Diagnosis Report */}
      <section className="mb-12">
        <h2 className="section-label mb-3">诊断报告</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-white font-bold mb-2">病情摘要</p>
          <p className="text-lab-gray leading-relaxed">
            策略面临 <span className="text-lab-red font-bold">adverse selection</span> 和 <span className="text-lab-red font-bold">inventory risk</span> 的双重打击。
          </p>
        </div>
      </section>

      {/* Attempted Rescue Schemes */}
      <section className="mb-12">
        <h2 className="section-label mb-3">已尝试的救治方案</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-lab-border">
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">方案</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">预期效果</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">实际结果</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">可行性</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              {attempts.map((a, i) => (
                <tr key={i} className="border-b border-lab-border/50">
                  <td className="py-3 px-4 text-white">{a.scheme}</td>
                  <td className="py-3 px-4">{a.expected}</td>
                  <td className="py-3 px-4">{a.result}</td>
                  <td className="py-3 px-4 text-sm">{a.feasibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conditional Rescue Approach */}
      <section className="mb-12">
        <h2 className="section-label mb-3">有条件可救的"救法"</h2>
        <p className="text-lab-gray mb-4">
          不是"让做市商策略赚钱"，而是<span className="text-white font-bold">"把做市商的模块用到别处"</span>：
        </p>
        <div className="space-y-3">
          {rescueApproaches.map((r, i) => (
            <div key={i} className="bg-lab-dark border border-lab-border rounded-lg p-4 flex items-start gap-4">
              <span className="text-lab-green font-mono font-bold shrink-0">{i + 1}.</span>
              <div>
                <p className="text-lab-green font-bold">{r.name}</p>
                <p className="text-lab-gray text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Diagnosis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">最终诊断</h2>
        <div className="bg-lab-dark border border-yellow-400 rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            做市商策略本身不可救，但它的<span className="text-lab-green font-bold">副产品</span>（数据、信号、检测器）有价值。
            把<span className="text-lab-red font-bold">"做市"</span>变成<span className="text-lab-green font-bold">"观察"</span>。
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
