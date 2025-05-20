import React from 'react';
import { Shield, Lock } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-secondary flex flex-col items-center justify-center">
      <div className="animate-pulse-slow text-primary mb-6">
        <Shield size={64} strokeWidth={1.5} />
      </div>
      
      <div className="relative w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full animated-bg"></div>
        <div className="absolute top-0 left-0 h-full bg-primary rounded-full" 
             style={{ width: '75%', animation: 'loadingAnimation 1.5s infinite' }}></div>
      </div>
      
      <div className="mt-6 font-mono text-primary text-lg flex items-center">
        <Lock size={18} className="mr-2" />
        <span>Securing Connection...</span>
      </div>
      
      <style>{`
        @keyframes loadingAnimation {
          0% { width: 0%; }
          100% { width: 75%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;