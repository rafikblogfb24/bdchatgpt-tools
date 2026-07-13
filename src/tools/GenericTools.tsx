import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';

// --- Generic Text Tool ---
export const GenericTextTool: React.FC<{
  transform: (input: string) => string;
  placeholder?: string;
  actionText?: string;
  live?: boolean;
}> = ({ transform, placeholder = "Enter your text here...", actionText = "Process Text", live = true }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleProcess = () => setOutput(transform(input));
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (live) setOutput(transform(e.target.value));
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input</label>
        <textarea
          className="w-full h-32 p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-y"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
      </div>
      
      {!live && (
        <button 
          onClick={handleProcess}
          className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
        >
          {actionText}
        </button>
      )}

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium">Result</label>
          {output && (
            <button onClick={copy} className="text-xs flex items-center text-primary hover:underline">
              {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
        <textarea
          className="w-full h-32 p-3 bg-card border border-border rounded-lg focus:outline-none resize-y"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

// --- Generic Generator Tool ---
export const GenericGeneratorTool: React.FC<{
  generate: () => string;
  buttonText: string;
}> = ({ generate, buttonText }) => {
  const [output, setOutput] = useState(() => generate());
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setOutput(generate());
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center space-y-6 py-4">
      <div className="relative max-w-2xl mx-auto">
        <textarea
          className="w-full p-4 pr-12 text-center text-xl font-mono bg-background border border-border rounded-xl focus:outline-none resize-none overflow-hidden"
          value={output}
          readOnly
          rows={output.split('\n').length > 5 ? 5 : output.split('\n').length}
        />
        <button 
          onClick={copy} 
          className="absolute right-3 top-3 p-2 text-foreground/50 hover:text-primary transition-colors"
          title="Copy"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
      <button 
        onClick={handleGenerate}
        className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors font-bold text-lg flex items-center justify-center mx-auto"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        {buttonText}
      </button>
    </div>
  );
};

// --- Generic Calc Tool ---
export const GenericCalcTool: React.FC<{
  fields: string[];
  calculate: (values: Record<string, string>) => string;
}> = ({ fields, calculate }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [output, setOutput] = useState('');

  const handleChange = (field: string, value: string) => {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    
    // Check if all fields have values
    const allFilled = fields.every(f => newValues[f] !== undefined && newValues[f] !== '');
    if (allFilled) {
      setOutput(calculate(newValues));
    } else {
      setOutput('');
    }
  };

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      <div className="space-y-4">
        {fields.map(field => (
          <div key={field}>
            <label className="block text-sm font-medium mb-1">{field.replace(/([A-Z])/g, ' $1').trim().replace(/_/g, ' ')}</label>
            <input
              type="text"
              className="w-full p-2 bg-background border border-border rounded focus:ring-2 focus:ring-primary focus:outline-none"
              value={values[field] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').trim().toLowerCase().replace(/_/g, ' ')}`}
            />
          </div>
        ))}
      </div>
      
      {output && (
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
          <p className="text-sm text-foreground/70 mb-1">Result</p>
          <div className="text-2xl font-bold text-primary whitespace-pre-line">{output}</div>
        </div>
      )}
    </div>
  );
};

// --- Generic Under Construction Tool ---
export const UnderConstructionTool: React.FC = () => (
  <div className="text-center py-12">
    <div className="text-5xl mb-4">🚧</div>
    <h3 className="text-2xl font-bold mb-2">Under Construction</h3>
    <p className="text-foreground/70">This tool is currently being built and will be available soon.</p>
  </div>
);
