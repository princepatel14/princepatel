import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface NotificationProps {
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    // Replace with your actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-[#252526] border border-[#454545] rounded-lg shadow-lg transition-opacity duration-500 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-start p-4">
        <div className="flex-1 mr-4">
          <h3 className="text-[#cccccc] font-medium">Welcome to My Portfolio!</h3>
          <p className="text-[#8c8c8c] text-sm mt-1">
            Would you like to download my resume?
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDownload}
            className="px-3 py-1 bg-[#007acc] text-white rounded-sm hover:bg-[#1e8ed7] transition-colors flex items-center text-sm"
          >
            <Download size={14} className="mr-1" />
            Download
          </button>
          <button
            onClick={onClose}
            className="text-[#8c8c8c] hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};