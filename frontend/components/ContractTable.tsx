"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Contract } from "@/lib/types";

export default function ContractTable() {
  const [contracts, setContracts] = useState<Contract[]>([]);

  useEffect(() => {
    api.get("/contracts").then(res => setContracts(res.data));
  }, []);

  return (
    <table className="w-full border rounded">
      <thead className="bg-gray-100">
        <tr>
          <th>Name</th>
          <th>Blueprint</th>
          <th>Status</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map(c => (
          <tr key={c.id} className="border-t">
            <td>{c.name}</td>
            <td>{c.blueprint.name}</td>
            <td className="font-semibold">{c.status}</td>
            <td>{new Date(c.createdAt).toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
