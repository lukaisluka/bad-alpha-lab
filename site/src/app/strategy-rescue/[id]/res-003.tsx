export default function RES003() {
  const attempts = [
    { scheme: '更长历史窗口', expected: '区分运气和能力', result: '不够', reason: '预测市场历史太短' },
    { scheme: '更严筛选标准', expected: '只跟最优秀的', result: '样本太小', reason: 'top 3 可能只是运气最好的 3 个' },
    { scheme: '延迟优化', expected: '减少延迟', result: '无法消除', reason: '链上确认延迟是结构性的' },
    { scheme: '只跟方向性交易', expected: '过滤做市行为', result: '无法判断', reason: '链上无法区分交易意图' },
    { scheme: '反向跟单', expected: '大户卖出时买入', result: '更糟', reason: '你不知道大户为什么卖' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> RESCUE RES-003
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        跟单策略
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-6">
        原策略：BAL-004 (聪明钱跟单)
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
            策略依赖<span className="text-white font-bold">"识别聪明钱"</span>，但无法区分运气和能力。
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

      {/* Why Not Rescuable */}
      <section className="mb-12">
        <h2 className="section-label mb-3">为什么不可救</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            跟单策略的根本问题是<span className="text-lab-red font-bold">信号源不可靠</span>。
            "聪明钱"可能是"幸运钱"，你无法从历史数据中区分。
            这不是延迟问题、不是技术问题、不是参数问题——是<span className="text-lab-red font-bold">认识论问题</span>。
          </p>
        </div>
      </section>

      {/* Final Diagnosis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">最终诊断</h2>
        <div className="bg-lab-dark border border-lab-red rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            跟单策略的信号源本身不可信，无法通过修补来挽救。
          </p>
        </div>
      </section>

      {/* Reusable Organs */}
      <section className="mb-12">
        <h2 className="section-label mb-3">可复用的"器官"</h2>
        <div className="bg-lab-dark border border-lab-green/30 rounded-lg p-6">
          <p className="text-lab-green font-bold mb-2">Whale activity monitor</p>
          <p className="text-lab-gray leading-relaxed">
            监控大户活动作为市场情绪指标，而非交易信号。
            大户集中买入 = 该市场值得关注（<span className="text-lab-red">不是"该买入"</span>）。
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
