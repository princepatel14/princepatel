import React from 'react';
import { Command, Heart, Coffee, Github, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export const Welcome = () => {
  const recentProjects = [
    {
      name: "React Snippets Pro",
      description: "VS Code extension for React developers",
      url: "#"
    },
    {
      name: "VS Code Theme Creator",
      description: "Create and customize VS Code themes",
      url: "#"
    }
  ];

  const commands = [
    { key: '⌘ P', description: 'Search files' },
    { key: '⌘ ⇧ P', description: 'Show all commands' },
    { key: '⌘ K ⌘ S', description: 'Keyboard shortcuts' }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#cccccc] p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            <Typewriter
              options={{
                strings: ['Welcome to My Portfolio', 'Built with React & TypeScript', 'Inspired by VS Code'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80
              }}
            />
          </h1>
          <p className="text-lg text-[#8c8c8c]">
            Senior Software Engineer • Open Source Enthusiast • UI/UX Developer
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#252526] rounded-lg p-6 border border-[#333333]">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Command className="mr-2" /> Quick Start
            </h2>
            <div className="space-y-3">
              {commands.map((cmd, index) => (
                <div key={index} className="flex items-center justify-between">
                  <code className="bg-[#2d2d2d] px-2 py-1 rounded text-[#007acc]">
                    {cmd.key}
                  </code>
                  <span>{cmd.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg p-6 border border-[#333333]">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Heart className="mr-2" /> Recent Projects
            </h2>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white">{project.name}</h3>
                    <p className="text-sm text-[#8c8c8c]">{project.description}</p>
                  </div>
                  <a
                    href={project.url}
                    className="text-[#007acc] hover:text-[#1e8ed7] transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#252526] rounded-lg p-4 text-center border border-[#333333]">
            <div className="text-2xl font-bold text-[#007acc]">5+</div>
            <div className="text-sm text-[#8c8c8c]">Years Experience</div>
          </div>
          <div className="bg-[#252526] rounded-lg p-4 text-center border border-[#333333]">
            <div className="text-2xl font-bold text-[#007acc]">50+</div>
            <div className="text-sm text-[#8c8c8c]">Projects Completed</div>
          </div>
          <div className="bg-[#252526] rounded-lg p-4 text-center border border-[#333333]">
            <div className="text-2xl font-bold text-[#007acc]">100+</div>
            <div className="text-sm text-[#8c8c8c]">Happy Clients</div>
          </div>
          <div className="bg-[#252526] rounded-lg p-4 text-center border border-[#333333]">
            <div className="text-2xl font-bold text-[#007acc]">1000+</div>
            <div className="text-sm text-[#8c8c8c]">Commits</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[#8c8c8c] space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Coffee size={18} />
            <span>Built with React, TypeScript, and lots of coffee</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Github size={18} />
            <a
              href="https://github.com/yourusername"
              className="text-[#007acc] hover:text-[#1e8ed7] transition-colors"
            >
              View source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};