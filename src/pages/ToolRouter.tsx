import React from 'react';
import { useParams } from 'react-router-dom';
import { ToolPageLayout } from './ToolPageLayout';
import { UnderConstructionTool, GenericTextTool, GenericGeneratorTool, GenericCalcTool } from '../tools/GenericTools';

// Import tool implementations
import { WordCounter, CaseConverter, TextReverser, DuplicateRemover, FindReplace } from '../tools/TextTools';
import { UuidGenerator, PasswordGenerator, RandomNumber } from '../tools/Generators';
import { AgeCalculator, BmiCalculator, PercentageCalculator, DiscountCalculator } from '../tools/Calculators';
import { UnitConverter, BaseConverter, TimestampConverter } from '../tools/Converters';
import { ImageConverter, DocumentConverter, AudioVideoConverter } from '../tools/MediaTools';

import { EXTRA_TOOLS_IMPL } from '../data/extra_tools';

export const ToolRouter: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();

  // Map tool IDs to components
  const getToolComponent = () => {
    // Check if it's an extra tool first
    if (toolId && EXTRA_TOOLS_IMPL[toolId]) {
      const impl = EXTRA_TOOLS_IMPL[toolId];
      if (impl.type === 'text') {
        return <GenericTextTool transform={impl.transform} />;
      } else if (impl.type === 'generator') {
        return <GenericGeneratorTool generate={impl.generate} buttonText="Generate" />;
      } else if (impl.type === 'calc') {
        return <GenericCalcTool fields={impl.fields} calculate={impl.calculate} />;
      }
    }

    switch (toolId) {
      case 'word-counter': return <WordCounter />;
      case 'case-converter': return <CaseConverter />;
      case 'text-reverser': return <TextReverser />;
      case 'duplicate-remover': return <DuplicateRemover />;
      case 'find-replace': return <FindReplace />;
      
      case 'uuid-generator': return <UuidGenerator />;
      case 'password-generator': return <PasswordGenerator />;
      case 'random-number': return <RandomNumber />;
      
      case 'age-calculator': return <AgeCalculator />;
      case 'bmi-calculator': return <BmiCalculator />;
      case 'percentage-calculator': return <PercentageCalculator />;
      case 'discount-calculator': return <DiscountCalculator />;
      
      case 'unit-converter': return <UnitConverter />;
      case 'base-converter': return <BaseConverter />;
      case 'timestamp-converter': return <TimestampConverter />;
      
      case 'image-converter': return <ImageConverter />;
      case 'document-converter': return <DocumentConverter />;
      case 'audio-video-converter': return <AudioVideoConverter />;
      
      // Default to Under Construction for tools we haven't built out fully yet
      default: return <UnderConstructionTool />;
    }
  };

  return (
    <ToolPageLayout>
      {getToolComponent()}
    </ToolPageLayout>
  );
};
