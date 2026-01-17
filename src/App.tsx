import { useState } from 'react';
import PaymentForm from '@/components/PaymentForm';
import PaymentPipeline from '@/components/PaymentPipeline';
import PaymentHistory from '@/components/PaymentHistory';
import SystemOverview from '@/components/SystemOverview';
import { runPaymentWorkflow } from '@/services/agentOrchestrator';
import { AgentLog, Payment } from '@/types';

const App = () => {
  const [logs, setLogs] = useState<AgentLog[]>([]);
  const [paymentHistory, setPaymentHistory] = useState<Payment[]>([]);
  const [currentPayment, setCurrentPayment] = useState<Payment | null>(null);

//
  const handleStartPayment = async (
  amount: number,
  sender: string,
  receiver: string,
  city: string
) => {
  const payment: Payment = {
    id: crypto.randomUUID(),
    amount,
    sender,
    receiver,
    city,
    status: 'PENDING',
    createdAt: new Date(),
  };
    //
  setCurrentPayment(payment);
  setLogs([]);

  const result = await runPaymentWorkflow(payment);

  setCurrentPayment(result.payment);
  setLogs(result.logs);

  // 🔑 ALWAYS add to history
  setPaymentHistory((prev) => [result.payment, ...prev]);
};
    //


  return (
    <div className="app-container">
      <div className="app-title">
        <h1>Autonomous AI Payment Ecosystem</h1>
        <p>Agent-based, rule-driven payment automation (simulated)</p>
      </div>

      <PaymentForm onSubmit={handleStartPayment} />

      {currentPayment && (
        <div className="card">
          <h2>Current Payment Status</h2>
          <span className={`status ${currentPayment.status}`}>
            {currentPayment.status}
          </span>
        </div>
      )}

      <PaymentPipeline logs={logs} />

      <PaymentHistory payments={paymentHistory} />
      <SystemOverview />
    </div>
  );
};

export default App;
