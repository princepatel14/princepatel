import type { LucideIcon } from 'lucide-react';

export type Theme = 'dark' | 'light' | 'monokai' | 'dracula' | 'night-owl';
export type Font = 'fira-code' | 'consolas' | 'jetbrains-mono';


export interface ProjectContent {
  icon: LucideIcon;
  title: string;
  description: string;
  version: string;
  publisher: string;
  stats: {
    installs: string;
    rating: string;
    ratingCount: string;
    lastUpdated: string;
  };
  repository: string;
  technologies: string[];
  features: string[];
}

interface SocialLink {
  icon: LucideIcon;
  name: string;
  username: string;
  url: string;
}

// interface SkillsContent {
//   Languages?: string[];
//   Libraries?: string[];
//   Frameworks?: string[];
//   Database?: string[];
// }

export interface Tab {
  id: string;
  title: string;
  // content: string | ProjectContent | SocialLink[] | SkillsContent;
  content: string | ProjectContent | SocialLink[] ;
  icon?: string;
  type: 'markdown' | 'code' | 'project' | 'social';
}

export interface AppState {
  activeTab: string | null;
  tabs: Tab[];
  sidebarOpen: boolean;
  activeSidebarItem: string;
  theme: Theme;
  font: Font;
  isEditing: boolean;
  setSidebarOpen: (open: boolean) => void;
  setActiveTab: (id: string) => void;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setTheme: (theme: Theme) => void;
  setFont: (font: Font) => void;
  setActiveSidebarItem: (item: string) => void;
  setIsEditing: (isEditing: boolean) => void;
  updateTabContent: (id: string, content: string) => void;
}