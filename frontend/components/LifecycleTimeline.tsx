import { ContractStatus } from "@/lib/types";

const steps: ContractStatus[] = [
  "CREATED",
  "APPROVED",
  "SENT",
  "SIGNED",
  "LOCKED"
];

export default function LifecycleTimeline({
  status
}: {
  status: ContractStatus;
}) {
  return (
    <div className="flex gap-4 mt-6">
      {steps.map(step => (
        <div
          key={step}
          className={`px-3 py-1 rounded-full text-sm ${
            step === status
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
