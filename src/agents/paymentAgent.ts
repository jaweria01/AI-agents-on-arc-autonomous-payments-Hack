

//
import { Payment } from '@/types';

/**
 * PaymentAgent
 * ----------------
 * Simulates payment execution.
 */
export const executePayment = async (payment: Payment): Promise<Payment> => {
  return {
    ...payment,
    status: 'PAID',
  };
};

