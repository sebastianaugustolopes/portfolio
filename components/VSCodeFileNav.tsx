"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen, Mail, Phone, Github, Linkedin, Instagram, Globe, Terminal, X, Minus, Square, Code2, FileText, FileDown } from 'lucide-react';
import type { PersonalInfo } from '@/db/schema';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  icon?: React.ElementType;
  iconColor?: string;
  href?: string;
  children?: FileItem[];
}

interface FileTreeItemProps {
  item: FileItem;
  depth?: number;
  onFileClick?: (item: FileItem) => void;
}

const FileTreeItem = ({ item, depth = 0, onFileClick }: FileTreeItemProps) => {
  const [isOpen, setIsOpen] = useState(depth < 2);
  const [isHovered, setIsHovered] = useState(false);

  if (item.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full flex items-center gap-2 py-2 px-3 transition-all duration-300 group ${
            isHovered ? 'bg-primary/10 backdrop-blur-sm' : 'hover:bg-white/5'
          }`}
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
        >
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
            {isOpen ? (
              <ChevronDown size={16} className="text-primary/80" />
            ) : (
              <ChevronRight size={16} className="text-muted-foreground" />
            )}
          </span>
          <span className="transition-transform duration-300">
            {isOpen ? (
              <FolderOpen size={18} className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            ) : (
              <Folder size={18} className="text-yellow-600/80" />
            )}
          </span>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            isOpen ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
          }`}>
            {item.name}
          </span>
          {item.children && (
            <span className="ml-auto text-xs text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.children.length} items
            </span>
          )}
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {item.children?.map((child, index) => (
            <FileTreeItem key={index} item={child} depth={depth + 1} onFileClick={onFileClick} />
          ))}
        </div>
      </div>
    );
  }

  const IconComponent = item.icon || FileText;

  const isPDF = item.href?.endsWith('.pdf');
  const isExternalLink = item.href?.startsWith('http');
  const isCV = item.href?.includes('Sebastian CV');

  return (
    <a
      href={item.href}
      download={isPDF ? (isCV ? 'Sebastian CV.docx.pdf' : item.name) : undefined}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      onClick={() => onFileClick?.(item)}
      className="flex items-center gap-3 py-2 px-3 hover:bg-primary/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
      style={{ paddingLeft: `${depth * 16 + 36}px` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <IconComponent 
        size={18} 
        className={`${item.iconColor || 'text-muted-foreground'} shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_currentColor]`} 
      />
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 truncate relative z-10">
        {item.name}
      </span>
      
      {/* Arrow indicator */}
      <ChevronRight 
        size={14} 
        className="ml-auto text-primary/0 group-hover:text-primary/80 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" 
      />
    </a>
  );
};

const VSCodeFileNav = () => {
  const [activeTab, setActiveTab] = useState('explorer');
  const [lastClickedFile, setLastClickedFile] = useState<string | null>(null);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        if (res.ok) {
          const data = await res.json();
          setPersonalInfo(data);
        }
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    }
    fetchPersonalInfo();
  }, []);

  // Function to format phone number for WhatsApp
  const formatWhatsAppNumber = (phone: string | null | undefined): string | null => {
    if (!phone) return null;
    const cleaned = phone.replace(/[\s()\-]/g, "");
    const formatted = cleaned.startsWith("+") ? cleaned : `+55${cleaned}`;
    return `https://wa.me/${formatted.replace("+", "")}`;
  };

  // Create file structure based on database data
  const contactFiles: FileItem[] = personalInfo ? [
    {
      name: 'contatos',
      type: 'folder',
      children: [
        {
          name: 'email.txt',
          type: 'file',
          icon: Mail,
          iconColor: 'text-blue-400',
          href: 'mailto:sebastianaugustolopescamargo@gmail.com',
        },
        {
          name: 'telefone.txt',
          type: 'file',
          icon: Phone,
          iconColor: 'text-green-400',
          href: formatWhatsAppNumber(personalInfo.phone) || undefined,
        },
        ...(personalInfo.socialLinks?.github ? [{
          name: 'github.url',
          type: 'file' as const,
          icon: Github,
          iconColor: 'text-gray-400',
          href: personalInfo.socialLinks.github,
        }] : []),
        ...(personalInfo.socialLinks?.linkedin ? [{
          name: 'linkedin.url',
          type: 'file' as const,
          icon: Linkedin,
          iconColor: 'text-blue-500',
          href: personalInfo.socialLinks.linkedin,
        }] : []),
        ...(personalInfo.socialLinks?.instagram ? [{
          name: 'instagram.url',
          type: 'file' as const,
          icon: Instagram,
          iconColor: 'text-pink-500',
          href: personalInfo.socialLinks.instagram,
        }] : []),
        {
          name: 'curriculo.pdf',
          type: 'file',
          icon: FileDown,
          iconColor: 'text-red-400',
          href: '/documents/sebastian_augusto_cv_docx.pdf',
        },
      ],
    },
  ] : [];

  const handleFileClick = (item: FileItem) => {
    setLastClickedFile(item.name);
    setTimeout(() => setLastClickedFile(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto backdrop-blur-2xl bg-black/70 border border-border/30 rounded-xl overflow-hidden shadow-2xl shadow-primary/10 transition-all duration-500 hover:shadow-primary/20 hover:border-border/50 relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-accent/8 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>
      
      {/* VS Code Title Bar */}
      <div className="bg-black/60 backdrop-blur-xl px-4 py-3 flex items-center justify-between border-b border-border/20 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors flex items-center justify-center group">
              <X size={8} className="text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors flex items-center justify-center group">
              <Minus size={8} className="text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors flex items-center justify-center group">
              <Square size={6} className="text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm text-foreground/80 font-medium">Sebastian Augusto - Contatos</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="hidden sm:block">Arquivo</span>
          <span className="hidden sm:block">Editar</span>
          <span className="hidden sm:block">Exibir</span>
          <span className="hidden sm:block">Ajuda</span>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="bg-black/50 backdrop-blur-xl flex items-center border-b border-border/20 relative z-10">
        <button
          onClick={() => setActiveTab('explorer')}
          className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
            activeTab === 'explorer' 
              ? 'text-foreground bg-black/40' 
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-2">
            <Folder size={14} className="text-yellow-500" />
            <span>Explorer</span>
          </div>
          {activeTab === 'explorer' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-scale-in" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
            activeTab === 'terminal' 
              ? 'text-foreground bg-black/40' 
              : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-green-500" />
            <span>Terminal</span>
          </div>
          {activeTab === 'terminal' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-scale-in" />
          )}
        </button>
      </div>

      {/* Content Area */}
      <div className="flex min-h-[400px] relative z-10">
        {/* Sidebar */}
        <div className="w-12 bg-black/40 backdrop-blur-xl border-r border-border/20 flex flex-col items-center py-4 gap-4">
          <button 
            className={`p-2 rounded-lg transition-all duration-300 ${
              activeTab === 'explorer' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
            }`}
            onClick={() => setActiveTab('explorer')}
          >
            <Folder size={20} />
          </button>
          <button 
            className={`p-2 rounded-lg transition-all duration-300 ${
              activeTab === 'terminal' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
            }`}
            onClick={() => setActiveTab('terminal')}
          >
            <Terminal size={20} />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300">
            <Github size={20} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === 'explorer' ? (
            <div className="py-3 font-mono">
              {/* Header */}
              <div className="px-4 py-2 text-xs text-muted-foreground/70 uppercase tracking-wider flex items-center justify-between">
                <span>Explorer</span>
                <span className="text-primary/50">...</span>
              </div>
              
              {/* File Tree */}
              <div className="overflow-hidden">
                {contactFiles.map((item, index) => (
                  <FileTreeItem key={index} item={item} onFileClick={handleFileClick} />
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 font-mono text-sm">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-muted-foreground mb-4">{personalInfo?.name.toLowerCase().replace(/\s/g, '-') || 'sebastian-augusto'}</div>
              <div className="text-green-400 mb-2">$ cat contato.txt</div>
              <div className="text-muted-foreground space-y-1">
                {personalInfo?.email && (
                  <p>📧 {personalInfo.email}</p>
                )}
                {personalInfo?.phone && (
                  <p>📱 {personalInfo.phone}</p>
                )}
              </div>
              <div className="text-green-400 mt-4 flex items-center gap-2">
                <span>$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-primary/90 backdrop-blur-sm px-4 py-1.5 flex items-center justify-between text-xs border-t border-primary/50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Github size={12} className="text-primary-foreground" />
            <span className="text-primary-foreground/90">main</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-primary-foreground/70">Sincronizado</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-primary-foreground/70">
          {lastClickedFile && (
            <span className="text-primary-foreground animate-fade-in">
              Abrindo: {lastClickedFile}
            </span>
          )}
          <span className="hidden sm:block">UTF-8</span>
          <span className="hidden sm:block">TypeScript React</span>
          <span className="hidden sm:block">Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
};

export default VSCodeFileNav;
