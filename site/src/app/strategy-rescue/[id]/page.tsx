import RES001 from './res-001'
import RES002 from './res-002'
import RES003 from './res-003'
import RES004 from './res-004'
import RES005 from './res-005'

const entries = [
  { id: 'res-001', title: 'YES/NO 套利', component: RES001 },
  { id: 'res-002', title: '做市商策略', component: RES002 },
  { id: 'res-003', title: '跟单策略', component: RES003 },
  { id: 'res-004', title: '回测优化策略', component: RES004 },
  { id: 'res-005', title: '策略生命周期管理', component: RES005 },
]

export function generateStaticParams() {
  return entries.map((e) => ({ id: e.id }))
}

export default function RescueEntryPage({ params }: { params: { id: string } }) {
  const entry = entries.find((e) => e.id === params.id)
  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-lab-gray">诊断报告未找到</p>
      </div>
    )
  }
  const Component = entry.component
  return <Component />
}
