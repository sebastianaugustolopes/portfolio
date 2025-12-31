import React, { useState, useEffect } from 'react';

export default function DevTerminal() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use String.fromCharCode to avoid quotes in JSX
  const quote = String.fromCharCode(34); // "
  const fullCode = `const dev = {
  level: ${quote}Junior${quote},
  age: 19,
  city: ${quote}Belo Horizonte - Brasil${quote},
  specialization: ${quote}EBAC - Escola Britânica de Artes Criativas${quote}
};`;

  useEffect(() => {
    if (currentIndex < fullCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + fullCode[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullCode]);

  const renderColoredCode = (text) => {
    return text.split('\n').map((line, i) => (
      <div key={i}>
        {line.split('').map((char, j) => {
          const fullText = text.substring(0, text.split('\n').slice(0, i).join('\n').length + j + i);
          
          // Keywords
          if (fullText.match(/const$/) && char === 't') {
            return <span key={j} className="text-purple-500 dark:text-purple-400">{char}</span>;
          }
          if (fullText.match(/cons$/) && char === 's') {
            return <span key={j} className="text-purple-500 dark:text-purple-400">{char}</span>;
          }
          if (fullText.match(/con$/) && char === 'n') {
            return <span key={j} className="text-purple-500 dark:text-purple-400">{char}</span>;
          }
          if (fullText.match(/co$/) && char === 'o') {
            return <span key={j} className="text-purple-500 dark:text-purple-400">{char}</span>;
          }
          if (fullText.match(/c$/) && char === 'c' && line.startsWith('const')) {
            return <span key={j} className="text-purple-500 dark:text-purple-400">{char}</span>;
          }
          
          // Property names
          if (/level|age|city|specialization/.test(line) && /[a-z]/.test(char) && line.indexOf(':') > j) {
            return <span key={j} className="text-cyan-600 dark:text-cyan-400">{char}</span>;
          }
          
          // Strings - check for quote character
          if (line.includes(quote) && j > line.indexOf(quote) && j < line.lastIndexOf(quote)) {
            return <span key={j} className="text-green-600 dark:text-green-400">{char}</span>;
          }
          if (char === quote) {
            return <span key={j} className="text-green-600 dark:text-green-400">{quote}</span>;
          }
          
          // Numbers
          if (/\d/.test(char)) {
            return <span key={j} className="text-yellow-600 dark:text-yellow-400">{char}</span>;
          }
          
          // Default
          return <span key={j} className="text-foreground/80">{char}</span>;
        })}
      </div>
    ));
  };

  return (
    <div className="font-mono text-xs leading-relaxed">
      <pre className="whitespace-pre">
        {renderColoredCode(displayedCode)}
        <span className="inline-block w-2 h-4 bg-foreground/80 animate-pulse ml-0.5 align-middle"></span>
      </pre>
    </div>
  );
}