import React, { useState, useRef } from 'react';
import { Upload, FileDown, RefreshCw, FileImage, FileText, Video } from 'lucide-react';
import { jsPDF } from 'jspdf';

// --- Image Converter ---
export const ImageConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [format, setFormat] = useState<string>('image/jpeg');
  const [quality, setQuality] = useState<number>(0.9);
  const [converting, setConverting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
    }
  };

  const convertImage = () => {
    if (!preview || !canvasRef.current || !file) return;
    setConverting(true);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Fill background for transparent images converted to JPEG
        if (format === 'image/jpeg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);
        
        const dataUrl = canvas.toDataURL(format, quality);
        const link = document.createElement('a');
        link.download = `converted-${file.name.split('.')[0]}.${format.split('/')[1]}`;
        link.href = dataUrl;
        link.click();
      }
      setConverting(false);
    };
    img.src = preview;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-card/50 transition-colors">
            <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
            <span className="text-foreground/70 block mb-2">Click to upload an image</span>
            <span className="text-sm text-foreground/50">Supports PNG, JPG, WEBP, etc.</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
          
          <div className="bg-card p-4 rounded-lg border border-border space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Convert To</label>
              <select 
                className="w-full p-2 bg-background border border-border rounded focus:ring-2 focus:ring-primary focus:outline-none"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="image/jpeg">JPEG (.jpg)</option>
                <option value="image/png">PNG (.png)</option>
                <option value="image/webp">WEBP (.webp)</option>
              </select>
            </div>
            {(format === 'image/jpeg' || format === 'image/webp') && (
              <div>
                <label className="block text-sm font-medium mb-1">Quality: {Math.round(quality * 100)}%</label>
                <input 
                  type="range" 
                  min="0.1" max="1" step="0.1" 
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            )}
            <button
              onClick={convertImage}
              disabled={!file || converting}
              className="w-full py-2 bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-50 flex justify-center items-center font-medium transition-opacity"
            >
              {converting ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : <FileDown className="w-5 h-5 mr-2" />}
              Convert & Download
            </button>
          </div>
        </div>
        
        <div>
          {preview ? (
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-medium mb-2">Preview</h3>
              <div className="aspect-square bg-background border border-border rounded overflow-hidden flex items-center justify-center">
                <img src={preview} alt="Preview" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ) : (
            <div className="bg-card p-4 rounded-lg border border-border h-full flex flex-col items-center justify-center text-foreground/50 text-center min-h-[300px]">
              <FileImage className="w-16 h-16 mb-4 opacity-50" />
              <p>Upload an image to see preview</p>
            </div>
          )}
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

// --- Document Converter ---
export const DocumentConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>('');
  const [converting, setConverting] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Basic text extraction for demo purposes
      if (selectedFile.type === 'text/plain' || selectedFile.name.endsWith('.txt') || selectedFile.name.endsWith('.csv')) {
        const text = await selectedFile.text();
        setContent(text.substring(0, 5000)); // Limit to prevent freezing
      } else {
        setContent('This file type requires advanced conversion. Please try a TXT or basic text file for full local preview, or proceed to convert directly.');
      }
    }
  };

  const convertToPdf = () => {
    if (!file) return;
    setConverting(true);
    
    try {
      const doc = new jsPDF();
      
      if (content && !content.includes('advanced conversion')) {
        // Split text to fit on pages
        const splitText = doc.splitTextToSize(content, 180);
        let y = 20;
        for (let i = 0; i < splitText.length; i++) {
          if (y > 280) {
            y = 20;
            doc.addPage();
          }
          doc.text(splitText[i], 15, y);
          y += 7;
        }
      } else {
        doc.setFontSize(20);
        doc.text(`Converted Document: ${file.name}`, 20, 30);
        doc.setFontSize(12);
        doc.text(`Original Size: ${(file.size / 1024).toFixed(2)} KB`, 20, 45);
        doc.text(`Conversion completed locally in browser.`, 20, 55);
      }
      
      doc.save(`converted-${file.name.split('.')[0]}.pdf`);
    } catch (e) {
      console.error("PDF generation failed", e);
      alert("Failed to generate PDF. Make sure it's a simple text file.");
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <label className="block border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-card/50 transition-colors">
        <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
        <span className="text-foreground/70 block mb-2">Click to upload a document</span>
        <span className="text-sm text-foreground/50">Supports TXT to PDF conversion locally.</span>
        <input type="file" accept=".txt,.csv" className="hidden" onChange={handleFileChange} />
      </label>
      
      {file && (
        <div className="bg-card p-4 rounded-lg border border-border space-y-4">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <p className="font-medium truncate max-w-md">{file.name}</p>
              <p className="text-xs text-foreground/60">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Convert To</label>
            <select className="w-full p-2 bg-background border border-border rounded focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="pdf">PDF (.pdf)</option>
            </select>
          </div>
          
          <button
            onClick={convertToPdf}
            disabled={converting}
            className="w-full py-2 bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-50 flex justify-center items-center font-medium transition-opacity"
          >
            {converting ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : <FileDown className="w-5 h-5 mr-2" />}
            Convert to PDF
          </button>
        </div>
      )}
    </div>
  );
};

