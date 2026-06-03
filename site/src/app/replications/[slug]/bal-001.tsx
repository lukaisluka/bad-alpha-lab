export default function BAL001() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> REPLICATION BAL-001
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        YES + NO &lt; 1 就是无风险套利？我复刻后发现风险全在成交里
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">实盘复刻报告 BAL-001：YES/NO 补数套利</p>

      {/* Strategy Source */}
      <section className="mb-12">
        <h2 className="section-label mb-3">策略来源</h2>
        <p className="text-lab-gray mb-4">
          这是预测市场中最广为流传的策略之一，几乎每个预测市场入门教程都会提到：
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 mb-4">
          <p className="text-white italic">
            如果 YES + NO &lt; 1，买入两边，等结算至少赚 1 - (YES + NO)。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">传播程度</span>
            <span className="text-lab-gray">广泛</span>
          </div>
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">目标受众</span>
            <span className="text-lab-gray">大众 — 逻辑最简单，最容易被新手尝试</span>
          </div>
        </div>
      </section>

      {/* Original Strategy Description */}
      <section className="mb-12">
        <h2 className="section-label mb-3">原始策略描述</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed">
            在预测市场中，每个事件都有 YES 和 NO 两种合约。理论上 YES + NO = 1（因为结算时必有一方为 1，另一方为 0）。如果 YES + NO &lt; 1，比如 YES = 0.45, NO = 0.50，加起来只有 0.95，那就同时买入两边，花费 0.95，结算时必得 1.00，稳赚 0.05。
          </p>
          <p className="text-lab-gray mt-4">
            这个策略被很多人称为"无风险套利"。
          </p>
        </div>
      </section>

      {/* Why It Looks Profitable */}
      <section className="mb-12">
        <h2 className="section-label mb-3">为什么它看起来能赚钱？</h2>
        <p className="text-lab-gray mb-4">这个策略的直觉吸引力极强：</p>
        <ol className="space-y-2 text-lab-gray">
          <li>
            <strong className="text-white">1. 数学上无懈可击</strong> — YES + NO 必然等于 1，价差确实存在
          </li>
          <li>
            <strong className="text-white">2. 方向无关</strong> — 不需要预测结果，两边都买
          </li>
          <li>
            <strong className="text-white">3. 看起来像 free money</strong> — 只是"捡"价差
          </li>
          <li>
            <strong className="text-white">4. 入门门槛低</strong> — 逻辑简单，任何人都能理解
          </li>
        </ol>
        <p className="text-lab-gray mt-4">
          回测（如果做的话）会显示：每当价差出现时，理论上都能赚钱。
        </p>
      </section>

      {/* Core Assumptions */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心假设</h2>
        <p className="text-lab-gray mb-4">这个策略要赚钱，必须满足：</p>
        <ol className="space-y-2 text-lab-gray">
          <li>1. <strong className="text-white">你能以看到的价格完整成交</strong> — bid/ask 不是 last price</li>
          <li>2. <strong className="text-white">两边能同时成交</strong> — 不会只成交一边</li>
          <li>3. <strong className="text-white">手续费不会吃掉价差</strong> — 预测市场也有手续费</li>
          <li>4. <strong className="text-white">价差足够大</strong> — 考虑 tick size 和手续费后仍有利润</li>
          <li>5. <strong className="text-white">结算无争议</strong> — resolution 规则清晰</li>
          <li>6. <strong className="text-white">不需要等待太久</strong> — 资金不会长期锁定</li>
        </ol>
      </section>

      {/* Replication Rules */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻规则</h2>
        <ul className="space-y-2 text-lab-gray">
          <li><strong className="text-white">信号定义：</strong>当同一事件的 YES ask + NO ask &lt; 1 - min_profit 时，触发套利信号</li>
          <li><strong className="text-white">入场条件：</strong>同时下限价单买入 YES 和 NO</li>
          <li><strong className="text-white">出场条件：</strong>等待结算，或者价差消失时平仓</li>
          <li><strong className="text-white">仓位规则：</strong>按价差大小决定仓位，价差越大仓位越大</li>
          <li><strong className="text-white">市场选择：</strong>选择价差最大的市场</li>
        </ul>
      </section>

      {/* Replication Fidelity */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻完整度</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 font-mono text-sm">
          <p className="text-lab-green mb-4">复刻完整度：85%</p>
          <p className="text-white mb-2">完全复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 信号定义（YES + NO &lt; 1 检测）</li>
            <li>- 入场条件（双边同时下单）</li>
            <li>- 出场条件（等结算）</li>
            <li>- 市场选择逻辑</li>
          </ul>
          <p className="text-white mb-2">部分复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 原策略没有说明手续费处理，我加入了真实手续费</li>
            <li>- 原策略没有说明 partial fill 处理，我按真实成交记录处理</li>
            <li>- 原策略没有说明风控，我加入了最大亏损限制</li>
          </ul>
          <p className="text-white mb-2">无法复刻：</p>
          <ul className="text-lab-gray ml-4">
            <li>- 实际执行中"同时成交"需要精确的时序控制</li>
            <li>- 不同市场的结算规则差异</li>
          </ul>
        </div>
      </section>

      {/* Enhancement Table */}
      <section className="mb-12">
        <h2 className="section-label mb-3">合理增强</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-lab-border">
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">增强项</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">原策略状态</th>
                <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">我们的处理</th>
              </tr>
            </thead>
            <tbody className="text-lab-gray">
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">手续费</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入 Polymarket 真实费率</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">滑点</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">使用 bid/ask spread 而非 last price</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">partial fill</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">按真实成交记录处理</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">风控</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">单笔最大亏损限制</td>
              </tr>
              <tr>
                <td className="py-3 px-4">成交概率</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入订单簿深度分析</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Theoretical Analysis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">理论分析：为什么实盘可能失效</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-white font-bold mb-2">1. 你看到的不是你能成交的</h3>
            <p className="text-lab-gray mb-2">
              大多数"价差"是用 last price 计算的。但 last price 不等于你能成交的价格。
            </p>
            <p className="text-lab-gray mb-2">
              你要买入 YES，得用 ask 价（卖方最低报价）。
            </p>
            <p className="text-lab-gray mb-2">
              你要买入 NO，也得用 ask 价。
            </p>
            <p className="text-lab-gray mb-2">
              YES ask + NO ask 通常比 YES last + NO last 高得多。
            </p>
            <p className="text-lab-red font-semibold">
              很多"价差"在换成 ask 价格后就消失了。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">2. Partial Fill：最致命的风险</h3>
            <p className="text-lab-gray mb-2">这是真正的杀手。</p>
            <p className="text-lab-gray mb-2">
              假设你同时下单买 YES 和 NO。在实际执行中：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- YES 单成交了 80%</li>
              <li>- NO 单只成交了 30%</li>
            </ul>
            <p className="text-lab-gray mb-2">
              现在你持有 0.8 份 YES 和 0.3 份 NO。如果事件结算 YES，你赚 0.8 - 0.3 = 0.5 份。但如果结算 NO，你亏 0.8 - 0.3 = 0.5 份。
            </p>
            <p className="text-lab-red font-semibold mb-4">
              partial fill 把"无风险套利"变成了单边赌博。
            </p>
            <p className="text-lab-gray mb-2">这还不是最糟的。更常见的情况是：</p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 你下了 YES 单，等待成交</li>
              <li>- YES 单成交了</li>
              <li>- 你下 NO 单时，价格已经变了</li>
              <li>- NO 单成交不了，或者成交价更差</li>
            </ul>
            <p className="text-lab-gray">你现在只有一个方向的仓位，完全裸露。</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">3. 手续费吃掉价差</h3>
            <p className="text-lab-gray mb-2">假设费率是 2%（Polymarket 的标准费率）。</p>
            <p className="text-lab-gray mb-2">
              如果价差是 3%（YES + NO = 0.97），手续费就是 0.97 × 2% × 2 = 0.039，约 3.9%。
            </p>
            <p className="text-lab-red font-semibold">
              手续费 3.9% &gt; 价差 3%，净亏损。
            </p>
            <p className="text-lab-gray mt-2">
              即使价差是 5%，扣除手续费后也只剩 1% 左右。考虑到 partial fill 风险，这个 risk-reward 完全不合理。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">4. Tick Size 问题</h3>
            <p className="text-lab-gray mb-2">
              Polymarket 的 tick size 是 $0.01。这意味着价格只能以 0.01 为单位变动。
            </p>
            <p className="text-lab-gray mb-2">
              如果 YES = 0.45, NO = 0.50，加起来是 0.95，价差 0.05。
            </p>
            <p className="text-lab-gray mb-2">
              但如果 YES ask = 0.46, NO ask = 0.51，加起来就是 0.97，价差只剩 0.03。
            </p>
            <p className="text-lab-gray">
              在 tick size 限制下，很多看起来有价差的机会，用 ask 价格算就没有了。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">5. 流动性不足</h3>
            <p className="text-lab-gray mb-2">有价差的市场通常流动性很低。低流动性意味着：</p>
            <ul className="text-lab-gray ml-4">
              <li>- 订单簿薄，深度不够</li>
              <li>- 大单会推动价格</li>
              <li>- maker 单排不到前面</li>
              <li>- 撤单可能来不及</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">6. 资金占用</h3>
            <p className="text-lab-gray mb-2">
              即使套利成功，资金要锁到结算才能释放。预测市场的结算时间可能从几天到几个月不等。在这期间，你的资金被占用，无法用于其他机会。
            </p>
            <p className="text-lab-gray">
              如果年化计算，1% 的套利收益锁定一个月，年化才 12%。考虑到 partial fill 风险，这个收益远不值得。
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="section-label mb-3">结论</h2>
        <p className="text-lab-gray mb-4">
          YES + NO &lt; 1 不等于无风险套利。
        </p>
        <p className="text-lab-red font-bold text-lg mb-4">
          可见价差不等于可成交利润。
        </p>
        <p className="text-lab-gray mb-4">
          这个策略的死因不是方向判断错误，而是执行层面的问题：
        </p>
        <ul className="space-y-1 text-lab-gray mb-6">
          <li>• partial fill 把双边套利变成单边赌博</li>
          <li>• 手续费吃掉大部分价差</li>
          <li>• ask 价格远比 last price 差</li>
          <li>• 低流动性导致无法完整执行</li>
        </ul>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">最终判定</p>
          <p className="text-lab-red font-bold text-lg">不能裸用</p>
          <p className="text-lab-gray mt-4">
            这个策略不适合直接执行。但它有一个可复用的模块：<strong className="text-white">consistency checker</strong> — 用 YES + NO 的关系来检测市场异常。当价差异常大时，可能意味着市场结构有问题，值得进一步分析，而不是直接套利。
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
