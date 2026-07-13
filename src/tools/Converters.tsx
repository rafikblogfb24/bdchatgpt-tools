import React, { useState, useEffect } from 'react';

export const UnitConverter: React.FC = () => {
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('ft');
  
  const factors: Record<string, number> = {
    'm': 1, 'cm': 0.01, 'km': 1000, 'in': 0.0254, 'ft': 0.3048, 'yd': 0.9144, 'mi': 1609.34
  };

  const calculate = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return '';
    const inMeters = v * factors[from];
    return (inMeters / factors[to]).toPrecision(6).replace(/\.0+$/, '');
  };

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="flex space-x-2 items-center">
        <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full p-2 bg-background border border-border rounded text-center" />
        <select value={from} onChange={e => setFrom(e.target.value)} className="p-2 bg-background border border-border rounded">
          {Object.keys(factors).map(k => <option key={k} value={k}>{k}</option>)}
        </select>
        <span>=</span>
        <input type="text" value={calculate()} readOnly className="w-full p-2 bg-background border border-border rounded text-center bg-card text-primary font-bold" />
        <select value={to} onChange={e => setTo(e.target.value)} className="p-2 bg-background border border-border rounded">
          {Object.keys(factors).map(k => <option key={k} value={k}>{k}</option>)}
        </select>
      </div>
    </div>
  );
};

export const BaseConverter: React.FC = () => {
  const [value, setValue] = useState('10');
  const [base, setBase] = useState(10);
  
  const dec = parseInt(value, base);
  const isValid = !isNaN(dec);

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="flex space-x-2">
        <input 
          type="text" 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          className={`flex-1 p-2 bg-background border ${!isValid && value ? 'border-red-500' : 'border-border'} rounded`}
        />
        <select value={base} onChange={e => setBase(parseInt(e.target.value))} className="p-2 bg-background border border-border rounded">
          <option value={2}>Bin (2)</option>
          <option value={8}>Oct (8)</option>
          <option value={10}>Dec (10)</option>
          <option value={16}>Hex (16)</option>
        </select>
      </div>
      
      <div className="space-y-2 pt-4">
        {[2, 8, 10, 16].map(b => (
          <div key={b} className="flex items-center justify-between p-3 bg-card border border-border rounded">
            <span className="font-bold text-sm w-16">Base {b}</span>
            <span className="font-mono text-primary break-all ml-4">
              {isValid ? dec.toString(b).toUpperCase() : 'Invalid input'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimestampConverter: React.FC = () => {
  const [ts, setTs] = useState(() => Math.floor(Date.now() / 1000).toString());
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const t = parseInt(ts);
    if (!isNaN(t)) {
      setDateStr(new Date(t * 1000).toLocaleString());
    } else {
      setDateStr('Invalid timestamp');
    }
  }, [ts]);

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div>
        <label className="block text-sm font-medium mb-1">Unix Timestamp (Seconds)</label>
        <input 
          type="number" 
          value={ts} 
          onChange={e => setTs(e.target.value)} 
          className="w-full p-3 bg-background border border-border rounded font-mono text-center"
        />
      </div>
      <div className="text-center p-4 bg-primary/10 text-primary font-bold rounded text-lg">
        {dateStr}
      </div>
      <button 
        onClick={() => setTs(Math.floor(Date.now() / 1000).toString())}
        className="w-full py-2 bg-secondary text-foreground rounded hover:bg-border transition-colors font-medium text-sm"
      >
        Set to Current Time
      </button>
    </div>
  );
};
