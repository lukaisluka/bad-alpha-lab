import ATL001 from './atl-001'
import ATL002 from './atl-002'
import ATL003 from './atl-003'
import ATL004 from './atl-004'
import ATL005 from './atl-005'

const entries = [
  { id: 'atl-001', title: '套利策略的 Alpha 消亡路径', component: ATL001 },
  { id: 'atl-002', title: '做市商策略的 Alpha 消亡路径', component: ATL002 },
  { id: 'atl-003', title: '跟单策略的 Alpha 消亡路径', component: ATL003 },
  { id: 'atl-004', title: '回测到实盘的 Alpha 消亡路径', component: ATL004 },
  { id: 'atl-005', title: '策略生命周期 Alpha 曲线', component: ATL005 },
]

export function generateStaticParams() {
  return entries.map((e) => ({ id: e.id }))
}

export default function AtlasEntryPage({ params }: { params: { id: string } }) {
  const entry = entries.find((e) => e.id === params.id)
  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-lab-gray">图鉴条目未找到</p>
      </div>
    )
  }
  const Component = entry.component
  return <Component />
}
