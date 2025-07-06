"use client";

import { useState } from "react";
import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionList";
import { ExpenseChart } from "./ExpenseChart";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (txn) => {
    setTransactions([...transactions, txn]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Personal Finance Tracker</h1>
      <TransactionForm onAdd={handleAddTransaction} />
      <ExpenseChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
