export default function RES004() {
  const schemes = [
    { scheme: 'Walk-forward 分析', desc: '滚动窗口优化+测试', effect: '✅ 大幅减少过拟合' },
    { scheme: '样本外保留', desc: '20% 数据不参与优化', effect: '✅ 提供真实性能估计' },
    { scheme: '参数简约', desc: '减少可调参数数量', effect: '✅ 降低过拟合风险' },
    { scheme: '交叉验证', desc: '多折交叉验证', effect: '⚠️ 预测市场样本太少' },
    { scheme: '经济学直觉', desc: '参数必须有经济学解释', effect: '✅ 过滤掉无意义的参数' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> RESCUE RES-004
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        回测优化策略
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-6">
        原策略：所有基于回测优化的策略
      </p>

      {/* Verdict Badge */}
      <div className="mb-8">
        <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded px-4 py-2 font-mono text-lg font-bold">
          ⚠️ 部分可救
        </span>
        <p className="text-lab-gray text-sm mt-2">但需要彻底改变方法论</p>
      </div>

      {/* Diagnosis Report */}
      <section className="mb-12">
        <h2 className="section-label mb-3">诊断报告</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-white font-bold mb-2">病情摘要</p>
          <p className="text-lab-gray leading-relaxed">
            回测优化导致过拟合，样本内表现无法预测样本外表现。
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

      {/* Core Shift */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心转变</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-4">从"优化历史"到"验证假设"</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lab-red font-bold shrink-0">❌</span>
              <p className="text-lab-gray">"哪个参数组合在历史上最赚钱？"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lab-green font-bold shrink-0">✅</span>
              <p className="text-white">"这个经济学假设在未来是否成立？"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Diagnosis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">最终诊断</h2>
        <div className="bg-lab-dark border border-yellow-400 rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            回测优化本身不是问题，问题是<span className="text-lab-red font-bold">没有样本外验证</span>。
            加上严格的样本外测试，策略的"真实 Alpha"会浮出水面——通常是<span className="text-lab-red font-bold">负的</span>。
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