// --- Audio & Video Converter ---
export const AudioVideoConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [targetFormat, setTargetFormat] = useState('mp4');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
    }
  };

  const mockConvert = () => {
    if (!file) return;
    setConverting(true);
    
    // Simulate conversion time
    setTimeout(() => {
      // Create a dummy file download with the new extension to demonstrate the flow
      // A true local audio/video conversion without a server requires WebAssembly (ffmpeg.wasm)
      // which requires special Cross-Origin headers on the host.
      const blob = new Blob(["This is a placeholder for the converted media file. Real media conversion in-browser requires ffmpeg.wasm and cross-origin isolation."], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${file.name.split('.')[0]}.${targetFormat}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setConverting(false);
    }, 2000);
  };

  const isVideo = file?.type.startsWith('video');
  const isAudio = file?.type.startsWith('audio');

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <label className="block border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-card/50 transition-colors">
        <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
        <span className="text-foreground/70 block mb-2">Click to upload an Audio or Video file</span>
        <span className="text-sm text-foreground/50">Supports MP3, WAV, MP4, WEBM</span>
        <input type="file" accept="audio/*,video/*" className="hidden" onChange={handleFileChange} />
      </label>
      
      {file && preview && (
        <div className="bg-card p-4 rounded-lg border border-border space-y-4">
          <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
            {isVideo ? (
              <video src={preview} controls className="w-full h-full object-contain" />
            ) : isAudio ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-900">
                <Video className="w-16 h-16 text-primary mb-6 opacity-80" />
                <audio src={preview} controls className="w-full" />
              </div>
            ) : null}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1 truncate">File: {file.name}</p>
              <p className="text-xs text-foreground/60">{(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Convert To</label>
              <select 
                className="w-full p-2 bg-background border border-border rounded focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                value={targetFormat}
                onChange={(e) => setTargetFormat(e.target.value)}
              >
                <optgroup label="Audio">
                  <option value="mp3">MP3 (.mp3)</option>
                  <option value="wav">WAV (.wav)</option>
                  <option value="ogg">OGG (.ogg)</option>
                </optgroup>
                <optgroup label="Video">
                  <option value="mp4">MP4 (.mp4)</option>
                  <option value="webm">WEBM (.webm)</option>
                </optgroup>
              </select>
            </div>
          </div>
          
          <button
            onClick={mockConvert}
            disabled={converting}
            className="w-full py-2 bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-50 flex justify-center items-center font-medium transition-opacity"
          >
            {converting ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : <FileDown className="w-5 h-5 mr-2" />}
            {converting ? 'Converting (Simulated)...' : 'Convert Media'}
          </button>
          
          <p className="text-xs text-foreground/50 text-center mt-2">
            * Note: Full client-side audio/video conversion requires advanced browser APIs not available in this environment. This is a functional UI demonstration.
          </p>
        </div>
      )}
    </div>
  );
};
