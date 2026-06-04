export default function ATL002() {
  const nodes = [
    { name: 'Spread', theory: '4%', loss: '0%', reason: '初始假设' },
    { name: 'Adverse Selection', theory: '2%', loss: '-2%', reason: '知情交易者吃掉你的报价' },
    { name: 'Inventory Risk', theory: '-2%', loss: '-4%', reason: '持仓方向亏损' },
    { name: 'Spread 压缩', theory: '-6%', loss: '-2%', reason: '竞争做市商压缩利润空间' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> ATLAS ATL-002
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        做市商策略的 Alpha 消亡路径
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">
        策略类型：Spread capture 做市商 | 涉及报告：BAL-003, AUT-003
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
              <span className="text-lab-green text-3xl font-bold font-mono">+4%</span>
            </div>
            <div></div>
            <div className="text-center">
              <span className="text-lab-red text-3xl font-bold font-mono">-6%</span>
            </div>
          </div>

          {/* Flow Nodes */}
          <div className="space-y-4">
            {/* Node 1: Spread */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Spread 4%</p>
                <p className="text-lab-muted text-sm">bid-ask 差</p>
              </div>
              <div className="text-center text-lab-muted">→</div>
              <div></div>
            </div>

            {/* Node 2: Adverse Selection */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Adverse Selection</p>
                <p className="text-lab-muted text-sm">知情交易者</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-2%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">2%</p>
              </div>
            </div>

            {/* Node 3: Inventory Risk */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Inventory Risk</p>
                <p className="text-lab-muted text-sm">持仓方向亏损</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-4%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">-2%</p>
              </div>
            </div>

            {/* Node 4: Spread 压缩 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">Spread 压缩</p>
                <p className="text-lab-muted text-sm">竞争</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-2%</span>
              </div>
              <div className="bg-lab-black border border-lab-red rounded-lg p-4 text-center">
                <p className="text-lab-red font-bold">-6%</p>
              </div>
            </div>
          </div>

          {/* Final Result */}
          <div className="mt-8 pt-6 border-t border-lab-border">
            <div className="grid grid-cols-3 gap-4 items-center text-center">
              <div>
                <p className="text-lab-muted text-xs mb-1">理论</p>
                <p className="text-lab-green text-2xl font-bold font-mono">+4%</p>
              </div>
              <div className="text-lab-muted">
                <span className="text-2xl">→</span>
              </div>
              <div>
                <p className="text-lab-muted text-xs mb-1">实际</p>
                <p className="text-lab-red text-2xl font-bold font-mono">-6%</p>
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
            Spread 是<span className="text-white font-bold">"看得见的收入"</span>，inventory 和 adverse selection 是<span className="text-lab-red font-bold">"看不见的亏损"</span>。
            看不见的远大于看得见的。
          </p>
        </div>
      </section>

      {/* Related Reports */}
      <section className="mb-12">
        <h2 className="section-label mb-3">关联报告</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/replications/bal-003" className="text-lab-red hover:underline font-mono text-sm">BAL-003</a>
          <span className="text-lab-muted">|</span>
          <a href="/autopsies/aut-003" className="text-lab-red hover:underline font-mono text-sm">AUT-003</a>
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
