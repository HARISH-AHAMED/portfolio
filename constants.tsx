
import React from 'react';
import { ShoppingCart, Layout, Code, Palette } from 'lucide-react';
import { Project, Service, SkillCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Website Development',
    description: 'Scalable solutions with product listings, cart systems, and optimized checkout experiences.',
    icon: <ShoppingCart className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'landing',
    title: 'Landing Page Development',
    description: 'High-conversion single-page sites built with a focus on speed, SEO, and user engagement.',
    icon: <Layout className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    description: 'Modern React applications with state management and seamless API integrations.',
    icon: <Code className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'redesign',
    title: 'Website UI Redesign',
    description: 'Revitalizing legacy interfaces with modern UX patterns and Tailwind CSS styling.',
    icon: <Palette className="w-8 h-8 text-indigo-500" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'recipe-share-app',
    title: 'Recipe Share App',
    description: 'A modern recipe sharing application frontend featuring glassmorphism design and interactive UI elements.',
    techStack: ['React', 'Tailwind', 'Glassmorphism'],
    imageUrl: '/images/recipe-app.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'dribbble-clone',
    title: 'Dribbble Clone',
    description: 'A high-fidelity landing page clone of Dribbble focused on pixel-perfect layout and responsive CSS.',
    techStack: ['HTML', 'CSS', 'Responsive Design'],
    imageUrl: '/images/dribbble-clone.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'quiz-app',
    title: 'Quiz Application',
    description: 'A dynamic quiz engine with instant feedback, multiple categories, and responsive design.',
    techStack: ['React', 'Tailwind', 'Local Storage'],
    imageUrl: '/images/quiz-app.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'lifeledger',
    title: 'LifeLedger - Expense Tracker',
    description: 'Full-featured finance dashboard with data visualization for tracking daily expenditures.',
    techStack: ['React', 'Firebase', 'Chart.js'],
    imageUrl: '/images/life-ledger.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'movie-search',
    title: 'Movie Search App',
    description: 'Global cinema database integration using external APIs with asynchronous search functionality.',
    techStack: ['JavaScript', 'API', 'Bootstrap'],
    imageUrl: '/images/movie-app.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    description: 'This current professional showcase featuring advanced CSS and React modular components.',
    techStack: ['React', 'Lucide Icons', 'Tailwind'],
    imageUrl: '/images/portfolio-v2.png',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
  },
  {
    name: 'Backend',
    skills: ['PHP', 'MySQL', 'Firebase', 'Java (JDBC)']
  },
  {
    name: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Responsive Design', 'UI/UX Design']
  }
];
