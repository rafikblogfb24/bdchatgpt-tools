export const colorSchemes = [
  { bg: 'bg-blue-500/10 dark:bg-blue-500/20', text: 'text-blue-600 dark:text-blue-400', groupHover: 'group-hover:bg-blue-600', borderHover: 'hover:border-blue-500', hoverText: 'group-hover:text-blue-600 dark:group-hover:text-blue-400' },
  { bg: 'bg-purple-500/10 dark:bg-purple-500/20', text: 'text-purple-600 dark:text-purple-400', groupHover: 'group-hover:bg-purple-600', borderHover: 'hover:border-purple-500', hoverText: 'group-hover:text-purple-600 dark:group-hover:text-purple-400' },
  { bg: 'bg-pink-500/10 dark:bg-pink-500/20', text: 'text-pink-600 dark:text-pink-400', groupHover: 'group-hover:bg-pink-600', borderHover: 'hover:border-pink-500', hoverText: 'group-hover:text-pink-600 dark:group-hover:text-pink-400' },
  { bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-400', groupHover: 'group-hover:bg-emerald-600', borderHover: 'hover:border-emerald-500', hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400' },
  { bg: 'bg-orange-500/10 dark:bg-orange-500/20', text: 'text-orange-600 dark:text-orange-400', groupHover: 'group-hover:bg-orange-600', borderHover: 'hover:border-orange-500', hoverText: 'group-hover:text-orange-600 dark:group-hover:text-orange-400' },
  { bg: 'bg-cyan-500/10 dark:bg-cyan-500/20', text: 'text-cyan-600 dark:text-cyan-400', groupHover: 'group-hover:bg-cyan-600', borderHover: 'hover:border-cyan-500', hoverText: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400' },
  { bg: 'bg-rose-500/10 dark:bg-rose-500/20', text: 'text-rose-600 dark:text-rose-400', groupHover: 'group-hover:bg-rose-600', borderHover: 'hover:border-rose-500', hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400' },
  { bg: 'bg-indigo-500/10 dark:bg-indigo-500/20', text: 'text-indigo-600 dark:text-indigo-400', groupHover: 'group-hover:bg-indigo-600', borderHover: 'hover:border-indigo-500', hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400' },
];

export const getColorForId = (id: string) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorSchemes[Math.abs(hash) % colorSchemes.length];
};
