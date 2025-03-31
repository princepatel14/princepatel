import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { StatusBar } from './components/StatusBar';
import { Notification } from './components/Notification';
import { useStore } from './store';

function App() {
  const { theme, font } = useStore();
  const [showNotification, setShowNotification] = useState(true);
  
  return (
    <div className={`h-screen flex flex-col ${theme} ${font}`}>
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <Editor />
      </div>
      <StatusBar />
      {showNotification && (
        <Notification onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
}

export default App;