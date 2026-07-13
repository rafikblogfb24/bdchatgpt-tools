import { useParams } from 'react-router-dom';
import { TOOLS } from '../data/tools';

export const useToolMetadata = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = TOOLS.find((t) => t.id === toolId);

  if (!tool) {
    return {
      tool: null,
      metadata: null,
    };
  }

  const title = `Free ${tool.name} Online Tool | BDchatGPT`;
  const description = tool.description;
  const canonicalUrl = `https://bdchatgpt.pro.bd/tools/${tool.id}`;

  return {
    tool,
    metadata: {
      title,
      description,
      canonicalUrl,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonicalUrl,
      twitterTitle: title,
      twitterDescription: description,
    },
  };
};
