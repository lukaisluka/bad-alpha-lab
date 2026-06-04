export default function RES001() {
  const attempts = [
    { scheme: 'IOC 订单', expected: '确保双边同时成交', result: '不可用', reason: 'Polymarket CLOB 不支持跨市场 IOC' },
    { scheme: '限价单对冲', expected: '限价挂单等成交', result: 'Partial fill', reason: '两边成交速度不同' },
    { scheme: '减小仓位', expected: '降低 partial fill 影响', result: '利润更薄', reason: '手续费占比更高' },
    { scheme: '选择流动性好的市场', expected: '提高成交概率', result: 'Spread 更窄', reason: '价差不够覆盖手续费' },
    { scheme: '增加 spread 阈值', expected: '只在价差大时交易', result: '机会极少', reason: '大价差市场流动性差' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> RESCUE RES-001
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        YES/NO 套利
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-6">
        原策略：BAL-001 (YES/NO 补数套利)
      </p>

      {/* Verdict Badge */}
      <div className="mb-8">
        <span className="bg-lab-red/10 border border-lab-red/30 text-lab-red rounded px-4 py-2 font-mono text-lg font-bold">
          ❌ 不可救
        </span>
      </div>

      {/* Diagnosis Report */}
      <section className="mb-12">
        <h2 className="section-label mb-3">诊断报告</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-white font-bold mb-2">病情摘要</p>
          <p className="text-lab-gray leading-relaxed">
            策略依赖<span className="text-white font-bold">"双边同时成交"</span>，但 Polymarket 不支持原子性跨市场订单。
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
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">失败原因</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              {attempts.map((a, i) => (
                <tr key={i} className="border-b border-lab-border/50">
                  <td className="py-3 px-4 text-white">{a.scheme}</td>
                  <td className="py-3 px-4">{a.expected}</td>
                  <td className="py-3 px-4 text-lab-red">{a.result}</td>
                  <td className="py-3 px-4">{a.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Diagnosis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">最终诊断</h2>
        <div className="bg-lab-dark border border-lab-red rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            策略的核心假设（双边同时成交）在当前市场结构下无法满足。
            这不是参数问题，而是<span className="text-lab-red font-bold">结构性问题</span>。
          </p>
        </div>
      </section>

      {/* Reusable Organs */}
      <section className="mb-12">
        <h2 className="section-label mb-3">可复用的"器官"</h2>
        <div className="bg-lab-dark border border-lab-green/30 rounded-lg p-6">
          <p className="text-lab-green font-bold mb-2">Consistency checker</p>
          <p className="text-lab-gray leading-relaxed">
            用 YES+NO 的关系检测市场异常。价差异常大时，说明市场结构可能有问题，值得分析。
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
