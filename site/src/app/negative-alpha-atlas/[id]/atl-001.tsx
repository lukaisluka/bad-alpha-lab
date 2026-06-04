export default function ATL001() {
  const nodes = [
    { name: '理论价差', theory: '5%', loss: '0%', reason: '初始假设' },
    { name: 'Ask 价格调整', theory: '3%', loss: '-2%', reason: '你看到的价格≠你能成交的价格' },
    { name: '手续费扣除', theory: '1.1%', loss: '-1.9%', reason: '双边各扣一次手续费' },
    { name: 'Partial Fill', theory: '-2%', loss: '-3.1%', reason: '只成交一边变成单边赌博' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> ATLAS ATL-001
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        套利策略的 Alpha 消亡路径
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">
        策略类型：YES/NO 补数套利 | 涉及报告：BAL-001, AUT-001, AUT-002
      </p>

      {/* Alpha Flow Diagram */}
      <section className="mb-12">
        <h2 className="section-label mb-6">Alpha 消亡流程图</h2>

        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="text-lab-muted font-mono text-xs uppercase tracking-wider">理论 Alpha</div>
            <div></div>
            <div className="text-lab-muted font-mono text-xs uppercase tracking-wider">实际 Alpha</div>
          </div>

          {/* Start/End Values */}
          <div className="grid grid-cols-3 gap-4 items-center mb-8">
            <div className="text-center">
              <span className="text-lab-green text-3xl font-bold font-mono">+5%</span>
            </div>
            <div></div>
            <div className="text-center">
              <span className="text-lab-red text-3xl font-bold font-mono">-2%</span>
            </div>
          </div>

          {/* Flow Nodes */}
          <div className="space-y-4">
            {/* Node 1: 理论价差 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">理论价差 5%</p>
                <p className="text-lab-muted text-sm">YES+NO=0.95</p>
              </div>
              <div className="text-center text-lab-muted">→</div>
              <div></div>
            </div>

            {/* Node 2: Ask价格调整 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Ask 价格调整</p>
                <p className="text-lab-muted text-sm">实际价差 3%</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-2%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">3%</p>
              </div>
            </div>

            {/* Node 3: 手续费扣除 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">手续费扣除</p>
                <p className="text-lab-muted text-sm">3% → 1.1%</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-1.9%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">1.1%</p>
              </div>
            </div>

            {/* Node 4: Partial Fill */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Partial Fill</p>
                <p className="text-lab-muted text-sm">单边风险</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-3%</span>
              </div>
              <div className="bg-lab-black border border-lab-red rounded-lg p-4 text-center">
                <p className="text-lab-red font-bold">-2%</p>
              </div>
            </div>
          </div>

          {/* Final Result */}
          <div className="mt-8 pt-6 border-t border-lab-border">
            <div className="grid grid-cols-3 gap-4 items-center text-center">
              <div>
                <p className="text-lab-muted text-xs mb-1">理论</p>
                <p className="text-lab-green text-2xl font-bold font-mono">+5%</p>
              </div>
              <div className="text-lab-muted">
                <span className="text-2xl">→</span>
              </div>
              <div>
                <p className="text-lab-muted text-xs mb-1">实际</p>
                <p className="text-lab-red text-2xl font-bold font-mono">-2%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Node Details Table */}
      <section className="mb-12">
        <h2 className="section-label mb-3">消亡节点详解</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-lab-border">
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">节点</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">理论值</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">损耗</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">损耗原因</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              {nodes.map((node, i) => (
                <tr key={i} className="border-b border-lab-border/50">
                  <td className="py-3 px-4 text-white">{node.name}</td>
                  <td className="py-3 px-4 font-mono">{node.theory}</td>
                  <td className="py-3 px-4 font-mono text-lab-red">{node.loss}</td>
                  <td className="py-3 px-4">{node.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="section-label mb-3">结论</h2>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            每 <span className="text-lab-green font-bold">5%</span> 的理论价差，实际亏损约 <span className="text-lab-red font-bold">2%</span>。
            Alpha 在每个执行节点都在衰减。可见价差 ≠ 可成交利润。
          </p>
        </div>
      </section>

      {/* Related Reports */}
      <section className="mb-12">
        <h2 className="section-label mb-3">关联报告</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/replications/bal-001" className="text-lab-red hover:underline font-mono text-sm">BAL-001</a>
          <span className="text-lab-muted">|</span>
          <a href="/autopsies/aut-001" className="text-lab-red hover:underline font-mono text-sm">AUT-001</a>
          <span className="text-lab-muted">|</span>
          <a href="/autopsies/aut-002" className="text-lab-red hover:underline font-mono text-sm">AUT-002</a>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-lab-border pt-8">
        <p className="text-lab-muted text-xs text-center">
          *免责声明：本图鉴仅用于研究和教育目的，不构成投资建议，不提供带单，不承诺收益。
        </p>
        <p className="text-lab-muted text-xs text-center mt-4">
          Bad Alpha Lab — 不卖财富密码，只公开亏钱密码。
        </p>
      </div>
    </div>
  )
}
