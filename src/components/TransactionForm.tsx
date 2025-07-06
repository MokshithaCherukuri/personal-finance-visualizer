"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Transaction = {
  amount: number;
  date: string;
  description: string;
};

interface TransactionFormProps {
  onAdd: (txn: Transaction) => void;
}

export function TransactionForm({ onAdd }: TransactionFormProps) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !date || !description) return;
    onAdd({
      amount: parseFloat(amount),
      date,
      description,
    });
    setAmount("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Transaction</Button>
    </form>
  );
}
