import React, { useState } from 'react';

export const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!dob || !targetDate) return;
    const birth = new Date(dob);
    const target = new Date(targetDate);
    
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult(`${years} years, ${months} months, and ${days} days (${totalDays} total days)`);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Target Date</label>
          <input type="date" value={targetDate} onChange={e => setTargetDate(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-primary-hover">Calculate Age</button>
      {result && <div className="text-center p-4 bg-primary/10 text-primary font-bold rounded text-lg">{result}</div>}
    </div>
  );
};

export const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('70');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    if (!h || !w) return;
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    setResult(`BMI: ${bmi.toFixed(1)} (${category})`);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-primary-hover">Calculate BMI</button>
      {result && <div className="text-center p-4 bg-primary/10 text-primary font-bold rounded text-lg">{result}</div>}
    </div>
  );
};

export const PercentageCalculator: React.FC = () => {
  const [val1, setVal1] = useState('20');
  const [val2, setVal2] = useState('150');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(val1);
    const v = parseFloat(val2);
    if (isNaN(p) || isNaN(v)) return;
    setResult(`${p}% of ${v} is ${(p / 100) * v}`);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="flex items-center space-x-2">
        <input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-24 p-2 bg-background border border-border rounded text-center" />
        <span>% of</span>
        <input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="flex-1 p-2 bg-background border border-border rounded text-center" />
      </div>
      <button onClick={calculate} className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-primary-hover">Calculate</button>
      {result && <div className="text-center p-4 bg-primary/10 text-primary font-bold rounded text-lg">{result}</div>}
    </div>
  );
};

export const DiscountCalculator: React.FC = () => {
  const [price, setPrice] = useState('100');
  const [discount, setDiscount] = useState('20');
  const [result, setResult] = useState<{final: string, saved: string} | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return;
    const saved = p * (d / 100);
    setResult({ final: (p - saved).toFixed(2), saved: saved.toFixed(2) });
  };

  return (
    <div className="space-y-6 max-w-md mx-auto py-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Original Price ($)</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Discount (%)</label>
          <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} className="w-full p-2 bg-background border border-border rounded" />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-3 bg-primary text-white rounded font-bold hover:bg-primary-hover">Calculate Discount</button>
      {result && (
        <div className="text-center p-4 bg-primary/10 text-primary rounded space-y-2">
          <div className="text-2xl font-bold">Final Price: ${result.final}</div>
          <div className="text-sm">You saved: ${result.saved}</div>
        </div>
      )}
    </div>
  );
};
