import * as LucideIcons from 'lucide-react';
import React from 'react';

export interface IconProps extends LucideIcons.LucideProps {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return <LucideIcons.HelpCircle {...props} />;
  return <LucideIcon {...props} />;
};
