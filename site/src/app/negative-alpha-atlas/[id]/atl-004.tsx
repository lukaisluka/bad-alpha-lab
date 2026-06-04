export default function ATL004() {
  const nodes = [
    { name: '回测收益', theory: '50%', loss: '0%', reason: '初始假设' },
    { name: '过拟合修正', theory: '30%', loss: '-20%', reason: '样本外表现远差于样本内' },
    { name: '交易成本', theory: '15%', loss: '-15%', reason: '手续费+滑点+spread' },
    { name: '执行摩擦', theory: '5%', loss: '-10%', reason: '延迟+partial fill+取消' },
    { name: '市场变化', theory: '-10%', loss: '-5%', reason: '市场结构演变' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> ATLAS ATL-004
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        回测到实盘的 Alpha 消亡路径
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">
        策略类型：所有策略的回测-实盘差距 | 涉及报告：MIR-001~005
      </p>

      {/* Alpha Flow Diagram */}
      <section className="mb-12">
        <h2 className="section-label mb-6">Alpha 消亡流程图</h2>

        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="text-lab-muted font-mono text-xs uppercase tracking-wider">回测 Alpha</div>
            <div></div>
            <div className="text-lab-muted font-mono text-xs uppercase tracking-wider">实盘 Alpha</div>
          </div>

          {/* Start/End Values */}
          <div className="grid grid-cols-3 gap-4 items-center mb-8">
            <div className="text-center">
              <span className="text-lab-green text-3xl font-bold font-mono">+50%</span>
            </div>
            <div></div>
            <div className="text-center">
              <span className="text-lab-red text-3xl font-bold font-mono">-10%</span>
            </div>
          </div>

          {/* Flow Nodes */}
          <div className="space-y-4">
            {/* Node 1: 回测收益 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">回测收益 50%</p>
                <p className="text-lab-muted text-sm">"完美曲线"</p>
              </div>
              <div className="text-center text-lab-muted">→</div>
              <div></div>
            </div>

            {/* Node 2: 过拟合修正 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">过拟合修正</p>
                <p className="text-lab-muted text-sm">样本外测试</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-20%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">30%</p>
              </div>
            </div>

            {/* Node 3: 交易成本 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">交易成本</p>
                <p className="text-lab-muted text-sm">手续费+滑点</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-15%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">15%</p>
              </div>
            </div>

            {/* Node 4: 执行摩擦 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">执行摩擦</p>
                <p className="text-lab-muted text-sm">延迟+partial</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-10%</span>
              </div>
              <div className="bg-lab-black border border-lab-red/30 rounded-lg p-4 text-center">
                <p className="text-lab-gray">5%</p>
              </div>
            </div>

            {/* Node 5: 市场结构变化 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="bg-lab-black border border-lab-border rounded-lg p-4 text-center">
                <p className="text-white font-bold">市场结构变化</p>
                <p className="text-lab-muted text-sm">流动性+竞争</p>
              </div>
              <div className="text-center">
                <span className="text-lab-red font-mono font-bold">-5%</span>
              </div>
              <div className="bg-lab-black border border-lab-red rounded-lg p-4 text-center">
                <p className="text-lab-red font-bold">-10%</p>
              </div>
            </div>
          </div>

          {/* Final Result */}
          <div className="mt-8 pt-6 border-t border-lab-border">
            <div className="grid grid-cols-3 gap-4 items-center text-center">
              <div>
                <p className="text-lab-muted text-xs mb-1">回测</p>
                <p className="text-lab-green text-2xl font-bold font-mono">+50%</p>
              </div>
              <div className="text-lab-muted">
                <span className="text-2xl">→</span>
              </div>
              <div>
                <p className="text-lab-muted text-xs mb-1">实盘</p>
                <p className="text-lab-red text-2xl font-bold font-mono">-10%</p>
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
            回测到实盘的差距不是<span className="text-white font-bold">"一点点"</span>，而是<span className="text-lab-red font-bold">"从盈利到亏损"</span>的巨大跳崖。
            每个消亡节点都在独立地吞噬 Alpha。
          </p>
        </div>
      </section>

      {/* Related Reports */}
      <section className="mb-12">
        <h2 className="section-label mb-3">关联报告</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/backtest-mirages/mir-001" className="text-lab-red hover:underline font-mono text-sm">MIR-001</a>
          <span className="text-lab-muted">|</span>
          <a href="/backtest-mirages/mir-002" className="text-lab-red hover:underline font-mono text-sm">MIR-002</a>
          <span className="text-lab-muted">|</span>
          <a href="/backtest-mirages/mir-003" className="text-lab-red hover:underline font-mono text-sm">MIR-003</a>
          <span className="text-lab-muted">|</span>
          <a href="/backtest-mirages/mir-004" className="text-lab-red hover:underline font-mono text-sm">MIR-004</a>
          <span className="text-lab-muted">|</span>
          <a href="/backtest-mirages/mir-005" className="text-lab-red hover:underline font-mono text-sm">MIR-005</a>
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
