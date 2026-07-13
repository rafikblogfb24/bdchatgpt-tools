export type CategoryId = 'text' | 'calc' | 'conv' | 'image' | 'dev' | 'media';

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOContent {
  whatIsIt: string;
  howToUse: string[];
  features: string[];
  useCases: string[];
  faqs: FAQ[];
}

export interface ToolMetadata {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  iconName: string; // We'll map this to a Lucide icon
  seo: SEOContent;
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
}
