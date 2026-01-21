import ContractTable from "@/components/ContractTable";

export default function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Contract Dashboard
      </h1>
      <ContractTable />
    </main>
  );
}
