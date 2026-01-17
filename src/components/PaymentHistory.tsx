import { Payment } from '@/types';

const PaymentHistory = ({ payments }: { payments: Payment[] }) => {
  return (
    <div className="card">
      <h2>Payment History</h2>

      {payments.length === 0 ? (
        <p>No payments processed yet.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id} style={{ marginBottom: '10px' }}>
              <strong>{payment.amount} USDC</strong>
              <br />
              From <em>{payment.sender}</em> to <em>{payment.receiver}</em>
              <br />
              City: {payment.city}
              <br />
              <span className={`status ${payment.status}`}>
                {payment.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
