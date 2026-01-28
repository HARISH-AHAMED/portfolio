
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  // Added React import to correctly define React.ReactNode type
  icon: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}