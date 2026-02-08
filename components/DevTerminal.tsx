
"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface DevTerminalProps {
  name?: string;
  role?: string;
}

const DevTerminal: React.FC<DevTerminalProps> = ({
  name = "Sebastian Augusto",
  role = "Software and Web Developer"
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const quote = '"';
  const fullCode = `const profile = {
  name: ${quote}${name}${quote},
  role: ${quote}${role}${quote},
  focus: [${quote}Performance${quote}, ${quote}UX${quote}],
  status: ${quote}Innovating${quote}
};`;

  useEffect(() => {
    if (currentIndex < fullCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + fullCode[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullCode]);

  const tokens = useMemo(() => {
    const result: React.ReactNode[] = [];
    let currentPos = 0;

    // A simple parser for the specific fullCode structure
    const lines = displayedCode.split('\n');

    return lines.map((line, lineIdx) => {
      const parts: React.ReactNode[] = [];
      let tempLine = line;

      // Handle keywords
      if (tempLine.startsWith('const ')) {
        parts.push(<span key="const" className="text-purple-400">const </span>);
        tempLine = tempLine.substring(6);
      }

      // Handle variable name and equals
      if (tempLine.includes(' = ')) {
        const [name, rest] = tempLine.split(' = ');
        parts.push(<span key="varname" className="text-blue-300"></span>);
        parts.push(<span key="equals" className="text-white"> = </span>);
        tempLine = rest || '';
      }

      // Handle curly braces and properties
      let charIdx = 0;
      while (charIdx < tempLine.length) {
        const char = tempLine[charIdx];

        if (char === '{' || char === '}' || char === '[' || char === ']' || char === ',' || char === ':' || char === ';') {
          parts.push(<span key={`op-${charIdx}`} className="text-white/60">{char}</span>);
          charIdx++;
        } else if (char === quote) {
          // Find end of string
          let endIdx = tempLine.indexOf(quote, charIdx + 1);
          if (endIdx === -1) endIdx = tempLine.length;
          else endIdx++; // include closing quote

          parts.push(<span key={`str-${charIdx}`} className="text-amber-200/90 italic">{tempLine.substring(charIdx, endIdx)}</span>);
          charIdx = endIdx;
        } else if (/\d/.test(char)) {
          parts.push(<span key={`num-${charIdx}`} className="text-orange-400">{char}</span>);
          charIdx++;
        } else if (/[a-zA-Z]/.test(char)) {
          // Likely a property name if followed by a colon
          let wordEnd = charIdx;
          while (wordEnd < tempLine.length && /[a-zA-Z]/.test(tempLine[wordEnd])) wordEnd++;
          const word = tempLine.substring(charIdx, wordEnd);
          const isProp = tempLine.substring(wordEnd).trim().startsWith(':');

          parts.push(<span key={`word-${charIdx}`} className={isProp ? "text-cyan-400" : "text-white"}>{word}</span>);
          charIdx = wordEnd;
        } else {
          parts.push(<span key={`space-${charIdx}`}>{char}</span>);
          charIdx++;
        }
      }

      return (
        <div key={lineIdx} className="min-h-[1.5em] flex items-center">
          <span className="w-6 shrink-0 text-white/10 select-none text-[10px] font-mono">{lineIdx + 1}</span>
          <pre className="m-0">{parts}</pre>
        </div>
      );
    });
  }, [displayedCode]);

  return (
    <div className="group/terminal relative w-full overflow-hidden rounded-2xl bg-black/60 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.3)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.3)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.3)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-medium text-white/20 uppercase tracking-widest">zsh — node</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-[11px] md:text-xs leading-relaxed text-white/80 overflow-x-auto custom-scrollbar">
        {tokens}
        {currentIndex < fullCode.length && (
          <div className="flex items-center ml-6">
            <span className="inline-block w-1.5 h-4 bg-purple-500/80 animate-pulse" />
          </div>
        )}
      </div>

      {/* Decorative inner shadow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] rounded-2xl" />
    </div>
  );
};

export default DevTerminal;
