import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { Icon } from '../components/Icon';
import { motion } from 'motion/react';

export const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Tool Categories | BDchatGPT</title>
        <meta name="description" content="Browse our tools by category: Text, Calculators, Converters, Image Tools, and more." />
      </Helmet>

      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-foreground mb-4"
        >
          Browse by Category
        </motion.h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Choose a category to find the perfect tool for your task.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              to={`/categories/${category.id}`}
              className="group block bg-card border border-border p-8 rounded-3xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                <Icon name={category.iconName} className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {category.name}
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                {category.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                View Tools
                <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
