export default function BAL002() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> REPLICATION BAL-002
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Polymarket 不是 Fair Price：直接搬价格为什么可能亏钱
      </h1>
      <p className="text-lab-gray font-mono text-sm mb-8">实盘复刻报告 BAL-002：Polymarket 价格锚定策略</p>

      {/* Strategy Source */}
      <section className="mb-12">
        <h2 className="section-label mb-3">策略来源</h2>
        <p className="text-lab-gray mb-4">
          这是预测市场中最"专业"的流行策略之一：
        </p>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 mb-4">
          <p className="text-white italic">
            Polymarket 是最大的预测市场，流动性最好。所以 Polymarket 的价格可以当作其他平台的"公平价格"。如果其他平台的价格偏离 Polymarket，就交易偏离的方向。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">传播程度</span>
            <span className="text-lab-gray">中等</span>
          </div>
          <div className="flex justify-between border-b border-lab-border/50 pb-2">
            <span className="text-lab-muted font-mono text-xs uppercase tracking-wider">目标受众</span>
            <span className="text-lab-gray">初级量化玩家 — 有一定技术能力，想用"数据驱动"方法交易</span>
          </div>
        </div>
      </section>

      {/* Original Strategy Description */}
      <section className="mb-12">
        <h2 className="section-label mb-3">原始策略描述</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <p className="text-lab-gray leading-relaxed mb-4">
            监控 Polymarket 上某个事件的价格，将其视为该事件的真实概率（fair price）。如果另一个预测市场（如 Kalshi、predict.fun 等）上同一事件的价格偏离 Polymarket，就在偏离方向交易。
          </p>
          <p className="text-lab-gray">
            例如：Polymarket 上"Trump 赢"= 0.55，Kalshi 上 = 0.50。那就在 Kalshi 上买入 YES，等价格回归。
          </p>
        </div>
      </section>

      {/* Why It Looks Profitable */}
      <section className="mb-12">
        <h2 className="section-label mb-3">为什么它看起来能赚钱？</h2>
        <ol className="space-y-2 text-lab-gray">
          <li>
            <strong className="text-white">1. Polymarket 是最大的市场</strong> — 流动性最好，应该最接近"真实概率"
          </li>
          <li>
            <strong className="text-white">2. 大市场定价</strong> — 这是金融学的基本逻辑
          </li>
          <li>
            <strong className="text-white">3. 跨市场套利</strong> — 经典的价差交易思路
          </li>
          <li>
            <strong className="text-white">4. 看起来很"量化"</strong> — 有数据、有逻辑、有方法
          </li>
        </ol>
      </section>

      {/* Core Assumptions */}
      <section className="mb-12">
        <h2 className="section-label mb-3">核心假设</h2>
        <ol className="space-y-2 text-lab-gray">
          <li>1. <strong className="text-white">Polymarket 价格 = 真实概率</strong> — 大市场价格是无偏估计</li>
          <li>2. <strong className="text-white">小市场价格会回归大市场</strong> — 偏差是暂时的</li>
          <li>3. <strong className="text-white">价差足够大，覆盖成本后仍有利润</strong></li>
          <li>4. <strong className="text-white">事件在两个平台上含义完全相同</strong> — 同一个事件，同一个规则</li>
          <li>5. <strong className="text-white">你能及时检测到价差</strong> — 信号延迟可接受</li>
          <li>6. <strong className="text-white">回归会在你持有期间发生</strong> — 不会永远偏离</li>
        </ol>
      </section>

      {/* Replication Rules */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻规则</h2>
        <ul className="space-y-2 text-lab-gray">
          <li><strong className="text-white">信号定义：</strong>同一事件在 Polymarket 的价格与目标平台价格偏差超过阈值</li>
          <li><strong className="text-white">入场条件：</strong>偏差 &gt; threshold 时，在偏离方向下单</li>
          <li><strong className="text-white">出场条件：</strong>偏差回到零或反转时平仓，或止损</li>
          <li><strong className="text-white">仓位规则：</strong>按偏差大小决定仓位</li>
          <li><strong className="text-white">市场选择：</strong>选择同时在多个平台上市的事件</li>
        </ul>
      </section>

      {/* Replication Fidelity */}
      <section className="mb-12">
        <h2 className="section-label mb-3">复刻完整度</h2>
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6 font-mono text-sm">
          <p className="text-lab-green mb-4">复刻完整度：75%</p>
          <p className="text-white mb-2">完全复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 信号定义（跨平台价差检测）</li>
            <li>- 入场条件（偏差超阈值）</li>
            <li>- 出场条件（回归平仓）</li>
          </ul>
          <p className="text-white mb-2">部分复刻：</p>
          <ul className="text-lab-gray ml-4 mb-4">
            <li>- 原策略没有说明如何处理不同平台的结算规则差异</li>
            <li>- 原策略没有说明如何处理时间不同步</li>
            <li>- 原策略没有说明手续费和滑点</li>
          </ul>
          <p className="text-white mb-2">无法复刻：</p>
          <ul className="text-lab-gray ml-4">
            <li>- 不同平台的事件定义可能不完全一致</li>
            <li>- Polymarket 的价格可能本身就有偏差（不是 fair price）</li>
            <li>- 跨平台数据同步的精确时间差难以量化</li>
          </ul>
        </div>
      </section>

      {/* Theoretical Analysis */}
      <section className="mb-12">
        <h2 className="section-label mb-3">理论分析：为什么实盘可能失效</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-white font-bold mb-2">1. Polymarket 价格不是 Fair Price</h3>
            <p className="text-lab-gray mb-2">这是最根本的问题。</p>
            <p className="text-lab-gray mb-2">
              Polymarket 的价格是<strong className="text-white">带噪声的</strong>。它反映的不是"真实概率"，而是当前市场参与者愿意交易的价格。受以下因素影响：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- <strong className="text-white">参与者结构偏差</strong> — Polymarket 用户偏年轻、偏 crypto native，可能对某些事件有系统性偏见</li>
              <li>- <strong className="text-white">流动性分布不均</strong> — 热门事件价格更准，冷门事件价格可能严重偏离</li>
              <li>- <strong className="text-white">做市商行为</strong> — 做市商的 spread 和库存管理会影响价格</li>
              <li>- <strong className="text-white">事件定义差异</strong> — 同名事件在不同平台的结算条件可能不同</li>
            </ul>
            <p className="text-lab-red font-semibold">
              把一个有噪声的价格当作"标准答案"，本身就是一个错误。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">2. 结算规则差异：看不见的风险</h3>
            <p className="text-lab-gray mb-2">这是最容易忽略的问题。</p>
            <p className="text-lab-gray mb-2">同一个"Trump 赢大选"事件：</p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- Polymarket 可能以美联社宣布为准</li>
              <li>- Kalshi 可能以国会认证为准</li>
              <li>- 另一个平台可能以法院裁定为准</li>
            </ul>
            <p className="text-lab-gray mb-2">
              如果最终结果有争议（比如 2000 年大选那种），不同平台可能结算出不同结果。
            </p>
            <p className="text-lab-gray mb-2">
              你以为你在做"价差回归"，实际上你在做"结算风险赌注"。
            </p>
            <p className="text-lab-red font-semibold">
              价差不一定会回归。它可能扩大——因为市场在定价不同的结算场景。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">3. 延迟：等你检测到，已经晚了</h3>
            <p className="text-lab-gray mb-2">
              从 Polymarket 价格变动，到你检测到，到你在另一个平台下单，中间有多长延迟？
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 数据获取延迟：API polling 间隔（通常 1-10 秒）</li>
              <li>- 信号计算延迟</li>
              <li>- 下单执行延迟</li>
              <li>- 成交确认延迟</li>
            </ul>
            <p className="text-lab-gray mb-2">
              在新信息驱动下，两个市场的价格通常在秒级内同步。你用 polling 的方式，信号天然就是滞后的。
            </p>
            <p className="text-lab-red font-semibold">
              你以为你在追价差回归，其实你在追一个已经消失的信号。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">4. 当偏差真的存在时，通常有原因</h3>
            <p className="text-lab-gray mb-2">
              如果一个市场持续偏离另一个市场，通常不是因为"市场无效"，而是因为：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 知情交易者在其中一个市场有优势</li>
              <li>- 某个市场的流动性不足以支撑大单</li>
              <li>- 结算规则差异正在被定价</li>
              <li>- 监管差异导致参与者不同</li>
            </ul>
            <p className="text-lab-red font-semibold">
              这些原因不会因为你下单而消失。你只是在跟有信息优势的人对赌。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">5. 手续费和滑点再次吃掉利润</h3>
            <p className="text-lab-gray mb-2">
              跨平台交易意味着你要在两个市场都交手续费。
            </p>
            <p className="text-lab-gray mb-2">
              Polymarket 费率 + 目标平台费率 + 两个市场的滑点 + 两个市场的 spread = 你需要在价差中赚到至少 3-5% 才能盈亏平衡。
            </p>
            <p className="text-lab-gray">
              而大多数"可观测"价差在扣除 ask 价格后都不到 3%。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2">6. Logit Space 的问题</h3>
            <p className="text-lab-gray mb-2">
              概率价格不是线性的。0.50 → 0.55 和 0.90 → 0.95 在价格空间看起来一样（都是 5%），但在 logit 空间完全不同：
            </p>
            <ul className="text-lab-gray ml-4 mb-2">
              <li>- 0.50 → 0.55：logit 变化 ≈ 0.20</li>
              <li>- 0.90 → 0.95：logit 变化 ≈ 1.47</li>
            </ul>
            <p className="text-lab-gray">
              在极端概率区域，同样的价格偏差代表的信息量完全不同。直接用价格做偏差信号，在极端区域会严重误判。
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="section-label mb-3">结论</h2>
        <p className="text-lab-gray mb-4">
          Polymarket 的价格只是一个<strong className="text-white">带噪声的参考</strong>，不是 fair price。
        </p>
        <p className="text-lab-gray mb-4">这个策略的死因：</p>
        <ul className="space-y-1 text-lab-gray mb-6">
          <li>• 把有噪声的价格当作标准答案</li>
          <li>• 忽略了不同平台的结算规则差异</li>
          <li>• 信号延迟让"回归交易"变成了"追已消失的信号"</li>
          <li>• 手续费和滑点吃掉利润</li>
          <li>• 持续的偏差通常有结构性原因，不会因为你的交易而消失</li>
        </ul>
        <div className="bg-lab-dark border border-lab-red/50 rounded-lg p-6">
          <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">最终判定</p>
          <p className="text-lab-red font-bold text-lg">不能裸用</p>
          <p className="text-lab-gray mt-4">
            这个策略不适合直接执行。但它有一个可复用的模块：<strong className="text-white">noisy anchor</strong> — 把 Polymarket 价格作为一个带置信度的参考信号，而不是标准答案。需要做 logit-space 折扣和置信度调整。
          </p>
          <p className="text-lab-gray mt-4">具体来说：</p>
          <ul className="text-lab-gray ml-4 mt-2">
            <li>- 用 Polymarket 价格作为先验（prior）</li>
            <li>- 根据流动性、参与者结构、历史偏差计算置信度</li>
            <li>- 只在高置信度 + 大偏差时才考虑交易</li>
            <li>- 永远不要把 Polymarket 价格当作"确定的 fair price"</li>
          </ul>
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
