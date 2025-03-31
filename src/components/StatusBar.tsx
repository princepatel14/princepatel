import React from 'react';
import { GitBranch, Zap } from 'lucide-react';

export const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-white text-xs">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <GitBranch size={14} className="mr-1" /> main
        </span>
        <span className="flex items-center">
          <Zap size={14} className="mr-1" /> Built with React
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Portfolio v1.0</span>
        <span>Last Updated: 2024</span>
      </div>
    </div>
  );
};