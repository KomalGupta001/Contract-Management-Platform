"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function BlueprintForm() {
  const [name, setName] = useState("");

  const submit = async () => {
    await api.post("/blueprints", {
      name,
      fields: []
    });
    alert("Blueprint created");
  };

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Create Blueprint</h2>
      <input
        className="border p-2 w-full"
        placeholder="Blueprint Name"
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
