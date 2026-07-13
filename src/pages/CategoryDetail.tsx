import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../data/categories';
import { TOOLS } from '../data/tools';
import { Icon } from '../components/Icon';
import { getColorForId } from '../utils/colors';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';

export const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find(c => c.id === categoryId);
  
  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  const categoryTools = TOOLS.filter(t => t.categoryId === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>{category.name} | BDchatGPT</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <Link 
        to="/categories" 
        className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary mb-8 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Categories
      </Link>

      <div className="flex items-center mb-12">
        <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mr-6 shadow-sm">
          <Icon name={category.iconName} className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-foreground">{category.name}</h1>
          <p className="text-xl text-foreground/60 mt-2">{category.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryTools.map((tool, index) => {
          const colors = getColorForId(tool.id);
          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                to={`/tools/${tool.id}`}
                className={`group block bg-card rounded-3xl border border-border p-8 hover:shadow-2xl ${colors.borderHover} transition-all duration-300 h-full flex flex-col relative overflow-hidden`}
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${colors.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={tool.iconName} className="w-7 h-7" />
                  </div>
                  <h3 className={`ml-4 text-xl font-bold ${colors.hoverText} transition-colors duration-300`}>
                    {tool.name}
                  </h3>
                </div>
                
                <p className="text-foreground/70 leading-relaxed flex-grow relative z-10">
                  {tool.description}
                </p>
                
                <div className={`mt-6 flex items-center text-sm font-bold uppercase tracking-widest ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Open Tool
                  <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
