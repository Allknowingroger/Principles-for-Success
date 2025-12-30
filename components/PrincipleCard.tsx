import React from 'react';

interface PrincipleCardProps {
  text: string;
  index: number;
}

const colors = [
  'border-cyan-500',
  'border-blue-500',
  'border-indigo-500',
  'border-purple-500',
  'border-pink-500',
  'border-red-500',
  'border-orange-500',
  'border-yellow-500',
];

const DotIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1.5 -left-1.5 text-slate-200">
        <circle cx="6" cy="6" r="6" fill="currentColor"/>
        <circle cx="6" cy="6" r="3" fill="white"/>
    </svg>
);


export const PrincipleCard: React.FC<PrincipleCardProps> = ({ text, index }) => {
  const colorClass = colors[index % colors.length];

  return (
    <div className={`
      relative 
      bg-white 
      p-6 
      rounded-lg 
      border-l-4 
      border-y border-r border-slate-100/50
      ${colorClass}
      shadow-sm 
      shadow-slate-200
      hover:shadow-md 
      hover:shadow-slate-300/50
      transform 
      hover:-translate-y-1 
      transition-all 
      duration-300 
      ease-in-out
      group
    `}>
      <DotIcon />
      <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300 font-medium">
        {text}
      </p>
    </div>
  );
};