export default function ATL005() {
  const phases = [
    { name: '发现期', alpha: '+20~50%', participants: '1~5人', feature: '策略刚被发现，edge 最大' },
    { name: '传播期', alpha: '+5~20%', participants: '5~50人', feature: '策略被公开讨论，edge 开始衰减' },
    { name: '竞争期', alpha: '0~5%', participants: '50~500人', feature: '大量竞争者，edge 几乎归零' },
    { name: '衰亡期', alpha: '-5~20%', participants: '500+人', feature: 'edge 为负，新手继续涌入' },
  ]

  const accelerators = [
    { name: '社交媒体传播', desc: '一条推文可以让策略从发现期跳到竞争期' },
    { name: '自动化工具', desc: '跟单 bot、做市 bot 让参与门槛更低' },
    { name: '教程和课程', desc: '"策略教程"通常教的是衰亡期的策略' },
    { name: '回测工具', desc: '让更多人能"验证"已经失效的策略' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> ATLAS ATL-005
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        策略生命周期 Alpha 曲线
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">
        策略类型：通用策略生命周期模型 | 涉及报告：所有报告的综合
      </p>

      {/* Lifecycle Curve */}
      <section className="mb-12">
        <h2 className="section-label mb-6">Alpha 生命周期曲线</h2>

        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          {/* ASCII-style curve visualization */}
          <div className="font-mono text-sm leading-tight text-center mb-6">
            <pre className="text-lab-gray inline-block">
{`Alpha %
  │
  │     ┌──┐
  │    ╱    ╲        ← 发现期：Alpha 看起来很高
  │   ╱      ╲
  │  ╱        ╲      ← 传播期：更多人知道，Alpha 开始衰减
  │ ╱          ╲
  │╱            ╲    ← 竞争期：竞争者涌入，Alpha 快速归零
  │              ╲
  │               ╲  ← 衰亡期：Alpha 变负，策略稳定亏损
  │                ────────────
  │
  └──────────────────────→ 时间
     发现  传播  竞争  衰亡`}
            </pre>
          </div>

          {/* Color-coded phase bar */}
          <div className="h-3 rounded-full overflow-hidden flex">
            <div className="bg-lab-green flex-[2]" title="发现期"></div>
            <div className="bg-lab-gray flex-[2]" title="传播期"></div>
            <div className="bg-yellow-400 flex-[2]" title="竞争期"></div>
            <div className="bg-lab-red flex-[4]" title="衰亡期"></div>
          </div>
          <div className="flex text-xs font-mono mt-2 text-lab-muted">
            <span className="flex-[2] text-center text-lab-green">发现</span>
            <span className="flex-[2] text-center">传播</span>
            <span className="flex-[2] text-center text-yellow-400">竞争</span>
            <span className="flex-[4] text-center text-lab-red">衰亡</span>
          </div>
        </div>
      </section>

      {/* Phase Details Table */}
      <section className="mb-12">
        <h2 className="section-label mb-3">生命周期各阶段</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-lab-border">
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">阶段</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">Alpha</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">参与者</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">特征</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4 text-lab-green font-bold">发现期</td>
                <td className="py-3 px-4 font-mono text-lab-green">+20~50%</td>
                <td className="py-3 px-4">1~5人</td>
                <td className="py-3 px-4">策略刚被发现，edge 最大</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4 text-white font-bold">传播期</td>
                <td className="py-3 px-4 font-mono">+5~20%</td>
                <td className="py-3 px-4">5~50人</td>
                <td className="py-3 px-4">策略被公开讨论，edge 开始衰减</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4 text-yellow-400 font-bold">竞争期</td>
                <td className="py-3 px-4 font-mono text-yellow-400">0~5%</td>
                <td className="py-3 px-4">50~500人</td>
                <td className="py-3 px-4">大量竞争者，edge 几乎归零</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-lab-red font-bold">衰亡期</td>
                <td className="py-3 px-4 font-mono text-lab-red">-5~20%</td>
                <td className="py-3 px-4">500+人</td>
                <td className="py-3 px-4">edge 为负，新手继续涌入</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Insight */}
      <section className="mb-12">
        <h2 className="section-label mb-3">关键洞察</h2>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            策略的 Alpha 和参与人数<span className="text-lab-red font-bold">成反比</span>。
            你看到策略时，通常已经到了<span className="text-white font-bold">传播期</span>或<span className="text-yellow-400 font-bold">竞争期</span>。
            到<span className="text-lab-red font-bold">衰亡期</span>时，社交媒体上的推荐最多。
          </p>
        </div>
      </section>

      {/* Accelerators */}
      <section className="mb-12">
        <h2 className="section-label mb-3">消亡加速器</h2>
        <div className="space-y-3">
          {accelerators.map((acc, i) => (
            <div key={i} className="bg-lab-dark border border-lab-border rounded-lg p-4 flex items-start gap-4">
              <span className="text-lab-red font-mono font-bold shrink-0">{i + 1}.</span>
              <div>
                <p className="text-white font-bold">{acc.name}</p>
                <p className="text-lab-gray text-sm">{acc.desc}</p>
              </div>
            </div>
          ))}
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
