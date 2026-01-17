// Represents the lifecycle state of a payment
export type PaymentStatus =
  | 'PENDING'
  | 'VERIFIED'
  | 'PAID'
  | 'FAILED';

// Core payment object (simulated USDC payment)
export interface Payment {
  id: string;
  amount: number;          // simulated USDC amount
  condition: string;       // condition to be verified
  status: PaymentStatus;
  createdAt: Date;
}

// Agents involved in the workflow
export type AgentType =
  | 'VerifierAgent'
  | 'PaymentAgent'
  | 'MonitorAgent';

// Log entry created by agents during execution
export interface AgentLog {
  agent: AgentType;
  message: string;
  timestamp: Date;
}

// Result returned by the orchestrator
export interface WorkflowResult {
  payment: Payment;
  logs: AgentLog[];
}
