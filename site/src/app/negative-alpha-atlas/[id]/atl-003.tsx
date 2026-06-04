export default function ATL003() {
  const nodes = [
    { name: '大户收益', theory: '15%', loss: '0%', reason: '初始假设' },
    { name: '幸存者偏差', theory: '7%', loss: '-8%', reason: '"聪明钱"可能只是"幸运钱"' },
    { name: '延迟侵蚀', theory: '4%', loss: '-3%', reason: '你买到的价格比大户贵' },
    { name: '博弈劣势', theory: '-5%', loss: '-4%', reason: '大户知道你在跟单' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> ATLAS ATL-003
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        跟单策略的 Alpha 消亡路径
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">
        策略类型：聪明钱跟单 | 涉及报告：BAL-004, AUT-004, AUT-005
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
              <span className="text-lab-green text-3xl font-bold font-mono">+15%</span>
            </div>
            <div></div>
            <div className="text-center">
              <span className="text-lab-red text-3xl font-bold font-mono">-5%</span>
            </div>
          </div>

          {/* Flow Nodes */}
          <div className="space-y-4">
            {/* Node 1: 大户收益 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">大户收益 15%</p>
                <p className="text-lab-muted text-sm">"聪明钱"</p>
              </div>
              <div className="text-center text-lab-muted">→</div>
              <div></div>
            </div>

            {/* Node 2: 幸存者偏差 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">幸存者偏差</p>
                <p className="text-lab-muted text-sm">"幸运钱"</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-8%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">7%</p>
              </div>
            </div>

            {/* Node 3: 延迟侵蚀 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">延迟侵蚀</p>
                <p className="text-lab-muted text-sm">买贵卖贱</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-3%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">4%</p>
              </div>
            </div>

            {/* Node 4: 博弈劣势 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">博弈劣势</p>
                <p className="text-lab-muted text-sm">大户诱多</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-4%</span>
              </div>
              <div className="bg-lab-black border border-lab-red rounded-lg p-4 text-center">
                <p className="text-lab-red font-bold">-5%</p>
              </div>
            </div>
          </div>

          {/* Final Result */}
          <div className="mt-8 pt-6 border-t border-lab-border">
            <div className="grid grid-cols-3 gap-4 items-center text-center">
              <div>
                <p className="text-lab-muted text-xs mb-1">理论</p>
                <p className="text-lab-green text-2xl font-bold font-mono">+15%</p>
              </div>
              <div className="text-lab-muted">
                <span className="text-2xl">→</span>
              </div>
              <div>
                <p className="text-lab-muted text-xs mb-1">实际</p>
                <p className="text-lab-red text-2xl font-bold font-mono">-5%</p>
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
            跟单策略的 Alpha 消亡最隐蔽——你以为在复制<span className="text-white font-bold">"聪明"</span>的决策，
            实际上你在复制<span className="text-lab-red font-bold">"幸运"</span>的决策，而且是在更差的价格上。
          </p>
        </div>
      </section>

      {/* Related Reports */}
      <section className="mb-12">
        <h2 className="section-label mb-3">关联报告</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/replications/bal-004" className="text-lab-red hover:underline font-mono text-sm">BAL-004</a>
          <span className="text-lab-muted">|</span>
          <a href="/autopsies/aut-004" className="text-lab-red hover:underline font-mono text-sm">AUT-004</a>
          <span className="text-lab-muted">|</span>
          <a href="/autopsies/aut-005" className="text-lab-red hover:underline font-mono text-sm">AUT-005</a>
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
