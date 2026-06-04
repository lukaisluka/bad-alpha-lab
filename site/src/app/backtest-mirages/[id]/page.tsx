import MIR001 from './mir-001'
import MIR002 from './mir-002'
import MIR003 from './mir-003'
import MIR004 from './mir-004'
import MIR005 from './mir-005'

const mirages = [
  { id: 'mir-001', title: '未来函数', component: MIR001 },
  { id: 'mir-002', title: '过拟合', component: MIR002 },
  { id: 'mir-003', title: '幸存者偏差', component: MIR003 },
  { id: 'mir-004', title: '成本忽略', component: MIR004 },
  { id: 'mir-005', title: '曲线拟合', component: MIR005 },
]

export function generateStaticParams() {
  return mirages.map((m) => ({ id: m.id }))
}

export default function MiragePage({ params }: { params: { id: string } }) {
  const mirage = mirages.find((m) => m.id === params.id)
  if (!mirage) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-lab-gray">诈骗现场未找到</p>
      </div>
    )
  }
  const Component = mirage.component
  return <Component />
}
