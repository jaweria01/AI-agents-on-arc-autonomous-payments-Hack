import { AgentLog, AgentType } from '@/types';

/**
 * MonitorAgent
 * ----------------
 * Records and returns structured logs for agent actions.
 * This provides visibility into the agent-based workflow.
 */
export const createAgentLog = (
  agent: AgentType,
  message: string
): AgentLog => {
  return {
    agent,
    message,
    timestamp: new Date(),
  };
};
