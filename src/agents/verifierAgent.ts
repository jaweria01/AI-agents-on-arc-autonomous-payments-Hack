import { Payment } from '@/types';

/**
 * VerifierAgent
 * ----------------
 * Validates payment data using rule-driven logic.
 */
export const verifyPayment = async (payment: Payment): Promise<boolean> => {
  console.log('[VerifierAgent] Verifying payment data');

  // Rule-based verification
  if (payment.amount <= 0) return false;
  if (payment.amount > 10000) return false; // example threshold
  if (!payment.sender.trim()) return false;
  if (!payment.receiver.trim()) return false;
  if (!payment.city.trim()) return false;

  return true;
};
