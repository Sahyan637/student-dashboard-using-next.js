import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className={`rounded-lg p-3 ${color}`}>
          <Icon size={21} />
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold">{value}</h2>
      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </div>
  );
}
