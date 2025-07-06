"use client";

type Transaction = {
  amount: number;
  date: string;
  description: string;
};

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <ul className="space-y-1">
        {transactions.map((txn, idx) => (
          <li key={idx} className="border rounded p-2 shadow">
            {txn.date} - ₹{txn.amount} - {txn.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
