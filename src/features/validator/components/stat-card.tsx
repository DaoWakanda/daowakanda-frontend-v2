import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: React.ReactNode;
  icon: LucideIcon;
}

const StatCard = ({ title, value, icon: Icon }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#C6C5C5]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <Icon className="w-5 h-5 text-gray-300" />
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default StatCard;
