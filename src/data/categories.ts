import { Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'text', name: 'Text Tools', description: 'Format, analyze, and manipulate text.', iconName: 'Type' },
  { id: 'calc', name: 'Calculators', description: 'Perform various math and financial calculations.', iconName: 'Calculator' },
  { id: 'conv', name: 'Converters', description: 'Convert between different units, formats, and bases.', iconName: 'ArrowRightLeft' },
  { id: 'image', name: 'Image Tools', description: 'Process, compress, and edit images entirely in your browser.', iconName: 'Image' },
  { id: 'dev', name: 'Dev & Generators', description: 'Generate data and format code for development.', iconName: 'Terminal' },
  { id: 'media', name: 'Convert Media', description: 'Switch between image, document, audio and video formats without uploading files to a server.', iconName: 'Play' }
];
