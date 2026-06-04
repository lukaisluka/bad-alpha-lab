export default function BAL004() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> REPLICATION BAL-004
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        "跟着聪明钱走"：跟单策略为什么让你跟着亏
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">实盘复刻报告 BAL-004：预测市场跟单/聪明钱策略</p>

      {/* Strategy Source */}
      <section className="mb-12">
        <h2 className="section-label mb-3">策略来源</h2>
        <p className="text-lab-gray mb-4">
          这是社交媒体上最火的策略之一，几乎每个预测市场 KOL 都会提到：
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 mb-4">
          <p className="text-white italic">
            找到盈利的大户（whale），复制他们的交易。聪明钱已经做了研究，你只需要跟单就行。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">传播程度</span>
            <span className="text-lab-gray">极广 — 社交媒体上最流行的策略</span>
          </div>
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">目标受众</span>
            <span className="text-lab-gray">大众 — 逻辑最直觉，"跟着赢家走"</span>
          </div>
        </div>
      </section>

      {/* Original Strategy Description */}
      <section className="mb-12">
        <h2 className="section-label mb-3">原始策略描述</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed mb-4">
            跟单策略的核心逻辑：
          </p>
          <ol className="text-lab-gray ml-4 mb-4 space-y-1">
            <li>1. 在 Polymarket 上找到历史盈利记录好的大户</li>
            <li>2. 监控他们的链上交易</li>
            <li>3. 当他们买入时，你也买入；当他们卖出时，你也卖出</li>
            <li>4. 因为他们是"聪明钱"，所以跟单就能赚钱</li>
          </ol>
          <p className="text-lab-gray mb-4">
            这个策略的变体包括：
          </p>
          <ul className="text-lab-gray ml-4 space-y-1">
            <li>- <strong className="text-white">纯跟单</strong>：完全复制大户的每一笔交易</li>
            <li>- <strong className="text-white">选择性跟单</strong>：只跟大户在某些市场的交易</li>
            <li>- <strong className="text-white">延迟跟单</strong>：大户交易后延迟一段时间再跟</li>
            <li>- <strong className="text-white">规模跟单</strong>：按大户仓位比例调整自己的仓位</li>
          </ul>
        </div>
      </section>

      {/* Why It Looks Profitable */}
      <section className="mb-12">
        <h2 className="section-label mb-3">为什么它看起来能赚钱？</h2>
        <ol className="space-y-2 text-lab-gray">
          <li>
            <strong className="text-white">1. 赢家效应</strong> — 过去赚钱的人，未来应该也赚钱，对吧？
          </li>
          <li>
            <strong className="text-white">2. 信息优势</strong> — 大户可能拥有你不知道的信息
          </li>
          <li>
            <strong className="text-white">3. 规模效应</strong> — 大户投入大，说明他们有信心
          </li>
          <li>
            <strong className="text-white">4. 社交验证</strong> — 这么多人推荐，应该有效
          </li>
          <li>
            <strong className="text-white">5. 链上透明</strong> — Polymarket 交易全部上链，大户无处藏身
          </li>
        </ol>
        <p className="text-lab-gray mt-4">
          回测会显示：如果你在 3 个月前跟单 top 10 盈利大户，你的收益是正的。
        </p>
      </section>

      {/* Core Assumptions */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心假设</h2>
        <p className="text-lab-gray mb-4">这个策略要赚钱，必须满足：</p>
        <ol className="space-y-2 text-lab-gray">
          <li>1. <strong className="text-white">过去的表现能预测未来</strong> — 历史盈利大户会继续盈利</li>
          <li>2. <strong className="text-white">你能及时检测到大户交易</strong> — 延迟不会太大</li>
          <li>3. <strong className="text-white">大户的交易不是做市行为</strong> — 你跟的是方向性交易</li>
          <li>4. <strong className="text-white">大户不会故意诱导</strong> — 没有"诱多"行为</li>
          <li>5. <strong className="text-white">你的交易不会影响价格</strong> — 跟单不会推高买入价</li>
          <li>6. <strong className="text-white">大户的仓位规模适合你</strong> — 你能承受同样的风险</li>
        </ol>
      </section>

      {/* Replication Rules */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻规则</h2>
        <ul className="space-y-2 text-lab-gray">
          <li><strong className="text-white">信号定义：</strong>当 top N 盈利大户在某个市场开仓时，触发跟单信号</li>
          <li><strong className="text-white">入场条件：</strong>检测到大户买入后，在 X 分钟内买入同一市场</li>
          <li><strong className="text-white">出场条件：</strong>大户平仓时跟单平仓，或止损</li>
          <li><strong className="text-white">仓位规则：</strong>按大户仓位比例调整，不超过总资金的 Y%</li>
          <li><strong className="text-white">大户选择：</strong>过去 30 天盈利 top 10 的地址</li>
        </ul>
      </section>

      {/* Replication Fidelity */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻完整度</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 font-mono text-sm">
          <p className="text-lab-green mb-4">复刻完整度：75%</p>
          <p className="text-white mb-2">完全复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 大户识别逻辑（盈利排名）</li>
            <li>- 交易检测（链上监控）</li>
            <li>- 跟单入场逻辑</li>
          </ul>
          <p className="text-white mb-2">部分复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 原策略不说明延迟处理，我加入了延迟敏感性分析</li>
            <li>- 原策略不区分做市和方向性交易，我加入了交易类型过滤</li>
            <li>- 原策略不说明大户轮换，我加入了动态排名更新</li>
          </ul>
          <p className="text-white mb-2">无法复刻：</p>
          <ul className="text-lab-gray ml-4">
            <li>- 大户的真实意图无法从链上数据判断</li>
            <li>- 大户可能有场外对冲</li>
            <li>- 大户的"聪明"可能只是运气</li>
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
                <td className="py-3 px-4">延迟分析</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入 1min/5min/15min 延迟对比</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">做市过滤</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">区分方向性交易和做市行为</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">大户轮换</td>
                <td className="py-3 px-4">假设固定</td>
                <td className="py-3 px-4">加入动态排名 + 衰减因子</td>
              </tr>
              <tr className="border-b border-lab-border/50">
                <td className="py-3 px-4">仓位影响</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入价格冲击计算</td>
              </tr>
              <tr>
                <td className="py-3 px-4">幸存者偏差</td>
                <td className="py-3 px-4">未说明</td>
                <td className="py-3 px-4">加入全量地址分析 vs 仅 top 地址</td>
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
            <h3 className="text-white font-bold mb-2">1. 幸存者偏差：你看到的是赢家，看不到输家</h3>
            <p className="text-lab-gray mb-2">
              这是跟单策略最根本的统计陷阱。
            </p>
            <p className="text-lab-gray mb-2">
              在任何时刻，总有"过去赚钱的大户"。但这不代表他们"未来也会赚钱"。
            </p>
            <p className="text-lab-gray mb-2"><strong className="text-white">数学：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 假设有 1000 个交易者，每人随机交易</li>
              <li>- 3 个月后，纯靠运气，约 50 人会盈利（5% 显著性水平）</li>
              <li>- 这 50 人就是"聪明钱"</li>
              <li>- 但他们第 4 个月的表现，和随机交易者没有区别</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">现实更糟：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- Polymarket 上大户数量有限，更容易出现小样本偏差</li>
              <li>- 很多"大户"可能只做了一两笔大交易，偶然赚了</li>
              <li>- 历史排名的时间窗口越短，偏差越大</li>
            </ul>
            <p className="text-lab-red font-semibold">
              关键洞察："聪明钱"可能只是"幸运钱"。你无法从历史数据中区分运气和能力。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">2. 延迟吃掉利润：你看到的已经是过去式</h3>
            <p className="text-lab-gray mb-2">
              链上交易检测存在不可避免的延迟：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">区块确认延迟</strong>：5-15 秒</li>
              <li>- <strong className="text-white">检测系统延迟</strong>：10-30 秒</li>
              <li>- <strong className="text-white">决策延迟</strong>：你的系统需要判断是否跟单</li>
              <li>- <strong className="text-white">下单延迟</strong>：你的订单进入订单簿需要时间</li>
              <li>- <strong className="text-white">成交延迟</strong>：你的限价单可能不会立即成交</li>
            </ul>
            <p className="text-lab-red font-semibold mb-4">
              总延迟：30 秒到数分钟
            </p>
            <p className="text-lab-gray mb-2">
              在这个延迟期间：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 价格可能已经移动</li>
              <li>- 其他跟单者可能已经抢先</li>
              <li>- 大户的交易可能已经被价格反映</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">场景：</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 大户在 0.50 买入</li>
              <li>- 30 秒后你检测到</li>
              <li>- 价格已经涨到 0.55</li>
              <li>- 你在 0.55 跟单买入</li>
              <li>- 大户赚 10%，你只赚 5%（如果价格到 0.60）</li>
              <li>- 但如果价格回到 0.50，大户不亏，你亏 9%</li>
            </ul>
            <p className="text-lab-red font-semibold">
              延迟不对称：大户赚的比你多，亏的比你少。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">3. 你跟的可能不是方向性交易</h3>
            <p className="text-lab-gray mb-2">
              大户的交易行为不都是"看好某个方向"：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">做市行为</strong>：大户可能在挂双边单，你只跟了一边</li>
              <li>- <strong className="text-white">对冲行为</strong>：大户可能在另一个市场有反向仓位</li>
              <li>- <strong className="text-white">套利行为</strong>：大户可能在利用价差，你跟了但赚不到价差</li>
              <li>- <strong className="text-white">洗盘行为</strong>：大户可能在左手倒右手</li>
            </ul>
            <p className="text-lab-gray mb-2"><strong className="text-white">最致命的场景：做市</strong></p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 大户挂 bid=0.48, ask=0.52</li>
              <li>- 你检测到大户"买入"@0.48</li>
              <li>- 你也买入</li>
              <li>- 但大户同时也在 0.52 挂卖单</li>
              <li>- 如果价格涨到 0.52，大户两边都赚（spread），你只是回本</li>
              <li>- 如果价格跌，大户有 ask 保护，你没有</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">4. 大户知道你在跟单</h3>
            <p className="text-lab-gray mb-2">
              这是博弈论的层面。
            </p>
            <p className="text-lab-gray mb-2">
              在 Polymarket 上，大户可以看到订单簿。如果他们注意到每次自己买入后都有小单跟入，他们会：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">提前布局</strong>：先买入，等你跟单推高价格，然后卖出</li>
              <li>- <strong className="text-white">假信号</strong>：故意小仓位买入，引诱跟单者，然后大仓位反向</li>
              <li>- <strong className="text-white">利用跟单流动性</strong>：在需要出场时，利用跟单者的买盘</li>
            </ul>
            <p className="text-lab-red font-semibold">
              这不是阴谋论。在传统市场中，这种"诱导跟单"的行为被称为"front-running your followers"，是很多 KOL 的实际商业模式。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">5. 规模问题：大户能承受的亏损你不能</h3>
            <p className="text-lab-gray mb-2">
              大户的资金量大，单笔交易占总资金比例小：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 大户投入 1000 USDC，占总资金 1%</li>
              <li>- 你投入 100 USDC，占总资金 10%</li>
              <li>- 同样 50% 的亏损，大户损失 0.5%，你损失 5%</li>
            </ul>
            <p className="text-lab-gray mb-2">
              大户可以承受多次亏损，等待一次大赚。你的资金可能撑不到那一次。
            </p>
            <p className="text-lab-gray">
              <strong className="text-white">凯利公式的启示：</strong> 最优仓位大小和资金量、胜率、赔率相关。大户的"正确"仓位，对你来说可能是过度下注。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">6. 羊群效应：跟单者互相踩踏</h3>
            <p className="text-lab-gray mb-2">
              当很多跟单者同时行动时：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">入场踩踏</strong>：大量买单推高价格，所有人买贵了</li>
              <li>- <strong className="text-white">出场踩踏</strong>：大户平仓后，跟单者同时卖出，价格暴跌</li>
              <li>- <strong className="text-white">信息过时</strong>：第一个跟单者赚的，最后一个跟单者亏的</li>
            </ul>
            <p className="text-lab-red font-semibold">
              结果：跟单策略的利润随跟单者数量增加而递减。越流行的策略越不赚钱。
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="section-label mb-3">结论</h2>
        <p className="text-lab-gray mb-4">
          "跟着聪明钱走"听起来很聪明，但实际上你跟着走的是一条拥挤的路。
        </p>
        <p className="text-lab-red font-bold text-lg mb-4">
          核心问题：你无法区分"聪明钱"和"幸运钱"，即使能区分，延迟和博弈也会吃掉你的利润。
        </p>
        <p className="text-lab-gray mb-4">
          这个策略的死因不是"大户不聪明"，而是：
        </p>
        <ul className="space-y-1 text-lab-gray mb-6">
          <li>• 幸存者偏差让你只看到赢家</li>
          <li>• 延迟导致你买贵卖贱</li>
          <li>• 大户的交易意图无法从链上判断</li>
          <li>• 跟单者互相踩踏</li>
          <li>• 大户可能利用跟单者</li>
        </ul>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">最终判定</p>
          <p className="text-lab-red font-bold text-lg">不能裸用</p>
          <p className="text-lab-gray mt-4">
            这个策略不适合直接执行。但它有一个可复用的模块：<strong className="text-white">Whale activity monitor</strong> — 监控大户活动作为市场情绪指标，而不是跟单信号。当大户集中买入某个市场时，可能意味着该市场有未反映的信息，值得进一步研究（而不是直接跟单）。
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
