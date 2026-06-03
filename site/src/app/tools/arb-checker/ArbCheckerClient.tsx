'use client'

import { useState, useMemo } from 'react'

export default function ArbCheckerClient() {
  const [yesAsk, setYesAsk] = useState(0.45)
  const [noAsk, setNoAsk] = useState(0.50)
  const [feeRate, setFeeRate] = useState(2)
  const [tradeSize, setTradeSize] = useState(100)

  const results = useMemo(() => {
    const feeDecimal = feeRate / 100
    const buyCost = yesAsk + noAsk
    const theoreticalSpread = 1 - buyCost
    const feeCost = buyCost * feeDecimal * 2
    const netProfit = theoreticalSpread - feeCost
    const netProfitDollar = netProfit * tradeSize

    // Partial fill risk: if only YES fills
    const partialFillYesOnlyLoss = noAsk * tradeSize
    // If only NO fills
    const partialFillNoOnlyLoss = yesAsk * tradeSize

    const isWorthIt = netProfit > 0

    return {
      buyCost,
      theoreticalSpread,
      feeCost,
      netProfit,
      netProfitDollar,
      partialFillYesOnlyLoss,
      partialFillNoOnlyLoss,
      isWorthIt,
    }
  }, [yesAsk, noAsk, feeRate, tradeSize])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <p className="section-label">
        <span className="text-lab-red">//</span> TOOL
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">YES/NO 套利检查器</h1>
      <p className="text-lab-gray mb-8">
        帮助你理解&quot;YES + NO &lt; 1&quot;为什么不等于无风险套利。输入价格，看看手续费和 partial fill 如何吃掉你的利润。
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Input Panel */}
        <div className="bg-lab-dark border border-lab-border rounded-lg p-6">
          <h2 className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-6">
            输入参数
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-lab-gray text-sm mb-2">
                YES ask 价格
              </label>
              <input
                type="number"
                value={yesAsk}
                onChange={(e) => setYesAsk(parseFloat(e.target.value) || 0)}
                step={0.01}
                min={0}
                max={1}
                className="w-full bg-lab-black border border-lab-border rounded px-4 py-3 text-white font-mono text-lg focus:border-lab-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-lab-gray text-sm mb-2">
                NO ask 价格
              </label>
              <input
                type="number"
                value={noAsk}
                onChange={(e) => setNoAsk(parseFloat(e.target.value) || 0)}
                step={0.01}
                min={0}
                max={1}
                className="w-full bg-lab-black border border-lab-border rounded px-4 py-3 text-white font-mono text-lg focus:border-lab-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-lab-gray text-sm mb-2">
                手续费率 (%)
              </label>
              <input
                type="number"
                value={feeRate}
                onChange={(e) => setFeeRate(parseFloat(e.target.value) || 0)}
                step={0.1}
                min={0}
                max={100}
                className="w-full bg-lab-black border border-lab-border rounded px-4 py-3 text-white font-mono text-lg focus:border-lab-red focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-lab-gray text-sm mb-2">
                目标交易规模 (USDC)
              </label>
              <input
                type="number"
                value={tradeSize}
                onChange={(e) => setTradeSize(parseFloat(e.target.value) || 0)}
                step={10}
                min={0}
                className="w-full bg-lab-black border border-lab-border rounded px-4 py-3 text-white font-mono text-lg focus:border-lab-red focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-4">
          {/* Buy Cost */}
          <div className="bg-lab-dark border border-lab-border rounded-lg p-5">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              买入成本 (YES ask + NO ask)
            </p>
            <p className="text-white font-mono text-2xl font-bold">
              {results.buyCost.toFixed(4)}
            </p>
          </div>

          {/* Theoretical Spread */}
          <div className="bg-lab-dark border border-lab-border rounded-lg p-5">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              理论价差 (1 - 买入成本)
            </p>
            <p className={`font-mono text-2xl font-bold ${results.theoreticalSpread > 0 ? 'text-lab-green' : 'text-lab-red'}`}>
              {(results.theoreticalSpread * 100).toFixed(2)}%
            </p>
            <p className="text-lab-muted text-xs mt-1 font-mono">
              ${((results.theoreticalSpread) * tradeSize).toFixed(2)}
            </p>
          </div>

          {/* Fee Cost */}
          <div className="bg-lab-dark border border-lab-border rounded-lg p-5">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              手续费成本
            </p>
            <p className="text-lab-red font-mono text-2xl font-bold">
              -{(results.feeCost * 100).toFixed(2)}%
            </p>
            <p className="text-lab-muted text-xs mt-1 font-mono">
              -${(results.feeCost * tradeSize).toFixed(2)}
            </p>
          </div>

          {/* Net Profit */}
          <div className={`border rounded-lg p-5 ${results.isWorthIt ? 'bg-lab-green/5 border-lab-green/30' : 'bg-lab-red/5 border-lab-red/30'}`}>
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              净利润 (价差 - 手续费)
            </p>
            <p className={`font-mono text-3xl font-bold ${results.isWorthIt ? 'text-lab-green' : 'text-lab-red'}`}>
              {results.netProfitDollar >= 0 ? '+' : ''}{results.netProfitDollar.toFixed(2)} USDC
            </p>
            <p className={`text-sm mt-1 font-mono ${results.isWorthIt ? 'text-lab-green/70' : 'text-lab-red/70'}`}>
              {results.netProfitDollar >= 0 ? '+' : ''}{(results.netProfit * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      {/* Partial Fill Risk */}
      <div className="bg-lab-dark border border-lab-red/30 rounded-lg p-6 mb-8">
        <h2 className="text-lab-red font-mono text-xs uppercase tracking-wider mb-4">
          ⚠️ PARTIAL FILL 风险
        </h2>
        <p className="text-lab-gray text-sm mb-4">
          如果只成交一边，你的&quot;无风险套利&quot;就变成了单边赌博。以下是最大亏损：
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-lab-border rounded p-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              只成交 YES 时最大亏损
            </p>
            <p className="text-lab-red font-mono text-xl font-bold">
              -${results.partialFillYesOnlyLoss.toFixed(2)}
            </p>
            <p className="text-lab-muted text-xs mt-1">
              如果事件结算 NO，你损失全部 NO 侧投入
            </p>
          </div>
          <div className="border border-lab-border rounded p-4">
            <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-1">
              只成交 NO 时最大亏损
            </p>
            <p className="text-lab-red font-mono text-xl font-bold">
              -${results.partialFillNoOnlyLoss.toFixed(2)}
            </p>
            <p className="text-lab-muted text-xs mt-1">
              如果事件结算 YES，你损失全部 YES 侧投入
            </p>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className={`border rounded-lg p-6 mb-8 ${results.isWorthIt ? 'bg-lab-green/5 border-lab-green/30' : 'bg-lab-red/5 border-lab-red/30'}`}>
        <div className="flex items-start gap-4">
          <span className={`text-3xl ${results.isWorthIt ? 'text-lab-green' : 'text-lab-red'}`}>
            {results.isWorthIt ? '✓' : '✗'}
          </span>
          <div>
            <h3 className={`text-lg font-bold ${results.isWorthIt ? 'text-lab-green' : 'text-lab-red'}`}>
              {results.isWorthIt ? '理论上值得执行' : '不值得执行'}
            </h3>
            <p className="text-lab-gray text-sm mt-1">
              {results.isWorthIt
                ? `净利润为正（+${results.netProfitDollar.toFixed(2)} USDC），但请务必考虑 partial fill 风险。以上计算假设双边同时完整成交，实际执行中很难做到。`
                : `净利润为负（${results.netProfitDollar.toFixed(2)} USDC），手续费已经吃掉了全部价差。即使双边同时完整成交，你也会亏钱。`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border border-lab-border rounded-lg p-6">
        <p className="text-lab-muted font-mono text-xs uppercase tracking-wider mb-2">
          ⚠️ 免责声明
        </p>
        <p className="text-lab-gray text-sm">
          本工具仅用于教育目的，帮助理解预测市场中 YES/NO 套利的真实成本。计算结果基于简化模型，不考虑滑点、延迟、流动性不足等实际执行因素。实际交易结果可能远差于计算结果。不构成投资建议。
        </p>
      </div>

      {/* Link to report */}
      <div className="mt-8 text-center">
        <a
          href="/replications/bal-001"
          className="inline-block border border-lab-border text-lab-gray hover:border-lab-red hover:text-lab-red px-6 py-2 rounded font-mono text-sm uppercase tracking-wider transition-colors"
        >
          阅读完整复刻报告 BAL-001 →
        </a>
      </div>
    </div>
  )
}
