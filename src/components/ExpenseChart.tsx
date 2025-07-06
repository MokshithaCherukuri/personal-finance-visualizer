"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ExpenseChart({ transactions }) {
  const data = transactions.reduce((acc, txn) => {
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
