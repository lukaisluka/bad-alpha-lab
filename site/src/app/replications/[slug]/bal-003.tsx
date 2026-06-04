export default function BAL003() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> REPLICATION BAL-003
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        做市商策略：spread capture 的幻觉
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">实盘复刻报告 BAL-003：Polymarket 做市商策略</p>

      {/* Strategy Source */}
      <section className="mb-12">
        <h2 className="section-label mb-3">策略来源</h2>
        <p className="text-lab-gray mb-4">
          这是预测市场中最"专业"的策略之一，几乎所有做市商指南都会提到：
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 mb-4">
          <p className="text-white italic">
            在 Polymarket 上挂双边限价单（bid + ask），赚取 spread 作为利润。配合 maker rebate，每笔 round trip 都是正收益。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">传播程度</span>
            <span className="text-lab-gray">中等 — 需要技术能力，但教程越来越多</span>
          </div>
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">目标受众</span>
            <span className="text-lab-gray">有编程能力的交易者 — 想要"被动收入"的人</span>
          </div>
        </div>
      </section>

      {/* Original Strategy Description */}
      <section className="mb-12">
        <h2 className="section-label mb-3">原始策略描述</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed mb-4">
            做市商策略的核心逻辑：
          </p>
          <ol className="text-lab-gray ml-4 mb-4 space-y-1">
            <li>1. 在某个市场同时挂 bid（买价）和 ask（卖价）</li>
            <li>2. bid &lt; ask，差价就是 spread</li>
            <li>3. 当两边都成交时，你赚 spread</li>
            <li>4. Polymarket 有 maker rebate（返佣），进一步增加利润</li>
            <li>5. 理论上，只要 spread &gt; 0，你就在赚钱</li>
          </ol>
          <p className="text-lab-gray">
            例如：YES 市场 bid = 0.48, ask = 0.52，spread = 0.04。如果两边都成交，你花 0.48 买入，0.52 卖出，赚 0.04。
          </p>
          <p className="text-lab-gray mt-2">
            加上 maker rebate（假设 1%），利润更高。
          </p>
          <p className="text-lab-gray mt-4">
            这个策略被很多人称为"预测市场的被动收入"。
          </p>
        </div>
      </section>

      {/* Why It Looks Profitable */}
      <section className="mb-12">
        <h2 className="section-label mb-3">为什么它看起来能赚钱？</h2>
        <ol className="space-y-2 text-lab-gray">
          <li>
            <strong className="text-white">1. 每笔 round trip 都是正收益</strong> — spread 是确定的
          </li>
          <li>
            <strong className="text-white">2. 不需要预测方向</strong> — 你只是提供流动性
          </li>
          <li>
            <strong className="text-white">3. maker rebate 加成</strong> — Polymarket 奖励做市商
          </li>
          <li>
            <strong className="text-white">4. 看起来像印钞机</strong> — 只要市场在交易，你就在赚
          </li>
          <li>
            <strong className="text-white">5. 传统金融验证</strong> — 做市商在股票市场确实赚钱
          </li>
        </ol>
        <p className="text-lab-gray mt-4">
          回测会显示：在流动性好的市场，spread 收入稳定且可观。
        </p>
      </section>

      {/* Core Assumptions */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心假设</h2>
        <p className="text-lab-gray mb-4">这个策略要赚钱，必须满足：</p>
        <ol className="space-y-2 text-lab-gray">
          <li>1. <strong className="text-white">两边成交频率大致相等</strong> — 不会只成交一边导致库存堆积</li>
          <li>2. <strong className="text-white">价格不会单方向大幅移动</strong> — 库存不会因价格变动而亏损</li>
          <li>3. <strong className="text-white">没有知情交易者（adverse selection）</strong> — 和你交易的人不比你知道得多</li>
          <li>4. <strong className="text-white">spread 足够覆盖库存风险</strong> — 赚的 spread 能弥补持仓亏损</li>
          <li>5. <strong className="text-white">市场有足够流动性</strong> — 两边都能成交</li>
          <li>6. <strong className="text-white">maker rebate 是真实的</strong> — 不是暂时的补贴</li>
        </ol>
      </section>

      {/* Replication Rules */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻规则</h2>
        <ul className="space-y-2 text-lab-gray">
          <li><strong className="text-white">信号定义：</strong>在 bid-ask spread &gt; min_spread 的市场挂双边单</li>
          <li><strong className="text-white">入场条件：</strong>同时挂 bid 和 ask，价格围绕 mid price 对称</li>
          <li><strong className="text-white">出场条件：</strong>成交后立即重新挂单（持续做市）</li>
          <li><strong className="text-white">仓位规则：</strong>库存偏离时偏移报价（skew quoting）</li>
          <li><strong className="text-white">市场选择：</strong>选择交易量最大、spread 最宽的市场</li>
        </ul>
      </section>

      {/* Replication Fidelity */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻完整度</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 font-mono text-sm">
          <p className="text-lab-green mb-4">复刻完整度：80%</p>
          <p className="text-white mb-2">完全复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 双边报价逻辑</li>
            <li>- Spread 计算</li>
            <li>- Maker rebate 计算</li>
            <li>- 市场选择逻辑</li>
          </ul>
          <p className="text-white mb-2">部分复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 原策略通常不说明库存管理细节，我加入了 skew quoting</li>
            <li>- 原策略不说明 adverse selection 处理，我加入了信息流检测</li>
            <li>- 原策略不说明市场切换逻辑，我加入了流动性阈值</li>
          </ul>
          <p className="text-white mb-2">无法复刻：</p>
          <ul className="text-lab-gray ml-4">
            <li>- 真实的 adverse selection 强度需要长期数据</li>
            <li>- 不同市场的事件风险差异难以量化</li>
            <li>- Polymarket rebate 政策的可持续性不确定</li>
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
                <td className="py-3 px-4">库存管理</td>
                <td className="py-3 px-4">"控制仓位"</td>
                <td className="py-3 px-4">加入 skew quoting + 仓位上限</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">Adverse selection</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入成交流分析 + 知情交易者检测</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">事件风险</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入事件日历 + 暂停做市规则</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">市场切换</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入流动性阈值 + 自动切换</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Rebate 可持续性</td>
                <td className="py-3 px-4">假设永远有</td>
                <td className="py-3 px-4">加入 rebate 变动敏感性分析</td>
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
            <h3 className="text-white font-bold mb-2">1. Inventory Risk：做市商的慢性毒药</h3>
            <p className="text-lab-gray mb-2">
              这是做市商策略最核心的风险，也是最容易被忽视的。
            </p>
            <p className="text-lab-gray mb-2">
              做市商的逻辑是"两边都成交，赚 spread"。但现实中，两边不会同时成交。你先成交了一边，持有了仓位，等待另一边成交。在等待期间，价格可能移动。
            </p>
            <p className="text-lab-gray mb-2"><strong className="text-white">场景：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 你在 YES 市场挂 bid=0.48, ask=0.52</li>
              <li>- 有人 hit 你的 bid，你买入 YES @ 0.48</li>
              <li>- 现在你持有 1 份 YES，等待有人 hit 你的 ask</li>
              <li>- 但价格跌到 0.40，你的 ask 不会被 hit</li>
              <li>- 你要么继续等（库存风险暴露），要么降价卖出（亏损出场）</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">关键数字：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 如果 spread 是 4%（0.04），但价格移动了 10%（0.48→0.40）</li>
              <li>- 你赚了 0.04 的 spread，但亏了 0.08 的库存</li>
              <li>- 净亏损 0.04</li>
            </ul>
            <p className="text-lab-gray mb-2">
              在预测市场中，价格波动远比传统市场剧烈。一个新闻事件可以让价格从 0.50 跳到 0.90。做市商在那一刻持有 0.50 买入的仓位，瞬间浮亏 40%。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">2. Adverse Selection：你在和比你聪明的人交易</h3>
            <p className="text-lab-gray mb-2">
              这是做市商策略的致命伤。
            </p>
            <p className="text-lab-gray mb-2">
              做市商的每一笔成交，对手方都有理由交易。如果对方是随机交易者，你赚 spread。但如果对方是知情交易者（知道你不知道的信息），你就是在亏钱。
            </p>
            <p className="text-lab-gray mb-2"><strong className="text-white">预测市场的 adverse selection 极其严重：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 事件结果有明确的时间节点（选举日、判决日）</li>
              <li>- 内部信息存在（民调数据、内部消息）</li>
              <li>- 专业交易者有信息优势（分析师、领域专家）</li>
              <li>- 新闻传播速度不均匀（有人先知道）</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">场景：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 某选举市场 YES = 0.50</li>
              <li>- 你挂 bid=0.48, ask=0.52</li>
              <li>- 一个知情交易者知道某候选人即将退选</li>
              <li>- 他 hit 你的 bid（买入 YES @ 0.48）</li>
              <li>- 退选消息公布，YES 涨到 0.95</li>
              <li>- 你在 0.48 卖出了价值 0.95 的东西</li>
            </ul>
            <p className="text-lab-red font-semibold">
              这就是 adverse selection：和你成交的人，往往是因为他们知道你不知道的事情。
            </p>
            <p className="text-lab-gray mt-4 mb-2">
              在预测市场中，adverse selection 的强度远超传统市场。因为：
            </p>
            <ul className="text-lab-gray ml-4">
              <li>- 传统市场中，大部分交易是流动性驱动的（随机）</li>
              <li>- 预测市场中，大部分交易是信息驱动的（有方向）</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">3. Spread 不够覆盖风险</h3>
            <p className="text-lab-gray mb-2">
              做市商的利润 = spread × 成交量 - 库存亏损 - adverse selection 亏损
            </p>
            <p className="text-lab-gray mb-2">
              在 Polymarket 上：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 典型 spread：2-5%</li>
              <li>- 典型价格波动：10-30%（事件驱动）</li>
              <li>- Adverse selection 损失：难以量化，但经验上很大</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">数学：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 假设 spread = 3%，每天成交 10 次 round trip</li>
              <li>- 日收入 = 3% × 10 = 30% 的单次仓位</li>
              <li>- 但如果一次 adverse selection 事件亏损 20% 仓位</li>
              <li>- 你需要 7 次 round trip 才能弥补一次亏损</li>
              <li>- 而在预测市场中，adverse selection 事件可能每周发生 2-3 次</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">4. Maker Rebate 的幻觉</h3>
            <p className="text-lab-gray mb-2">
              Polymarket 的 maker rebate 是很多做市商教程的卖点。但：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">Rebate 是暂时的</strong> — Polymarket 可以随时调整或取消</li>
              <li>- <strong className="text-white">Rebate 有条件</strong> — 需要满足交易量要求</li>
              <li>- <strong className="text-white">Rebate 不覆盖库存亏损</strong> — 1% 的 rebate 无法弥补 10% 的库存亏损</li>
              <li>- <strong className="text-white">Rebate 吸引竞争</strong> — 更多做市商 = 更窄 spread = 更少利润</li>
            </ul>
            <p className="text-lab-red font-bold">
              关键洞察：Rebate 是补贴，不是收入。补贴会消失，但风险不会。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">5. 预测市场的特殊性</h3>
            <p className="text-lab-gray mb-4">
              预测市场做市和传统市场做市有本质区别：
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-lab-border">
                    <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">维度</th>
                    <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">传统市场</th>
                    <th className="text-left py-3 px-4 text-lab-muted font-mono text-xs uppercase tracking-wider">预测市场</th>
                  </tr>
                </thead>
                <tbody className="text-lab-gray">
                  <tr className="border-b border-lab-border/50">
                    <td className="py-3 px-4">价格边界</td>
                    <td className="py-3 px-4">无上下限</td>
                    <td className="py-3 px-4">0 到 1（有界）</td>
                  </tr>
                  <tr className="border-b border-lab-border/50">
                    <td className="py-3 px-4">波动来源</td>
                    <td className="py-3 px-4">随机 + 信息</td>
                    <td className="py-3 px-4">主要是信息</td>
                  </tr>
                  <tr className="border-b border-lab-border/50">
                    <td className="py-3 px-4">结算方式</td>
                    <td className="py-3 px-4">永续</td>
                    <td className="py-3 px-4">有到期日</td>
                  </tr>
                  <tr className="border-b border-lab-border/50">
                    <td className="py-3 px-4">Adverse selection</td>
                    <td className="py-3 px-4">中等</td>
                    <td className="py-3 px-4">极高</td>
                  </tr>
                  <tr className="border-b border-lab-border/50">
                    <td className="py-3 px-4">对冲工具</td>
                    <td className="py-3 px-4">丰富</td>
                    <td className="py-3 px-4">几乎没有</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">流动性</td>
                    <td className="py-3 px-4">充足</td>
                    <td className="py-3 px-4">稀缺</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lab-gray mb-2"><strong className="text-white">有界价格的特殊问题：</strong></p>
            <ul className="text-lab-gray ml-4 mb-4">
              <li>- 当价格接近 0 或 1 时，spread 的含义完全不同</li>
              <li>- YES = 0.95 时，bid=0.94, ask=0.96，spread=0.02</li>
              <li>- 但 ask 一侧几乎不会成交（谁会花 0.96 买只有 0.04 利润空间的合约？）</li>
              <li>- 你实际上只在 bid 一侧成交，变成了单边持仓</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">有到期日的特殊问题：</strong></p>
            <ul className="text-lab-gray ml-4">
              <li>- 接近结算时，价格会快速收敛到 0 或 1</li>
              <li>- 做市商的库存会被"挤压"到结算</li>
              <li>- 没有传统市场中"等价格回来"的选项</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">6. 竞争导致 spread 压缩</h3>
            <p className="text-lab-gray mb-2">
              随着更多做市商进入 Polymarket：
            </p>
            <ul className="text-lab-gray ml-4">
              <li>- Spread 被压缩到接近 0</li>
              <li>- 只有最低成本（最快速度、最好技术）的做市商能生存</li>
              <li>- 散户做市商在速度竞争中完全处于劣势</li>
              <li>- 最终结果：spread 收入 &lt; 运营成本</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="section-label mb-3">结论</h2>
        <p className="text-lab-gray mb-4">
          做市商策略在预测市场中不是"被动收入"，而是一个高强度的风险管理游戏。
        </p>
        <p className="text-lab-red font-bold text-lg mb-4">
          Spread capture 的幻觉：你看到的 spread 收入是确定的，但库存亏损和 adverse selection 亏损是不确定的。不确定的亏损往往远大于确定的收入。
        </p>
        <p className="text-lab-gray mb-4">
          这个策略的死因不是 spread 不存在，而是：
        </p>
        <ul className="space-y-1 text-lab-gray mb-6">
          <li>• Inventory risk 在事件驱动的市场中极其致命</li>
          <li>• Adverse selection 在预测市场中远比传统市场严重</li>
          <li>• Spread 收入无法覆盖尾部风险</li>
          <li>• Rebate 是补贴，不是可持续收入</li>
          <li>• 竞争导致 spread 压缩到无利可图</li>
        </ul>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">最终判定</p>
          <p className="text-lab-red font-bold text-lg">不能裸用</p>
          <p className="text-lab-gray mt-4">
            这个策略不适合直接执行。但它有一个可复用的模块：<strong className="text-white">Liquidity scanner</strong> — 用 spread 和深度数据检测市场流动性状况。当流动性异常低时，可能意味着大事件即将发生，值得作为信号使用，而不是去做市。
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
