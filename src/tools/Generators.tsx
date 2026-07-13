import React, { useState } from 'react';
import { GenericGeneratorTool } from './GenericTools';

export const UuidGenerator: React.FC = () => {
  const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  };

  return <GenericGeneratorTool generate={generateUuid} buttonText="Generate New UUID" />;
};

export const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generate = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let chars = lower;
    if (useUpper) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    let res = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      res += chars[array[i] % chars.length];
    }
    setPassword(res);
  };

  // Generate on first mount
  React.useEffect(() => {
    generate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 pr-12 text-center text-xl font-mono bg-background border border-border rounded-xl focus:outline-none"
          value={password}
          readOnly
        />
        <button 
          onClick={() => navigator.clipboard.writeText(password)} 
          className="absolute right-3 top-4 text-foreground/50 hover:text-primary transition-colors"
          title="Copy"
        >
          📋
        </button>
      </div>
      
      <div className="space-y-4 bg-background p-4 rounded-xl border border-border">
        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Password Length</span>
            <span>{length}</span>
          </label>
          <input 
            type="range" min="8" max="64" 
            value={length} onChange={e => setLength(parseInt(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} className="w-4 h-4 text-primary accent-primary" />
            <span>Include Uppercase</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} className="w-4 h-4 text-primary accent-primary" />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} className="w-4 h-4 text-primary accent-primary" />
            <span>Include Symbols</span>
          </label>
        </div>
      </div>
      
      <button 
        onClick={generate}
        className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors font-bold text-lg"
      >
        Generate Password
      </button>
    </div>
  );
};

export const RandomNumber: React.FC = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    setResult(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  };

  return (
    <div className="space-y-6 max-w-sm mx-auto text-center py-4">
      {result !== null && (
        <div className="text-6xl font-bold text-primary mb-8 font-mono">
          {result}
        </div>
      )}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Min</label>
          <input 
            type="number" 
            value={min} onChange={e => setMin(parseInt(e.target.value) || 0)}
            className="w-full p-2 bg-background border border-border rounded text-center"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Max</label>
          <input 
            type="number" 
            value={max} onChange={e => setMax(parseInt(e.target.value) || 0)}
            className="w-full p-2 bg-background border border-border rounded text-center"
          />
        </div>
      </div>
      <button 
        onClick={generate}
        className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors font-bold"
      >
        Generate
      </button>
    </div>
  );
};
