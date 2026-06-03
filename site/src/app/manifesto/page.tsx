export default function ManifestoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> MANIFESTO
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">为什么我要做一个负 Alpha 实验室</h1>
      <p className="text-lab-gray font-mono text-sm mb-8">Bad Alpha Lab 品牌宣言</p>

      <div className="border-l-4 border-lab-red pl-6 mb-12">
        <p className="text-lab-gray italic">
          你一定见过这样的内容：
        </p>
        <ul className="mt-4 space-y-2 text-lab-gray">
          <li>"这个套利策略年化 30%！"</li>
          <li>"跟着聪明钱走，稳赚不赔！"</li>
          <li>"AI 读新闻就能交易赚钱！"</li>
          <li>"YES + NO 价格加起来不到 1，无风险套利！"</li>
        </ul>
        <p className="mt-4 text-lab-gray italic">
          这些话听起来很合理，逻辑也没明显漏洞，回测可能还很好看。于是你花时间研究、写代码、终于上线——然后亏钱了。
        </p>
        <p className="mt-4 text-white font-semibold">
          不是亏一点，是稳定地亏。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-lab-red">为什么？</h2>
        <h3 className="text-lg font-bold mb-4">多数免费策略不是 Alpha，是负 Alpha</h3>
        <p className="text-lab-gray mb-4">
          问题通常不在"逻辑完全错误"。
        </p>
        <p className="text-lab-gray mb-4">
          一个策略从文本、推文、论文、博客或社区说法，进入真实执行环境后，中间会损失大量 edge。这个损耗包括：
        </p>
        <ul className="space-y-2 text-lab-gray mb-6">
          <li><strong className="text-white">手续费</strong> — 每笔交易都要交，但回测里从来不算</li>
          <li><strong className="text-white">滑点</strong> — 你看到的价格，不等于你能成交的价格</li>
          <li><strong className="text-white">bid/ask spread</strong> — 你想买得用 ask 价，想卖得用 bid 价，中间就是成本</li>
          <li><strong className="text-white">maker fill 不确定性</strong> — 你的限价单排不到前面</li>
          <li><strong className="text-white">partial fill</strong> — 只成交了一部分，另一半变成单边裸仓</li>
          <li><strong className="text-white">延迟</strong> — 从信号出现到你下单，市场已经变了</li>
          <li><strong className="text-white">小盘口容量</strong> — 策略在小规模可能有效，规模一大就失效</li>
          <li><strong className="text-white">resolution ambiguity</strong> — 结算规则可能和你理解的不一样</li>
          <li><strong className="text-white">市场选择偏差</strong> — 你只看到了成功的案例</li>
          <li><strong className="text-white">参数不透明</strong> — 原策略没有公开真实参数</li>
          <li><strong className="text-white">资金占用</strong> — 钱锁在策略里，错过其他机会</li>
          <li><strong className="text-white">风控约束</strong> — 加入止损后，策略表现完全不同</li>
          <li><strong className="text-white">人工判断不可复现</strong> — 原策略可能有"人工决策"环节，你没法复制</li>
        </ul>
        <p className="text-lab-gray mb-2">
          每一个因素单独看都不大，但加在一起，就能把一个"看起来能赚钱"的策略变成稳定亏损。
        </p>
        <p className="text-white font-semibold">
          这不是运气不好，这是结构性亏损。
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">我要做什么</h3>
        <p className="text-lab-gray mb-4">
          我打算做一件事：
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 mb-4">
          <p className="text-white font-semibold">
            忠实复刻公开流传的交易策略，加入真实交易约束，用小资金实盘验证它们在真实市场中的表现。
          </p>
        </div>
        <p className="text-lab-gray mb-2">然后公开记录：</p>
        <ul className="space-y-1 text-lab-gray mb-4">
          <li>• 策略假设是否成立</li>
          <li>• 回测收益如何衰减</li>
          <li>• 手续费和滑点吃掉了多少 edge</li>
          <li>• maker 订单是否真的能成交</li>
          <li>• 聪明钱信号是否已经太晚</li>
          <li>• 策略失败后，哪些模块仍然有用</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">我不是故意亏钱</h3>
        <p className="text-lab-gray mb-4">
          这个项目不是为了"故意亏钱博眼球"。
        </p>
        <p className="text-lab-gray mb-4">
          我会尽量忠实复刻每一个策略，甚至会对它做合理增强——加入手续费、滑点、风控、仓位限制——让它更接近"一个正常人会认真尝试的版本"。
        </p>
        <p className="text-lab-gray mb-4">
          如果增强后仍然亏钱，那说明问题更有价值。
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-white font-semibold">
            我们不是拿一个弱智策略来证明它亏钱。我们尽量把它修到合理，然后再看它是否仍然亏。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">赚钱的策略呢？</h3>
        <p className="text-lab-gray mb-4">
          真正赚钱的策略不会在这个项目里免费公开。
        </p>
        <p className="text-lab-gray mb-4">
          这不是故弄玄虚，是常识——如果一个策略真的有效，公开后就会被套利消灭。所以能免费流传的策略，要么已经失效，要么本身就有结构性问题。
        </p>
        <p className="text-lab-gray mb-4">
          我们不免费公开真正赚钱的策略，也不作为品牌传播核心。
        </p>
        <p className="text-white font-semibold">
          我们公开的是那些<strong className="text-lab-red">值得被识别、理解和避开的亏钱策略</strong>。
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">这对谁有用？</h3>
        <p className="text-lab-gray mb-4">如果你是：</p>
        <ul className="space-y-3 text-lab-gray mb-4">
          <li>
            <strong className="text-white">交易爱好者</strong> — 听过量化，对预测市场、AI trading 感兴趣，但缺少完整交易系统经验
          </li>
          <li>
            <strong className="text-white">初级量化玩家</strong> — 会写代码，能做回测，容易相信回测收益，对实盘摩擦理解不足
          </li>
          <li>
            <strong className="text-white">预测市场玩家</strong> — 关注 Polymarket、Kalshi，容易被"套利""跟单"吸引
          </li>
          <li>
            <strong className="text-white">AI Agent Builder</strong> — 想做自动化交易，需要理解真实执行风险
          </li>
        </ul>
        <p className="text-lab-gray">那这个项目可能对你有帮助。</p>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">核心原则</h3>
        <ol className="space-y-2 text-lab-gray">
          <li>1. 只公开负 Alpha、失效策略或已充分失效的公开策略</li>
          <li>2. 忠实复刻原始策略，不故意弱化</li>
          <li>3. 可以适当增强策略，让它接近"合理版本"</li>
          <li>4. 如果增强后仍然亏钱，说明问题更有价值</li>
          <li>5. 赚钱策略不免费公开，也不作为宣传内容</li>
          <li>6. 所有内容只用于研究和教育，不构成投资建议</li>
        </ol>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">研究的是结构性亏损，不是随机亏损</h3>
        <p className="text-lab-gray mb-4">
          这个品牌不能变成"我今天又亏了哈哈哈"。
        </p>
        <p className="text-lab-gray mb-4">
          我们要强调：我们研究的是<strong className="text-white">结构性亏损</strong>——策略从 idea 到 live trading 的衰减过程。不是参数乱设、风控没有、市场随便选的那种随机亏损。
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-lab-dark border border-lab-green/30 rounded-lg p-4">
            <p className="text-lab-green font-mono text-xs uppercase tracking-wider mb-2">好的负 Alpha 案例</p>
            <ul className="space-y-1 text-lab-gray text-sm">
              <li>• 策略逻辑有代表性</li>
              <li>• 回测有迷惑性</li>
              <li>• 实盘失败有结构原因</li>
              <li>• 能总结出可复用教训</li>
            </ul>
          </div>
          <div className="bg-lab-dark border border-lab-red/30 rounded-lg p-4">
            <p className="text-lab-red font-mono text-xs uppercase tracking-wider mb-2">差的负 Alpha 案例</p>
            <ul className="space-y-1 text-lab-gray text-sm">
              <li>• 参数乱设</li>
              <li>• 风控没有</li>
              <li>• 执行不规范</li>
              <li>• 亏损原因只是运气或操作失误</li>
            </ul>
          </div>
        </div>
        <p className="text-white font-semibold">我们只选前者。</p>
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold mb-4">接下来</h3>
        <p className="text-lab-gray mb-4">
          我会逐步发布策略复刻实验，从预测市场中最常见的策略开始：
        </p>
        <ol className="space-y-2 text-lab-gray">
          <li>
            <strong className="text-white">1. YES/NO 补数套利</strong> — 最像"无风险套利"的策略
          </li>
          <li>
            <strong className="text-white">2. Polymarket 价格锚定</strong> — 大市场价格能不能当标准答案
          </li>
          <li>
            <strong className="text-white">3. 大户跟单</strong> — 链上数据公开时，交易已经发生
          </li>
          <li>
            <strong className="text-white">4. 低流动性做市</strong> — spread 看起来很宽，为什么做市还是亏
          </li>
          <li>
            <strong className="text-white">5. AI 新闻交易</strong> — AI 判断对了，但你还是亏了
          </li>
        </ol>
        <p className="text-lab-gray mt-4">
          每个实验都会公开策略来源、复刻规则、实盘设置、执行数据、PnL 分解和失败原因。
        </p>
      </section>

      <div className="border-t border-lab-border pt-8 mt-8">
        <div className="bg-lab-red/10 border border-lab-red/30 rounded-lg p-6 text-center mb-6">
          <p className="text-lab-red font-bold text-lg mb-2">不卖财富密码，只公开亏钱密码。</p>
          <p className="text-lab-red font-bold text-lg">
            真正赚钱的策略不会免费公开。免费流传的策略，值得先验尸。
          </p>
        </div>
        <p className="text-lab-muted text-xs text-center">
          *免责声明：本项目内容仅用于研究和教育目的，不构成投资建议，不提供带单，不承诺收益，也不建议读者复制交易。
        </p>
        <p className="text-lab-muted text-xs text-center mt-4">
          Bad Alpha Lab — 不卖财富密码，只公开亏钱密码。
        </p>
      </div>
    </div>
  )
}
