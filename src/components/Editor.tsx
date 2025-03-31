import React from "react";
import { useStore } from "../store";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { Star } from "lucide-react";
import { ProjectContent } from "../types";

export const Editor: React.FC = () => {
  const { tabs, activeTab, sidebarOpen } = useStore();

  const activeTabData = tabs.find((t) => t.id === activeTab);

  const renderContent = () => {
    if (!activeTabData || activeTabData.id === "about") {
      return <About />;
    }

    if (activeTabData.type === "project") {
      const project = activeTabData.content as ProjectContent;
      return (
        <div className="p-6">
          <div className="flex items-start space-x-6">
            {typeof project.icon === "string" ? (
              <img
                src={project.icon}
                alt="Project Icon"
                className="w-24 h-24"
              />
            ) : (
              <project.icon className="w-24 h-24" />
            )}
            {/* <img src={project.icon} alt="" className="w-24 h-24" /> */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-medium text-white">
                    {project.title}
                  </h1>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="text-[#8c8c8c]">{project.publisher}</span>
                    <a
                      href={project.repository}
                      className="text-[#007acc] hover:underline flex items-center"
                    >
                      {/* <ExternalLink size={14} className="mr-1" />
                      Repository */}
                    </a>
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={
                            star <= Number(project.stats.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                    {/* <span className="text-[#8c8c8c] text-sm">
                      ({project.stats.ratingCount} ratings)
                    </span>
                    <span className="text-[#8c8c8c] text-sm">•</span>
                    <span className="text-[#8c8c8c] text-sm">
                      {project.stats.installs} installs
                    </span> */}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <h2 className="text-lg font-medium text-white mb-3">
                    Description
                  </h2>
                  <p className="text-[#8c8c8c] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h2 className="text-lg font-medium text-white mb-3">
                      Features
                    </h2>
                    <ul className="list-disc list-inside text-[#8c8c8c] space-y-2">
                      {project.features?.map(
                        (feature: string, index: number) => (
                          // <li key={index}>{feature}</li>
                          <li key={index}>
                            {feature
                              .split(/(\*\*.*?\*\*)/g)
                              .map((part, index) =>
                                part.startsWith("**") && part.endsWith("**") ? (
                                  <b
                                    key={index}
                                    className="px-2 py-1 rounded bg-[#2d2d2d] text-[#339933]"
                                  >
                                    {part.slice(2, -2)}
                                  </b>
                                ) : (
                                  part
                                )
                              )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-white mb-3">
                    Details
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-[#8c8c8c]">Version</div>
                      <div className="text-white">{project.version}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#8c8c8c]">Last Updated</div>
                      <div className="text-white">
                        {project.stats.lastUpdated}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[#8c8c8c]">Technologies</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.technologies?.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded bg-[#2d2d2d] text-[#007acc]"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <pre className="p-6 font-mono text-sm whitespace-pre-wrap text-[#cccccc]">
        {typeof activeTabData.content === "string"
          ? activeTabData.content
          : JSON.stringify(activeTabData.content, null, 2)}
      </pre>
    );
  };

  return (
    <div
      className={`flex-1 bg-[#1e1e1e] overflow-hidden flex flex-col ${
        sidebarOpen ? "ml-12" : ""
      }`}
    >
      <Navbar />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  );
};
