export default function AutopsiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> AUTOPSIES
      </p>
      <h1 className="section-title">策略验尸报告</h1>
      <p className="text-lab-gray max-w-2xl mb-12">
        拆解策略的死因：手续费侵蚀、滑点扩散、延迟吞噬、流动性枯竭、风控踩踏。
        每一份验尸报告都是一份法医档案——冷酷、精确、不留情面。
      </p>

      <div className="lab-card">
        <div className="text-center py-16">
          <p className="text-lab-muted font-mono text-sm uppercase tracking-wider mb-4">
            [ 待录入 ]
          </p>
          <p className="text-lab-gray text-sm">
            验尸报告正在整理中，敬请期待。
          </p>
        </div>
      </div>
    </div>
  )
}
