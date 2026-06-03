# 策略档案库数据结构

> 用于维护所有策略实验的结构化数据

## 字段定义

| 字段 | 类型 | 说明 |
|------|------|------|
| experiment_id | string | BAL-001, BAL-002... |
| strategy_name | string | 策略名称 |
| strategy_category | enum | YES/NO套利 / 价格锚定 / 大户跟单 / 低流动性做市 / AI新闻交易 / 事件驱动 / 临近结算 / 长尾市场 / favorite-longshot / 跨平台价差 / 网格 / 马丁 / 均线 / 突破 / 其他 |
| source_type | enum | 推文 / 博客 / 论文 / 社区共识 / 自总结 / 书籍 |
| source_url | string | 原始来源链接（如有） |
| platform | string | Polymarket / Kalshi / predict.fun / 其他 |
| market_type | string | 预测市场 / 现货 / 合约 / 其他 |
| date_start | date | 实验开始日期 |
| date_end | date | 实验结束日期 |
| capital_used | number | 实验资金（USDC） |
| max_loss_limit | number | 最大可接受亏损 |
| number_of_signals | number | 信号出现次数 |
| number_of_orders | number | 下单次数 |
| number_of_fills | number | 成交次数 |
| maker_fills | number | maker 成交次数 |
| taker_fills | number | taker 成交次数 |
| partial_fills | number | partial fill 次数 |
| gross_pnl | number | 毛收益 |
| net_pnl | number | 净收益 |
| fees | number | 手续费 |
| slippage | number | 滑点成本 |
| max_drawdown | number | 最大回撤 |
| largest_loss | number | 最大单笔亏损 |
| win_rate | number | 胜率（0-1） |
| average_holding_time | string | 平均持仓时间 |
| main_failure_mode | string | 主要失败模式 |
| secondary_failure_mode | string | 次要失败模式 |
| failure_tags | array | 失败标签（见标签体系） |
| replication_score | number | 复刻完整度（0-1） |
| enhancement_score | number | 增强合理度（0-1） |
| negative_alpha_rating | number | 负Alpha指数（1-5） |
| backtest_deceptiveness | enum | 高 / 中 / 低 |
| execution_difficulty | enum | 高 / 中 / 低 |
| final_verdict | enum | 完全死亡 / 半死不活 / 不能裸用 / 可改造成模块 / 小样本存活 |
| reusable_module | string | 可复用模块（如有） |
| article_url | string | 文章链接 |
| status | enum | 计划中 / 进行中 / 已完成 / 已暂停 |

## 失败标签体系

| 标签 | 说明 |
|------|------|
| #FeeDrag | 手续费侵蚀利润 |
| #Slippage | 滑点导致成交价格劣化 |
| #PartialFill | 部分成交暴露单边风险 |
| #LatencyRisk | 延迟导致信号失效 |
| #LiquidityTrap | 流动性不足导致无法进出 |
| #AdverseSelection | 被对手盘信息优势打败 |
| #JumpRisk | 新闻/事件冲击导致大幅亏损 |
| #ResolutionRisk | 结算规则模糊导致损失 |
| #BacktestBias | 回测偏差导致假阳性 |
| #Overfitting | 参数过拟合 |
| #SelectionBias | 市场选择偏差 |
| #InventoryRisk | 库存风险 |
| #MarketStructureMismatch | 市场结构与策略假设不匹配 |
| #CapitalLockup | 资金占用导致机会成本 |
| #ExecutionRisk | 执行层面的系统性风险 |
| #DataDelay | 数据延迟导致决策滞后 |
| #SignalDecay | 信号公开后迅速衰减 |

## 示例数据

```json
{
  "experiment_id": "BAL-001",
  "strategy_name": "YES/NO 补数套利",
  "strategy_category": "YES/NO套利",
  "source_type": "社区共识",
  "source_url": null,
  "platform": "Polymarket",
  "market_type": "预测市场",
  "date_start": "2026-06-15",
  "date_end": null,
  "capital_used": 500,
  "max_loss_limit": 50,
  "number_of_signals": 0,
  "number_of_orders": 0,
  "number_of_fills": 0,
  "maker_fills": 0,
  "taker_fills": 0,
  "partial_fills": 0,
  "gross_pnl": 0,
  "net_pnl": 0,
  "fees": 0,
  "slippage": 0,
  "max_drawdown": 0,
  "largest_loss": 0,
  "win_rate": 0,
  "average_holding_time": null,
  "main_failure_mode": "partial fill 暴露单边风险",
  "secondary_failure_mode": "手续费吃掉价差",
  "failure_tags": ["#PartialFill", "#FeeDrag", "#ExecutionRisk"],
  "replication_score": 0.85,
  "enhancement_score": 0.9,
  "negative_alpha_rating": 4,
  "backtest_deceptiveness": "高",
  "execution_difficulty": "高",
  "final_verdict": "不能裸用",
  "reusable_module": "consistency checker",
  "article_url": null,
  "status": "计划中"
}
```
