import React from 'react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onCompleteStep: () => void;
  canGoNext: boolean;
  isCompleted: boolean;
}

export function StepNavigation({
  currentStep,
  totalSteps,
  onPrevStep,
  onNextStep,
  onCompleteStep,
  canGoNext,
  isCompleted
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between p-6 bg-apple-gray-50 border-t border-apple-gray-200">
      <button
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentStep === 0
            ? 'text-apple-gray-400 cursor-not-allowed'
            : 'text-apple-blue hover:bg-apple-blue hover:text-white'
        }`}
      >
        <span>⬅️</span>
        <span>前へ</span>
      </button>

      <div className="flex items-center space-x-4">
        {!isCompleted && canGoNext && (
          <button
            onClick={onCompleteStep}
            className="bg-apple-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium"
          >
            ✅ ステップを完了
          </button>
        )}
        
        {isCompleted && (
          <div className="flex items-center space-x-2 text-apple-green">
            <span>✅</span>
            <span className="font-medium">完了済み</span>
          </div>
        )}
      </div>

      <button
        onClick={onNextStep}
        disabled={currentStep === totalSteps - 1 || !isCompleted}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          currentStep === totalSteps - 1 || !isCompleted
            ? 'text-apple-gray-400 cursor-not-allowed'
            : 'text-apple-blue hover:bg-apple-blue hover:text-white'
        }`}
      >
        <span>次へ</span>
        <span>➡️</span>
      </button>
    </div>
  );
}