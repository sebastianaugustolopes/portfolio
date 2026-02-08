"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Terminal as TerminalIcon,
  X,
  Minus,
  Square,
  Code2,
  FileText,
  FileDown,
  Search,
  Files,
  Settings,
  User,
  Coffee,
  GitBranch,
  Info,
  ChevronRight as BreadcrumbSeparator
} from 'lucide-react';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  icon?: React.ElementType;
  iconColor?: string;
  href?: string;
  content?: string;
  children?: FileItem[];
  path?: string;
}

interface FileTreeItemProps {
  item: FileItem;
  depth?: number;
  onFileClick?: (item: FileItem) => void;
  activeFile?: string | null;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ item, depth = 0, onFileClick, activeFile }) => {
  const [isOpen, setIsOpen] = useState(depth < 2);
  const isActive = activeFile === item.name;

  if (item.type === 'folder') {
    return (
      <div className="select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-1.5 py-1 px-2 hover:bg-white/5 transition-colors group text-left outline-none"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          <span className={`transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
            <ChevronDown size={14} className={isOpen ? "text-white/60" : "text-white/30"} />
          </span>
          {isOpen ? (
            <FolderOpen size={16} className="text-amber-400 shrink-0" />
          ) : (
            <Folder size={16} className="text-amber-500/80 shrink-0" />
          )}
          <span className="text-[13px] font-medium text-white/70 group-hover:text-white transition-colors truncate">
            {item.name}
          </span>
        </button>
        {isOpen && item.children && (
          <div className="animate-in fade-in slide-in-from-left-1 duration-200">
            {item.children.map((child, index) => (
              <FileTreeItem
                key={index}
                item={child}
                depth={depth + 1}
                onFileClick={onFileClick}
                activeFile={activeFile}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const IconComponent = item.icon || FileText;

  return (
    <button
      onClick={() => onFileClick?.(item)}
      className={`w-full flex items-center gap-2 py-1 px-2 transition-all duration-200 group relative text-left outline-none ${isActive ? 'bg-purple-500/10 border-l-2 border-purple-500' : 'hover:bg-white/5 border-l-2 border-transparent'
        }`}
      style={{ paddingLeft: `${depth * 12 + 24}px` }}
    >
      <IconComponent
        size={14}
        className={`${isActive ? (item.iconColor || 'text-white') : (item.iconColor || 'text-white/40')} shrink-0 group-hover:scale-110 transition-transform`}
      />
      <span className={`text-[13px] transition-colors truncate ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
        {item.name}
      </span>
      {isActive && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
      )}
    </button>
  );
};

const VSCodeFileNav = () => {
  const [activeTab, setActiveTab] = useState('explorer');
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const contactFiles: FileItem[] = [
    {
      name: 'src',
      type: 'folder',
      path: 'src',
      children: [
        {
          name: 'contacts',
          type: 'folder',
          path: 'src/contacts',
          children: [
            {
              name: 'email.ts',
              type: 'file',
              path: 'src/contacts/email.ts',
              icon: Mail,
              iconColor: 'text-blue-400',
              href: 'mailto:sebastianaugustolopescamargo@gmail.com',
              content: `// Standard Contact Logic\nexport const contact = {\n  email: "sebastianaugustolopescamargo@gmail.com",\n  availability: "High",\n  timezone: "GMT-3",\n  response_time: "< 24h"\n};\n\n/**\n * Triggers a direct connection\n */\nexport function connect() {\n  return console.log("Connecting to core...");\n}`
            },
            {
              name: 'whatsapp.ts',
              type: 'file',
              path: 'src/contacts/whatsapp.ts',
              icon: Phone,
              iconColor: 'text-emerald-400',
              href: 'https://wa.me/5531987962420',
              content: `import { messaging } from "@core/services";\n\nexport const sendMessage = (message: string) => {\n  return messaging.whatsapp({\n    to: "+55 11 99999-9999",\n    body: message || "Hello from Portfolio!"\n  });\n};`
            },
            {
              name: 'socials.json',
              type: 'file',
              path: 'src/contacts/socials.json',
              icon: Globe,
              iconColor: 'text-purple-400',
              content: `{\n  "github": "https://github.com/sebastianaugustolopes",\n  "linkedin": "https://www.linkedin.com/in/sebastianaugusto/",\n  "instagram": "@_ssebastianaugusto",\n}`
            }
          ],
        },
        {
          name: 'resume.pdf',
          type: 'file',
          path: 'sebastian_augusto_cv.docx.pdf',
          icon: FileDown,
          iconColor: 'text-rose-400',
          href: '#',
          content: `// BINARY DATA [PDF Document]\n// Content-Type: application/pdf\n// Size: 2.4 MB\n// Status: Ready for download\n\n[CLICK_BUTTON_BELOW_TO_EXPORT]`
        }
      ],
    },
    {
      name: 'package.json',
      type: 'file',
      path: 'package.json',
      icon: Settings,
      iconColor: 'text-blue-500',
      content: `{\n  "name": "sebastian-portfolio",\n  "version": "3.0.0",\n  "private": true,\n  "dependencies": {\n    "passion": "latest",\n    "react": "^19.0.0",\n    "typescript": "^5.0.0",\n    "logic": "stable"\n  },\n  "scripts": {\n    "deploy": "impact --global"\n  }\n}`
    }
  ];

  useEffect(() => {
    if (activeTab === 'terminal' && terminalOutput.length === 0) {
      runTerminalSimulation();
    }
  }, [activeTab]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const runTerminalSimulation = async () => {
    setIsTyping(true);
    const commands = [
      "npm install connections...",
      "Resolving dependencies...",
      "Authenticated as @sebastian-augusto",
      "Syncing contact nodes...",
      "Status: Port 8080 online and ready.",
      "READY: Type 'help' for command list."
    ];

    for (const cmd of commands) {
      setTerminalOutput(prev => [...prev, `[LOG] ${cmd}`]);
      await new Promise(r => setTimeout(r, 800));
    }
    setIsTyping(false);
  };

  const handleFileClick = (item: FileItem) => {
    setSelectedFile(item);
    if (item.href && item.href !== '#') {
      window.open(item.href, '_blank');
    }
  };

  const renderHighlightedCode = (content: string) => {
    if (!content) return null;
    return content.split('\n').map((line, i) => (
      <div key={i} className="flex gap-6 hover:bg-white/5 px-2 -mx-2 transition-colors group/line">
        <span className="w-10 shrink-0 text-white/10 select-none text-right font-mono text-[12px] group-hover/line:text-white/30 transition-colors">{i + 1}</span>
        <span className="font-mono text-[13px] leading-relaxed">
          {line.split(/(\s+|[{}():,;[\]"])/).map((part, j) => {
            if (['export', 'const', 'import', 'from', 'return', 'function', 'true', 'false', 'private'].includes(part.trim())) {
              return <span key={j} className="text-purple-400">{part}</span>;
            }
            if (part.startsWith('"') || part.endsWith('"')) {
              return <span key={j} className="text-amber-200">{part}</span>;
            }
            if (part.startsWith('//') || part.startsWith('/*') || part.startsWith(' *')) {
              return <span key={j} className="text-white/20 italic">{part}</span>;
            }
            if (['{', '}', '(', ')', '[', ']', ':', ',', ';', '='].includes(part)) {
              return <span key={j} className="text-white/40">{part}</span>;
            }
            if (/[A-Z]/.test(part[0]) && part.length > 2) {
              return <span key={j} className="text-cyan-400">{part}</span>;
            }
            return <span key={j} className="text-white/70">{part}</span>;
          })}
        </span>
      </div>
    ));
  };

  return (
    <div className="w-full max-w-5xl mx-auto glass-panel rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-white/5 flex flex-col h-[650px] animate-fade-in group">

      {/* Title Bar */}
      <div className="bg-[#0f0f0f] px-4 py-2 flex items-center justify-between border-b border-white/5 select-none">
        <div className="flex items-center gap-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Code2 size={14} className="text-purple-500" />
            <span className="text-[11px] font-mono tracking-wider uppercase font-bold">sebastian-augusto — portfolio</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          <span className="hover:text-white/40 cursor-pointer transition-colors">File</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">Selection</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">Terminal</span>
          <span className="hover:text-white/40 cursor-pointer transition-colors">Help</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-14 bg-[#0a0a0a] border-r border-white/5 flex flex-col items-center py-4 gap-6 select-none">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`p-2.5 rounded-lg transition-all relative ${activeTab === 'explorer' ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
          >
            <Files size={24} strokeWidth={activeTab === 'explorer' ? 2 : 1.5} />
            {activeTab === 'explorer' && <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-0.5 h-full bg-purple-500 rounded-r" />}
          </button>
          <button className="p-2.5 rounded-lg text-white/20 hover:text-white/40 transition-all">
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button className="p-2.5 rounded-lg text-white/20 hover:text-white/40 transition-all">
            <GitBranch size={24} strokeWidth={1.5} />
          </button>
          <button className="p-2.5 rounded-lg text-white/20 hover:text-white/40 transition-all">
            <Github size={24} strokeWidth={1.5} />
          </button>
          <div className="mt-auto space-y-4 pb-2">
            <button className="p-2.5 rounded-lg text-white/20 hover:text-white/40 transition-all">
              <User size={24} strokeWidth={1.5} />
            </button>
            <button className="p-2.5 rounded-lg text-white/20 hover:text-white/40 transition-all">
              <Settings size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-60 bg-[#0c0c0c] border-r border-white/5 flex flex-col overflow-y-auto custom-scrollbar select-none">
          <div className="px-5 py-4 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] flex items-center justify-between border-b border-white/5 mb-2">
            <span>Explorer</span>
            <ChevronDown size={14} className="opacity-50" />
          </div>
          <div className="flex-1 py-1">
            {contactFiles.map((item, index) => (
              <FileTreeItem
                key={index}
                item={item}
                onFileClick={handleFileClick}
                activeFile={selectedFile?.name}
              />
            ))}
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col bg-[#080808] relative overflow-hidden">

          {/* Tabs & Breadcrumbs Bar */}
          <div className="flex flex-col border-b border-white/5 bg-[#0a0a0a]">
            {/* Tabs */}
            <div className="h-10 flex items-center overflow-x-auto no-scrollbar select-none">
              {selectedFile && (
                <div className="h-full px-4 flex items-center gap-2 bg-[#080808] border-r border-white/5 min-w-[150px] relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500" />
                  {React.createElement(selectedFile.icon || FileText, { size: 14, className: selectedFile.iconColor })}
                  <span className="text-xs text-white/90 font-medium truncate">{selectedFile.name}</span>
                  <X size={12} className="ml-auto text-white/20 hover:text-white/80 cursor-pointer p-0.5 rounded transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }} />
                </div>
              )}
              <button
                onClick={() => setActiveTab('terminal')}
                className={`h-full px-6 flex items-center gap-2 border-r border-white/5 text-[11px] font-bold uppercase tracking-wider transition-colors ${activeTab === 'terminal' ? 'bg-[#080808] text-purple-400' : 'text-white/20 hover:bg-white/5'}`}
              >
                <TerminalIcon size={14} />
                Terminal
              </button>
            </div>

            {/* Breadcrumbs */}
            {selectedFile && (
              <div className="h-8 flex items-center px-4 gap-2 text-[10px] text-white/30 font-mono border-t border-white/5 select-none">
                <Files size={12} />
                <BreadcrumbSeparator size={10} />
                {selectedFile.path?.split('/').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    <span className={i === arr.length - 1 ? 'text-white/60 font-bold' : ''}>{part}</span>
                    {i < arr.length - 1 && <BreadcrumbSeparator size={10} />}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Editor Content Area */}
          <div className="flex-1 overflow-auto custom-scrollbar relative">
            {activeTab === 'terminal' ? (
              <div ref={terminalRef} className="h-full p-8 font-mono text-[13px] text-emerald-400/80 leading-relaxed overflow-y-auto bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-white/30 mb-8 pb-4 border-b border-white/5">
                  <Coffee size={18} />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Development Terminal v3.0.4 — Runtime Active</span>
                </div>
                {terminalOutput.map((line, i) => (
                  <div key={i} className="animate-in fade-in slide-in-from-bottom-1 duration-500 flex gap-4">
                    <span className="text-white/10 shrink-0 select-none">[{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]</span>
                    <span>{line}</span>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 text-white/40 mt-2">
                    <span className="animate-pulse">_</span>
                  </div>
                )}
                {!isTyping && (
                  <div className="flex items-center gap-3 text-purple-400 mt-4 font-bold">
                    <span className="text-white/40">➜</span>
                    <span>sebastian@portfolio</span>
                    <span className="text-white/40">~ %</span>
                    <span className="w-2 h-4 bg-purple-500/60 animate-pulse ml-1" />
                  </div>
                )}
              </div>
            ) : selectedFile ? (
              <div className="p-8 pb-32 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 text-white/5 mb-10 border-b border-white/5 pb-4 select-none">
                  <Info size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Read-Only Mode — Syntax Highlighted Source</span>
                </div>
                <div className="relative">
                  {renderHighlightedCode(selectedFile.content || '')}
                </div>

                {/* PDF Special Action */}
                {selectedFile.name.endsWith('.pdf') && (
                  <div className="mt-12 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 text-center space-y-4">
                    <FileDown size={40} className="mx-auto text-purple-400" />
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Resume Asset Detected</h4>
                    <p className="text-white/40 text-xs max-w-xs mx-auto">Click to download a high-resolution version of the professional resume.</p>
                    <a
                      href="/documents/sebastian_augusto_cv.docx.pdf"
                      download="Sebastian_Augusto_CV.pdf"
                      className="inline-block px-8 py-3 rounded-full bg-purple-500 text-white text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    >
                      Download CV.pdf
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center space-y-8 select-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl" />
                  <Code2 size={100} strokeWidth={0.5} className="text-white/5 relative z-10" />
                </div>
                <div className="text-center space-y-3">
                  <p className="text-xl font-black uppercase tracking-[0.6em] text-white/20">PORTFOLIO</p>
                  <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]">Selecione um arquivo para ver os detalhes </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] px-4 py-1.5 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-white select-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-0.5 rounded transition-colors cursor-pointer group">
            <GitBranch size={12} className="group-hover:rotate-12 transition-transform" />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span>Sync Complete</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="hidden sm:block opacity-60">Spaces: 2</span>
            <span className="hidden sm:block opacity-60">UTF-8</span>
            <span className="hidden sm:block">TypeScript React</span>
          </div>
          <div className="flex items-center gap-1.5 group cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40" />
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeFileNav;
