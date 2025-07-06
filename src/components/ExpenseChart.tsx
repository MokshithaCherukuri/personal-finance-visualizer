"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the type for a transaction
type Transaction = {
  amount: number;
  date: string;
  description: string;
};

// Define the props type
interface ExpenseChartProps {
  transactions: Transaction[];
}

export function ExpenseChart({ transactions }: ExpenseChartProps) {
  const data = transactions.reduce<{ name: string; total: number }[]>((acc, txn) => {
    const month = new Date(txn.date).toLocaleString("default", { month: "short" });
    const found = acc.find((d) => d.name === month);
    if (found) {
      found.total += txn.amount;
    } else {
      acc.push({ name: month, total: txn.amount });
    }
    return acc;
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
