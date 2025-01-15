import { OpenClosedChart } from './components/OpenClosedChart'
import { SLATable } from './components/SLATable'
import { TicketPerAgentTable } from './components/TicketPerAgentTable'
import { TicketSummary } from './components/TicketSummary'

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-[4]">
          <SLATable
            data={[
              { status: 'attend', quantity: 65 },
              { status: 'pending', quantity: 40 },
              { status: 'inProgress', quantity: 23 },
            ]}
          />
        </div>
        <div className="flex-[5]">
          <TicketPerAgentTable
            data={[
              {
                agentName: 'André Woltz',
                attend: 3,
                pending: 4,
                inProgress: 4,
              },
              {
                agentName: 'Pedro Luiz',
                attend: 11,
                pending: 9,
                inProgress: 2,
              },
              {
                agentName: 'Ricardo Gomes',
                attend: 8,
                pending: 1,
                inProgress: 4,
              },
              {
                agentName: 'Rodrigo Berd',
                attend: 10,
                pending: 1,
                inProgress: 2,
              },
              {
                agentName: 'Maria Helena',
                attend: 13,
                pending: 4,
                inProgress: 3,
              },
              {
                agentName: 'Jackson Rodriguez',
                attend: 7,
                pending: 11,
                inProgress: 1,
              },
              {
                agentName: 'Luiza Alves',
                attend: 2,
                pending: 1,
                inProgress: 2,
              },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-[5]">
          <TicketSummary />
        </div>
        <div className="flex-[4]">
          <OpenClosedChart />
        </div>
      </div>
    </div>
  )
}

export default HomePage
