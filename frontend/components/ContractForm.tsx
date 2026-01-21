"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Blueprint } from "@/lib/types";

export default function ContractForm() {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [name, setName] = useState("");
  const [blueprintId, setBlueprintId] = useState("");

  useEffect(() => {
    api.get("/blueprints").then(res => setBlueprints(res.data));
  }, []);

  const submit = async () => {
    await api.post("/contracts", {
      name,
      blueprintId,
      fields: []
    });
    alert("Contract created");
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Create Contract</h2>

      <input
        className="border p-2 w-full"
        placeholder="Contract Name"
        onChange={e => setName(e.target.value)}
      />

      <select
        className="border p-2 w-full"
        onChange={e => setBlueprintId(e.target.value)}
      >
        <option>Select Blueprint</option>
        {blueprints.map(b => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>

      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Contract
      </button>
    </div>
  );
}
