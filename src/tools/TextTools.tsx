import React, { useState } from 'react';
import { GenericTextTool } from './GenericTools';

export const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-background border border-border rounded-lg p-4">
          <div className="text-3xl font-bold text-primary">{words}</div>
          <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Words</div>
        </div>
        <div className="bg-background border border-border rounded-lg p-4">
          <div className="text-3xl font-bold text-primary">{chars}</div>
          <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Characters</div>
        </div>
        <div className="bg-background border border-border rounded-lg p-4">
          <div className="text-3xl font-bold text-primary">{charsNoSpaces}</div>
          <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Without Spaces</div>
        </div>
        <div className="bg-background border border-border rounded-lg p-4">
          <div className="text-3xl font-bold text-primary">{paragraphs}</div>
          <div className="text-sm text-foreground/70 uppercase tracking-wider font-semibold">Paragraphs</div>
        </div>
      </div>
      <textarea
        className="w-full h-64 p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none resize-y text-lg"
        placeholder="Type or paste your text here to begin counting..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');

  const toTitleCase = (str: string) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none resize-y"
        placeholder="Type or paste text here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setText(text.toUpperCase())} className="px-4 py-2 bg-secondary text-foreground border border-border rounded hover:bg-border transition-colors">UPPERCASE</button>
        <button onClick={() => setText(text.toLowerCase())} className="px-4 py-2 bg-secondary text-foreground border border-border rounded hover:bg-border transition-colors">lowercase</button>
        <button onClick={() => setText(toTitleCase(text))} className="px-4 py-2 bg-secondary text-foreground border border-border rounded hover:bg-border transition-colors">Title Case</button>
        <button onClick={() => setText(toSentenceCase(text))} className="px-4 py-2 bg-secondary text-foreground border border-border rounded hover:bg-border transition-colors">Sentence case</button>
      </div>
      <div className="flex justify-end">
        <button 
          onClick={() => navigator.clipboard.writeText(text)}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors font-medium"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export const TextReverser: React.FC = () => (
  <GenericTextTool 
    transform={(text) => text.split('').reverse().join('')} 
    placeholder="Enter text to reverse..." 
  />
);

export const DuplicateRemover: React.FC = () => (
  <GenericTextTool 
    live={false}
    actionText="Remove Duplicates"
    placeholder="Enter list items (one per line)..."
    transform={(text) => {
      const lines = text.split('\n');
      const unique = Array.from(new Set(lines.map(l => l.trim()))).filter(l => l);
      return unique.join('\n');
    }} 
  />
);

export const FindReplace: React.FC = () => {
  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');
  const [result, setResult] = useState('');

  const handleProcess = () => {
    if (!find) return setResult(text);
    const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    setResult(text.replace(regex, replace));
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-32 p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-y"
        placeholder="Original text..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Find</label>
          <input 
            type="text" 
            className="w-full p-2 bg-background border border-border rounded-lg"
            value={find}
            onChange={e => setFind(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Replace with</label>
          <input 
            type="text" 
            className="w-full p-2 bg-background border border-border rounded-lg"
            value={replace}
            onChange={e => setReplace(e.target.value)}
          />
        </div>
      </div>
      <button 
        onClick={handleProcess}
        className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover"
      >
        Replace All
      </button>
      <textarea
        className="w-full h-32 p-3 bg-card border border-border rounded-lg focus:outline-none resize-y"
        placeholder="Result will appear here..."
        value={result}
        readOnly
      />
    </div>
  );
};
