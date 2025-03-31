import React from 'react';
import { X, FileText, Code2 } from 'lucide-react';
import { useStore } from '../store';

export const Navbar: React.FC = () => {
  const { tabs, activeTab, setActiveTab, removeTab } = useStore();

  const getFileIcon = (tab: any) => {
    if (tab.id === 'about') {
      return <FileText size={16} className="text-[#6997d5]" />;
    }
    return <Code2 size={16} className="text-[#e06c75]" />;
  };

  return (
    <div className="h-9 bg-[#252526] flex items-center border-b border-[#1e1e1e] overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`group h-full flex items-center px-3 border-r border-[#1e1e1e] min-w-[150px] max-w-[200px] cursor-pointer ${
            activeTab === tab.id
              ? 'bg-[#1e1e1e] text-white border-b-2 border-b-[#007acc]'
              : 'bg-[#2d2d2d] text-[#969696] hover:bg-[#2a2a2a]'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <div className="flex items-center space-x-2 w-full">
            <div className="flex-shrink-0">
              {getFileIcon(tab)}
            </div>
            <span className="truncate text-sm flex-1">{tab.title}</span>
            {tab.id !== 'about' && (
              <button
                className={`opacity-0 group-hover:opacity-100 hover:bg-[#333333] rounded p-0.5 ${
                  activeTab === tab.id ? 'text-white' : 'text-[#969696]'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.id);
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};