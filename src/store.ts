import { create } from 'zustand';
import { AppState, Tab, Theme, Font } from './types';

export const useStore = create<AppState>((set) => ({
  activeTab: 'about',
  tabs: [
    {
      id: 'about',
      title: 'about.tsx',
      content: '',
      type: 'markdown'
    }
  ],
  sidebarOpen: true,
  activeSidebarItem: 'about',
  theme: 'dark',
  font: 'fira-code',
  isEditing: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setActiveTab: (id) => set({ activeTab: id }),
  addTab: (tab) => set((state) => {
    if (state.tabs.some(t => t.id === tab.id)) {
      return state;
    }
    return { tabs: [...state.tabs, tab] };
  }),
  removeTab: (id) => set((state) => {
    const newTabs = state.tabs.filter((t) => t.id !== id);
    // If we're removing the active tab, set the active tab to the last remaining tab
    if (state.activeTab === id && newTabs.length > 0) {
      return { 
        tabs: newTabs,
        activeTab: newTabs[newTabs.length - 1].id
      };
    }
    return { tabs: newTabs };
  }),
  setTheme: (theme) => set({ theme }),
  setFont: (font) => set({ font }),
  setActiveSidebarItem: (item) => set({ activeSidebarItem: item }),
  setIsEditing: (isEditing) => set({ isEditing }),
  updateTabContent: (id, content) => set((state) => ({
    tabs: state.tabs.map(tab => 
      tab.id === id ? { ...tab, content } : tab
    )
  })),
}));