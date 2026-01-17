import { Payment, AgentLog } from '@/types';
import { verifyPayment } from '@/agents/verifierAgent';
import { executePayment } from '@/agents/paymentAgent';
import { createAgentLog } from '@/agents/monitorAgent';

interface WorkflowResult {
  payment: Payment;
  logs: AgentLog[];
}

/**
 * Orchestrates the agent-based payment workflow
 */
export const runPaymentWorkflow = async (
  payment: Payment
): Promise<WorkflowResult> => {
  const logs: AgentLog[] = [];

  // Verifier Agent
  const isValid = await verifyPayment(payment);
  logs.push(
    createAgentLog(
      'VerifierAgent',
      isValid ? 'Payment data verified successfully.' : 'Payment verification failed.'
    )
  );

  if (!isValid) {
    const failedPayment: Payment = {
      ...payment,
      status: 'FAILED',
    };

    logs.push(
      createAgentLog('MonitorAgent', 'Workflow terminated due to verification failure.')
    );

    return { payment: failedPayment, logs };
  }

  // Payment Agent
  const paidPayment = await executePayment(payment);
  logs.push(
    createAgentLog('PaymentAgent', 'Payment executed successfully.')
  );

  logs.push(
    createAgentLog('MonitorAgent', 'Workflow completed successfully.')
  );

  return {
    payment: paidPayment,
    logs,
  };
};
