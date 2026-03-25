import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-md hover:border-gray-200">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default StatCard;