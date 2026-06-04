import BAL001 from './bal-001'
import BAL002 from './bal-002'
import BAL003 from './bal-003'

const replications = [
  { slug: 'bal-001', title: 'YES/NO 补数套利', component: BAL001 },
  { slug: 'bal-002', title: 'Polymarket 价格锚定', component: BAL002 },
  { slug: 'bal-003', title: '做市商策略：spread capture 的幻觉', component: BAL003 },
]

export function generateStaticParams() {
  return replications.map((r) => ({ slug: r.slug }))
}

export default function ReplicationPage({ params }: { params: { slug: string } }) {
  const replication = replications.find((r) => r.slug === params.slug)
  if (!replication) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-lab-gray">报告未找到</p>
      </div>
    )
  }
  const Component = replication.component
  return <Component />
}
