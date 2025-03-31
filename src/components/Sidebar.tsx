import React, { useState, useEffect } from "react";
import {
  FileText,
  Boxes,
  Mail,
  ChevronRight,
  ChevronDown,
  Github,
  Linkedin,
  // Globe,
  Star,
  // MessageSquare,
  AlertCircle,
  CheckCircle2,
  Heart,
  ThumbsUp,
  Instagram,
  School,
  Users,
  Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store";
import { usePortfolioStore } from "./PortfolioStore";

const sidebarItems = [
  {
    id: "about",
    icon: FileText,
    label: "About Me",
    folders: [
      {
        name: "src",
        files: [
          {
            id: "about",
            name: "About.tsx",
            icon: "react",
            content: "/* Portfolio component with my experience and skills */",
          },
          {
            id: "skills",
            name: "skills.json",
            icon: "json",
            content: "/* Skills Details */",
          },
          {
            id: "experience",
            name: "experience.ts",
            icon: "typescript",
            content: "/* Professional experience and work history */",
          },
          {
            id: "contact",
            name: "contact.env",
            icon: "env",
            content: "/* Contact Details */",
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    icon: Boxes,
    label: "Projects",
    sections: {
      completed: [
        {
          id: "project1",
          type: "project",
          content: {
            icon: School,
            title: "School Management System",
            description:
              "A powerful and useful school management system for teachers and students and all the admin staff to manage their school.",
            // version: "2.1.0",
            publisher: "Prince Patel",
            stats: {
              rating: "4.8",
            },
            technologies: ["django", "postgres"],
            features: [
              "Role-based access control with three user types: **Admin**, **Teacher**, and **Student**.",
              "**Admin Panel** for managing users, classes, and academic records.",
              "**Teacher Portal** for assigning homework, marking attendance, and tracking student progress.",
              "**Student Dashboard** to access schedules, assignments, and performance reports.",
              "Automated **Timetable Management** system for efficient class scheduling.",
              "Real-time **Notice Board** for sharing important updates with users.",
              "Secure **Login System** with authentication and authorization for data protection.",
              "Responsive UI ensuring a seamless experience across desktop and mobile devices.",
              "Database powered by **PostgreSQL** for efficient data storage and management.",
              "Built using **Django**, ensuring scalability and robust performance.",
            ],
            // repository: "https://github.com/johndoe/react-snippets-pro",
          },
        },
      ],
      ongoing: [
        {
          id: "project2",
          type: "project",
          content: {
            icon: Users,
            title: "Social Media Application",
            description:
              "A Fully Working Social Media Application with all the features like posting, liking, commenting, etc.",
            // version: "1.5.0",
            publisher: "Prince Patel",
            stats: {
              rating: "3.6",
            },
            technologies: ["React", "Node", "Sanity.io"],
            features: [
              "User Authentication with secure login and registration using **OAuth**.",
              "Post Creation, Editing, and Deletion with support for images and text content.",
              "Like and Comment functionality with real-time updates.",
              "User Profile Management including profile picture updates and bio editing.",
              "Follow/Unfollow System to connect with other users.",
              "Dynamic Feed displaying posts from followed users.",
              "Notifications System to alert users about likes, comments, and new followers.",
              "Responsive Design ensuring seamless experience across devices.",
              "Backend powered by **Node.js** with RESTful API endpoints for data handling.",
              "Database integration with **Sanity.io** for efficient content management.",
              "Optimized for performance with lazy loading and code splitting.",
              "Modern UI design using **React** for a smooth and interactive experience.",
            ],
            // repository: "https://github.com/johndoe/theme-creator",
          },
        },
      ],
    },
  },
  // {
  //   id: "contact",
  //   icon: Mail,
  //   label: "Contact",
  //   content: {
  //     type: "contact",
  //     form: true,
  //   },
  // },
  // {
  //   id: "feedback",
  //   icon: MessageSquare,
  //   label: "Feedback",
  //   content: {
  //     type: "feedback",
  //     form: true,
  //   },
  // },
];
const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/princepatel14",
    color: "#2ea043",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prince-patel-a1141925b/",
    color: "#0a66c2",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/unk.nown_sketcher/",
    color: "#FF9900",
  },
  {
    icon: Code2,
    name: "Leetcode",
    url: "https://leetcode.com/u/princepatel1/",
    color: "#FF9900",
  },
  // {
  //   icon: Globe,
  //   name: "Portfolio",
  //   url: "https://johndoe.dev",
  //   color: "#e34c26",
  // },
];

export const Sidebar: React.FC = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    activeSidebarItem,
    setActiveSidebarItem,
    addTab,
    setActiveTab,
    tabs,
  } = useStore();
  const [expandedFolders, setExpandedFolders] = useState<
    Record<string, boolean>
  >({});
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    completed: true,
    ongoing: true,
  });
  const skills = usePortfolioStore((state) => state.skills);
  const experiences = usePortfolioStore((state) => state.experiences);
  const contact = usePortfolioStore((state) => state.contact);
  sidebarItems.map((item) => {
    if (item?.id === "about") {
      item?.folders?.map((folder) => {
        if (folder.name === "src") {
          folder.files.map((file) => {
            if (file.id === "skills") {
              file.content = `{\n${skills
                .map(
                  (skill) =>
                    ` "${skill.category}": [\n   ${skill.items
                      .map((item) => `"${item.name}"`)
                      .join(",\n   ")}\n  ]`
                )
                .join(",\n")}\n}`;
            }
            if (file.id === "contact") {
              file.content = `MY_CONTACT_EMAIL=${contact.email}\n\nMY_CONTACT_PHONE=${contact.phone}\n\nMY_CONTACT_LOCATION=${contact.location}\n\nCONTACT_AVAILABILITY=${contact.availability}\n\nCONTACT_PREFERRED_LANGUAGE=English${contact.preflanguages}\n\nCONTACT_SKYPE=live:.cid.1b8f75c1cfdd3188\n\nOTHER_CONTACT="YOU CAN CONTACT ME ON MY MAIL AND CAN SEND MAIL WITHIN THIS WEBSITE"`;
            }
            if (file.id === "experience") {
              file.content = `// Experience Data
export const experiences = [\n${experiences
                .map(
                  (exp) => `{
    title: "${exp.title}",
    company: "${exp.company}",
    period: "${exp.period}",
    description: "${exp.description}"
  }`
                )
                .join(",\n  ")}
];
`;
            }
          });
        }
      });
    }
  });
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setActiveSidebarItem("about");
    setSidebarOpen(true);
    setExpandedFolders({ src: true });

    const aboutFile = sidebarItems?.[0]?.folders?.[0]?.files?.[0];
    if (!tabs.some((tab) => tab.id === aboutFile?.id)) {
      addTab({
        id: aboutFile?.id || "",
        title: aboutFile?.name || "",
        content: aboutFile?.content || [],
        type: "markdown",
      });
      setActiveTab(aboutFile?.id || "about");
    }
  }, []);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFileClick = (file: any) => {
    if (!tabs.some((tab) => tab.id === file.id)) {
      addTab({
        id: file.id,
        title: file.name || file.content.title,
        content: file.content,
        type: file.type || "markdown",
      });
    }
    setActiveTab(file.id);
  };

  const toggleSidebar = (id: string) => {
    if (id === "feedback") {
      setShowFeedback(true);
      return;
    }

    if (activeSidebarItem === id && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setActiveSidebarItem(id);
      setSidebarOpen(true);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackRating === 0) {
      setNotification({
        type: "error",
        message: "Please select a rating before submitting",
      });
      return;
    }
    setNotification({
      type: "success",
      message: "Thank you for your valuable feedback!",
    });
    setShowFeedback(false);
    setFeedbackRating(0);
    setFeedbackMessage("");

    // Navigate to About.tsx after feedback submission
    const aboutFile = sidebarItems?.[0]?.folders?.[0]?.files?.[0];
    setActiveTab(aboutFile?.id || "about");
    setActiveSidebarItem("about");

    setTimeout(() => setNotification(null), 3000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.email || !contactForm.message) {
      setNotification({
        type: "error",
        message: "Please fill in all required fields",
      });
      return;
    }
    setNotification({
      type: "success",
      message: "Message sent successfully!",
    });
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  const getFileIcon = (file: any) => {
    if (!file || !file.name) {
      return "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/file.svg";
    }

    if (file.icon === "react") {
      return "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/react.svg";
    }

    if (file.icon === "json") {
      return "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/json.svg";
    }

    if (file.icon === "env") {
      return "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/settings.svg";
    }

    if (file.icon === "typescript") {
      return "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/typescript.svg";
    }

    const extension = file.name.split(".").pop()?.toLowerCase();
    const iconMap: { [key: string]: string } = {
      tsx: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/react_ts.svg",
      jsx: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/react.svg",
      json: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/json.svg",
      ts: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/typescript.svg",
      css: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/css.svg",
    };

    return (
      iconMap[extension || ""] ||
      "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/file.svg"
    );
  };

  const renderContent = () => {
    const activeItem = sidebarItems.find(
      (item) => item.id === activeSidebarItem
    );
    if (!activeItem) return null;

    if (activeItem.id === "contact") {
      return (
        <div className="p-4 space-y-6">
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#cccccc] mb-1">
                Name
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full bg-[#3c3c3c] text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007acc]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#cccccc] mb-1">
                Email <span className="text-[#cc0000]">*</span>
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full bg-[#3c3c3c] text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007acc]"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#cccccc] mb-1">
                Message <span className="text-[#cc0000]">*</span>
              </label>
              <textarea
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="w-full bg-[#3c3c3c] text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007acc] min-h-[100px]"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#007acc] text-white py-2 rounded hover:bg-[#1e8ed7] transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      );
    }

    if (activeItem.id === "projects") {
      return (
        <div className="space-y-4">
          {/* <div className="flex items-center justify-between px-4 py-2 bg-[#252526]">
            <input
              type="text"
              placeholder="Search Extensions in Marketplace..."
              className="w-full bg-[#3c3c3c] text-white px-3 py-1 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007acc]"
            />
          </div> */}

          <div
            className="flex items-center justify-between px-4 py-2 bg-[#252526] cursor-pointer hover:bg-[#2d2d2d]"
            onClick={() => toggleSection("completed")}
          >
            <div className="flex items-center">
              {expandedSections.completed ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="text-[#cccccc] text-xs ml-1">COMPLETED</span>
            </div>
            <span className="bg-[#4d4d4d] px-2 rounded-full text-xs">
              {activeItem?.sections?.completed.length}
            </span>
          </div>
          {expandedSections.completed &&
            activeItem?.sections?.completed.map((project: any) => (
              <div
                key={project.id}
                className="px-4 py-3 hover:bg-[#2a2a2a] cursor-pointer"
                onClick={() => handleFileClick(project)}
              >
                <div className="flex items-start space-x-3">
                  <project.content.icon className="w-8 h-8" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#cccccc] font-medium">
                        {project.content.title}
                      </h3>
                      <span className="text-[#cccccc] text-xs">
                        {project.content.stats.lastUpdated}
                      </span>
                    </div>
                    <p className="text-[#8c8c8c] text-sm line-clamp-1">
                      {project.content.description}
                    </p>
                    <div className="flex items-center text-xs text-[#8c8c8c] mt-1">
                      <span>{project.content.publisher}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div
            className="flex items-center justify-between px-4 py-2 bg-[#252526] cursor-pointer hover:bg-[#2d2d2d]"
            onClick={() => toggleSection("ongoing")}
          >
            <div className="flex items-center">
              {expandedSections.ongoing ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <span className="text-[#cccccc] text-xs ml-1">ONGOING</span>
            </div>
            <span className="bg-[#4d4d4d] px-2 rounded-full text-xs">
              {activeItem?.sections?.ongoing.length}
            </span>
          </div>
          {expandedSections.ongoing &&
            activeItem?.sections?.ongoing.map((project: any) => (
              <div
                key={project.id}
                className="px-4 py-3 hover:bg-[#2a2a2a] cursor-pointer"
                onClick={() => handleFileClick(project)}
              >
                <div className="flex items-start space-x-3">
                  <project.content.icon className="w-8 h-8" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#cccccc] font-medium">
                        {project.content.title}
                      </h3>
                      <span className="text-[#cccccc] text-xs">
                        {project.content.stats.lastUpdated}
                      </span>
                    </div>
                    <p className="text-[#8c8c8c] text-sm line-clamp-1">
                      {project.content.description}
                    </p>
                    <div className="flex items-center text-xs text-[#8c8c8c] mt-1">
                      <span>{project.content.publisher}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {activeItem.folders?.map((folder) => (
          <div key={folder.name}>
            <div
              className="flex items-center text-[#858585] mb-2 cursor-pointer hover:text-white px-4"
              onClick={() => toggleFolder(folder.name)}
            >
              {expandedFolders[folder.name] ? (
                <ChevronDown size={16} className="mr-2" />
              ) : (
                <ChevronRight size={16} className="mr-2" />
              )}
              <span>{folder.name}</span>
              <div className="ml-2 text-xs text-[#6d6d6d]">
                ({folder.files.length} files)
              </div>
            </div>
            {expandedFolders[folder.name] && (
              <div className="ml-8">
                {folder.files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center text-[#858585] hover:text-white cursor-pointer p-1 rounded hover:bg-[#2a2a2a] group"
                    onClick={() => handleFileClick(file)}
                  >
                    <img
                      src={getFileIcon(file)}
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    <span className="flex-1">{file.name}</span>
                    <span className="text-xs text-[#6d6d6d] opacity-0 group-hover:opacity-100 transition-opacity">
                      {file.icon === "react"
                        ? "Component"
                        : file.icon === "typescript"
                        ? "TypeScript"
                        : file.icon === "json"
                        ? "JSON"
                        : "File"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={`h-full bg-[#1e1e1e] ${sidebarOpen ? "w-64" : "w-12"}`}>
        <div className="w-12 h-full flex flex-col items-center py-4 border-r border-[#333333] fixed">
          {sidebarItems.map(({ id, icon: Icon, label }) => (
            <div key={id} className="relative group">
              <button
                onClick={() => toggleSidebar(id)}
                className={`p-2 mb-2 hover:bg-[#2a2a2a] rounded ${
                  activeSidebarItem === id ? "bg-[#37373d]" : ""
                }`}
              >
                <Icon size={24} className="text-[#858585] hover:text-white" />
              </button>
              <div
                className="absolute left-full ml-2 px-2 py-1 bg-[#252526] text-white text-xs rounded 
                            opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap
                            transition-opacity duration-200"
              >
                {label}
              </div>
            </div>
          ))}

          <div className="mt-auto space-y-2">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                className="relative group"
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => handleSocialClick(social.url)}
                  className={`p-2 hover:bg-[#2a2a2a] rounded transition-all duration-200 ${
                    hoveredSocial === social.name ? "scale-110" : ""
                  }`}
                  style={{
                    color:
                      hoveredSocial === social.name ? social.color : "#858585",
                  }}
                >
                  <social.icon size={24} />
                </button>
                <motion.div
                  className="absolute left-full ml-2 px-2 py-1 bg-[#252526] text-white text-xs rounded 
                            opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                  initial={{ x: -10, opacity: 0 }}
                  animate={
                    hoveredSocial === social.name ? { x: 0, opacity: 1 } : {}
                  }
                >
                  {social.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        {sidebarOpen && <div className="flex-1 ml-12">{renderContent()}</div>}
      </div>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#252526] p-6 rounded-lg shadow-xl w-96 relative"
            >
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Heart size={18} className="mr-2 text-[#007acc]" />
                Share Your Feedback
              </h3>
              <p className="text-[#8c8c8c] text-sm mb-6">
                Your feedback helps me improve and create better experiences.
                I'd love to hear your thoughts!
              </p>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#cccccc] mb-2">
                    How was your experience?
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        type="button"
                        onClick={() => setFeedbackRating(rating)}
                        className={`p-1 rounded transition-colors ${
                          feedbackRating >= rating
                            ? "text-yellow-400"
                            : "text-[#4d4d4d]"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star
                          size={24}
                          fill={
                            feedbackRating >= rating ? "currentColor" : "none"
                          }
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#cccccc] mb-2">
                    Share your thoughts
                  </label>
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    className="w-full bg-[#3c3c3c] text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007acc] min-h-[100px]"
                    placeholder="What did you like? What could be improved?"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <motion.button
                    type="button"
                    onClick={() => {
                      setShowFeedback(false);
                      const aboutFile = sidebarItems?.[0].folders?.[0].files[0];
                      setActiveTab(aboutFile?.id || "about");
                      setActiveSidebarItem("about");
                    }}
                    className="px-4 py-2 text-[#cccccc] hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#1e8ed7] transition-colors flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ThumbsUp size={16} className="mr-2" />
                    Submit Feedback
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 z-[70] ${
              notification.type === "success"
                ? "bg-[#2ea043] text-white"
                : "bg-[#cc0000] text-white"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle2 size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
