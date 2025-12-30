import React from 'react';
import { PRINCIPLES } from './constants';
import { PrincipleCard } from './components/PrincipleCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 antialiased">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-700 mb-4">
            How To Succeed
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
            A collection of principles on how to build, execute, and live a productive life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, index) => (
            <PrincipleCard key={index} text={principle} index={index} />
          ))}
        </div>

        <footer className="text-center mt-20 text-slate-400">
          <p className="text-sm font-medium">Inspired by wisdom for the ambitious.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;