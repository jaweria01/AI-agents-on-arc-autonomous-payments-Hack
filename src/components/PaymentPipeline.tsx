

/**
 * PaymentPipeline
 * ----------------
 * Displays the sequence of actions taken by agents
 * during the payment workflow.
 */
import { AgentLog } from '@/types';

const PaymentPipeline = ({ logs }: { logs: AgentLog[] }) => {
  return (
    <div className="card">
      <h2>Agent Workflow Execution</h2>

      {logs.length === 0 ? (
        <p>No agent activity yet.</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.agent}</strong>: {log.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentPipeline;

