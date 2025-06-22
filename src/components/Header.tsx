import React from 'react';

interface HeaderProps {
  currentStep: number;
  totalSteps: number;
}

export function Header({ currentStep, totalSteps }: HeaderProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <header className="bg-white border-b border-apple-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-apple-gray-900 mb-2">
            🎯 TDDを体験して理解しよう
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-apple-gray-600">進捗:</span>
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= currentStep 
                    ? 'bg-apple-blue' 
                    : 'bg-apple-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-apple-gray-600 ml-2">
              ({currentStep + 1}/{totalSteps} ステップ完了)
            </span>
          </div>
          <div className="w-full bg-apple-gray-200 rounded-full h-2">
            <div 
              className="bg-apple-blue h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}