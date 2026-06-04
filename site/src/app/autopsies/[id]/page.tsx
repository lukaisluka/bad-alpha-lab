import AUT001 from './aut-001'
import AUT002 from './aut-002'
import AUT003 from './aut-003'
import AUT004 from './aut-004'
import AUT005 from './aut-005'

const autopsies = [
  { id: 'aut-001', title: 'Partial Fill 综合征', component: AUT001 },
  { id: 'aut-002', title: '手续费黑洞', component: AUT002 },
  { id: 'aut-003', title: 'Adverse Selection 陷阱', component: AUT003 },
  { id: 'aut-004', title: '幸存者偏差幻觉', component: AUT004 },
  { id: 'aut-005', title: '延迟侵蚀', component: AUT005 },
]

export function generateStaticParams() {
  return autopsies.map((a) => ({ id: a.id }))
}

export default function AutopsyPage({ params }: { params: { id: string } }) {
  const autopsy = autopsies.find((a) => a.id === params.id)
  if (!autopsy) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-lab-gray">验尸报告未找到</p>
      </div>
    )
  }
  const Component = autopsy.component
  return <Component />
}
